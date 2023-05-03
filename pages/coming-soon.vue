<script setup lang="ts">
import { ref } from 'vue';
import UiComponents from '@/components/ui-components/AllComponents.vue';
import MainBanner from '@/components/shared/lp-banner/BannerComingSoon.vue';
import AllC from '@/components/section/AllC.vue';

</script>

<template>
  <div>
    <!-------Banner-------->
    <MainBanner />
    
    <!-------All Components-------->
    <AllC />
    <!-------UI Components-------->
    <UiComponents />
  </div>
</template>