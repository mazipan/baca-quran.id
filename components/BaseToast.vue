<template>
  <div
    :class="{ 'show' : visibleNotification}"
    class="toast">
    <h3>
      {{ notification.title }}
    </h3>
    <br>
    <p>
      {{ notification.message }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseToast',
  computed: {
    ...mapState([
      'notification'
    ]),
    visibleNotification () {
      return this.notification.show
    }
  }
}
</script>

<style lang="scss" scoped>
/* https://www.w3schools.com/howto/howto_js_snackbar.asp */
.toast {
    visibility: hidden;
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: left;
    border-radius: .25em;
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
    from {bottom: 0; opacity: 0;}
    to {bottom: 100px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 100px; opacity: 1;}
}

@-webkit-keyframes fadeout {
    from {bottom: 100px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 100px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
}
</style>
