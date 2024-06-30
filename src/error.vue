<script setup lang="ts">
import type { NuxtError } from '#app'

type Props = {
	error?: NuxtError
}

const props = withDefaults(defineProps<Props>(), {
	error: undefined,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ props.error ? props.error.statusCode : '不明なエラー' }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
