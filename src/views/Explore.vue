<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">        
            <!-- <h1 class="text-primaryc text-xl">{{username}}</h1>
            <Avatar v-model:path="avatar_url"/>
            <p class="text-primaryc">Gender: {{gender}}</p> -->
          <!-- Data -->
          <div v-if="data.length === 0" class="w-full flex flex-col items-center">
            <h1 class="text-2xl">There are no Users yet.</h1>
          </div>
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
              <router-link 
              class="flex flex-col items-center bg-primaryc p-8 shadow-md cursor-pointer"
              :to="{ name: 'ViewProfile', params: { username: data.username } }"
              v-for="(data, index) in data" 
              :key="index"
              >
              <img :src="getImgUrl(data.username)" alt="">
               <!-- Information -->
              <p class="mt-2 py-1 px-3 text-xl text-primaryc bg-white shadow-md rounded-lg">
                  {{ data.username }}
              </p>
              <h1 class="mt-2 text-center text-xl text-white">
                  {{ data.gender }}
              </h1>  
              </router-link>
          </div>
        
        
    </div>
    
</template>

<script>
import { ref, computed } from 'vue';
import { supabase } from '../supabase/init';
import store from '../store/index';
import Avatar from "../components/PublicAvatar.vue"
import {uid} from "uid";

export default {
    name: "explore",
    components: {Avatar},
    setup() {
        const data = ref([])
        const dataLoaded = ref(null)
        const loading = ref(false)
        const username = ref("")
        const gender = ref("")
        

        const getImgUrl = (url) => {
          var imageURL = "https://avatars.dicebear.com/api/personas/"+ url + ".svg";
          return imageURL
        }
        async function getProfile() {
        try {
            loading.value = false
            store.user = supabase.auth.user()

            const {data: profiles, error} = await supabase
            .from("profiles")
            .select(`username, gender, avatar_url`)

            if (error) throw error;

            if (data) {
            data.value = profiles
            dataLoaded.value = true;
            }
        } catch (error) {
            console.warn(error.message)
        } finally {
            setTimeout(() => {
                loading.value = true
            }, 1000)
        }
        }

        getProfile();

        return {dataLoaded, loading, data, getImgUrl};
    },
    
}
</script>