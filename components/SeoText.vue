<template>
  <div class="seo-text">
    <p>
      {{ paragraph }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class SeoText extends Vue {
  @Prop({ type: String, default: '' }) readonly paragraph!: string;
}
</script>

<style lang="scss" scoped>
.seo-text {
  text-align: center;
  margin-top: 1em;
  font-size: 0.8rem;
}
</style>
