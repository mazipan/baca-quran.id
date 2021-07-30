<template>
  <div :class="{ 'show' : visibleNotification}" class="toast has-shadow">
    <h3>{{ notification.title }}</h3>
    <br>
    <p>{{ notification.message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State } from 'vuex-class'

@Component
export default class BaseToast extends Vue {
  @State notification;

  get visibleNotification (): boolean {
    return this.notification.show
  }
}
</script>

<style lang="scss" scoped>
/* https://www.w3schools.com/howto/howto_js_snackbar.asp */
.toast {
  visibility: hidden;
  min-width: 250px;
  width: 95%;
  background-color: var(--bg-card-color);
  color: var(--text-color);
  text-align: left;
  border-radius: 0.25em;
  padding: 1em;
  position: fixed;
  z-index: 99;
  left: 10px;
  bottom: 100px;

  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 100px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 100px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 100px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 100px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
