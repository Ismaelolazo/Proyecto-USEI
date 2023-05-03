<script setup lang="ts">
import { ref } from "vue";
const page = ref(1);
</script>

<template>
  <div>
    <div>
      <v-container>
        <div>
          <v-row>
            <v-col cols="10">
              <h4 class="font-weight-regular font-18">Length Pagination</h4>
              <v-pagination 
                class="mt-5"
                v-model="page"
                :length="15"
              ></v-pagination>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>
