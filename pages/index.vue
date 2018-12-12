<template>
  <section class="container">
    <div v-if="loading">
      <div
        v-for="i in 5"
        :key="i"
        class="skeleton skeleton_row"/>
    </div>
    <div
      v-else
      class="home">
      <div class="home__wrapper">
        <div class="item">
          <router-link
            to="/all-surah"
            class="item__link has-shadow">
            <MdBookIcon
              w="2em"
              h="2em"/>
            Daftar Surat
          </router-link>
        </div>
        <div class="item">
          <router-link
            to="/search"
            class="item__link has-shadow">
            <MdSearchIcon
              w="2em"
              h="2em"/>
            {{ AppConstant.SEARCH_PAGE }}
          </router-link>
        </div>
        <div class="item">
          <router-link
            to="/last-verse"
            class="item__link has-shadow">
            <IosBookmarkIcon
              w="2em"
              h="2em"/>
            {{ AppConstant.LAST_READ }}
          </router-link>
        </div>
        <div class="item">
          <router-link
            to="/favorite"
            class="item__link has-shadow">
            <IosStarOutlineIcon
              w="2em"
              h="2em"/>
            {{ AppConstant.FAVORITE }}
          </router-link>
        </div>
        <div class="item">
          <router-link
            to="/recommendation"
            class="item__link has-shadow">
            <IosNavigateIcon
              w="2em"
              h="2em"/>
            {{ AppConstant.RECOMMENDATION }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

import MdHomeIcon from 'vue-ionicons/dist/md-home'
import MdBookIcon from 'vue-ionicons/dist/md-book'
import MdHelpCircleIcon from 'vue-ionicons/dist/md-help-circle'
import MdCodeIcon from 'vue-ionicons/dist/md-code'
import MdSearchIcon from 'vue-ionicons/dist/md-search'
import IosNavigateIcon from 'vue-ionicons/dist/ios-navigate'
import IosStarOutlineIcon from 'vue-ionicons/dist/ios-star-outline'
import IosBookmarkIcon from 'vue-ionicons/dist/ios-bookmark'

import { AppConstant } from '../constant/index.js'

export default {
  name: 'PageIndex',
  components: {
    MdHomeIcon,
    MdBookIcon,
    MdHelpCircleIcon,
    MdCodeIcon,
    MdSearchIcon,
    IosNavigateIcon,
    IosStarOutlineIcon,
    IosBookmarkIcon
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
