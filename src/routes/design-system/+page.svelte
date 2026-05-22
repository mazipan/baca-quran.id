<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MorningBanner from '$lib/illustrations/MorningBanner.svelte';
	import EveningBanner from '$lib/illustrations/EveningBanner.svelte';
	import PrayerTimeIllustration from '$lib/illustrations/PrayerTimeIllustration.svelte';
	import Tabs from '$lib/ui/Tabs.svelte';
	import Button from '$lib/ui/Button.svelte';
	import IconButton from '$lib/ui/IconButton.svelte';
	import Badge from '$lib/ui/Badge.svelte';
	import Chip from '$lib/ui/Chip.svelte';
	import Collapsible from '$lib/ui/Collapsible.svelte';
	import BottomSheet from '$lib/ui/BottomSheet.svelte';
	import Card from '$lib/ui/Card.svelte';
	import GradientCard, {
		GRADIENTS,
		PATTERNS,
		type GradientName,
		type PatternName
	} from '$lib/ui/GradientCard.svelte';
	import Banner from '$lib/ui/Banner.svelte';
	import Input from '$lib/ui/Input.svelte';
	import Textarea from '$lib/ui/Textarea.svelte';
	import Checkbox from '$lib/ui/Checkbox.svelte';
	import Radio from '$lib/ui/Radio.svelte';
	import { TITLE_CONSTANTS, THEMES } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import { toast } from '../../store/toast';

	import ArrowDownTray from '$lib/icons/ArrowDownTray.svelte';
	import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import ArrowUpTray from '$lib/icons/ArrowUpTray.svelte';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import BookmarkIcon from '$lib/icons/BookmarkIcon.svelte';
	import BookmarkSlashIcon from '$lib/icons/BookmarkSlashIcon.svelte';
	import BookmarkSolidIcon from '$lib/icons/BookmarkSolidIcon.svelte';
	import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
	import CheckCircleIcon from '$lib/icons/CheckCircleIcon.svelte';
	import CheckCircleSolidIcon from '$lib/icons/CheckCircleSolidIcon.svelte';
	import CheckIcon from '$lib/icons/CheckIcon.svelte';
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import ChevronRightIcon from '$lib/icons/ChevronRightIcon.svelte';
	import ChevronUpIcon from '$lib/icons/ChevronUpIcon.svelte';
	import CodeIcon from '$lib/icons/CodeIcon.svelte';
	import CopyIcon from '$lib/icons/CopyIcon.svelte';
	import DocumentTextIcon from '$lib/icons/DocumentTextIcon.svelte';
	import ExclamationTriangleIcon from '$lib/icons/ExclamationTriangleIcon.svelte';
	import EyeIcon from '$lib/icons/EyeIcon.svelte';
	import FireIcon from '$lib/icons/FireIcon.svelte';
	import GalleryIcon from '$lib/icons/GalleryIcon.svelte';
	import GoogleIcon from '$lib/icons/GoogleIcon.svelte';
	import HashtagIcon from '$lib/icons/HashtagIcon.svelte';
	import HeartIcon from '$lib/icons/HeartIcon.svelte';
	import HeartSolidIcon from '$lib/icons/HeartSolidIcon.svelte';
	import HomeIcon from '$lib/icons/HomeIcon.svelte';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import LinkIcon from '$lib/icons/LinkIcon.svelte';
	import MarkerIcon from '$lib/icons/MarkerIcon.svelte';
	import NewspaperIcon from '$lib/icons/NewspaperIcon.svelte';
	import PauseIcon from '$lib/icons/PauseIcon.svelte';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';
	import PresentationChartIcon from '$lib/icons/PresentationChartIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
	import SettingIcon from '$lib/icons/SettingIcon.svelte';
	import ShareIcon from '$lib/icons/ShareIcon.svelte';
	import ShieldCheckIcon from '$lib/icons/ShieldCheckIcon.svelte';
	import SignOutIcon from '$lib/icons/SignOutIcon.svelte';
	import SpeakerWaveIcon from '$lib/icons/SpeakerWaveIcon.svelte';
	import SpeakerXMarkIcon from '$lib/icons/SpeakerXMarkIcon.svelte';
	import SwatchIcon from '$lib/icons/SwatchIcon.svelte';
	import ReactangleStackIcon from '$lib/icons/ReactangleStackIcon.svelte';
	import XMarkIcon from '$lib/icons/XMarkIcon.svelte';

	import type { IconSize } from '$lib/icons/utils';

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	let showSheet = $state(false);
	let demoTab2 = $state('morning');
	let demoTab3 = $state('option-b');
	let activeChip = $state<'neutral' | 'blue' | 'green' | 'orange' | 'red' | 'purple'>('neutral');
	let bannerDismissed = $state(false);
	let demoText = $state('');
	let demoTextarea = $state('');
	let demoEmail = $state('not-an-email');
	let demoCheckbox = $state(true);
	let demoCheckboxB = $state(false);
	let demoRadio = $state<'id' | 'en' | 'ar'>('id');
	let demoIllustrationHour = $state(9);

	function showToast(type: 'info' | 'success' | 'error' | 'warn') {
		const messageById = {
			info: isEnglish ? 'This is an info message' : 'Ini pesan informasi',
			success: isEnglish ? 'Saved successfully' : 'Berhasil disimpan',
			warn: isEnglish ? 'Please double-check your input' : 'Mohon periksa kembali masukan kamu',
			error: isEnglish ? 'Something went wrong' : 'Terjadi kesalahan'
		};
		toast.show({ message: messageById[type], type });
	}

	const iconSizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

	const iconList = [
		{ name: 'ArrowDownTray', Comp: ArrowDownTray },
		{ name: 'ArrowLeft', Comp: ArrowLeftIcon },
		{ name: 'ArrowRight', Comp: ArrowRightIcon },
		{ name: 'ArrowUpTray', Comp: ArrowUpTray },
		{ name: 'BookOpen', Comp: BookOpenIcon },
		{ name: 'Bookmark', Comp: BookmarkIcon },
		{ name: 'BookmarkSlash', Comp: BookmarkSlashIcon },
		{ name: 'BookmarkSolid', Comp: BookmarkSolidIcon },
		{ name: 'Calendar', Comp: CalendarIcon },
		{ name: 'Check', Comp: CheckIcon },
		{ name: 'CheckCircle', Comp: CheckCircleIcon },
		{ name: 'CheckCircleSolid', Comp: CheckCircleSolidIcon },
		{ name: 'ChevronDown', Comp: ChevronDownIcon },
		{ name: 'ChevronRight', Comp: ChevronRightIcon },
		{ name: 'ChevronUp', Comp: ChevronUpIcon },
		{ name: 'Code', Comp: CodeIcon },
		{ name: 'Copy', Comp: CopyIcon },
		{ name: 'DocumentText', Comp: DocumentTextIcon },
		{ name: 'ExclamationTriangle', Comp: ExclamationTriangleIcon },
		{ name: 'Eye', Comp: EyeIcon },
		{ name: 'Fire', Comp: FireIcon },
		{ name: 'Gallery', Comp: GalleryIcon },
		{ name: 'Google', Comp: GoogleIcon },
		{ name: 'Hashtag', Comp: HashtagIcon },
		{ name: 'Heart', Comp: HeartIcon },
		{ name: 'HeartSolid', Comp: HeartSolidIcon },
		{ name: 'Home', Comp: HomeIcon },
		{ name: 'InformationCircle', Comp: InformationCircleIcon },
		{ name: 'Link', Comp: LinkIcon },
		{ name: 'Marker', Comp: MarkerIcon },
		{ name: 'Newspaper', Comp: NewspaperIcon },
		{ name: 'Pause', Comp: PauseIcon },
		{ name: 'Play', Comp: PlayIcon },
		{ name: 'PresentationChart', Comp: PresentationChartIcon },
		{ name: 'ReactangleStack', Comp: ReactangleStackIcon },
		{ name: 'Reset', Comp: ResetIcon },
		{ name: 'Search', Comp: SearchIcon },
		{ name: 'Setting', Comp: SettingIcon },
		{ name: 'Share', Comp: ShareIcon },
		{ name: 'ShieldCheck', Comp: ShieldCheckIcon },
		{ name: 'SignOut', Comp: SignOutIcon },
		{ name: 'SpeakerWave', Comp: SpeakerWaveIcon },
		{ name: 'SpeakerXMark', Comp: SpeakerXMarkIcon },
		{ name: 'Swatch', Comp: SwatchIcon },
		{ name: 'XMark', Comp: XMarkIcon }
	];

	const META_TITLE = $derived(
		`${isEnglish ? 'Design System' : 'Sistem Desain'} | ${TITLE_CONSTANTS.TITLE_META}`
	);
	const META_DESC = $derived(
		isEnglish
			? 'Documentation of all shareable UI components used across Baca-Quran.id — buttons, badges, chips, bottom sheets, icons and more.'
			: 'Dokumentasi seluruh komponen UI yang dipakai bersama di Baca-Quran.id — tombol, badge, chip, bottom sheet, ikon, dan lainnya.'
	);

	const tocItems = $derived([
		{ id: 'colors', label: $t('designSystem.section.colors') },
		{ id: 'typography', label: $t('designSystem.section.typography') },
		{ id: 'buttons', label: $t('designSystem.section.buttons') },
		{ id: 'icon-buttons', label: $t('designSystem.section.iconButtons') },
		{ id: 'badges', label: $t('designSystem.section.badges') },
		{ id: 'tabs', label: isEnglish ? 'Tabs' : 'Tab' },
		{ id: 'chips', label: $t('designSystem.section.chips') },
		{ id: 'banners', label: $t('designSystem.section.banners') },
		{ id: 'forms', label: $t('designSystem.section.forms') },
		{ id: 'collapsible', label: $t('designSystem.section.collapsible') },
		{ id: 'bottom-sheet', label: $t('designSystem.section.bottomSheet') },
		{ id: 'toasts', label: $t('designSystem.section.toasts') },
		{ id: 'breadcrumb', label: $t('designSystem.section.breadcrumb') },
		{ id: 'cards', label: $t('designSystem.section.cards') },
		{ id: 'gradient-cards', label: $t('designSystem.section.gradientCards') },
		{ id: 'illustrations', label: isEnglish ? 'Illustrations' : 'Ilustrasi' },
		{ id: 'icons', label: $t('designSystem.section.icons') }
	]);
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}design-system/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		🎨 {isEnglish ? 'Design System' : 'Sistem Desain'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{ text: $t('navigation.designSystem'), href: '/design-system/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-8 mb-8">
	<p class="text-sm opacity-75">
		{isEnglish
			? 'A living reference for the shareable UI primitives used across the app. Each section shows what the component looks like, how it can vary, and a hint of how to use it.'
			: 'Referensi hidup untuk komponen UI yang dipakai bersama di seluruh aplikasi. Setiap bagian menampilkan tampilan komponen, ragam variannya, dan petunjuk pemakaiannya.'}
	</p>

	<!-- TABLE OF CONTENTS -->
	<Collapsible title={$t('designSystem.toc.title')} id="design-system-toc">
		<nav aria-label={$t('designSystem.toc.title')}>
			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-1">
				{#each tocItems as item (item.id)}
					<li>
						<a
							href={`#${item.id}`}
							class="block px-2 py-1 rounded text-sm hover:bg-secondary focus:bg-secondary"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Collapsible>

	<!-- COLOR TOKENS -->
	<section id="colors" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.colors')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.colorsDesc')}</p>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.colors.semanticTokens')}</h3>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
			<CardShadow class="flex flex-col gap-1">
				<div class="w-full h-12 rounded bg-primary border border-foreground/20"></div>
				<code class="text-xs">bg-primary</code>
			</CardShadow>
			<CardShadow class="flex flex-col gap-1">
				<div class="w-full h-12 rounded bg-secondary border border-foreground/20"></div>
				<code class="text-xs">bg-secondary</code>
			</CardShadow>
			<CardShadow class="flex flex-col gap-1">
				<div
					class="w-full h-12 rounded border border-foreground/20 flex items-center justify-center"
				>
					<span class="text-foreground">Aa</span>
				</div>
				<code class="text-xs">text-foreground</code>
			</CardShadow>
			<CardShadow class="flex flex-col gap-1">
				<div
					class="w-full h-12 rounded border border-foreground/20 flex items-center justify-center"
				>
					<span class="text-foreground-secondary">Aa</span>
				</div>
				<code class="text-xs">text-foreground-secondary</code>
			</CardShadow>
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.colors.themePalette')}</h3>
		<p class="text-xs opacity-75">{$t('designSystem.colors.themePaletteDesc')}</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
			{#each THEMES as theme (theme.name)}
				<CardShadow class="flex flex-col gap-2">
					<div class="flex items-center justify-between">
						<code class="text-sm font-semibold">{theme.name}</code>
						<span
							class="inline-block w-5 h-5 rounded-full border"
							style={`background:${theme.bg};border-color:${theme.border}`}
							aria-hidden="true"
						></span>
					</div>
					<div class="flex gap-1">
						<div
							class="flex-1 h-8 rounded flex items-center justify-center text-[10px] border border-foreground/20"
							style={`background:${theme.bg};color:${theme.border}`}
						>
							bg
						</div>
						<div
							class="flex-1 h-8 rounded flex items-center justify-center text-[10px] border border-foreground/20"
							style={`background:${theme.border};color:${theme.bg}`}
						>
							fg
						</div>
					</div>
					<div class="flex justify-between text-[10px] opacity-75">
						<code>{theme.bg}</code>
						<code>{theme.border}</code>
					</div>
				</CardShadow>
			{/each}
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.colors.utilityPalette')}</h3>
		<p class="text-xs opacity-75">{$t('designSystem.colors.utilityPaletteDesc')}</p>
		<div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-blue-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-blue-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-blue-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">blue</code>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-green-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-green-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-green-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">green</code>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-orange-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-orange-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-orange-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">orange</code>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-red-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-red-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-red-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">red</code>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-purple-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-purple-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-purple-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">purple</code>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-10 rounded bg-gray-100" aria-hidden="true"></div>
				<div class="h-10 rounded bg-gray-500" aria-hidden="true"></div>
				<div class="h-10 rounded bg-gray-700" aria-hidden="true"></div>
				<code class="text-[10px] text-center">gray</code>
			</div>
		</div>
	</section>

	<!-- TYPOGRAPHY -->
	<section id="typography" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.typography')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.typographyDesc')}</p>

		<CardShadow class="flex flex-col gap-2">
			<div class="text-3xl font-bold">Heading 1 — text-3xl font-bold</div>
			<div class="text-2xl font-bold">Heading 2 — text-2xl font-bold</div>
			<div class="text-xl font-bold">Heading 3 — text-xl font-bold</div>
			<div class="text-md font-semibold">Body strong — text-md font-semibold</div>
			<div class="text-sm">Body — text-sm</div>
			<div class="text-xs opacity-75">Caption — text-xs opacity-75</div>
			<div class="font-arabic text-2xl mt-2">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
			<code class="text-xs">.font-arabic — lpmq font</code>
		</CardShadow>
	</section>

	<!-- BUTTONS -->
	<section id="buttons" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.buttons')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.buttonsDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.buttons.matrix')}</h3>
				<p class="text-xs opacity-75">{$t('designSystem.buttons.matrixDesc')}</p>
				<div class="overflow-x-auto">
					<table class="text-sm">
						<thead>
							<tr class="text-left">
								<th class="px-2 py-1"></th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">primary</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">secondary</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">info</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">success</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">warning</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">danger</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">solid</td>
								<td class="px-2 py-1">
									<Button color="primary" onClick={() => showToast('info')}>Action</Button>
								</td>
								<td class="px-2 py-1">
									<Button color="secondary" onClick={() => showToast('info')}>Action</Button>
								</td>
								<td class="px-2 py-1">
									<Button color="info" onClick={() => showToast('info')}>Info</Button>
								</td>
								<td class="px-2 py-1">
									<Button color="success" onClick={() => showToast('success')}>Save</Button>
								</td>
								<td class="px-2 py-1">
									<Button color="warning" onClick={() => showToast('warn')}>Review</Button>
								</td>
								<td class="px-2 py-1">
									<Button color="danger" onClick={() => showToast('error')}>Delete</Button>
								</td>
							</tr>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">subtle</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="primary" onClick={() => showToast('info')}>
										Action
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="secondary" onClick={() => showToast('info')}>
										Action
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="info" onClick={() => showToast('info')}>
										Info
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="success" onClick={() => showToast('success')}>
										Save
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="warning" onClick={() => showToast('warn')}>
										Review
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="subtle" color="danger" onClick={() => showToast('error')}>
										Delete
									</Button>
								</td>
							</tr>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">outline</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="primary" onClick={() => showToast('info')}>
										Action
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="secondary" onClick={() => showToast('info')}>
										Action
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="info" onClick={() => showToast('info')}>
										Info
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="success" onClick={() => showToast('success')}>
										Save
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="warning" onClick={() => showToast('warn')}>
										Review
									</Button>
								</td>
								<td class="px-2 py-1">
									<Button variant="outline" color="danger" onClick={() => showToast('error')}>
										Delete
									</Button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.buttons.sizes')}</h3>
				<div class="flex flex-wrap items-center gap-3">
					<Button size="sm" color="primary" onClick={() => showToast('info')}>sm</Button>
					<Button size="md" color="primary" onClick={() => showToast('info')}>md</Button>
					<Button size="lg" color="primary" onClick={() => showToast('info')}>lg</Button>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.buttons.withIcon')}</h3>
				<div class="flex flex-wrap items-center gap-3">
					<Button color="primary" onClick={() => showToast('success')} ariaLabel="Bookmark">
						<BookmarkIcon size="sm" />
						<span>Bookmark</span>
					</Button>
					<Button variant="subtle" onClick={() => showToast('success')} ariaLabel="Share">
						<ShareIcon size="sm" />
					</Button>
					<Button variant="outline" color="success" onClick={() => showToast('success')}>
						<PlayIcon size="sm" />
						<span>Play</span>
					</Button>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.buttons.disabled')}</h3>
				<div class="flex flex-wrap items-center gap-3">
					<Button color="primary" disabled onClick={() => {}}>Disabled</Button>
					<Button variant="subtle" color="danger" disabled onClick={() => {}}>Disabled</Button>
					<Button variant="outline" color="success" disabled onClick={() => {}}>Disabled</Button>
				</div>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Button variant="solid | subtle | outline"\n        color="primary | secondary | info | success | warning | danger"\n        size="sm | md | lg"\n        disabled\n        onClick={fn}>...</Button>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- ICON BUTTONS -->
	<section id="icon-buttons" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.iconButtons')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.iconButtonsDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.iconButtons.sizes')}</h3>
				<div class="flex items-end gap-3">
					<IconButton size="xs" ariaLabel="xs share" onClick={() => showToast('info')}>
						<ShareIcon size="xs" />
					</IconButton>
					<IconButton size="sm" ariaLabel="sm share" onClick={() => showToast('info')}>
						<ShareIcon size="sm" />
					</IconButton>
					<IconButton size="md" ariaLabel="md share" onClick={() => showToast('info')}>
						<ShareIcon size="sm" />
					</IconButton>
					<IconButton size="lg" ariaLabel="lg share" onClick={() => showToast('info')}>
						<ShareIcon size="md" />
					</IconButton>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.iconButtons.variants')}</h3>
				<div class="flex flex-wrap items-center gap-2">
					<IconButton
						variant="ghost"
						color="secondary"
						ariaLabel="ghost"
						onClick={() => showToast('info')}
					>
						<HeartIcon size="sm" />
					</IconButton>
					<IconButton
						variant="subtle"
						color="primary"
						ariaLabel="subtle"
						onClick={() => showToast('info')}
					>
						<HeartIcon size="sm" />
					</IconButton>
					<IconButton
						variant="outline"
						color="secondary"
						ariaLabel="outline"
						onClick={() => showToast('info')}
					>
						<HeartIcon size="sm" />
					</IconButton>
					<IconButton
						variant="solid"
						color="primary"
						ariaLabel="solid primary"
						onClick={() => showToast('info')}
					>
						<HeartSolidIcon size="sm" />
					</IconButton>
					<IconButton
						variant="solid"
						color="danger"
						ariaLabel="solid danger"
						onClick={() => showToast('error')}
					>
						<XMarkIcon size="sm" />
					</IconButton>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.iconButtons.rounded')}</h3>
				<div class="flex flex-wrap items-center gap-2">
					<IconButton
						variant="solid"
						color="primary"
						rounded="md"
						ariaLabel="rounded md"
						onClick={() => showToast('info')}
					>
						<PlayIcon size="sm" />
					</IconButton>
					<IconButton
						variant="solid"
						color="primary"
						rounded="full"
						ariaLabel="rounded full"
						onClick={() => showToast('info')}
					>
						<PlayIcon size="sm" />
					</IconButton>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.iconButtons.disabled')}</h3>
				<div class="flex flex-wrap items-center gap-2">
					<IconButton variant="ghost" disabled ariaLabel="disabled ghost" onClick={() => {}}>
						<XMarkIcon size="sm" />
					</IconButton>
					<IconButton
						variant="solid"
						color="primary"
						disabled
						ariaLabel="disabled solid"
						onClick={() => {}}
					>
						<XMarkIcon size="sm" />
					</IconButton>
				</div>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<IconButton variant="ghost | subtle | outline | solid"\n            color="primary | secondary | info | success | warning | danger"\n            size="xs | sm | md | lg"\n            rounded="md | full"\n            ariaLabel="…"\n            onClick={fn}>\n  <Icon size="sm" />\n</IconButton>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- BADGES -->
	<section id="badges" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.badges')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.badgesDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.badges.matrix')}</h3>
				<div class="overflow-x-auto">
					<table class="text-sm">
						<thead>
							<tr class="text-left">
								<th class="px-2 py-1"></th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">primary</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">secondary</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">info</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">success</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">warning</th>
								<th class="px-2 py-1 font-normal text-xs opacity-75">danger</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">solid</td>
								<td class="px-2 py-1"><Badge variant="solid" color="primary">New</Badge></td>
								<td class="px-2 py-1"><Badge variant="solid" color="secondary">Default</Badge></td>
								<td class="px-2 py-1"><Badge variant="solid" color="info">Info</Badge></td>
								<td class="px-2 py-1"><Badge variant="solid" color="success">Done</Badge></td>
								<td class="px-2 py-1"><Badge variant="solid" color="warning">Hold</Badge></td>
								<td class="px-2 py-1"><Badge variant="solid" color="danger">Fail</Badge></td>
							</tr>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">subtle</td>
								<td class="px-2 py-1"><Badge variant="subtle" color="primary">New</Badge></td>
								<td class="px-2 py-1"><Badge variant="subtle" color="secondary">Default</Badge></td>
								<td class="px-2 py-1"><Badge variant="subtle" color="info">Info</Badge></td>
								<td class="px-2 py-1"><Badge variant="subtle" color="success">Done</Badge></td>
								<td class="px-2 py-1"><Badge variant="subtle" color="warning">Hold</Badge></td>
								<td class="px-2 py-1"><Badge variant="subtle" color="danger">Fail</Badge></td>
							</tr>
							<tr>
								<td class="px-2 py-1 text-xs opacity-75">outline</td>
								<td class="px-2 py-1"><Badge variant="outline" color="primary">New</Badge></td>
								<td class="px-2 py-1"><Badge variant="outline" color="secondary">Default</Badge></td
								>
								<td class="px-2 py-1"><Badge variant="outline" color="info">Info</Badge></td>
								<td class="px-2 py-1"><Badge variant="outline" color="success">Done</Badge></td>
								<td class="px-2 py-1"><Badge variant="outline" color="warning">Hold</Badge></td>
								<td class="px-2 py-1"><Badge variant="outline" color="danger">Fail</Badge></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.badges.sizes')}</h3>
				<div class="flex flex-wrap items-center gap-3">
					<Badge size="sm" color="primary">sm</Badge>
					<Badge size="md" color="primary">md</Badge>
					<Badge size="lg" color="primary">lg</Badge>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.badges.withIcon')}</h3>
				<div class="flex flex-wrap items-center gap-3">
					<Badge variant="subtle" color="success">
						<CheckCircleIcon size="xs" />
						{isEnglish ? 'Verified' : 'Terverifikasi'}
					</Badge>
					<Badge variant="solid" color="primary">
						<HashtagIcon size="xs" />
						123
					</Badge>
					<Badge variant="outline" color="warning">
						<ExclamationTriangleIcon size="xs" />
						{isEnglish ? 'Beta' : 'Beta'}
					</Badge>
				</div>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Badge variant="solid | subtle | outline"\n       color="primary | secondary | info | success | warning | danger"\n       size="sm | md | lg">label</Badge>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- TABS -->
	<section id="tabs" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{isEnglish ? 'Tabs' : 'Tab'}</h2>
		<p class="text-sm opacity-75">
			{isEnglish
				? 'Sliding-indicator tab component. Best for balanced selectors with 2–4 options. The pill indicator animates smoothly when switching tabs.'
				: 'Komponen tab dengan indikator geser. Cocok untuk selektor seimbang dengan 2–4 pilihan. Indikator bergerak mulus saat berganti tab.'}
		</p>

		<CardShadow class="flex flex-col gap-5">
			<div class="flex flex-col gap-2">
				<h3 class="font-semibold text-sm">{isEnglish ? '2 options' : '2 pilihan'}</h3>
				<Tabs
					options={[
						{ value: 'morning', label: '🌅 Pagi' },
						{ value: 'evening', label: '🌙 Petang' }
					]}
					value={demoTab2}
					onchange={(v) => (demoTab2 = v)}
				/>
				<p class="text-xs opacity-60">{isEnglish ? 'Selected:' : 'Dipilih:'} {demoTab2}</p>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold text-sm">{isEnglish ? '3 options' : '3 pilihan'}</h3>
				<Tabs
					options={[
						{ value: 'option-a', label: '🎯 Satu per Satu' },
						{ value: 'option-b', label: '📋 Semua' },
						{ value: 'option-c', label: '⚙️ Setelan' }
					]}
					value={demoTab3}
					onchange={(v) => (demoTab3 = v)}
				/>
				<p class="text-xs opacity-60">{isEnglish ? 'Selected:' : 'Dipilih:'} {demoTab3}</p>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{"<Tabs\n  options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }]}\n  value={selected}\n  onchange={(v) => (selected = v)}\n/>"}</code
				></pre>
		</CardShadow>
	</section>

	<!-- CHIPS / PILLS -->
	<section id="chips" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.chips')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.chipsDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<div class="flex flex-wrap items-center gap-2">
				<Chip>Neutral</Chip>
				<Chip color="blue">Blue</Chip>
				<Chip color="green">Green</Chip>
				<Chip color="orange">Orange</Chip>
				<Chip color="red">Red</Chip>
				<Chip color="purple">Purple</Chip>
			</div>

			<div class="flex flex-wrap items-center gap-2">
				<Chip color="blue" size="sm">size=sm</Chip>
				<Chip color="blue" size="md">size=md</Chip>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-xs opacity-75">{$t('designSystem.chips.interactive')}</p>
				<div class="flex flex-wrap items-center gap-2">
					<Chip
						color="neutral"
						active={activeChip === 'neutral'}
						onClick={() => (activeChip = 'neutral')}>Neutral</Chip
					>
					<Chip color="blue" active={activeChip === 'blue'} onClick={() => (activeChip = 'blue')}
						>Blue</Chip
					>
					<Chip color="green" active={activeChip === 'green'} onClick={() => (activeChip = 'green')}
						>Green</Chip
					>
					<Chip
						color="orange"
						active={activeChip === 'orange'}
						onClick={() => (activeChip = 'orange')}>Orange</Chip
					>
					<Chip color="red" active={activeChip === 'red'} onClick={() => (activeChip = 'red')}
						>Red</Chip
					>
					<Chip
						color="purple"
						active={activeChip === 'purple'}
						onClick={() => (activeChip = 'purple')}>Purple</Chip
					>
				</div>
				<p class="text-xs opacity-75">
					{isEnglish ? 'Active: ' : 'Aktif: '}<code>{activeChip}</code>
				</p>
			</div>

			<div class="flex flex-col gap-2">
				<p class="text-xs opacity-75">{isEnglish ? 'Shape variants' : 'Varian bentuk'}</p>
				<div class="flex flex-wrap items-center gap-2">
					<Chip color="blue" shape="pill">pill (default)</Chip>
					<Chip color="blue" shape="rounded">rounded</Chip>
				</div>
				<div class="flex flex-wrap items-center gap-2">
					<Chip color="green" shape="pill" size="sm">pill sm</Chip>
					<Chip color="green" shape="rounded" size="sm">rounded sm</Chip>
				</div>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Chip color="neutral | blue | green | orange | red | purple"\n      size="sm | md"\n      shape="pill | rounded"\n      active\n      onClick={fn}>label</Chip>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- BANNERS / ALERTS -->
	<section id="banners" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.banners')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.bannersDesc')}</p>

		<CardShadow class="flex flex-col gap-3">
			<Banner type="info" title={$t('designSystem.banner.infoTitle')}>
				{$t('designSystem.banner.infoBody')}
			</Banner>
			<Banner type="success" title={$t('designSystem.banner.successTitle')}>
				{$t('designSystem.banner.successBody')}
			</Banner>
			<Banner type="warn" title={$t('designSystem.banner.warnTitle')}>
				{$t('designSystem.banner.warnBody')}
			</Banner>
			<Banner type="error" title={$t('designSystem.banner.errorTitle')}>
				{$t('designSystem.banner.errorBody')}
			</Banner>

			{#if !bannerDismissed}
				<Banner
					type="info"
					dismissible
					onDismiss={() => (bannerDismissed = true)}
					ariaLabelClose={$t('common.close')}
				>
					{$t('designSystem.banner.dismissibleBody')}
				</Banner>
			{:else}
				<p class="text-xs opacity-75">
					{$t('designSystem.banner.dismissedHint')}
					<button
						type="button"
						class="underline cursor-pointer"
						onclick={() => (bannerDismissed = false)}>{$t('designSystem.banner.restore')}</button
					>
				</p>
			{/if}

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Banner type="info | success | warn | error" title="..." dismissible>body</Banner>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- FORM CONTROLS -->
	<section id="forms" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.forms')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.formsDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<h3 class="font-semibold">Input</h3>
			<Input
				label={$t('designSystem.forms.textLabel')}
				placeholder={$t('designSystem.forms.textPlaceholder')}
				hint={$t('designSystem.forms.textHint')}
				bind:value={demoText}
			/>
			<Input
				type="email"
				label={$t('designSystem.forms.emailLabel')}
				placeholder="you@example.com"
				bind:value={demoEmail}
				error={demoEmail && !demoEmail.includes('@') ? $t('designSystem.forms.emailError') : ''}
			/>
			<Input label={$t('designSystem.forms.disabledLabel')} value="readonly" disabled />

			<div class="flex flex-col gap-2">
				<h4 class="text-sm font-semibold">{$t('designSystem.forms.sizes')}</h4>
				<Input size="sm" placeholder="size=sm" />
				<Input size="md" placeholder="size=md" />
				<Input size="lg" placeholder="size=lg" />
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Input label="..." size="sm | md | lg" bind:value error="..." hint="..." />'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-4">
			<h3 class="font-semibold">Textarea</h3>
			<Textarea
				label={$t('designSystem.forms.textareaLabel')}
				placeholder={$t('designSystem.forms.textareaPlaceholder')}
				hint={$t('designSystem.forms.textareaHint')}
				rows={3}
				bind:value={demoTextarea}
			/>

			<div class="flex flex-col gap-2">
				<h4 class="text-sm font-semibold">{$t('designSystem.forms.sizes')}</h4>
				<Textarea size="sm" rows={2} placeholder="size=sm" />
				<Textarea size="lg" rows={2} placeholder="size=lg" />
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Textarea label="..." size="sm | md | lg" rows={4} bind:value />'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">Checkbox</h3>
			<Checkbox
				label={$t('designSystem.forms.checkboxA')}
				hint={$t('designSystem.forms.checkboxAHint')}
				bind:checked={demoCheckbox}
			/>
			<Checkbox label={$t('designSystem.forms.checkboxB')} bind:checked={demoCheckboxB} />
			<Checkbox label={$t('designSystem.forms.checkboxDisabled')} checked disabled />
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Checkbox label="..." bind:checked />'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">Radio</h3>
			<div class="flex flex-col gap-2">
				<Radio
					name="demo-lang"
					value="id"
					label={$t('designSystem.forms.radioId')}
					bind:group={demoRadio}
				/>
				<Radio
					name="demo-lang"
					value="en"
					label={$t('designSystem.forms.radioEn')}
					bind:group={demoRadio}
				/>
				<Radio
					name="demo-lang"
					value="ar"
					label={$t('designSystem.forms.radioAr')}
					hint={$t('designSystem.forms.radioArHint')}
					bind:group={demoRadio}
				/>
			</div>
			<p class="text-xs opacity-75">
				{$t('designSystem.forms.selected')} <code>{demoRadio}</code>
			</p>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Radio name="..." value="..." label="..." bind:group />'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- COLLAPSIBLE -->
	<section id="collapsible" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.collapsible')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.collapsibleDesc')}</p>

		<CardShadow class="flex flex-col gap-3">
			<Collapsible title={$t('designSystem.collapsible.what')}>
				<p class="text-sm">
					{isEnglish
						? 'A collapsible reveals more detail on demand, keeping the page scannable.'
						: 'Komponen collapsible menyembunyikan detail sampai dibutuhkan agar halaman tetap mudah dipindai.'}
				</p>
			</Collapsible>
			<Collapsible title={$t('designSystem.collapsible.when')} open>
				<ul class="list-disc pl-6 text-sm flex flex-col gap-1">
					<li>{isEnglish ? 'FAQs and long help text' : 'FAQ dan teks bantuan panjang'}</li>
					<li>{isEnglish ? 'Tafsir or footnotes' : 'Tafsir atau catatan kaki'}</li>
					<li>{isEnglish ? 'Optional settings groups' : 'Grup pengaturan opsional'}</li>
				</ul>
			</Collapsible>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<Collapsible title="..." open>content</Collapsible>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- BOTTOM SHEET -->
	<section id="bottom-sheet" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.bottomSheet')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.bottomSheetDesc')}</p>

		<CardShadow class="flex flex-col gap-3">
			<div>
				<Button onClick={() => (showSheet = true)}>
					<span>{$t('designSystem.bottomSheet.open')}</span>
				</Button>
			</div>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<BottomSheet show={open} title="..." onClose={fn}>content</BottomSheet>'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- TOASTS -->
	<section id="toasts" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.toasts')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.toastsDesc')}</p>

		<CardShadow class="flex flex-col gap-3">
			<div class="flex flex-wrap gap-3">
				<Button onClick={() => showToast('info')}>
					<InformationCircleIcon size="sm" /> info
				</Button>
				<Button onClick={() => showToast('success')}>
					<CheckCircleIcon size="sm" /> success
				</Button>
				<Button onClick={() => showToast('warn')}>
					<ExclamationTriangleIcon size="sm" /> warn
				</Button>
				<Button onClick={() => showToast('error')}>
					<FireIcon size="sm" /> error
				</Button>
			</div>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{"toast.show({ message: '...', type: 'info | success | warn | error' })"}</code
				></pre>
		</CardShadow>
	</section>

	<!-- BREADCRUMB -->
	<section id="breadcrumb" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.breadcrumb')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.breadcrumbDesc')}</p>

		<CardShadow class="flex flex-col gap-3">
			<Breadcrumb
				items={[
					{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
					{ text: $t('navigation.allSurah'), href: '/all-surah/' },
					{ text: 'Al-Fatihah', href: '/surah/1/' }
				]}
			/>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{"<Breadcrumb items={[{ text: '...', href: '/' }]} />"}</code
				></pre>
		</CardShadow>
	</section>

	<!-- CARDS -->
	<section id="cards" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.cards')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.cardsDesc')}</p>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.cards.variants')}</h3>
		<div class="grid sm:grid-cols-3 gap-3">
			<Card variant="filled" title="filled">
				<p class="text-sm opacity-75">{$t('designSystem.cards.filledDesc')}</p>
			</Card>
			<Card variant="outline" title="outline">
				<p class="text-sm opacity-75">{$t('designSystem.cards.outlineDesc')}</p>
			</Card>
			<Card variant="elevated" title="elevated">
				<p class="text-sm opacity-75">{$t('designSystem.cards.elevatedDesc')}</p>
			</Card>
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.cards.composed')}</h3>
		<div class="grid sm:grid-cols-2 gap-3">
			<Card variant="filled" padding="md">
				{#snippet header()}
					<div class="flex items-center gap-2">
						<HeartSolidIcon size="sm" />
						<h3 class="font-semibold">{$t('designSystem.cards.withHeaderTitle')}</h3>
					</div>
				{/snippet}
				<p class="text-sm">{$t('designSystem.cards.withHeaderBody')}</p>
				{#snippet footer()}
					<div class="flex justify-end gap-2">
						<Button variant="subtle" onClick={() => showToast('info')}>
							<span class="text-xs">{$t('common.cancel')}</span>
						</Button>
						<Button onClick={() => showToast('success')}>
							<span class="text-xs">{$t('common.save')}</span>
						</Button>
					</div>
				{/snippet}
			</Card>

			<Card
				as="a"
				href="/design-system/"
				variant="elevated"
				title={$t('designSystem.cards.linkTitle')}
				subtitle={$t('designSystem.cards.linkSubtitle')}
			>
				<p class="text-sm opacity-75">{$t('designSystem.cards.linkBody')}</p>
			</Card>
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.cards.padding')}</h3>
		<div class="grid sm:grid-cols-4 gap-3">
			<Card variant="outline" padding="none">
				<div class="text-xs text-center">padding=none</div>
			</Card>
			<Card variant="outline" padding="sm">
				<div class="text-xs text-center">padding=sm</div>
			</Card>
			<Card variant="outline" padding="md">
				<div class="text-xs text-center">padding=md</div>
			</Card>
			<Card variant="outline" padding="lg">
				<div class="text-xs text-center">padding=lg</div>
			</Card>
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.cards.legacy')}</h3>
		<p class="text-xs opacity-75">{$t('designSystem.cards.legacyDesc')}</p>
		<div class="grid sm:grid-cols-2 gap-3">
			<CardShadow>
				<h3 class="font-semibold mb-1">CardShadow</h3>
				<p class="text-sm opacity-75">
					{isEnglish
						? 'Generic content container with secondary background and shadow.'
						: 'Wadah konten generik dengan latar sekunder dan bayangan.'}
				</p>
			</CardShadow>
			<CardShadow _as="a" href="/design-system/">
				<h3 class="font-semibold mb-1">CardShadow (link)</h3>
				<p class="text-sm opacity-75">
					{isEnglish
						? 'Render as anchor with the same look.'
						: 'Render sebagai anchor dengan tampilan yang sama.'}
				</p>
			</CardShadow>
		</div>

		<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
				>{'<Card variant="filled | outline | elevated" padding="none | sm | md | lg" title="..." subtitle="...">\n  body\n  {#snippet header()}...{/snippet}\n  {#snippet footer()}...{/snippet}\n</Card>'}</code
			></pre>
	</section>

	<!-- GRADIENT CARDS -->
	<section id="gradient-cards" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.gradientCards')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.gradientCardsDesc')}</p>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.gradientCards.presets')}</h3>
		<div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
			{#each Object.keys(GRADIENTS) as name}
				<GradientCard gradient={name as GradientName} padding="sm">
					<p class="text-white font-semibold text-xs">{name}</p>
				</GradientCard>
			{/each}
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.gradientCards.interactive')}</h3>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
			<GradientCard gradient="emerald" as="button" onClick={() => {}} padding="md">
				<p class="text-white font-semibold text-sm">button</p>
				<p class="text-white/70 text-xs mt-0.5">hover / active</p>
			</GradientCard>
			<GradientCard gradient="blue" as="a" href="/design-system/" padding="md">
				<p class="text-white font-semibold text-sm">link</p>
				<p class="text-white/70 text-xs mt-0.5">hover / active</p>
			</GradientCard>
			<GradientCard gradient="violet" rounded="lg" padding="md">
				<p class="text-white font-semibold text-sm">rounded=lg</p>
			</GradientCard>
			<GradientCard gradient="rose" rounded="3xl" padding="md">
				<p class="text-white font-semibold text-sm">rounded=3xl</p>
			</GradientCard>
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.gradientCards.withoutDecorative')}</h3>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
			{#each ['amber', 'cyan', 'lime', 'fuchsia'] as name}
				<GradientCard gradient={name as GradientName} decorative={false} padding="sm">
					<p class="text-white font-semibold text-xs">{name}</p>
				</GradientCard>
			{/each}
		</div>

		<h3 class="text-md font-semibold mt-2">{$t('designSystem.gradientCards.indexBased')}</h3>
		<div class="grid grid-cols-5 sm:grid-cols-10 gap-2">
			{#each Array.from({ length: 10 }, (_, i) => i) as i}
				<GradientCard gradient={i} padding="sm" rounded="xl">
					<p class="text-white font-bold text-xs text-center">{i}</p>
				</GradientCard>
			{/each}
		</div>

		<h3 class="text-md font-semibold mt-2">Patterns</h3>
		<p class="text-xs opacity-75">
			Overlay a repeating pattern on any gradient. Choose from <code>dots</code>, <code>grid</code>,
			<code>diagonal</code>, or <code>triangles</code>.
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
			{#each Object.keys(PATTERNS).filter((p) => p !== 'none') as name}
				<GradientCard
					gradient="violet"
					pattern={name as PatternName}
					padding="md"
					decorative={false}
				>
					<p class="text-white font-semibold text-sm">{name}</p>
					<p class="text-white/70 text-xs mt-0.5">pattern="{name}"</p>
				</GradientCard>
			{/each}
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
			<GradientCard gradient="emerald" pattern="dots" padding="md">
				<p class="text-white font-semibold text-sm">dots</p>
				<p class="text-white/70 text-xs mt-0.5">emerald</p>
			</GradientCard>
			<GradientCard gradient="amber" pattern="grid" padding="md">
				<p class="text-white font-semibold text-sm">grid</p>
				<p class="text-white/70 text-xs mt-0.5">amber</p>
			</GradientCard>
			<GradientCard gradient="rose" pattern="diagonal" padding="md">
				<p class="text-white font-semibold text-sm">diagonal</p>
				<p class="text-white/70 text-xs mt-0.5">rose</p>
			</GradientCard>
			<GradientCard gradient="sky" pattern="triangles" padding="md">
				<p class="text-white font-semibold text-sm">triangles</p>
				<p class="text-white/70 text-xs mt-0.5">sky</p>
			</GradientCard>
		</div>

		<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
				>{'<GradientCard gradient="emerald">\n  <!-- content -->\n</GradientCard>\n\n<!-- with pattern -->\n<GradientCard gradient="violet" pattern="dots">\n  ...\n</GradientCard>\n\n<!-- interactive -->\n<GradientCard gradient="blue" as="button" onClick={fn}>\n  ...\n</GradientCard>\n\n<!-- index-based (cycles through 10 presets) -->\n<GradientCard gradient={index}>\n  ...\n</GradientCard>\n\n<!-- props: gradient | pattern | decorative | padding | rounded | as | href | onClick | ariaLabel | class -->'}</code
			></pre>
	</section>

	<!-- ILLUSTRATIONS -->
	<section id="illustrations" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{isEnglish ? 'Illustrations' : 'Ilustrasi'}</h2>
		<p class="text-sm opacity-75">
			{isEnglish
				? 'Inline SVG illustration components. All are decorative (aria-hidden) and scale to their container width with a fixed 16:9 aspect ratio.'
				: 'Komponen ilustrasi SVG inline. Semua bersifat dekoratif (aria-hidden) dan menyesuaikan lebar kontainer dengan rasio aspek 16:9.'}
		</p>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">MorningBanner</h3>
			<p class="text-xs opacity-75">
				{isEnglish
					? 'Sunrise scene. Used in Dzikir Pagi dan Petang.'
					: 'Pemandangan matahari terbit. Dipakai di Dzikir Pagi dan Petang.'}
			</p>
			<MorningBanner />
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'import MorningBanner from \'$lib/illustrations/MorningBanner.svelte\';\n\n<MorningBanner class="..." />'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">EveningBanner</h3>
			<p class="text-xs opacity-75">
				{isEnglish
					? 'Night sky scene with crescent moon and lantern. Used in Dzikir Pagi dan Petang.'
					: 'Pemandangan langit malam dengan bulan sabit dan lentera. Dipakai di Dzikir Pagi dan Petang.'}
			</p>
			<EveningBanner />
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'import EveningBanner from \'$lib/illustrations/EveningBanner.svelte\';\n\n<EveningBanner class="..." />'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">PrayerTimeIllustration</h3>
			<p class="text-xs opacity-75">
				{isEnglish
					? 'Time-aware scene that renders 6 different skies based on the hours prop (0–23). Used in Jadwal Sholat.'
					: 'Ilustrasi waktu yang merender 6 langit berbeda berdasarkan prop hours (0–23). Dipakai di Jadwal Sholat.'}
			</p>

			<div class="flex flex-col gap-1">
				<label class="text-xs opacity-75" for="demo-hour">
					{isEnglish ? 'Live preview — hour:' : 'Pratinjau langsung — jam:'}
					<code class="ml-1">{demoIllustrationHour}:00</code>
				</label>
				<input
					id="demo-hour"
					type="range"
					min="0"
					max="23"
					step="1"
					bind:value={demoIllustrationHour}
					class="w-full accent-foreground"
				/>
			</div>
			<PrayerTimeIllustration hours={demoIllustrationHour} />

			<div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
				{#each [{ label: 'fajr', hours: 5, range: '04–06' }, { label: 'morning', hours: 9, range: '06–12' }, { label: 'noon', hours: 13, range: '12–15' }, { label: 'afternoon', hours: 16, range: '15–18' }, { label: 'sunset', hours: 19, range: '18–20' }, { label: 'night', hours: 22, range: '20–04' }] as period}
					<div class="flex flex-col gap-1">
						<PrayerTimeIllustration hours={period.hours} />
						<div class="flex justify-between text-[10px] opacity-60">
							<code>{period.label}</code>
							<span>{period.range}</span>
						</div>
					</div>
				{/each}
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'import PrayerTimeIllustration from \'$lib/illustrations/PrayerTimeIllustration.svelte\';\n\n<PrayerTimeIllustration hours={currentHour} class="..." />\n// hours 0-23 → fajr | morning | noon | afternoon | sunset | night'}</code
				></pre>
		</CardShadow>

		<CardShadow class="flex flex-col gap-3">
			<h3 class="font-semibold">
				{isEnglish ? 'Error illustration (static SVG)' : 'Ilustrasi error (SVG statis)'}
			</h3>
			<p class="text-xs opacity-75">
				{isEnglish
					? 'Used on error / empty state pages. Located at /images/illustrasion-error.svg.'
					: 'Dipakai di halaman error / status kosong. Lokasi: /images/illustrasion-error.svg.'}
			</p>
			<div class="flex justify-center">
				<img src="/images/illustrasion-error.svg" alt="Error illustration" class="w-48 h-auto" />
			</div>
			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<img src="/images/illustrasion-error.svg" alt="..." class="w-48 h-auto" />'}</code
				></pre>
		</CardShadow>
	</section>

	<!-- ICONS -->
	<section id="icons" class="flex flex-col gap-3 scroll-mt-4">
		<h2 class="text-xl font-bold">{$t('designSystem.section.icons')}</h2>
		<p class="text-sm opacity-75">{$t('designSystem.section.iconsDesc')}</p>

		<CardShadow class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.icons.sizes')}</h3>
				<div class="flex items-end gap-4">
					{#each iconSizes as size (size)}
						<div class="flex flex-col items-center gap-1">
							<BookmarkIcon {size} />
							<code class="text-xs">{size}</code>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h3 class="font-semibold">{$t('designSystem.icons.gallery')}</h3>
				<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
					{#each iconList as icon (icon.name)}
						{@const Icon = icon.Comp}
						<div
							class="flex flex-col items-center gap-1 p-3 rounded-md bg-primary border border-foreground/10"
						>
							<Icon size="md" />
							<code class="text-[10px] text-center break-all">{icon.name}</code>
						</div>
					{/each}
				</div>
			</div>

			<pre class="text-xs bg-primary p-2 rounded overflow-auto"><code
					>{'<BookmarkIcon size="xs | sm | md | lg | xl" />'}</code
				></pre>
		</CardShadow>
	</section>
</div>

<BottomSheet
	show={showSheet}
	title={$t('designSystem.bottomSheet.demoTitle')}
	id="design-system-demo-sheet"
	onClose={() => (showSheet = false)}
>
	<div class="p-4 flex flex-col gap-2">
		<p class="text-sm">
			{isEnglish
				? 'This sheet slides up from the bottom. It is used across the app for share dialogs, tafsir details, and other contextual actions.'
				: 'Sheet ini muncul dari bawah. Dipakai di seluruh aplikasi untuk dialog berbagi, detail tafsir, dan aksi kontekstual lainnya.'}
		</p>
		<div class="flex gap-2">
			<Badge>demo</Badge>
			<Chip color="blue" size="sm">bottom-sheet</Chip>
		</div>
	</div>
</BottomSheet>
