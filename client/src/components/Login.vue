<template>
  <v-container grid-list-xs class="mt-4">
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 sm4 offset-sm4>
        <div class="box-input white elevation-3 pa-4">
          <div>
            <h1 class="grey--text text--darken-1">Login</h1>
          </div>
          <v-text-field
            type="email"
            name="email"
            placeholder="email"
            v-model="email">
          </v-text-field>
          <v-text-field
            type="password"
            name="password"
            placeholder="password"
            v-model="password">
          </v-text-field>
          <div v-html="error"/>
          <div>
            <v-btn round class="light-blue" dark @click="login">Login
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email changed', value)
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .box-input {
    border-radius: 4px;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
