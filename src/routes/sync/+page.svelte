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
		settingLocation,
		lastReadVerses,
		pinnedSurah
	} from '../../store';
	import { toast } from '../../store/toast';
	import { CONSTANTS, TITLE_CONSTANTS } from '$lib/constants';
	import EyeIcon from '$lib/icons/EyeIcon.svelte';
	import SignOutIcon from '$lib/icons/SignOutIcon.svelte';
	import ArrowUpTray from '$lib/icons/ArrowUpTray.svelte';
	import ArrowDownTray from '$lib/icons/ArrowDownTray.svelte';
	import JsonSurahViewer from '$lib/JsonSurahViewer.svelte';
	import MetaTag from '$lib/MetaTag.svelte';

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
				const user = result.user;
				toast.show({
					message: `Berhasil login. Selamat datang ${user.displayName}!`,
					type: 'success'
				});
			})
			.catch((error) => {
				toast.show({
					message: `Gagal login: ${error.message}`,
					type: 'error'
				});
			});
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.show({
					message: `Berhasil logout!`,
					type: 'success'
				});
			})
			.catch((error) => {
				toast.show({
					message: `Gagal logout: ${error.message}`,
					type: 'error'
				});
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
				},
				[CONSTANTS.STORAGE_KEY.LAST_VERSES]: [],
				[CONSTANTS.STORAGE_KEY.PINNED_SURAH]: []
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
			[CONSTANTS.STORAGE_KEY.LOCATION]: $settingLocation || null,
			[CONSTANTS.STORAGE_KEY.LAST_VERSES]: $lastReadVerses || null,
			[CONSTANTS.STORAGE_KEY.PINNED_SURAH]: $pinnedSurah || null
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
					// tafsir
					settingTafsir.set(data?.[CONSTANTS.STORAGE_KEY.TAFSIR] === 1);
					localStorage.setItem(
						CONSTANTS.STORAGE_KEY.TAFSIR,
						data?.[CONSTANTS.STORAGE_KEY.TAFSIR] === 1 ? 'y' : 'n'
					);

					// translation
					settingTranslation.set(data?.[CONSTANTS.STORAGE_KEY.TRANSLATION] === 1);
					localStorage.setItem(
						CONSTANTS.STORAGE_KEY.TRANSLATION,
						data?.[CONSTANTS.STORAGE_KEY.TRANSLATION] === 1 ? 'y' : 'n'
					);

					// auto next
					settingAutoNext.set(data?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT] === 1);
					localStorage.setItem(
						CONSTANTS.STORAGE_KEY.AUTO_NEXT,
						data?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT] === 1 ? 'y' : 'n'
					);

					// audio - qori
					settingAudio.set(data?.[CONSTANTS.STORAGE_KEY.AUDIO]);
					localStorage.setItem(
						CONSTANTS.STORAGE_KEY.AUDIO,
						data?.[CONSTANTS.STORAGE_KEY.AUDIO] || '1'
					);

					// active theme
					if (data?.[CONSTANTS.STORAGE_KEY.THEME]) {
						activeTheme.set(data?.[CONSTANTS.STORAGE_KEY.THEME]);
						localStorage.setItem(
							CONSTANTS.STORAGE_KEY.THEME,
							data?.[CONSTANTS.STORAGE_KEY.THEME] || 'light'
						);
					}

					// location
					if (data?.[CONSTANTS.STORAGE_KEY.LOCATION]) {
						settingLocation.set(data?.[CONSTANTS.STORAGE_KEY.LOCATION]);
						localStorage.setItem(
							CONSTANTS.STORAGE_KEY.LOCATION,
							JSON.stringify(data?.[CONSTANTS.STORAGE_KEY.LOCATION] || {})
						);
					}

					// last read verses
					if (data?.[CONSTANTS.STORAGE_KEY.LAST_VERSES]) {
						lastReadVerses.set(data?.[CONSTANTS.STORAGE_KEY.LAST_VERSES]);
						localStorage.setItem(
							CONSTANTS.STORAGE_KEY.LAST_VERSES,
							JSON.stringify(data?.[CONSTANTS.STORAGE_KEY.LAST_VERSES] || [])
						);
					}

					// pinned surah
					if (data?.[CONSTANTS.STORAGE_KEY.PINNED_SURAH]) {
						pinnedSurah.set(data?.[CONSTANTS.STORAGE_KEY.PINNED_SURAH]);
						localStorage.setItem(
							CONSTANTS.STORAGE_KEY.PINNED_SURAH,
							JSON.stringify(data?.[CONSTANTS.STORAGE_KEY.PINNED_SURAH] || [])
						);
					}

					currentRemoteProgress = doc.data();
				}
			});

			toast.show({
				message: `Data di lokal berhasil diperbarui!`,
				type: 'success'
			});
		} else {
			toast.show({
				message: `Kamu belum memiliki data apapun di remote. Data di lokal tidak akan diperbarui!`,
				type: 'error'
			});
		}
	};
</script>

<svelte:head>
	<MetaTag
		title={`Sync Data | ${TITLE_CONSTANTS.TITLE_META}`}
		desc={`Sync Data ${TITLE_CONSTANTS.TITLE_META}`}
		url={`${TITLE_CONSTANTS.PATH}sync/`}
	/>
</svelte:head>

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
			<Button variant="subtle" onClick={handleUpload}>
				<ArrowUpTray />
				Upload local data to the remote
			</Button>
			<Button variant="subtle" onClick={handleDownload}>
				<ArrowDownTray />
				Sync local with remote data
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
						<tr>
							<td>Audio</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUDIO]}
							</td>
							<td>{$settingAudio}</td>
						</tr>
						<tr>
							<td>Auto Next</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.AUTO_NEXT]}
							</td>
							<td>{$settingAutoNext ? 1 : 0}</td>
						</tr>
						<tr>
							<td>Tafsir</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TAFSIR]}
							</td>
							<td>{$settingTafsir ? 1 : 0}</td>
						</tr>
						<tr>
							<td>Translation</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.TRANSLATION]}
							</td>
							<td>{$settingTranslation ? 1 : 0}</td>
						</tr>
						<tr>
							<td>Theme</td>
							<td>
								{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.THEME]}
							</td>
							<td>{$activeTheme}</td>
						</tr>
						<tr>
							<td>Location</td>
							<td>
								{#if typeof currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION] === 'string'}
									<span>{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]}</span>
								{:else if typeof currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION] === 'object'}
									<ul class="flex flex-col gap-2">
										<li>
											{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]?.lt || 'N/A'}, {currentRemoteProgress?.[
												CONSTANTS.STORAGE_KEY.LOCATION
											]?.lg || 'N/A'}
										</li>
										<li>
											{currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LOCATION]?.district || 'N/A'}
										</li>
									</ul>
								{/if}
							</td>
							<td>
								<ul class="flex flex-col gap-2">
									<li>{$settingLocation?.lt || 'N/A'}, {$settingLocation?.lg || 'N/A'}</li>
									<li>{$settingLocation?.district || 'N/A'}</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>Last Read</td>
							<td>
								<JsonSurahViewer
									jsonArrayObject={currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.LAST_VERSES]}
								/>
							</td>
							<td>
								<JsonSurahViewer jsonArrayObject={$lastReadVerses} />
							</td>
						</tr>
						<tr>
							<td>Pinned Surah</td>
							<td>
								<JsonSurahViewer
									jsonArrayObject={currentRemoteProgress?.[CONSTANTS.STORAGE_KEY.PINNED_SURAH]}
								/>
							</td>
							<td>
								<JsonSurahViewer jsonArrayObject={$pinnedSurah} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		{/if}

		<div class="flex flex-col flex-wrap gap-2 mt-4">
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
