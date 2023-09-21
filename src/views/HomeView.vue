<script setup>
  import usePropiedades from '../composables/usePropiedades'
  import Propiedad from '../components/propiedad.vue'
  const { propiedadesCollection, propertyPrice } = usePropiedades()
</script>

<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5">Nuestras Propiedades</h1>

    <v-card flat class="py-10">
      <v-row>
        <Propiedad 
          v-for="propiedad in propiedadesCollection"
          :key="propiedad.id"
          :propiedad="propiedad"
          :price="propertyPrice"
        />
      </v-row>
    </v-card>
  </main>
</template>
