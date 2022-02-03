<template>
  <header class="bg-primaryc text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img class="h-8" src="../assets/logo.png" alt="" />
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Explore' }">Explore</router-link>
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">Activities</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Activity' }">Create an Activity</router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Login' }">Login</router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Register' }">Register</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Chat' }">Chat</router-link>
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Profile' }">Profile</router-link>
        <li v-if="user" @click="logout" class="cursor-pointer">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import store from "../store/index.js";
import {computed} from "vue";
import {supabase} from "../supabase/init.js";
import {useRouter} from "vue-router";

export default {
  setup() {
    // Get user from store
    const user = computed(() => store.state.user);
    // Setup ref to router
    const router = useRouter();
    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "Login" });
    };
    return { logout, user };
  },
};

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
</script>