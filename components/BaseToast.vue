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
/* The snackbar - position it at the bottom and in the middle of the screen */
.toast {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -70px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: left; /* Centered text */
    border-radius: .25em; /* Rounded borders */
    padding: 1em; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 100px; /* 30px from the bottom */

    &.show {
        visibility: visible; /* Show the snackbar */
        /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
      However, delay the fade out process for 2.5 seconds */
      -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
      animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }
}

/* Animations to fade the snackbar in and out */
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
