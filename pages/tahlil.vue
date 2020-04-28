<template>
  <div class="container tahlil">
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in tahlilData"
          :key="item.id"
          class="item"
          @click="onClickItem(item)">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
            v-show="isExpanded(item.id)"
            class="collapsible">
            <div class="arabic font-arabic">
              {{ item.arabic }}
            </div>
            <div class="translation">
              {{ item.translation }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

interface expandedData {
  id: number
}

@Component({
  async asyncData () {
    const resp = await import('~/static/data/tahlil.json')
    return {
      tahlilData: resp.data
    }
  }
})

export default class TahlilPage extends Vue {
  expandedData: expandedData = {
    id: 0
  }

  @State settingActiveTheme
  @Mutation setHeaderTitle
  @Mutation setPage

  get metaHead () {
    const title = "Daftar lengkap bacaan Tahlil beserta terjemahan | Qur'an Web"
    const description = 'Daftar lengkap bacaan Tahlil beserta terjemahan, baca langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  onClickItem (item: expandedData): void {
    if (this.isExpanded(item.id)) {
      this.expandedData = {
        id: 0
      }
    } else { this.expandedData = item }
  }

  isExpanded (id: number): boolean {
    return id === this.expandedData.id
  }

  mounted () {
    this.setHeaderTitle('Tahlil')
    this.setPage('tahlil')
  }

  activated () {
    this.setHeaderTitle('Tahlil')
    this.setPage('tahlil')
  }
}
</script>

<style lang="scss" scoped>
.item{
  text-decoration: none;
  border-radius: .25em;
  padding: 1em;
  font-size: 1.3rem;
  width: 100%;
  margin: 1em 0 0 0;
  background: var(--bg-card-color);
  color: var(--text-color);

  &__title {
    font-size: 1rem;
  }
}
.collapsible{
  margin-top: 1em;
  color: var(--text-color);
}
.arabic{
  font-size: 1.5rem;
  width: 100%;
  text-align: right;
}
.translation{
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  text-align: left;
}
</style>
