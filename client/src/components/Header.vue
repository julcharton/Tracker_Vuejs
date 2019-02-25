<template>
  <v-toolbar fixed :flat="flat" :dark="dark" v-bind:class="[{transparent: isTransparent}, {white: true}]" v-scroll="handleScroll">
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-title @click="navigateTo('/')" id="pointer">
      TabTracker
    </v-toolbar-title>
    <v-toolbar-items class="pl-1">
    <v-btn flat @click="navigateTo({name: 'songs'})">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn flat>Link One</v-btn> -->
      <v-btn v-if="!$store.state.isUserLoggedIn" flat @click="navigateTo('login')">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat @click="navigateTo('register')">Sign Up</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      isTransparent: true,
      dark:true,
      flat: true
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    },
    handleScroll () {
      this.isTransparent = window.scrollY < 150;
      this.dark = window.scrollY < 150;
      this.flat = window.scrollY < 150;
    }
  }
}
</script>
<style>
 #pointer {
  cursor: pointer;
}
</style>
