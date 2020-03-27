<template>
    <nav>
        <v-system-bar class="grey darken-4"></v-system-bar>
        <v-list color="green">
            <v-list-item class="flex justify-center ma-3">
                <v-list-item-avatar size="100px">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-list-item class="flex justify-center">
                <v-list-item-content>
                    <v-btn link to="/profile" text><v-icon left>mdi-account-edit</v-icon>Rémi Launay</v-btn>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in navItems" :key="item.title" link :to="item.route" >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </nav>
</template>

<script>
    // mdi-clipboard-account
export default {
    name: "AppNav",
    data() {
        return {
            navItems: [
                { title: 'Accueil', icon: 'mdi-home', route: '/' },
                { title: 'Fiches', icon: 'mdi-smart-card', route: '/fiches' },
                { title: 'Rp', icon: 'mdi-script-text', route: '/rp-list' },
            ]
        }
    }
}
</script>

<style scoped>

</style>
