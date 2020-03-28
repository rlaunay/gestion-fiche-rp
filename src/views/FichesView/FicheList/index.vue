<template>
    <v-container>
        <v-row>

        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="fiche in fiches" :key="fiche.id">
                <v-card hover>
                    <v-img src="https://www.w3schools.com/w3css/img_avatar3.png"></v-img>
                    <v-card-title>{{ `${fiche.firstName} ${fiche.name}` }}</v-card-title>
                    <v-card-subtitle>RP: {{fiche.rp}}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            fiches: [
                { id: 1, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
                { id: 2, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
                { id: 3, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
                { id: 4, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
                { id: 5, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
                { id: 6, name: 'Launay', firstName: 'Rémi', rp: 'UnRP' },
            ]
        }
    }
}
</script>

<style scoped>

</style>
