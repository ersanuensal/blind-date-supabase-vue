<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Navigation />
    <Profile v-if="store.user" />
    <Auth v-else />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import { store } from "./store"
import { supabase } from "./supabase"
import Auth from "./components/Auth.vue"
import Profile from "./components/Profile.vue"
import './assets/tailwind.css'

export default {
  components: {
    Navigation,
    Auth,
    Profile,
  },

  created() {
  if (this.$workbox) {
    this.$workbox.addEventListener("waiting", () => {
      this.showUpdateUI = true;
    });
  }
},

  setup() {
    store.user = supabase.auth.user()
    supabase.auth.onAuthStateChange((_, session) => {
      store.user = session.user
    })

    return {
      store,
    }
  },
}

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}


function isSuccessful(response) {
  return response &&
    response.status === 200 &&
    response.type === 'basic';
}

</script>
