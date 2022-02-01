<template>
    <div class="max-w-screen-md mx-auto px-4 py-1">
        <!-- Status Message -->
        <div v-if="statusMsg || errorMsg" class="mb-10 p-4 bg-light-grey rounded-md">
            <p class="text-black-500">
                {{ statusMsg }}
            </p>
            <p class="text-red-500">
                {{ errorMsg }}
            </p>
        </div>
        <!-- Create Activity -->
        <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
            <!-- Create Activity Form -->
            <form @submit.prevent="createActivity" class="flex flex-col gap-y-5 w-full">
                <h1 class="text-2xl text-primaryc">Create an Activity</h1>

                <!-- Activity Name -->
                <div class="flex flex-col">
                    <label for="activity-name" class="mb-1 text-sm text-primaryc">Activity Name</label>
                    <input type="text" 
                           required class="p-2 text-gray-500 focus:outline-none" 
                           placeholder="Activity Name" 
                           id="activity-name"
                           v-model="ActivityName"
                    />
                </div>

                <!-- Activity Type -->
                <div class="flex flex-col">
                    <label for="select-activity" class="mb-1 text-sm text-primaryc">Activity Type</label>
                    <select 
                           required class="p-2 text-gray-500 focus:outline-none" 
                           id="select-activity"
                           @change="activityChange"
                           v-model="ActivityType"
                    >
                    <option value="select-activity">Select Activity Type</option>
                    <option value="sports">Sports</option>
                    <option value="others">Others</option>
                    </select>

                    <div v-if="ActivityType ==='others'" class="flex flex-col py-4 gap-y-4">
                        <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" v-for="(item, index) in activity" :key="index">
                            <div class="flex flex-col md:w-2/3">
                            <label for="activity" class="mb-1 text-sm text-primaryc">
                                Activity Description
                            </label>
                            <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.description">
                            </div>

                            <div class="flex flex-col flex-1">
                            <label for="duration" class="mb-1 text-sm text-primaryc">
                                Duration
                            </label>
                            <input required type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.duration">
                            <img @click="removeActivity(item.id)" src="../assets/images/trash.png" class="h-4 w-auto absolute -left-5 cursor-pointer" alt="">
                            
                            </div>
                            
                        </div>
                        <button @click="addActivity" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
                                Add Activity
                        </button>
                    </div>
                </div>

                <!-- Activity Date -->
                <div class="flex flex-col">
                    <label for="activity-date" class="mb-1 text-sm text-primaryc">Activity Date</label>
                    <input required type="date" 
                           class="p-2 text-gray-500 focus:outline-none" 
                           id="activity-date"
                           v-model="ActivityDate"
                    />
                </div>

                <!-- Activity Time -->
                <div class="flex flex-col">
                    <label for="activity-time" class="mb-1 text-sm text-primaryc">Activity Time</label>
                    <input required type="time" 
                           class="p-2 text-gray-500 focus:outline-none" 
                           id="activity-time"
                           v-model="ActivityTime"
                    />
                </div>

                <!-- Activity Location -->
                <div class="flex flex-col">
                    <label for="activity-location" class="mb-1 text-sm text-primaryc">Activity Location</label>
                    <input required type="text" 
                           class="p-2 text-gray-500 focus:outline-none" 
                           id="activity-location"
                           v-model="ActivityLocation"
                    />
                </div>

                <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
                    Create
                </button>

            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {uid} from "uid";
import { supabase } from '../supabase/init';
export default {
    setup() {
        const ActivityName = ref('');
        const ActivityType = ref('select-activity');
        const ActivityDescription = ref('');
        const activity = ref([]);
        const ActivityDate = ref('');
        const ActivityTime = ref('');
        const ActivityLocation = ref('');
        const statusMsg = ref(null);
        const errorMsg = ref(null);


        // Add Activity
        const addActivity = () => {
            if (ActivityType.value === 'others') {
                activity.value.push({
                    id: uid(),
                    description: "",
                    time: "",

                });
                return
            }
        }

        // Remove Activity
        const removeActivity = (id) => {
            if (activity.value.length > 1) {
                activity.value = activity.value.filter(item => item.id !== id);
                return;
            }
            errorMsg.value = 'You must have at least one activity';
            setTimeout(() => {
                errorMsg.value = null;
            }, 5000);
        }

        // Add first activity when activity type is others
        const activityChange = () => {
            activity.value = [];
            addActivity();
        }

        // Create Activity
        const createActivity = async () => {
            try {
                const {error} = await supabase.from('activities').insert({
                    name: ActivityName.value,
                    type: ActivityType.value,
                    date: ActivityDate.value,
                    time: ActivityTime.value,
                    location: ActivityLocation.value,
                    activity: activity.value
                })
                if (error) throw error;
                statusMsg.value = "Sucess. Activity Created";
                ActivityName.value = null;
                ActivityType.value = 'select-activity';
                activity.value = [];
                setTimeout(() => {
                    statusMsg.value = null;
                }, 5000);
            } catch (error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                    errorMsg.value = null;
                }, 5000);
            }
        }

        return{
            ActivityName,
            ActivityType,
            ActivityDescription,
            ActivityDate,
            ActivityTime,
            ActivityLocation,
            activity,
            statusMsg,
            errorMsg,
            addActivity,
            removeActivity,
            activityChange,
            createActivity
        }

}
};

</script>