<template>
  <div>
      <div class="flex flex-col items-center">
        <img
          v-if="src"
          :src="src"
          alt="Avatar"
          class="avatar image"
          :style="{ height: size, width: size}"
        />
        <div
          v-else
          class="avatar no-image"
          :style="{ height: size, width: size }"
        />
      </div>
  </div>
</template>

<script>
import { ref, toRefs, watch } from "vue"
import { supabase } from "../supabase"

export default {
  props: {
    path: String,
  },
  setup(prop) {
    const { path } = toRefs(prop)
    const size = ref("30em")
    const uploading = ref(false)
    const src = ref("")
    const files = ref()


    const downloadImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path.value)
        if (error) throw error
        src.value = URL.createObjectURL(data)
      } catch (error) {
        console.error("Error downloading image: ", error.message)
      }
    }


    watch(path, () => {
      path.value ? downloadImage() : ""
    })

    return {
      path,
      size,
      uploading,
      src,
      files
    }
  },
}
</script>

<style>

.avatar {
  border-radius: var(--custom-border-radius);
  overflow: hidden;
  max-width: 100%;
}

.avatar.image {
  object-fit: cover;
}

.avatar.no-image {
  background-image: url(https://avatars.dicebear.com/api/personas/ghfretfcs.svg);
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
}
</style>