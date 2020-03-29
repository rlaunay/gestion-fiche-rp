<template>
  <v-app>
    <app-header />
    <v-content class="ma-5">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
