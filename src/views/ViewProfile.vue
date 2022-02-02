<template>

    
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        
        <div class="p-8 flex flex-col items-center bg-light-grey rounded-md shadow-lg">
            <h1 class="text-primaryc text-xl">Profile of {{username}}</h1>
            <Avatar v-model:path="avatar_url"/>
            <p class="text-primaryc">Gender: {{gender}}</p>
            <p class="text-primaryc">Interests: {{interests}}</p>
        </div>
        
    </div>
    
</template>

<script>
import { ref, computed } from 'vue';
import { supabase } from '../supabase/init';
import { useRoute } from 'vue-router';
import store from '../store/index';
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

        const currentId = route.params.username;




        async function getProfile() {
        try {
            loading.value = true
            store.user = supabase.auth.user()

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
            console.log(avatar_url.value)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
        }

        getProfile();

        return {dataLoaded, loading, username, gender, avatar_url, interests};
    }
}
</script>