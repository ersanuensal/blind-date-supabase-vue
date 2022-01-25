<template>
  <form class="row flex flex-center" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Blind Date</h1>
      <p class="description">Sign in via email and password below</p>
      <div>
        <input
          class="inputField"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
        <input
          class="inputField"
          type="password"
          placeholder="Your password"
          v-model="password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Login'"
          :disabled="loading"
        />
        <input
          type="button"
          class="button block"
          :value="loading ? 'Loading' : 'Sign Up'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue"
import { supabase } from "../supabase"

export default {
  setup() {
    const loading = ref(false)
    const email = ref("")
    const password = ref("")



    const handleLogin = async () => {
      try {
        loading.value = true
        const { user, error } = await supabase.auth.signIn({
            email: email.value,
            password: password.value,
        })
        if (error) throw error
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      email,
      password,
      handleLogin,
    }
  },
}
</script>