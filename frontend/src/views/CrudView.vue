<template>
  <div class="crud">
    <h1 class="text-lg font-semibold">CRUD Demo</h1>
    <h2>The data stored in the backend using SQLite & frontend using Pinia</h2>
    <div>
      <input
        class="block my-4 border w-64 dark:text-slate-700"
        v-model="userName"
        placeholder="Filter user name"
      />
    </div>

    <div class="flex space-x-4">
      <select
        size="5"
        v-model="selected"
        class="w-64 border dark:text-slate-700"
      >
        <option v-for="(name, index) in filteredNames" :key="index">
          {{ name }}
        </option>
      </select>

      <div class="flex flex-col justify-center items-center">
        <label
          >Name:
          <input
            class="block mb-4 border w-64 dark:text-slate-700"
            v-model="localStore.name"
        /></label>
        <label
          >Email:
          <input
            class="block mb-4 border w-64 dark:text-slate-700"
            type="email"
            v-model="localStore.email"
        /></label>
      </div>
    </div>

    <div class="mt-4 space-x-2">
      <button class="border px-2 py-1" @click="handleReset">Reset</button>
      <button class="border px-2 py-1" @click="handleCreateUser">Create</button>
      <button class="border px-2 py-1" @click="handleUpdateUser">Update</button>
      <button
        class="border px-2 py-1"
        @click="handleDeleteUser"
        :disabled="selectedRole === 'OWNER'"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup name="CrudView">
import { ref, reactive, computed, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { createUser, deleteUser, patchUser } from '@/services'

const userStore = useUserStore()

const selected = ref('')
const userName = ref('')

const localStore = reactive({
  name: '',
  email: ''
})

const filteredNames = computed(() =>
  userStore.userList
    .map((user) => user.name)
    .filter((n) => n.toLowerCase().includes(userName.value.toLowerCase()))
)

const selectedRole = computed(() => {
  const user = userStore.userList.find((u) => u.name === selected.value)
  return user?.role
})

const handleReset = () => {
  localStore.name = localStore.email = ''
}

const hasValidInput = () => {
  return localStore.name.trim() && localStore.email.trim()
}

const handleCreateUser = async () => {
  if (hasValidInput()) {
    if (
      userStore.userList &&
      !userStore.userList.find((user) => user.name === localStore.name)
    ) {
      const userInfo = {
        name: localStore.name,
        email: localStore.email,
        role: 'USER',
        password: '123456'
      }

      try {
        // create user in backend
        const res = await createUser(userInfo)
        if (res && res.data) {
          // create user in frontend
          userStore.addUser(res.data)
        }
      } catch (error) {
        console.log(error)
      }

      handleReset()
    }
  }
}

const handleUpdateUser = async () => {
  if (hasValidInput() && selected.value) {
    const idx = userStore.userList.findIndex(
      (user) => user.name === selected.value
    )
    if (idx !== -1 && userStore.userList[idx]) {
      const userInfo = {
        ...userStore.userList[idx],
        name: localStore.name,
        email: localStore.email
      }

      try {
        // create user in backend
        const res = await patchUser(userInfo)
        console.log(res)
        if (res && res.data) {
          // create user in frontend
          userStore.updateUser(res.data)
          userStore.fetchUserList()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

const handleDeleteUser = async () => {
  if (selected.value) {
    const idx = userStore.userList.findIndex(
      (user) => user.name === selected.value
    )
    if (idx > -1) {
      const user = userStore.userList[idx]
      try {
        // delete user from backend
        await deleteUser(user.id)
        // remove user from frontend
        userStore.removeUser(user)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

watch(
  selected,
  (newVal) => {
    const user = userStore.userList.find((u) => u.name === newVal)
    if (user) {
      localStore.name = user.name
      localStore.email = user.email
    }
  },
  { immediate: true }
)

watch(
  () => userStore.currentUser,
  () => {
    localStore.name = userStore.currentUser.name
    localStore.email = userStore.currentUser.email
  }
)
</script>
