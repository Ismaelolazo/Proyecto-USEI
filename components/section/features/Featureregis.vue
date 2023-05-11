<script setup lang="ts">
import { ref } from "vue";
import {featureregis} from '@/data/CustomComponents'
</script>
<template>
  <div>
    <div class="feature1-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 1 Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <v-chip size="small" class="bg-error" text-color="white">
                Caracteristicas
              </v-chip>
              <h2 class="section-title font-weight-medium">
                <v-text-field
                v-model="first"
                color="primary"
                label="Titulo Creativo"
                variant="underlined"
              ></v-text-field>
              </h2>
              <p class="text-muted">
                <v-text-field
                v-model="first"
                color="primary"
                label="Sub-Titulo Creativo"
                variant="underlined"
              ></v-text-field>
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 1 Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Feature 1
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-13">
          <v-col cols="12" sm="6" v-for="card in featureregis" :key="card.title">
            <v-card elevation="0">
              <div>
                <div class="icon-round bg-light-info">
                  <i :class="card.icon"></i>
                </div>
                <h5 class="font-weight-medium font-18"><v-text-field
                v-model="first"
                color="primary"
                label="Caracteristica"
                variant="underlined"
              ></v-text-field></h5>
                <p class="my-5 text-muted pr-sm-10"><v-text-field
                v-model="first"
                color="primary"
                label="Descripcion de la caracteristica"
                variant="underlined"
              ></v-text-field></p>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Feature 1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
