<script setup>

</script>

<template>

    <v-card
        flat
        max-width="600"
        class="mx-auto my-10"
    >
        <v-card-title
            class="text-h4 font-weight-bold"
            tag="h3"
        >
            Iniciar Sesion
        </v-card-title>
        <v-card-subtitle
            class="text-h5"
        >
            Iniciar Sesion con tu cuenta
        </v-card-subtitle>

        <v-form class="mt-5">
            <v-text-field 
                type="email"
                label="Email"
                bg-color="blue-grey-lighten-5"
            />
            <v-text-field 
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
            />

            <v-btn
                block
                color="pink-accent-3"
            >
                Iniciar Sesion
            </v-btn>
        </v-form>
    </v-card>

</template>
