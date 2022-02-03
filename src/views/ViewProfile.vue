<template>

    
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        
        <div class="p-8 flex flex-col items-center bg-light-grey rounded-md shadow-lg">
            <h1 class="text-primaryc text-xl">Profile of {{username}}</h1>
            <Avatar v-model:path="avatar_url"/>
            <p v-if="gender" class="text-primaryc text-xl">Gender: {{gender}}</p>
            <p v-if="interests" class="text-primaryc text-xl">Interests: {{interests}}</p>
            <form @submit.prevent="like">

                <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
                Like
                </button>
            </form>
        </div>
        
    </div>
    
</template>

<script>
import { ref, computed } from 'vue';
import { supabase } from '../supabase/init';
import { useRoute } from 'vue-router';
import { store } from "../store"
import Avatar from "../components/PublicAvatar.vue"

export default {
    name: "view-profile",
    components: {Avatar},
    setup() {

        const dataLoaded = ref(null)
        const route = useRoute();
        const loading = ref(true)
        const username = ref("")
        const gender = ref("")
        const avatar_url = ref("")
        const interests = ref("")
        const me = ref("");
        const currentId = route.params.username;
        store.user = supabase.auth.user();




        async function getProfile() {
        try {
            loading.value = true
            let { data, error, status } = await supabase
            .from("profiles")
            .select(`username, gender, avatar_url, interests`)
            .eq("username", currentId)
            .single()

            if (error && status !== 406) throw error

            if (data) {
            username.value = data.username
            gender.value = data.gender
            avatar_url.value = data.avatar_url
            dataLoaded.value = true;
            interests.value = data.interests
            }
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
        }

        getProfile();
        // Get own username
        async function getUsername() {
            try {
                loading.value = true
                store.user = supabase.auth.user()

                let { data, error, status } = await supabase
                .from("profiles")
                .select(`id`)
                .eq("username", currentId)
                .single()

                if (error && status !== 406) throw error

                if (data) {
                me.value = data.id
                }
                } catch (error) {
                    alert(error.message)
                } finally {
                    loading.value = false
                }
        }
        getUsername()


        const like = async () => {
            try {
                const {error} = await supabase.from('likes').insert({
                    like_from: store.user.id,
                    like_to: me.value
                })
               
            } catch (error) {
            }
        }

        return {dataLoaded, loading, username, gender, avatar_url, interests, like, me};
    }
}
</script>