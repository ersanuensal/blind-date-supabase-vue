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
      <div class="text-center py-10">
      <label class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-primaryc duration-200 border-solid border-2 boder-transperent hover:border-primaryc hover:bg-white hover:text-primaryc" for="single">
        {{ uploading ? "Uploading ..." : "Upload new Picture" }}
      </label>
          <input
            style="visibility: hidden; position: absolute"
            type="file"
            id="single"
            accept="image/*"
            @change="uploadAvatar"
            :disabled="uploading"
          />
        </div>
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
  emits: ["upload", "update:path"],
  setup(prop, { emit }) {
    const { path } = toRefs(prop)
    const size = ref("10em")
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

    const uploadAvatar = async (evt) => {
      files.value = evt.target.files
      try {
        uploading.value = true
        if (!files.value || files.value.length === 0) {
          throw new Error("You must select an image to upload.")
        }

        const file = files.value[0]
        const fileExt = file.name.split(".").pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`

        let { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, file)

        if (uploadError) throw uploadError
        emit("update:path", filePath)
        emit("upload")
      } catch (error) {
        alert(error.message)
      } finally {
        uploading.value = false
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
      files,

      uploadAvatar,
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
  background-color: #333;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
}
</style>