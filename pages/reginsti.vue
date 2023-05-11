<!-------Registro instituciones-------->
<script setup lang="ts">
import { ref } from 'vue';
import RegisBannerInsti from '@/components/section/banner/RegisBannerInsti.vue';
import RegisBannerInfo from '@/components/section/banner/RegisBannerInfo.vue';
import AllC3 from '@/components/section/AllC3.vue';
</script>

<template>
  <div>
    <!-------Banner-------->
    <RegisBannerInsti />
    <RegisBannerInfo />
    <!-------All Components-------->
    <AllC3/>
    <UiFormInsti/>
  </div>
</template>