<template>
  <div class="footnote">
    <div>
      Dibuat oleh
      <a
        href="https://mazipan.space/"
        target="_blank"
        rel="noopener noreferrer">Irfan Maulana</a>
    </div>
    <div style="margin-top: .5em;">
      Cek juga:
      <a
        href="https://ksana.in/"
        target="_blank"
        rel="noopener noreferrer">Ksana.in</a>,
      <a
        href="https://pramuka.online/"
        target="_blank"
        rel="noopener noreferrer">Pramuka.Online</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class FootNote extends Vue {}
</script>

<style lang="scss" scoped>
.footnote {
  text-align: center;
  margin-top: 1em;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: var(--link-author);
    font-weight: bold;
  }
}
</style>
