<script lang="ts">
	import { SEO_TEXT, type SeoArgs, type PageVariant, SEO_TEXT_DYNAMIC } from './constants';

	export let variant: PageVariant;
	export let params: SeoArgs | null = null;
</script>

<div class="text-center p-4 text-sm text-foreground-secondary">
	{#if (variant === 'SURAH_DETAIL' || variant === 'AYAT_DETAIL') && params}
		<p>{SEO_TEXT_DYNAMIC[variant](params)}</p>
	{:else}
		<p>{SEO_TEXT[variant]}</p>
	{/if}
</div>
