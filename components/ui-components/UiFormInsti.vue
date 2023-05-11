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
              <h2 class="ui-title font-weight-bold">Formulario de registro</h2>
              <p class="text-muted">
                Datos para poder compartir tu pagina
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
                v-model="Nombre_Institucion"
                color="primary"
                label="Nombre institucion"
                variant="underlined"
              ></v-text-field>
              <v-text-field
                v-model="first"
                color="primary"
                label="Lema"
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
              <v-textarea
                v-model="last"
                color="primary"
                type="Descriipcion"
                label="Informacion breve sobre la instituciion"
                variant="underlined"
              ></v-textarea>
              <v-file-input label="Cargar Logo de institucion" v-model="selectedImg" type="imagen" ></v-file-input>
                <div class="mt-1">
                  <v-btn class="bg-success mr-3 text-white" elevation="0" >Enviar</v-btn>
                  
                  <v-btn class="bg-dark" elevation="0" dark>Cancelar</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

