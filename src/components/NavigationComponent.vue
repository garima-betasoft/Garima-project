<template>
    <div>
        <v-app-bar color="orange accent-4" >

            <v-btn color="blue-white" class="ma-2 white--text">
                <router-link to="/">Home
                </router-link></v-btn>
            <v-btn color="blue-white" class="ma-2 white--text">
                <router-link to="/AboutusComponent">about us
                </router-link></v-btn>
<v-spacer></v-spacer>
                <v-btn color="blue-white" class="ma-2 white--text">
                    <router-link to="/LoginComponent">Login
                    </router-link>
                </v-btn>
                <v-btn color="blue-white" class="ma-2 white--text">
                    <router-link to="/RegistrationComponent">Registration
                    </router-link></v-btn>

        </v-app-bar>
    </div>
</template>
