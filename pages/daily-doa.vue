<template>
  <div class="container daily-doa">
    <div class="search clearfix">
      <label
        for="search-daily-doa"
        class="search__title">
        Pencarian cepat
      </label>
      <input
        id="search-daily-doa"
        v-model="searchText"
        type="search"
        name="search"
        placeholder="Cari doa harian">
    </div>
    <div class="wrapper">
      <div class="wrapper__item">
        <div
          v-for="item in filteredDailyDoa"
          :key="item.title"
          class="item"
          @click="onClickDoa(item)">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div
            v-show="isExpanded(item.title)"
            class="collapsible bounce">
            <div class="arabic font-arabic">
              {{ item.arabic }}
            </div>
            <div class="latin">
              {{ item.latin }}
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

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { __isNotEmptyString, __normalizeText } from '../utils/index'

export default {
  name: 'DailyDoa',
  head () {
    return this.metaHead
  },
  data () {
    return {
      loading: true,
      searchText: '',
      expandedData: {
        title: ''
      }
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'dailyDoa'
    ]),
    metaHead () {
      const title = this.$t('pageTitle.dailyDoa')
      return {
        title,
        meta: [
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'theme-color', name: 'theme-color', content: this.settingActiveTheme.bgColor }
        ]
      }
    },
    filteredDailyDoa () {
      if (__isNotEmptyString(this.searchText) && this.searchText.length >= 3) {
        return this.dailyDoa.filter(item => {
          let predicate = __normalizeText(item.title).includes(
            __normalizeText(this.searchText)
          )

          return predicate
        })
      } else return this.dailyDoa || []
    }
  },
  mounted () {
    this.onMountedPage()
  },
  methods: {
    ...mapMutations([
      'setHeaderTitle'
    ]),
    ...mapActions([
      'fetchDailyDoa'
    ]),
    onMountedPage () {
      this.setHeaderTitle(`Do'a Harian`)
      this.fetchDailyDoa({
        success: this.onSuccess
      })
    },
    onSuccess () {
      this.loading = false
    },
    onClickDoa (item) {
      if (this.isExpanded(item.title)) {
        this.expandedData = {
          title: ''
        }
      } else this.expandedData = item
    },
    isExpanded (title) {
      return title === this.expandedData.title
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/search.scss';

.item{
  text-decoration: none;
  border-radius: .25em;
  padding: 1.5em;
  text-align: center;
  width: 100%;
  margin: 1em 0 0 0;

  &__title {
    font-size: 1.3rem;
  }
}
.collapsible{
  margin-top: 1em;
  background-color: #c6f3df;
  padding: 1em;
  border-radius: .25em;
}
.arabic{
  font-size: 2rem;
  width: 100%;
  text-align: right;
}
.latin{
  font-size: 1.3rem;
  width: 100%;
  margin-top: 1.5em;
  text-align: left;
}
.translation{
  margin-top: 2em;
  font-size: 0.9rem;
  width: 100%;
  font-style: italic;
  text-align: left;
}

@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
