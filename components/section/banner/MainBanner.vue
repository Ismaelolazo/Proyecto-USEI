<template>
  <div class="banner-wrapper bg-blue">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
          <div class="text-sm-left text-center">
            <h1 class="banner-title font-weight-bold text-white">
              Feria del empleo UCB
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular text-white">
              Feria de las oportunidades laborales para Estudiantes/Graduados de nuestra
              universidad
            </h4>
            <div class="mt-md-16 mt-10 d-sm-flex d-block">
              <v-btn
                color="error"
                class="mr-0 mr-sm-5 mb-5 mb-sm-0 btn-custom-md d-sm-flex d-block btn-100"
                size="large"
                flat
              >
                 <NuxtLink to="https://lpz.ucb.edu.bo/feria-de-empleo-ucb" target="_blank" class="text-decoration-none  text-white">
                  USEI
                 </NuxtLink>
              </v-btn>
              <v-btn
                size="large"
                to="/coming-soon"
                class="btn-custom-md d-sm-flex d-block"
                variant="outlined"
                color="white"
                flat
              >
                Instituciones
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6">
          <img
            src="/images/landingpage/emp.png"
            alt="banner" class="img-fluid" width="400"
          />
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>

