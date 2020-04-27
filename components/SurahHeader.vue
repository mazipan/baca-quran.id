<template>
  <nuxt-link class="surah-header" :to="`/${surahNumber}`">
    <div class="surah-header_index font-arabic">
      {{ surahNumber }}
    </div>
    <div class="surah-header_content">
      <div>{{ surahName }}</div>
      <small>({{ surahLatin }} - {{ surahTranslation }})</small>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SurahHeader extends Vue {
  @Prop({ type: Number, default: 0 }) readonly surahNumber!: number
  @Prop({ type: String, default: '' }) readonly surahName!: string
  @Prop({ type: String, default: '' }) readonly surahLatin!: string
  @Prop({ type: String, default: '' }) readonly surahTranslation!: string
}
</script>

<style lang="scss" scoped>
.surah-header {
  width: 90%;
  margin: 1em auto;
  font-size: 2rem;
  display: flex;
  align-content: center;
  align-items: center;
  text-decoration: none;

  &_index {
    background-color: var(--bg-card-darken-color);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    align-items: center;
    height: 100px;
    padding: .25em .5em;
  }
  &_content {
    background-color: var(--bg-card-color);
    color: var(--text-color);
    flex-grow: 1;
    justify-content: space-between;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: right;
    height: 100px;
    padding: .25em .5em;
    small {
      font-size: 1rem;
    }
  }
}
</style>
