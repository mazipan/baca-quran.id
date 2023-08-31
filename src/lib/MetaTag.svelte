<script lang="ts">
	import { TITLE_CONSTANTS } from './constants';

	export let title = '';
	export let desc = '';
	export let url: string = TITLE_CONSTANTS.PATH;
	export let canonical = '';
</script>

<title>{title}</title>
<meta name="description" content={desc} />

<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:url" content={url} />
<meta property="og:image" content={`${TITLE_CONSTANTS.PATH}images/meta-image.png`} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:url" content={url} />
<meta name="twitter:image:src" content={`${TITLE_CONSTANTS.PATH}images/meta-image.png`} />

{#if canonical}
	<link rel="canonical" href={canonical} />
{:else}
	<link rel="canonical" href={url} />
{/if}
