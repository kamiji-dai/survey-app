<script setup lang="ts">
definePageMeta({
  layout: false,
})

const setLayout = () => {
  setPageLayout("custom")
}
</script>

<template>
  <div>
    <h1>test</h1>
    <button @click="setLayout">Enable layout</button>
  </div>
</template>
