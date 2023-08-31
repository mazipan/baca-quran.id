<script lang="ts">
	import { globalBottomSheet } from '../store/globalBottomSheet';
	import BottomSheet from '$lib/ui/BottomSheet.svelte';
</script>

<BottomSheet
	id="global-bottom-sheet"
	title={$globalBottomSheet.title}
	show={$globalBottomSheet.show}
	onClose={globalBottomSheet.hide}
>
	<div class="p-4">
		<p>{@html $globalBottomSheet.content}</p>
	</div>
</BottomSheet>
