<template>
  <section class="container">
    <div v-if="loading">
      <div
        v-for="i in 5"
        :key="i"
        class="skeleton skeleton_row" />
    </div>
    <div
      v-else
      class="home">
      <div class="home__wrapper">
        <div class="item">
          <nuxt-link
            to="/all-surah"
            class="item__link has-shadow">
            <MdBookIcon
              w="2em"
              h="2em" />
            Daftar Surat
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/search"
            class="item__link has-shadow">
            <MdSearchIcon
              w="2em"
              h="2em" />
            {{ AppConstant.SEARCH_PAGE }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/last-verse"
            class="item__link has-shadow">
            <IosBookmarkIcon
              w="2em"
              h="2em" />
            {{ AppConstant.LAST_READ }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/favorite"
            class="item__link has-shadow">
            <IosStarOutlineIcon
              w="2em"
              h="2em" />
            {{ AppConstant.FAVORITE }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/recommendation"
            class="item__link has-shadow">
            <IosNavigateIcon
              w="2em"
              h="2em" />
            {{ AppConstant.RECOMMENDATION }}
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/ayat-kursi"
            class="item__link has-shadow">
            <IosColorWandIcon
              w="2em"
              h="2em" />
            Ayat Kursi
          </nuxt-link>
        </div>
        <div class="item">
          <nuxt-link
            to="/asmaul-husna"
            class="item__link has-shadow">
            <MdGridIcon
              w="2em"
              h="2em" />
            Asmaul Husna
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import MdBookIcon from 'vue-ionicons/dist/md-book'
import MdSearchIcon from 'vue-ionicons/dist/md-search'
import MdGridIcon from 'vue-ionicons/dist/md-grid'
import IosNavigateIcon from 'vue-ionicons/dist/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/ios-bookmark'
import IosColorWandIcon from 'vue-ionicons/dist/ios-color-wand'

import { AppConstant } from '../constant/index.js'

export default {
  name: 'PageIndex',
  components: {
    MdBookIcon,
    MdSearchIcon,
    MdGridIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon,
    IosColorWandIcon
  },
  data () {
    return {
      loading: true,
      AppConstant
    }
  },
  computed: {
  },
  mounted () {
    this.setHeaderTitle(AppConstant.TITLE)
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home__wrapper{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
}
.item {
  width: 100%;
  margin: 1em 1em;

  &__link{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #c6f3df;
    color: #000;
  }
}
</style>
