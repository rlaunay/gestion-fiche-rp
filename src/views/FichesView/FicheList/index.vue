<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-select
                        v-model="selectedRp"
                        label="Filtrer par RP"
                        :items="getRpForSelect"
                        item-text="name"
                        item-value="id"
                />
            </v-col>
            <v-col>
                <v-text-field
                        label="Filtrer par Nom"
                        v-model="selectedName"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="fiche in ficheList" :key="fiche.id">
                <v-card link :to="`fiches/${fiche.id}`" hover>
                    <v-img src="https://www.w3schools.com/w3css/img_avatar3.png"></v-img>
                    <v-card-title>{{ fiche.fullName }}</v-card-title>
                    <v-card-subtitle>RP: {{ getRpName(fiche.rpId) }}</v-card-subtitle>
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
                { id: 1, fullName: 'Rémi Launay', name: 'Launay', firstName: 'Rémi', rpId: '2' },
                { id: 2, fullName: 'Clémence Landais', name: 'Landais', firstName: 'Clémence', rpId: '2' },
                { id: 3, fullName: 'Nicolas Pelletant', name: 'Pelletant', firstName: 'Nicolas', rpId: '1' },
                { id: 4, fullName: 'Aubry Roussel', name: 'Roussel', firstName: 'Aubry', rpId: 'none' },
                { id: 5, fullName: 'Anthony Morin', name: 'Morin', firstName: 'Anthony', rpId: '3' },
                { id: 6, fullName: 'Victor Alliot', name: 'Alliot', firstName: 'Victor', rpId: '4' },
            ],
            rpList: [
                { id: 1, name: 'Rp 1' },
                { id: 2, name: 'Rp 2' },
                { id: 3, name: 'Rp 3' },
                { id: 4, name: 'Rp 4' },
                { id: 5, name: 'Rp 4' },
                { id: 6, name: 'Rp 4' },
                { id: 7, name: 'Rp 4' },
                { id: 8, name: 'Rp 4' },
                { id: 9, name: 'Rp 4' },
                { id: 10, name: 'Rp 4' },
                { id: 11, name: 'Rp 4' },
                { id: 12, name: 'Rp 4' },
            ],
            selectedRp: 'all',
            selectedName: '',
        }
    },
    computed: {
        getRpForSelect() {
            const rpSelect = [];
            rpSelect.push({ id: 'all', name: 'tous' });
            this.rpList.forEach( rp => {
                const shortRp = { id: rp.id.toString(), name: rp.name };
                rpSelect.push(shortRp);
            });
            rpSelect.push({ id: 'none', name: 'Sans RP' });
            return rpSelect;
        },
        ficheList() {
            if (this.selectedName === '' && this.selectedRp === 'all') return this.fiches;
            if (this.selectedRp === 'all') {
                return this.fiches.filter(fiche => fiche.fullName.includes(this.selectedName));
            }
            const rpFilter = this.fiches.filter(fiche => fiche.rpId === this.selectedRp);
            return rpFilter.filter(fiche => fiche.fullName.includes(this.selectedName));
        }
    },
    methods: {
        getRpName(id) {
            if (id === 'none') return 'Aucun RP associé';
            const rp = this.rpList.find( rp => rp.id.toString() === id);
            return rp.name;
        }
    }
}
</script>

<style scoped>

</style>
