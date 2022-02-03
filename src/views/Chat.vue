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
        <!-- Dashboard -->
        <div v-if="datesB != '' || datesA != ''">
            <div class="text-center mt-5 p-8 flex flex-col bg-primaryc text-white rounded-md shadow-lg" v-if="datesA != ''">
                <img class="h-20 w-20 self-center" src="../assets/images/heart.png" alt="">
                <p class="text-xl">
                    You have a Date with {{datesA.person_a.username}} at {{datesA.time}}
                </p>
                <p class="text-xl">
                    Location is {{datesA.loc.name}} in {{datesA.loca.adress}}
                </p>
            </div>
            <div class="text-center mt-5 p-8 flex flex-col bg-primaryc text-white rounded-md shadow-lg" v-if="datesB != ''">
                <img class="h-20 w-20 self-center" src="../assets/images/heart.png" alt="">
                <p class="text-xl">
                    You have a Date with {{datesB.person_b.username}} at {{datesB.time}}
                </p>
                <p class="text-xl">
                    Location is {{datesB.loc.name}} in {{datesB.loca.adress}}
                </p>
            </div>
        </div>
        <div v-else >
        <div v-for="(data, index) in likes_from" 
              :key="index" class="text-center mt-5 p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
            <p >
              {{data.user.username}} likes you</p>
            <button @click="startDate(data.id.id)" class="self-center py-2 px-6 rounded-sm text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
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
import { useRouter } from "vue-router"

export default {
    name: "chat",
    components: {},
    setup() {
        const me = ref("")
        const data = ref([])
        const loading = ref(true)
        const likes_from = ref([])
        const dataLoaded = ref(null)
        const datesA = ref([])
        const datesB = ref([])
        const router = useRouter();
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

        const startDate = async (id) => {
            console.log("start Date with ", id)
            try {
                const {error} = await supabase
                .from('dates')
                .insert({
                    person_a: id,
                    person_b: store.user.id,
                    location: 1
                })
                if (error) throw error;
            } catch (error) {
                console.warn(error.message)
            }
            router.go()
        }

        const getDatesA = async () => {
            try {
                const {data: dates, error} = await supabase
                .from('dates')
                .select(`
                    person_a ( username ),
                    person_b ( username ),
                    loc:location ( name ),
                    loca:location ( adress ),
                    time
                    `)
                .eq('person_b', store.user.id)
                .single();

                if (error) throw error;
                console.log("dates", dates)
                datesA.value = dates
            } catch (error) {
                console.warn(error.message)
            }
        }

        const getDatesB = async () => {
            try {
                const {data: dates, error} = await supabase
                .from('dates')
                .select(`
                    person_a ( username ),
                    person_b ( username ),
                    loc:location ( name ),
                    loca:location ( adress ),
                    time
                    `)
                .eq('person_a', store.user.id)
                .single();

                if (error) throw error;
                console.log("dates", dates)
                datesB.value = dates
            } catch (error) {
                console.warn(error.message)
            }
        }

        getDatesA()
        getDatesB()

        const getLikes = async () => {
            try {
                const {data: likes, error} = await supabase
                .from('likes')
                .select(`like_from, user:like_from ( username ), id:like_from ( id )`)
                .eq('like_to', store.user.id)
                if (error) throw error;
                likes_from.value = likes;
                dataLoaded.value = true;
            } catch (error) {
                console.warn(error.message)
            }
        }


        getLikes()
        return {me, likes_from, dataLoaded, startDate, datesA, datesB}
    },
}
</script>
