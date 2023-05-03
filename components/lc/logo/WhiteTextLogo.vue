<script setup lang="ts">
import { ref } from 'vue';
import WhiteTLogo from '/images/logos/logocato.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex">
        <img :src="WhiteTLogo" alt="logo" height="150"/>

    </NuxtLink>
</template>