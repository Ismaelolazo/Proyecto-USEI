<template>
  <div class="banner-wrapper bg-dark-blue">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="6"
          lg="6"
          class="d-flex align-center justify-center"
        >
          <div class="text-center">
            <h1 class="banner-title font-weight-bold text-white">
              Listado de Instituciones
            </h1>
            <h4 class="banner-subtitle mr-0 text-white font-weight-regular">
              Te presentamos un acercamiento a las instituciones que participan de la feria 
            </h4>
            <br>
            <v-btn
                size="large"
                to="/reginsti"
                class="btn-custom-md d-sm-flex d-block"
                variant="outlined"
                color="white"
                flat
              ><NuxtLink to="/Pag1" target="_blank" class="text-decoration-none  text-white"></NuxtLink>
                Registra tu institucion!
              </v-btn>
          </div>
          
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
