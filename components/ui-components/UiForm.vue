<script setup lang="ts">
import { ref } from "vue";
const checkbox2 = ref(false);
/* Password hide/show */
const show2 = ref(true);
const show3 = ref(true);
</script>

<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Ui Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">Form</h2>
              <p class="text-muted">
                Datos para compartir el link de la reunion
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Ui Form
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <v-card class="card-shadow">
              <v-card-text>
                <v-text-field
                v-model="first"
                color="primary"
                label="Nombre"
                variant="underlined"
              ></v-text-field>
              <v-text-field
                v-model="first"
                color="primary"
                label="Apellido"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="last"
                color="primary"
                type="email"
                label="Correo Electronico"
                variant="underlined"
              ></v-text-field>
              <v-text-field
                v-model="last"
                color="primary"
                type="Numero"
                label="Celular"
                variant="underlined"
              ></v-text-field>
                <v-checkbox
                  v-model="checkbox2"
                  class="ml-n2 mt-n2 "
                  color="primary"
                  label="Remember me"
                  hide-details
                ></v-checkbox>
                <div class="mt-1">
                  <v-btn class="bg-success mr-3 text-white" elevation="0" >Save</v-btn>
                  
                  <v-btn class="bg-dark" elevation="0" dark>Cancel</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

