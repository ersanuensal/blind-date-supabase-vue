<template>
    <div class="max-w-screen-sm mx-auto px-4 py-10">
        <!-- Error Handling -->
        <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
            <p class="text-red-600">{{ errorMsg }}</p>
        </div>
        <!-- Login Form -->
        <form @submit.prevent="login" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg">
            <h1 class="text-3 text-primaryc mb-4">Login</h1>

            <div class="flex flex-col mb-2">
                <label for="email" class="mb-1 text-sm text-primaryc">Email</label>
                <input type="text" id="email" v-model="email" required class="p-2 text-gray-500 focus:outline-none">
            </div>

            <div class="flex flex-col mb-2">
                <label for="Password" class="mb-1 text-sm text-primaryc">Password</label>
                <input type="password" id="password" v-model="password" required class="p-2 text-gray-500 focus:outline-none">
            </div>
            
            <button type="submit" class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc">
                Login
                </button>
        
            <router-link class="text-sm text-black mt-6 text-center" :to="{name: 'Register'}">
                You don't have an account? <span class="text-primaryc">Register</span>
                </router-link>
        </form>
    </div>    
</template>


<script>
import {ref} from "vue";
import {supabase} from "../supabase/init.js";
import {useRouter} from "vue-router";

export default {
    name: "login",
    setup() {
        // Get user from store
        const router = useRouter();
        const email = ref(null);
        const password = ref(null);
        const errorMsg = ref(null);

        // Login function
        const login = async () => {
            try {
                const { error } = await supabase.auth.signIn({
                    email: email.value,
                    password: password.value,
                });
                if (error) throw error;
                router.push({ name: "Home" });
            } catch (error) {
                errorMsg.value = error.message;
                setTimeout(() => {
                errorMsg.value = null;
                }, 5000);
            }
        }

        return {email, password, errorMsg, login};
    }
}
</script>
