<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- App Msg -->
        <div v-if="statusMsg || errorMsg" class="mb-10 p-4 rounded-md shadow-md bg-light-grey">
            <p class="test-primaryc">
               {{ statusMsg }} 
            </p>
            <p class="test-red-500">
               {{ errorMsg }}
            </p>
        </div>

        <div v-if="dataLoaded">
            <!-- General Info about Activity -->
            <div class="flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative">
                <!-- Information -->
                <p class="mt-2 py-1 px-3 text-xs text-white bg-primaryc shadow-md rounded-lg">
                    {{ data.date }} - {{ data.type }}
                </p>
                <h1 class="mt-2 text-center text-xl text-primaryc">
                    {{ data.name }}
                </h1>
                <p class="mt-2 text-center text-xl text-primaryc">
                    In {{ data.location }} at {{ data.time }}
                </p>
                <p v-if="data.type == 'others'" class="mt-2 text-center text-xl text-primaryc">
                    Doing {{ data.activity[0].description }} for {{ data.activity[0].duration }}
                </p>

                <div v-if="members != null && members.includes(username)" class="flex self-center gap-x-2">
                    <div class="mt-2 py-2 px-6 rounded-sm self-start cursor-pointer text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc" 
                    @click="joinActivity(username)">
                        Leave this Activity
                    </div>
                </div>
                <div v-else class="flex self-center gap-x-2">
                    <div class="mt-2 py-2 px-6 rounded-sm self-start cursor-pointer text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc" 
                    @click="joinActivity(username)">
                        Join this Activity
                    </div>
                </div>
            </div>
            <!-- Members -->
            <div class="flex flex-col mt-6 items-center p-8 rounded-md shadow-md bg-light-grey relative">
                <p v-if="membersLoaded" class="mt-2 py-1 px-3 text-xl text-white bg-primaryc shadow-md rounded-lg">
                    people participating:
                </p>
                <router-link
                :to="{ name: 'ViewProfile', params: { username: item } }"
                v-for="(item, index) in members" :key="index">
                <p 
                class="mt-2 text-center text-xl text-primaryc cursor-pointer" >
                    {{ item }}
                </p>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { supabase } from '../supabase/init';
import { useRoute } from 'vue-router';
import store from '../store/index';

export default {
    name: "view-activity",
    setup() {
        // Create data
        const data = ref(null);
        const userParticipated = ref(null);
        const dataLoaded = ref(null);
        const errorMsg = ref(null);
        const statusMsg = ref(null);
        const route = useRoute();
        const user = computed(() => store.state.user);
        const members = ref(null);
        const membersLoaded = ref(null);
        const username = ref(null);
        


        let localUsername;

        // Get curren Id of route
        const currentId = route.params.id;
        // Get activity data
        const getData = async () => {
            try {
                const {data: activities, error} = await supabase.from('activities').select('*').eq('id', currentId);
                if (error) throw error;
                data.value = activities[0];
                dataLoaded.value = true;
            } catch (error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
        }

        getData();


        // Get username of user id
        const getUsername = async () => {
            try {
                const {data: users, error} = await supabase.from('profiles').select('username').eq('id', user.value.id);
                if (error) throw error;
                username.value = users[0].username;
                localUsername = users[0].username;
            } catch (error) {
                errorMsg.calue = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
        }
        getUsername(user.value.id);
 

        // Get Partlist
        const checkParticipation = async () => {
            const partlist = [];
            let membersInList = [];
            try {
                const {data: users, error} = await supabase.from('instanceOfActivities').select('user').eq('activity_id', currentId);
                partlist.value = users;
            } catch (error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
            partlist.value.forEach(element => { 
                membersInList.push(element.user);
            });
            membersLoaded.value = true;
            members.value = membersInList;

        }
        checkParticipation();
              


        // Join Activity
        const joinActivity = async (userJoin) => {
            try {
                const {data: activity, error} = await supabase.from('instanceOfActivities').insert({
                    activity_id: currentId,
                    user: userJoin,
                });
                if (error) throw error;
                statusMsg.value = 'You joined this activity';
                setTimeout(() => {
                    statusMsg.value = null;
                }, 5000);
            } catch (error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
            // Refresh page
            window.location.reload();
        }

        // Leave Activity

        return {
            data,
            dataLoaded,
            errorMsg,
            statusMsg,
            getData,
            user,
            joinActivity,
            checkParticipation,
            members,
            membersLoaded,
            username, 
            userParticipated
        }
    }
}
</script>