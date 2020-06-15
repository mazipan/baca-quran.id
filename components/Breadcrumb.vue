<template>
  <nav class="breadcrumb">
    <ul>
      <li>
        <nuxt-link to="/">
          Beranda
        </nuxt-link>
        <MdArrowDroprightIcon w="1em" h="1em" name="Arrow" title="Arrow" />
      </li>
      <li>
        <nuxt-link to="/all-surah/">
          Semua
        </nuxt-link>
        <MdArrowDroprightIcon w="1em" h="1em" name="Arrow" title="Arrow" />
      </li>
      <li>
        <nuxt-link v-if="verseName !== ''" :to="`/${surahLink}/`">
          {{ surahName }}
        </nuxt-link>
        <MdArrowDroprightIcon v-if="verseName !== ''" w="1em" h="1em" name="Arrow" title="Arrow" />

        <span v-if="verseName === ''">
          {{ surahName }}
        </span>
      </li>
      <li v-if="verseName !== ''">
        <span>
          {{ verseName }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import MdArrowDroprightIcon from 'vue-ionicons/dist/md-arrow-dropright.vue'

import { AppConstant } from '~/constant'

@Component({
  components: {
    MdArrowDroprightIcon
  }
})
export default class BaseSidebar extends Vue {
  @Prop({ type: String, default: '' }) readonly surahName!: string;
  @Prop({ type: String, default: '' }) readonly surahLink!: string;
  @Prop({ type: String, default: '' }) readonly verseName!: string;

  AppConstant = AppConstant;
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 1em;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li {
      display: flex;
      align-items: center;

      .ion {
        margin: 0 .25em;
      }
      a {
        text-decoration: none;
        color: var(--text-surah-header-color);
      }
    }
  }
}
</style>
