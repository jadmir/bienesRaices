<script setup>
    import { useForm, useField } from 'vee-validate'
    import { useFirebaseAuth } from 'vuefire'
    import { loginSchema as validationSchema } from '../validation/loginSchema'
    import { signInWithEmailAndPassword } from 'firebase/auth'

    const {handleSubmit}  = useForm({ validationSchema})

    const auth = useFirebaseAuth()
    console.log(auth)

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit((values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch( error => {
                console.log(error)
            })
    })
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
                class="mb-3"
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
            />
            <v-text-field 
                type="password"
                label="Password"
                bg-color="blue-grey-lighten-5"
                class="mb-3"
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
            />

            <v-btn
                block
                color="pink-accent-3"
                @click="submit"
            >
                Iniciar Sesion
            </v-btn>
        </v-form>
    </v-card>

</template>
