<template>
    <header>
        <v-app-bar app class="grey darken-4">
            <v-app-bar-nav-icon class="green--text" @click="drawer = !drawer" />
            <v-toolbar-title>
                <h1 class="display-1 green--text hidden-sm-and-down">Gestion Fiche Perso</h1>
            </v-toolbar-title>
            <v-spacer />
<!--            <v-btn text color="green" class="ma-1 hidden-xs-only">Créer un compte <v-icon right>mdi-account-plus</v-icon></v-btn>-->
<!--            <v-btn color="green" class="ma-1 hidden-sm-and-up" small fab><v-icon>mdi-account-plus</v-icon></v-btn>-->
<!--            <v-btn text color="green" class="ma-1 hidden-xs-only">Se connecter <v-icon right>mdi-login</v-icon></v-btn>-->
<!--            <v-btn color="green" class="ma-1 hidden-sm-and-up" small fab><v-icon>mdi-login</v-icon></v-btn>-->
            <v-btn text color="green" class="ma-1 hidden-xs-only">Se deconnecter <v-icon right>mdi-logout</v-icon></v-btn>
            <v-btn color="green" class="ma-1 hidden-sm-and-up" small fab><v-icon>mdi-logout</v-icon></v-btn>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" color="green">
            <app-nav />
        </v-navigation-drawer>
    </header>
</template>

<script>
import AppNav from "@/components/layout/AppNav.vue";

export default {
    name: "AppHeader",
    components: {
        AppNav,
    },
    data() {
        return {
            drawer: false,
        }
    }
}
</script>

<style scoped>

</style>
