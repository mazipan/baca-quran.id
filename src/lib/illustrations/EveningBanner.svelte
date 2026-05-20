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
			<linearGradient id="evening-sky" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#0f172a" />
				<stop offset="55%" stop-color="#312e81" />
				<stop offset="100%" stop-color="#5b21b6" />
			</linearGradient>
		</defs>
		<rect width="320" height="120" fill="url(#evening-sky)" />
		<g fill="#fef9c3">
			<circle cx="40" cy="20" r="1.2" />
			<circle cx="78" cy="38" r="0.8" />
			<circle cx="120" cy="14" r="1" />
			<circle cx="200" cy="28" r="1.4" />
			<circle cx="250" cy="18" r="0.9" />
			<circle cx="288" cy="42" r="1.1" />
			<circle cx="156" cy="52" r="0.7" />
		</g>
		<g transform="translate(58 56)" fill="#fde68a">
			<path d="M12 0 a12 12 0 1 0 0 24 a9 9 0 1 1 0 -24 z" />
		</g>
		<g stroke="#1e1b4b" stroke-width="1.5" fill="none" stroke-linecap="round">
			<line x1="245" y1="120" x2="245" y2="70" />
			<path d="M245 70 q-12 -8 -16 -16" />
			<path d="M245 70 q12 -8 16 -16" />
			<path d="M245 78 q-10 -6 -14 -12" />
			<path d="M245 78 q10 -6 14 -12" />
			<path d="M245 86 q-8 -4 -10 -8" />
			<path d="M245 86 q8 -4 10 -8" />
		</g>
		<path d="M0 110 Q 80 100 160 108 T 320 105 L 320 120 L 0 120 Z" fill="#1e1b4b" opacity="0.85" />
	</svg>
</div>
