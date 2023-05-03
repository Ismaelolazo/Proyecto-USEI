<script setup lang="ts">
import { ref } from 'vue';
import MainBanner from '@/components/section/banner/MainBanner.vue';
import AllCustomComponents from '@/components/section/AllCustomComponents.vue';
</script>

<template>
  <div>
    <!-------Banner-------->
    <MainBanner />
    <!-------All Components-------->
    <AllCustomComponents/>
  </div>
</template>