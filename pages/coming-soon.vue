<script setup lang="ts">
import { ref } from 'vue';
import UiComponents from '@/components/ui-components/AllComponents.vue';
import MainBanner from '@/components/shared/lp-banner/BannerComingSoon.vue';
import AllC1 from '@/components/section/AllC1.vue';

</script>

<template>
  <div>
    <!-------Banner-------->
    <MainBanner />
    <!-------All Components-------->
    <AllC1 />
    <!-------UI Components-------->
    <UiComponents />
  </div>
</template>