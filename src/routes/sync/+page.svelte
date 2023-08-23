<script lang="ts">
	import {
		PUBLIC_FIREBASE_API_KEY,
		PUBLIC_FIREBASE_AUTH_DOMAIN,
		PUBLIC_FIREBASE_PROJECT_ID,
		PUBLIC_FIREBASE_STORAGE_BUCKET,
		PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		PUBLIC_FIREBASE_APP_ID,
		PUBLIC_FIREBASE_MEASUREMENT_ID
	} from '$env/static/public';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { initializeApp } from 'firebase/app';
	import {
		getFirestore,
		collection,
		getDocs,
		addDoc,
		updateDoc,
		query,
		where,
		type DocumentData,
		doc
	} from 'firebase/firestore';
	import {
		GoogleAuthProvider,
		getAuth,
		signOut,
		signInWithPopup,
		onAuthStateChanged,
		type User
	} from 'firebase/auth';

	import { settingAudio, settingAutoNext, settingTafsir, settingTranslation } from '../../store';
	import { toast } from '../../store/toast';
	import { CONSTANTS } from '$lib/constants';
	import CardShadow from '$lib/CardShadow.svelte';
	import EyeIcon from '$lib/icons/EyeIcon.svelte';
	import SignOutIcon from '$lib/icons/SignOutIcon.svelte';
	import ArrowUpTray from '$lib/icons/ArrowUpTray.svelte';
	import ArrowDownTray from '$lib/icons/ArrowDownTray.svelte';

	const firebaseConfig = {
		apiKey: PUBLIC_FIREBASE_API_KEY,
		authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: PUBLIC_FIREBASE_PROJECT_ID,
		storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		appId: PUBLIC_FIREBASE_APP_ID,
		measurementId: PUBLIC_FIREBASE_MEASUREMENT_ID
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	let currentUser: User | null = null;
	let currentRemoteProgress: DocumentData | null = null;

	const provider = new GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
	provider.addScope('https://www.googleapis.com/auth/userinfo.email');
	provider.setCustomParameters({
		login_hint: 'user@example.com'
	});

	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			currentUser = user;
		} else {
			currentUser = null;
		}
	});

	const handleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
				console.log(token, user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const checkRemote = async () => {
		const dbRef = collection(db, 'progress');
		const q = query(dbRef, where('uid', '==', currentUser?.uid));

		const querySnapshot = await getDocs(q);

		if (querySnapshot.size > 0) {
			querySnapshot.forEach((doc) => {
				currentRemoteProgress = doc.data();
			});
		}
	};

	const handleUpload = async () => {
		const localData = {
			uid: currentUser?.uid,
			[CONSTANTS.STORAGE_KEY.AUDIO]: $settingAudio,
			[CONSTANTS.STORAGE_KEY.AUTO_NEXT]: $settingAutoNext ? 1 : 0,
			[CONSTANTS.STORAGE_KEY.TAFSIR]: $settingTafsir ? 1 : 0,
			[CONSTANTS.STORAGE_KEY.TRANSLATION]: $settingTranslation ? 1 : 0
		};
		const dbRef = collection(db, 'progress');
		const q = query(dbRef, where('uid', '==', currentUser?.uid));

		const querySnapshot = await getDocs(q);

		if (querySnapshot.size > 0) {
			querySnapshot.forEach(async (doc) => {
				await updateDoc(doc.ref, localData);
			});
		} else {
			try {
				await addDoc(collection(db, 'progress'), localData);

				toast.show({
					message: `Berhasil mengunggah data lokal ke remote`,
					type: 'success'
				});
			} catch (e) {
				console.error('Error adding new document: ', localData, e);

				toast.show({
					message: `Gagal mengunggah data lokal ke remote`,
					type: 'error'
				});
			}
		}
	};

	const handleDownload = async () => {
		const dbRef = collection(db, 'progress');
		const q = query(dbRef, where('uid', '==', currentUser?.uid));

		const querySnapshot = await getDocs(q);

		if (querySnapshot.size > 0) {
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				if (data) {
					settingTafsir.set(data?.[CONSTANTS.STORAGE_KEY.TAFSIR] === 1);
					settingTranslation.set(data?.[CONSTANTS.STORAGE_KEY.TRANSLATION] === 1);
					settingAutoNext.set(data?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT] === 1);
					settingAudio.set(data?.[CONSTANTS.STORAGE_KEY.AUDIO]);

					currentRemoteProgress = doc.data();
				}
			});

			toast.show({
				message: `Data di lokal berhasil diperbarui!`,
				type: 'error'
			});
		} else {
			toast.show({
				message: `Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!`,
				type: 'error'
			});
		}
	};
</script>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🔄 Sync Data</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4">
	{#if currentUser}
		<p>Kamu telah login sebagai: <b>{currentUser.displayName}</b></p>

		{#if currentRemoteProgress}
			<div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left">
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="px-6 py-3">Field</th>
							<th scope="col" class="px-6 py-3">Remote</th>
							<th scope="col" class="px-6 py-3">Local</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<td class="px-6 py-3">Audio</td>
							<td class="px-6 py-3">
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUDIO]}
							</td>
							<td class="px-6 py-3">{$settingAudio}</td>
						</tr>
						<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-3">Auto Next</td>
							<td class="px-6 py-3">
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT]}
							</td>
							<td class="px-6 py-3">{$settingAutoNext ? 1 : 0}</td>
						</tr>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<td class="px-6 py-3">Tafsir</td>
							<td class="px-6 py-3">
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TAFSIR]}
							</td>
							<td class="px-6 py-3">{$settingTafsir ? 1 : 0}</td>
						</tr>
						<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-3">Translation</td>
							<td class="px-6 py-3">
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TRANSLATION]}
							</td>
							<td class="px-6 py-3">{$settingTranslation ? 1 : 0}</td>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}

		<div class="flex flex-col flex-wrap gap-2 mt-4">
			<Button onClick={checkRemote}>
				<EyeIcon />
				Bandingkan remote & local data
			</Button>
			<Button onClick={handleUpload}>
				<ArrowUpTray />
				Upload local data to the remote
			</Button>
			<Button onClick={handleDownload}>
				<ArrowDownTray />
				Sync local with remote data
			</Button>
			<Button onClick={handleSignOut}>
				<SignOutIcon />
				Sign Out
			</Button>
		</div>
	{:else}
		<p>Masuk ke Akun Google untuk melakukan sync</p>
		<div class="flex gap-2 mt-4">
			<Button onClick={handleSignIn}>Sign In</Button>
		</div>
	{/if}
</div>
