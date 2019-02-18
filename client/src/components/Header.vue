<template>
  <v-toolbar class='light-blue' dark fixed>
    <v-toolbar-title @click="navigateTo('/')" id="pointer">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items class="pl-1">
    <v-btn flat>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat @click="navigateTo('login')">Login</v-btn>
      <v-btn flat @click="navigateTo('register')">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
 #pointer {
  cursor: pointer;
}
</style>
