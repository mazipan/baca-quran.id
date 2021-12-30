<template>
  <div class="container tahlil">
    <div class="wrapper">
      <div class="wrapper__item">
        <div v-for="item in tahlilData" :key="item.id" class="item">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div class="collapsible">
            <div class="arabic font-arabic">
              {{ item.arabic }}
            </div>
            <div class="translation">
              {{ item.translation }}
            </div>
          </div>
        </div>
      </div>
      <SeoText :paragraph="`Bacaan Tahlil lengkap beserta urutan dan tata caranya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { AppConstant, META_TITLE_TAHLIL, META_DESC_TAHLIL } from '~/constant'

import SeoText from '~/components/SeoText.vue'
import { getTahlil } from '~/utils/asyncData'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface expandedData {
  id: number;
}

@Component({
  components: {
    SeoText
  },
  async asyncData () {
    return await getTahlil()
  }
})
export default class TahlilPage extends Vue {
  @State settingActiveTheme;
  @Mutation setHeaderTitle;

  get metaHead () {
    return {
      title: META_TITLE_TAHLIL,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC_TAHLIL },
        { hid: 'og:title', property: 'og:title', content: META_TITLE_TAHLIL },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: META_TITLE_TAHLIL
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ],
      link: [
        { rel: 'canonical', href: `${AppConstant.PATH}tahlil/` }
      ]
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Tahlil')
  }
}
</script>

<style lang="scss" scoped>
.item {
  text-decoration: none;
  border-radius: 0.25em;
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
.collapsible {
  margin-top: 1em;
  color: var(--text-color);
}
.arabic {
  font-size: 1.5rem;
  width: 100%;
  text-align: right;
}
.translation {
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  text-align: left;
}
</style>
