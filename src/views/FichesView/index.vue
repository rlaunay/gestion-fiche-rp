<template>
    <div class="fiches">
        <v-container class="my-5">
            <v-row justify="space-between">
                <v-col cols="3">
                    <h1 class="display-1 grey--text text--darken-2">Fiches</h1>
                </v-col>
                <v-col cols="2">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="grey darken-4 green--text ma-1" exact link to="/fiches" fab>
                                <v-icon>mdi-clipboard-text-multiple</v-icon>
                            </v-btn>
                        </template>
                        <span>Liste de vos fiches</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="grey darken-4 green--text ma-1" link to="/fiches/new" fab>
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Créer une fiche</span>
                    </v-tooltip>
                </v-col>
            </v-row>
            <v-row class="my-5" justify="center">
                <v-col cols="12" lg="10">
                    <router-view />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
