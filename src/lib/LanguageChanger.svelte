	<script>
import { CheckLanguage, LANGUAGE_OPTIONS, languageStore } from "./checkLanguaguage";
		let showOptions = false;
		let currentLang = CheckLanguage();
		/**
	 * @param {string} lang
	 */
		function selectLanguage(lang) {
			localStorage.setItem('language', lang);
			languageStore.set(lang);
			showOptions = false;
			currentLang = lang;
		}
	</script>
	
	<div class="relative">
		<button
			class="cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary flex items-center"
			aria-label="Change Language"
			on:click={() => showOptions = !showOptions}
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
			</svg>
		</button>
{#if showOptions}
  <div class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-400 rounded-lg shadow-xl z-20 py-2">
    {#each Object.values(LANGUAGE_OPTIONS) as lang}
      <button
        class="w-full text-left px-4 py-2 rounded-md transition-colors duration-150
               hover:bg-primary hover:text-white
               focus:outline-none focus:ring-2 focus:ring-primary
               mb-1
               text-gray-200 dark:text-gray-200"
        class:bg-secondary={currentLang && currentLang === lang.locale}
        class:text-white={currentLang === lang.locale}
        class:font-semibold={currentLang === lang.locale}
        on:click={() => selectLanguage(lang.locale)}
      >
        {lang.label}
      </button>
    {/each}
  </div>
{/if}

	</div>