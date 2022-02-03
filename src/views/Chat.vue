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
        <div v-if="dataLoaded">
        <div v-for="(data, index) in likes_from" 
              :key="index" class="text-center mt-5 p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
            <p >
              {{data.like_from.username}} likes you</p>
            <button type="submit" class="self-center py-2 px-6 rounded-sm text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
                Request a Date today
            </button>

            </div>
        </div>
    </div>    
</template>

<script>
import { supabase } from "../supabase"
import { store } from "../store"
import { onMounted, ref } from "vue"

export default {
    name: "chat",
    components: {},
    setup() {
        const me = ref("")
        const data = ref([])
        const loading = ref(true)
        const likes_from = ref([])
        const dataLoaded = ref(null)
        store.user = supabase.auth.user()
        let localuser;
        // Get own username
        const getUsername = async () => {
            try {
                const {data: username, error} = await supabase
                .from('profiles')
                .select('username')
                .eq('id', store.user.id)
                .single();

                if (error) throw error;
                me.value = username;
                localuser = username;
            } catch (error) {
                console.warn(error.message)
            }
        }

        getUsername()


        const getLikes = async () => {
            try {
                const {data: likes, error} = await supabase
                .from('likes')
                .select(`like_from ( username )`)
                .eq('like_to', store.user.id)
                if (error) throw error;
                likes_from.value = likes;
                dataLoaded.value = true;
            } catch (error) {
                console.warn(error.message)
            }
        }


        getLikes()
        return {me, likes_from, dataLoaded}
    },
}
</script>
