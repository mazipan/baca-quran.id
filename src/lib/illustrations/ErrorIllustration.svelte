<script lang="ts">
	interface Props {
		class?: string;
	}
	let { class: clazz = '' }: Props = $props();
</script>

<div
	aria-hidden="true"
	class="relative w-full overflow-hidden rounded-xl {clazz}"
	style="aspect-ratio: 4 / 3;"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 400 300"
		preserveAspectRatio="xMidYMid slice"
		class="absolute inset-0 w-full h-full"
	>
		<defs>
			<linearGradient id="err-sky" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#0f0c29" />
				<stop offset="60%" stop-color="#302b63" />
				<stop offset="100%" stop-color="#1e1b4b" />
			</linearGradient>
			<radialGradient id="err-moon" cx="38%" cy="35%" r="65%">
				<stop offset="0%" stop-color="#fef9c3" />
				<stop offset="100%" stop-color="#fbbf24" />
			</radialGradient>
			<radialGradient id="err-glow" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#fde68a" stop-opacity="0.14" />
				<stop offset="100%" stop-color="#fde68a" stop-opacity="0" />
			</radialGradient>
		</defs>

		<!-- Sky -->
		<rect width="400" height="300" fill="url(#err-sky)" />

		<!-- Stars (circles) -->
		<g fill="#fef3c7">
			<circle cx="35" cy="28" r="1.5" opacity="0.9" />
			<circle cx="70" cy="52" r="1" opacity="0.6" />
			<circle cx="110" cy="18" r="2" opacity="0.8" />
			<circle cx="145" cy="42" r="1" opacity="0.7" />
			<circle cx="195" cy="22" r="1.5" opacity="0.9" />
			<circle cx="260" cy="32" r="1" opacity="0.6" />
			<circle cx="295" cy="16" r="2" opacity="0.8" />
			<circle cx="325" cy="48" r="1.5" opacity="0.7" />
			<circle cx="365" cy="28" r="1" opacity="0.8" />
			<circle cx="385" cy="62" r="1.5" opacity="0.6" />
			<circle cx="18" cy="78" r="1" opacity="0.5" />
			<circle cx="50" cy="90" r="1" opacity="0.4" />
			<circle cx="355" cy="88" r="1.2" opacity="0.5" />
		</g>

		<!-- 4-pointed sparkles -->
		<path
			d="M78 36 L79.5 40 L84 41.5 L79.5 43 L78 47 L76.5 43 L72 41.5 L76.5 40 Z"
			fill="#fde68a"
			opacity="0.8"
		/>
		<path
			d="M345 68 L346 71.5 L349.5 72.5 L346 73.5 L345 77 L344 73.5 L340.5 72.5 L344 71.5 Z"
			fill="#fde68a"
			opacity="0.7"
		/>
		<path
			d="M155 70 L156 73 L159 74 L156 75 L155 78 L154 75 L151 74 L154 73 Z"
			fill="#a5b4fc"
			opacity="0.6"
		/>

		<!-- Moon soft glow -->
		<circle cx="200" cy="138" r="70" fill="url(#err-glow)" />

		<!-- Moon body -->
		<g transform="rotate(-6 200 138)">
			<circle cx="200" cy="138" r="46" fill="url(#err-moon)" />

			<!-- Subtle rim -->
			<circle
				cx="200"
				cy="138"
				r="46"
				fill="none"
				stroke="#f59e0b"
				stroke-width="0.6"
				opacity="0.3"
			/>

			<!-- Inner face shadow (depth) -->
			<ellipse cx="207" cy="148" rx="28" ry="20" fill="#f59e0b" opacity="0.15" />

			<!-- Rosy cheeks -->
			<circle cx="172" cy="148" r="9" fill="#fca5a5" opacity="0.3" />
			<circle cx="228" cy="148" r="9" fill="#fca5a5" opacity="0.3" />

			<!-- Left eyebrow — angled down-inward (worried/confused) -->
			<path
				d="M174 122 Q181 117 188 120"
				stroke="#78350f"
				stroke-width="2.2"
				fill="none"
				stroke-linecap="round"
			/>
			<!-- Right eyebrow — raised on outer side -->
			<path
				d="M213 119 Q220 115 226 118"
				stroke="#78350f"
				stroke-width="2.2"
				fill="none"
				stroke-linecap="round"
			/>

			<!-- Left eye (circle with pupil) -->
			<circle cx="183" cy="131" r="6" fill="#78350f" />
			<circle cx="181" cy="129" r="2.2" fill="#fff" opacity="0.55" />

			<!-- Right eye — slightly wider open (asymmetry = confusion) -->
			<circle cx="219" cy="130" r="6.5" fill="#78350f" />
			<circle cx="217" cy="128" r="2.4" fill="#fff" opacity="0.55" />

			<!-- Mouth — uncertain wavy squiggle -->
			<path
				d="M187 153 Q193 159 200 153 Q207 147 213 153"
				stroke="#78350f"
				stroke-width="2.2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>

		<!-- Sweat drop (outside rotation group) -->
		<path
			d="M236 118 C240 126 244 132 236 140 C228 132 232 126 236 118 Z"
			fill="#93c5fd"
			opacity="0.75"
		/>

		<!-- Floating question marks -->
		<text
			x="141"
			y="115"
			font-family="Georgia, serif"
			font-size="24"
			font-weight="bold"
			fill="#a5b4fc"
			opacity="0.65">?</text
		>
		<text
			x="250"
			y="110"
			font-family="Georgia, serif"
			font-size="17"
			font-weight="bold"
			fill="#c4b5fd"
			opacity="0.55">?</text
		>
		<text
			x="158"
			y="170"
			font-family="Georgia, serif"
			font-size="13"
			font-weight="bold"
			fill="#fbbf24"
			opacity="0.45">!</text
		>

		<!-- Small crescent decoration (top right) -->
		<g transform="translate(350 105)">
			<circle cx="0" cy="0" r="11" fill="#fde68a" opacity="0.45" />
			<circle cx="5" cy="-4" r="9" fill="#1e1b4b" />
		</g>

		<!-- Ground hills -->
		<ellipse cx="200" cy="295" rx="200" ry="22" fill="#1a1738" />
		<ellipse cx="75" cy="287" rx="95" ry="30" fill="#161330" />
		<ellipse cx="325" cy="284" rx="108" ry="34" fill="#161330" />
		<rect x="0" y="278" width="400" height="22" fill="#0f0c29" />

		<!-- Scattered book (left) -->
		<g transform="translate(46 248) rotate(-10 17 14)">
			<rect x="0" y="0" width="36" height="28" rx="3" fill="#d97706" />
			<rect x="3" y="2" width="30" height="24" rx="2" fill="#fef9c3" />
			<line x1="6" y1="8" x2="27" y2="8" stroke="#d1d5db" stroke-width="1.2" />
			<line x1="6" y1="13" x2="24" y2="13" stroke="#d1d5db" stroke-width="1.2" />
			<line x1="6" y1="18" x2="27" y2="18" stroke="#d1d5db" stroke-width="1.2" />
			<rect x="0" y="0" width="4" height="28" rx="2" fill="#b45309" />
		</g>

		<!-- Scattered page (right, tilted) -->
		<g transform="translate(308 250) rotate(18 14 11)">
			<rect x="0" y="0" width="30" height="23" rx="2" fill="#fef9c3" opacity="0.82" />
			<line x1="3" y1="6" x2="24" y2="6" stroke="#d1d5db" stroke-width="1" />
			<line x1="3" y1="11" x2="21" y2="11" stroke="#d1d5db" stroke-width="1" />
			<line x1="3" y1="16" x2="24" y2="16" stroke="#d1d5db" stroke-width="1" />
		</g>

		<!-- Floating page (mid-left, higher) -->
		<g transform="translate(132 200) rotate(-14 12 10)">
			<rect x="0" y="0" width="24" height="19" rx="2" fill="#fef3c7" opacity="0.55" />
			<line x1="3" y1="5" x2="19" y2="5" stroke="#e5e7eb" stroke-width="1" />
			<line x1="3" y1="10" x2="16" y2="10" stroke="#e5e7eb" stroke-width="1" />
		</g>
	</svg>
</div>
