<template>
  <div v-if="appReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <router-view />
  </div>
  <!-- <div class="container" style="padding: 50px 0 100px 0">
    <Profile v-if="store.user" />
    <Auth v-else />
  </div> -->
</template>

<script>
import Navigation from "./components/Navigation.vue"
import './assets/tailwind.css'
import { ref } from "vue";
import { supabase } from "./supabase/init";
import store from "./store/index";

export default {
  components: {
    Navigation
  },
  setup() {
    // Create data / vars
    const appReady = ref(null);

    const user = supabase.auth.user();

    if (!user) {
      appReady.value = true;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      store.methods.setUser(session);
      appReady.value = true;
    });

    return { appReady };

  },
};
  created() {
  if (this.$workbox) {
    this.$workbox.addEventListener("waiting", () => {
      this.showUpdateUI = true;
    });
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

<style >@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");</style>