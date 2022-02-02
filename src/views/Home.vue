<template>
    <div v-if="dataLoaded" class="container mt-10 px-4">
        <!-- No Data -->
        <div v-if="data.length === 0" class="w-full flex flex-col items-center">
            <h1 class="text-2xl">There are no Activities yet.</h1>
            <router-link class="mt-6 py-2 px-6 rounded-sm text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc" :to="{ name: 'Activity' }">Create the first One</router-link>
        </div>

        <!-- Data -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <router-link 
            class="flex flex-col items-center bg-primaryc p-8 shadow-md cursor-pointer"
            :to="{ name: 'ViewActivity', params: { id: activity.id } }"
            v-for="(activity, index) in data" 
            :key="index"
            >
            <!-- Information -->
            <p class="mt-2 py-1 px-3 text-xs text-white bg-primaryc shadow-md rounded-lg">
                {{ activity.date }}
            </p>
            <h1 class="mt-2 text-center text-xl text-white">
                {{ activity.name }}
            </h1>
            <p class="mt-2 text-center text-xs text-white">
                In {{ activity.location }} at {{ activity.time }}
            </p>
            <p class="mt-2 text-center text-xs text-white">
                {{ activity.members.length}} people participating
            </p>
            </router-link>
        </div>
    </div>
</template>


<script>
import {ref} from 'vue';
import {supabase} from '../supabase/init';
export default {
    name: "home",
    components: {},
    setup() {
        const data = ref([]);
        const dataLoaded = ref(null)

        // Get data
        const getData = async () => {
            try {
                const {data: activities, error} = await supabase.from('activities').select('*');
                if (error) throw error;
                data.value = activities;
                dataLoaded.value = true;
            } catch (error) {
                console.warn(error.message)
            }
        }

        // Run Data import
        getData();

        return {data, dataLoaded};
    }
}
</script>