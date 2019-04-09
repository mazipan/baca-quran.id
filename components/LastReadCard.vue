<template>
  <div class="surah__root">
    <a
      class="surah block_content has-shadow"
      @click.prevent="goToSurahDetail(surah.index, surah.verse)">
      <div class="surah__header">
        <div class="surah__header--left">
          <div
            class="surah__index tag_index"
            style="width: 130px;">
            Ayat ke {{ surah.verse }}
          </div>
        </div>
        <div class="surah__header--right">
          <div class="divider clearfix">
            <div class="surah__title">
              {{ surah.arabic }}
            </div>
          </div>
          <div class="divider clearfix">
            <div class="surah__title surah__title--latin">
              {{ surah.latin }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { SurahInfo, defaultSurahInfo } from '../models/SurahInfo'

@Component
export default class LastReadCard extends Vue {
  @Prop({ default: () => defaultSurahInfo }) readonly surah!: SurahInfo

  getSurahDetailUrl(index, verse): string {
    return `/${index}#verse-${verse}`
  }

  goToSurahDetail(index, verse): void {
    const path = this.getSurahDetailUrl(index, verse)
    this.$router.push(path)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/surah.scss';
</style>
