<script lang="ts">
	import { verseShareSheet } from '../store/verseShareSheet';
	import BottomSheet from '$lib/ui/BottomSheet.svelte';
	import Button from './ui/Button.svelte';
	import ShareIcon from './icons/ShareIcon.svelte';

  const handleShareVerse = () => {
    verseShareSheet.share({
      ...$verseShareSheet,
      type: 'arabic'
    })
  }

  const handleShareTranslation = () => {
    verseShareSheet.share({
      ...$verseShareSheet,
      type: 'terjemah'
    })
  }
</script>

<BottomSheet
  id="verse-share"
	title={$verseShareSheet.title}
	show={$verseShareSheet.show}
	onClose={verseShareSheet.hide}
>
	<div class="p-4 flex gap-4">
    <Button onClick={handleShareVerse}>
      Bagikan Ayat <ShareIcon size="sm" />
    </Button>
    <Button onClick={handleShareTranslation}>
      Bagikan Terjemahan <ShareIcon size="sm" />
    </Button>
  </div>
</BottomSheet>
