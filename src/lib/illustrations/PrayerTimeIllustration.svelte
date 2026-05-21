<script lang="ts">
	interface Props {
		hours: number;
		class?: string;
	}
	let { hours, class: klass = '' }: Props = $props();

	const period = $derived(
		hours >= 4 && hours < 6
			? 'fajr'
			: hours >= 6 && hours < 12
				? 'morning'
				: hours >= 12 && hours < 15
					? 'noon'
					: hours >= 15 && hours < 18
						? 'afternoon'
						: hours >= 18 && hours < 20
							? 'sunset'
							: 'night'
	);
</script>

<div
	aria-hidden="true"
	class="relative w-full overflow-hidden rounded-xl {klass}"
	style="aspect-ratio: 16 / 6;"
>
	{#if period === 'fajr'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-fajr-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#0f172a" />
					<stop offset="55%" stop-color="#1e3a5f" />
					<stop offset="100%" stop-color="#c2410c" />
				</linearGradient>
				<radialGradient id="pt-fajr-glow" cx="50%" cy="100%" r="60%">
					<stop offset="0%" stop-color="#fb923c" stop-opacity="0.9" />
					<stop offset="100%" stop-color="#fb923c" stop-opacity="0" />
				</radialGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-fajr-sky)" />
			<!-- Dawn glow at horizon -->
			<ellipse cx="160" cy="120" rx="160" ry="60" fill="url(#pt-fajr-glow)" />
			<!-- Stars -->
			<g fill="#fef9c3">
				<circle cx="40" cy="18" r="1.2" />
				<circle cx="82" cy="35" r="0.8" />
				<circle cx="125" cy="12" r="1" />
				<circle cx="198" cy="26" r="1.4" />
				<circle cx="252" cy="16" r="0.9" />
				<circle cx="290" cy="40" r="1.1" />
			</g>
			<!-- Crescent moon -->
			<g transform="translate(58 48)" fill="#fde68a">
				<path d="M9 0 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18 z" />
			</g>
			<!-- Mountain silhouette -->
			<path
				d="M0 90 L40 55 L70 75 L110 40 L150 70 L190 48 L230 68 L270 52 L320 75 L320 120 L0 120 Z"
				fill="#0c1a30"
			/>
			<!-- Ground wave -->
			<path d="M0 108 Q 80 98 160 106 T 320 103 L 320 120 L 0 120 Z" fill="#1a0a00" opacity="0.8" />
		</svg>
	{:else if period === 'morning'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-morning-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#fde68a" />
					<stop offset="55%" stop-color="#fb923c" />
					<stop offset="100%" stop-color="#f97316" />
				</linearGradient>
				<radialGradient id="pt-morning-sun" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#fffbeb" />
					<stop offset="100%" stop-color="#fcd34d" />
				</radialGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-morning-sky)" />
			<g opacity="0.65" stroke="#fef3c7" stroke-width="0.6" stroke-linecap="round">
				<line x1="80" y1="20" x2="240" y2="20" />
				<line x1="60" y1="32" x2="260" y2="32" />
				<line x1="100" y1="44" x2="220" y2="44" />
			</g>
			<circle cx="160" cy="92" r="28" fill="url(#pt-morning-sun)" />
			<g fill="#7c2d12">
				<path d="M52 60 q3 -4 6 0 q3 -4 6 0 q-3 2 -6 2 q-3 0 -6 -2 z" />
				<path d="M252 50 q3 -4 6 0 q3 -4 6 0 q-3 2 -6 2 q-3 0 -6 -2 z" />
			</g>
			<path
				d="M0 100 Q 80 88 160 100 T 320 100 L 320 120 L 0 120 Z"
				fill="#9a3412"
				opacity="0.75"
			/>
		</svg>
	{:else if period === 'noon'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-noon-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#bfdbfe" />
					<stop offset="55%" stop-color="#60a5fa" />
					<stop offset="100%" stop-color="#93c5fd" />
				</linearGradient>
				<radialGradient id="pt-noon-sun" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#fff" />
					<stop offset="100%" stop-color="#fde047" />
				</radialGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-noon-sky)" />
			<!-- Sun overhead -->
			<circle cx="160" cy="15" r="14" fill="url(#pt-noon-sun)" />
			<!-- Sunrays -->
			<g stroke="#fde047" stroke-width="1.2" stroke-linecap="round" opacity="0.8">
				<line x1="160" y1="0" x2="160" y2="-6" transform="translate(0 7)" />
				<line x1="160" y1="15" x2="160" y2="5" transform="translate(0 -8)" />
				<line x1="148" y1="15" x2="142" y2="9" />
				<line x1="172" y1="15" x2="178" y2="9" />
				<line x1="146" y1="22" x2="139" y2="18" />
				<line x1="174" y1="22" x2="181" y2="18" />
				<line x1="148" y1="28" x2="142" y2="34" />
				<line x1="172" y1="28" x2="178" y2="34" />
			</g>
			<!-- Cloud puffs -->
			<g fill="white" opacity="0.85">
				<ellipse cx="80" cy="48" rx="28" ry="9" />
				<ellipse cx="68" cy="50" rx="16" ry="8" />
				<ellipse cx="96" cy="50" rx="16" ry="8" />
			</g>
			<g fill="white" opacity="0.75">
				<ellipse cx="240" cy="55" rx="24" ry="8" />
				<ellipse cx="228" cy="57" rx="14" ry="7" />
				<ellipse cx="254" cy="57" rx="14" ry="7" />
			</g>
			<!-- Green ground wave -->
			<path d="M0 100 Q 80 88 160 100 T 320 100 L 320 120 L 0 120 Z" fill="#166534" opacity="0.8" />
		</svg>
	{:else if period === 'afternoon'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-afternoon-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#93c5fd" />
					<stop offset="55%" stop-color="#fde68a" />
					<stop offset="100%" stop-color="#fb923c" />
				</linearGradient>
				<radialGradient id="pt-afternoon-sun" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#fed7aa" />
					<stop offset="100%" stop-color="#fb923c" />
				</radialGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-afternoon-sky)" />
			<!-- Sun lower in sky -->
			<circle cx="220" cy="55" r="16" fill="url(#pt-afternoon-sun)" opacity="0.95" />
			<!-- Warm clouds -->
			<g fill="#fef3c7" opacity="0.7">
				<ellipse cx="85" cy="42" rx="30" ry="9" />
				<ellipse cx="72" cy="44" rx="18" ry="8" />
				<ellipse cx="100" cy="44" rx="18" ry="8" />
			</g>
			<g fill="#fef3c7" opacity="0.6">
				<ellipse cx="148" cy="68" rx="22" ry="7" />
				<ellipse cx="136" cy="70" rx="14" ry="6" />
				<ellipse cx="162" cy="70" rx="14" ry="6" />
			</g>
			<!-- Hills/ground wave -->
			<path d="M0 100 Q 80 88 160 98 T 320 96 L 320 120 L 0 120 Z" fill="#78350f" opacity="0.8" />
		</svg>
	{:else if period === 'sunset'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-sunset-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#7f1d1d" />
					<stop offset="35%" stop-color="#c2410c" />
					<stop offset="70%" stop-color="#fb923c" />
					<stop offset="100%" stop-color="#fde047" />
				</linearGradient>
				<radialGradient id="pt-sunset-sun" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#fef9c3" />
					<stop offset="100%" stop-color="#f97316" />
				</radialGradient>
				<radialGradient id="pt-sunset-glow" cx="50%" cy="100%" r="55%">
					<stop offset="0%" stop-color="#fb923c" stop-opacity="0.7" />
					<stop offset="100%" stop-color="#fb923c" stop-opacity="0" />
				</radialGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-sunset-sky)" />
			<!-- Horizon glow -->
			<ellipse cx="160" cy="120" rx="180" ry="65" fill="url(#pt-sunset-glow)" />
			<!-- Large sun at horizon -->
			<circle cx="160" cy="105" r="32" fill="url(#pt-sunset-sun)" />
			<!-- Mountain silhouette -->
			<path
				d="M0 85 L50 50 L80 68 L120 35 L160 65 L200 42 L245 62 L280 48 L320 70 L320 120 L0 120 Z"
				fill="#1a0a00"
			/>
			<!-- Ground wave -->
			<path
				d="M0 108 Q 80 100 160 107 T 320 104 L 320 120 L 0 120 Z"
				fill="#1a0a00"
				opacity="0.9"
			/>
		</svg>
	{:else}
		<!-- night -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 120"
			preserveAspectRatio="xMidYMid slice"
			class="absolute inset-0 w-full h-full"
		>
			<defs>
				<linearGradient id="pt-night-sky" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#0f172a" />
					<stop offset="55%" stop-color="#312e81" />
					<stop offset="100%" stop-color="#5b21b6" />
				</linearGradient>
			</defs>
			<rect width="320" height="120" fill="url(#pt-night-sky)" />
			<!-- Stars -->
			<g fill="#fef9c3">
				<circle cx="40" cy="20" r="1.2" />
				<circle cx="78" cy="38" r="0.8" />
				<circle cx="120" cy="14" r="1" />
				<circle cx="200" cy="28" r="1.4" />
				<circle cx="250" cy="18" r="0.9" />
				<circle cx="288" cy="42" r="1.1" />
				<circle cx="156" cy="52" r="0.7" />
			</g>
			<!-- Crescent moon -->
			<g transform="translate(58 56)" fill="#fde68a">
				<path d="M12 0 a12 12 0 1 0 0 24 a9 9 0 1 1 0 -24 z" />
			</g>
			<!-- Lantern pole -->
			<g stroke="#1e1b4b" stroke-width="1.5" fill="none" stroke-linecap="round">
				<line x1="245" y1="120" x2="245" y2="70" />
				<path d="M245 70 q-12 -8 -16 -16" />
				<path d="M245 70 q12 -8 16 -16" />
				<path d="M245 78 q-10 -6 -14 -12" />
				<path d="M245 78 q10 -6 14 -12" />
				<path d="M245 86 q-8 -4 -10 -8" />
				<path d="M245 86 q8 -4 10 -8" />
			</g>
			<!-- Ground wave -->
			<path
				d="M0 110 Q 80 100 160 108 T 320 105 L 320 120 L 0 120 Z"
				fill="#1e1b4b"
				opacity="0.85"
			/>
		</svg>
	{/if}
</div>
