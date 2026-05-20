<script lang="ts">
	interface Props {
		class?: string;
	}
	let { class: clazz = '' }: Props = $props();
</script>

<div
	aria-hidden="true"
	class="relative w-full overflow-hidden rounded-xl {clazz}"
	style="aspect-ratio: 16 / 6;"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 120"
		preserveAspectRatio="xMidYMid slice"
		class="absolute inset-0 w-full h-full"
	>
		<defs>
			<linearGradient id="morning-sky" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#fde68a" />
				<stop offset="55%" stop-color="#fb923c" />
				<stop offset="100%" stop-color="#f97316" />
			</linearGradient>
			<radialGradient id="morning-sun" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#fffbeb" />
				<stop offset="100%" stop-color="#fcd34d" />
			</radialGradient>
		</defs>
		<rect width="320" height="120" fill="url(#morning-sky)" />
		<g opacity="0.65" stroke="#fef3c7" stroke-width="0.6" stroke-linecap="round">
			<line x1="80" y1="20" x2="240" y2="20" />
			<line x1="60" y1="32" x2="260" y2="32" />
			<line x1="100" y1="44" x2="220" y2="44" />
		</g>
		<circle cx="160" cy="92" r="28" fill="url(#morning-sun)" />
		<g fill="#7c2d12">
			<path d="M52 60 q3 -4 6 0 q3 -4 6 0 q-3 2 -6 2 q-3 0 -6 -2 z" />
			<path d="M252 50 q3 -4 6 0 q3 -4 6 0 q-3 2 -6 2 q-3 0 -6 -2 z" />
		</g>
		<path d="M0 100 Q 80 88 160 100 T 320 100 L 320 120 L 0 120 Z" fill="#9a3412" opacity="0.75" />
	</svg>
</div>
