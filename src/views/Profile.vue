<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-md shadow-md bg-light-grey">
            <p class="test-primaryc">
               {{ statusMsg }} 
            </p>
            <p class="test-red-500">
               {{ errorMsg }}
            </p>
        </div>
        <!-- Profile Form -->
        <form @submit.prevent="updateProfile" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
            <Avatar v-model:path="avatar_url" @upload="updateProfile"/>
            <div class="flex flex-col mb-2">
                <label for="email" class="mb-1 text-sm text-primaryc">Email</label>
                <input id="email" type="text" :value="store.user.email" disabled required class="p-2 text-gray-500 focus:outline-none">
            </div>

            <div class="flex flex-col mb-2">
                <label for="username" class="mb-1 text-sm text-primaryc">Username</label>
                <input id="username" type="text" placeholder="Please set a Username" v-model="username" class="p-2 text-gray-500 focus:outline-none">
            </div>

            <div class="flex flex-col mb-2">
                <label for="gender" class="mb-1 text-sm text-primaryc">Gender</label>
                <input id="gender" type="text" placeholder="Please set a Gender." v-model="gender" class="p-2 text-gray-500 focus:outline-none">
            </div>

            <div class="flex flex-col mb-2">
                <label for="interests" class="mb-1 text-sm text-primaryc">Interests</label>
                <textarea id="interests" type="textarea" v-model="interests" placeholder="Write something about yourself." rows="4" class="p-2 h-50 text-gray-500 focus:outline-none resize-none"></textarea>
            </div>
            
            <button type="submit" :value="loading ? 'Loading ...' : 'Update'" :disabled="loading" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">Update</button>

        </form>
    </div>    
</template>

<script>
import { supabase } from "../supabase"
import { store } from "../store"
import { onMounted, ref } from "vue"
import Avatar from "../components/Avatar.vue"

export default {
  components: {
    Avatar,
  },
  setup() {
    const loading = ref(true)
    const username = ref("")
    const gender = ref("")
    const interests = ref("")
    const avatar_url = ref("")
    const errorMsg = ref(null);
    const statusMsg = ref(null);

    async function getProfile() {
      try {
        loading.value = true
        store.user = supabase.auth.user()

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, gender, avatar_url, interests`)
          .eq("id", store.user.id)
          .single()

        if (error && status !== 406) throw error

        if (data) {
          username.value = data.username
          gender.value = data.gender
          avatar_url.value = data.avatar_url
          interests.value = data.interests
        }
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    async function updateProfile() {
      try {
        loading.value = true
        store.user = supabase.auth.user()

        const updates = {
          id: store.user.id,
          username: username.value,
          gender: gender.value,
          avatar_url: avatar_url.value,
          updated_at: new Date(),
          interests: interests.value,
        }

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        })

        statusMsg.value = 'Profile successfully updated.'
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
        if (error) throw error
      } catch (error) {
        errorMsg.value = error.message
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
      } finally {
        loading.value = false
      }
    }

    async function signOut() {
      try {
        loading.value = true
        let { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      getProfile()
    })

    return {
      store,
      loading,
      username,
      gender,
      avatar_url,
      interests,
      errorMsg,
      statusMsg,

      updateProfile,
    }
  },
}
</script>

<style>

</style>