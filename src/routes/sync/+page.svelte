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
		type DocumentData
	} from 'firebase/firestore';
	import {
		GoogleAuthProvider,
		getAuth,
		signOut,
		signInWithPopup,
		onAuthStateChanged,
		type User
	} from 'firebase/auth';

	import {
		settingAudio,
		settingAutoNext,
		settingTafsir,
		settingTranslation,
		activeTheme,
		settingLocation
	} from '../../store';
	import { toast } from '../../store/toast';
	import { CONSTANTS } from '$lib/constants';
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

		console.log(querySnapshot);

		if (querySnapshot.size > 0) {
			querySnapshot.forEach((doc) => {
				currentRemoteProgress = doc.data();
			});
		} else {
			currentRemoteProgress = {
				uid: currentUser?.uid,
				[CONSTANTS.STORAGE_KEY.AUDIO]: 'N/A',
				[CONSTANTS.STORAGE_KEY.AUTO_NEXT]: 'N/A',
				[CONSTANTS.STORAGE_KEY.TAFSIR]: 'N/A',
				[CONSTANTS.STORAGE_KEY.TRANSLATION]: 'N/A',
				[CONSTANTS.STORAGE_KEY.THEME]: 'N/A',
				[CONSTANTS.STORAGE_KEY.LOCATION]: {
					lt: 'N/A',
					lg: 'N/A',
					district: 'N/A'
				}
			};
		}
	};

	const handleUpload = async () => {
		const localData = {
			uid: currentUser?.uid,
			[CONSTANTS.STORAGE_KEY.AUDIO]: $settingAudio,
			[CONSTANTS.STORAGE_KEY.AUTO_NEXT]: $settingAutoNext ? 1 : 0,
			[CONSTANTS.STORAGE_KEY.TAFSIR]: $settingTafsir ? 1 : 0,
			[CONSTANTS.STORAGE_KEY.TRANSLATION]: $settingTranslation ? 1 : 0,
			[CONSTANTS.STORAGE_KEY.THEME]: $activeTheme || '',
			[CONSTANTS.STORAGE_KEY.LOCATION]: $settingLocation || null
		};
		const dbRef = collection(db, 'progress');
		const q = query(dbRef, where('uid', '==', currentUser?.uid));

		const querySnapshot = await getDocs(q);

		if (querySnapshot.size > 0) {
			try {
				querySnapshot.forEach(async (doc) => {
					await updateDoc(doc.ref, localData);
				});

				toast.show({
					message: `Berhasil memperbarui data remote dengan data lokal`,
					type: 'success'
				});
			} catch (e) {
				console.error('Error updating document: ', localData, e);

				toast.show({
					message: `Gagal memperbarui data lokal ke remote`,
					type: 'error'
				});
			}
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
					if (data?.[CONSTANTS.STORAGE_KEY.THEME]) {
						activeTheme.set(data?.[CONSTANTS.STORAGE_KEY.THEME]);
					}
					if (data?.[CONSTANTS.STORAGE_KEY.LOCATION]) {
						settingLocation.set(data?.[CONSTANTS.STORAGE_KEY.LOCATION]);
					}

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

		<div class="flex flex-col flex-wrap gap-2 my-4">
			<Button variant="subtle" onClick={checkRemote}>
				<EyeIcon />
				Bandingkan remote & local data
			</Button>
		</div>

		{#if currentRemoteProgress}
			<div class="mt-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary">
				<table class="table-stripped">
					<thead>
						<tr>
							<th scope="col">Field</th>
							<th scope="col">Remote</th>
							<th scope="col">Local</th>
						</tr>
					</thead>
					<tbody>
						<tr >
							<td>Audio</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUDIO]}
							</td>
							<td>{$settingAudio}</td>
						</tr>
						<tr >
							<td>Auto Next</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT]}
							</td>
							<td>{$settingAutoNext ? 1 : 0}</td>
						</tr>
						<tr >
							<td>Tafsir</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TAFSIR]}
							</td>
							<td>{$settingTafsir ? 1 : 0}</td>
						</tr>
						<tr >
							<td>Translation</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TRANSLATION]}
							</td>
							<td>{$settingTranslation ? 1 : 0}</td>
						</tr>
						<tr >
							<td>Theme</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.THEME]}
							</td>
							<td>{$activeTheme}</td>
						</tr>
						<tr >
							<td>Location</td>
							<td>
								{#if typeof currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION] === 'string'}
									<span>{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]}</span>
								{:else if typeof currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION] === 'object'}
									<ul class="flex flex-col gap-2">
										<li>
											Lon: {currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]?.lg ||
												'N/A'}
										</li>
										<li>
											Lat: {currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]?.lt ||
												'N/A'}
										</li>
										<li>
											City: {currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]
												?.district || 'N/A'}
										</li>
									</ul>
								{/if}
							</td>
							<td>
								<ul class="flex flex-col gap-2">
									<li>Lon: {$settingLocation?.lg || 'N/A'}</li>
									<li>Lat: {$settingLocation?.lt || 'N/A'}</li>
									<li>City: {$settingLocation?.district || 'N/A'}</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}

		<div class="flex flex-col flex-wrap gap-2 mt-4">
			<Button variant="subtle" onClick={handleUpload}>
				<ArrowUpTray />
				Upload local data to the remote
			</Button>
			<Button variant="subtle" onClick={handleDownload}>
				<ArrowDownTray />
				Sync local with remote data
			</Button>
			<Button variant="subtle" onClick={handleSignOut}>
				<SignOutIcon />
				Sign Out
			</Button>
		</div>
	{:else}
		<p>Masuk ke Akun Google untuk melakukan sync</p>
		<div class="flex gap-2 mt-4">
			<Button variant="subtle" onClick={handleSignIn}>Sign In</Button>
		</div>
	{/if}
</div>
