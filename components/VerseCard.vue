<template>
  <div class="verse__root">
    <div
      v-if="surahId !== 1 && surahId !== 9"
      class="verse block_content has-shadow">
      <div class="divider clearfix">
        <div class="verse__arabic font-arabic" dir="rtl" style="text-align: center;">
          {{ AppConstant.BISMILLAH }}
        </div>
      </div>
    </div>

    <div
      v-for="(verse, index) in verseArray"
      :key="index">
      <SingleVerse
        :verse="verse"
        :verse-index="index"
        :surah-id="surahId"
        :translations="translations"
        :tafsir="tafsir"
        :source="source"
        :show-settings="showSettings" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import { AppConstant } from '~/constant'
import SingleVerse from '~/components/SingleVerse.vue'

@Component({
  components: {
    SingleVerse
  }
})

export default class VerseCard extends Vue {
  AppConstant = AppConstant

  @Prop({ type: [Object, Array], default: () => ({}) }) readonly verseArray!:
    | any
    | any[];

  @Prop({ type: Object, default: () => ({}) }) readonly translations!: any;
  @Prop({ type: Object, default: () => ({}) }) readonly tafsir!: any;
  @Prop({ type: Number, default: 1 }) readonly surahId!: number;
  @Prop({ type: String, default: '' }) readonly source!: string;
  @Prop({ type: Boolean, default: false }) readonly showSettings!: boolean;
}
</script>

<style lang="scss" scoped>
.verse {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__arabic {
    font-size: 2rem;
    width: 100%;
    float: right;
    text-align: right;
    margin-top: 0.25em;
  }
}
</style>
