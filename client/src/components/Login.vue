<template>
  <v-img
    :gradient="gradient"
    src="https://source.unsplash.com/ASKeuOZqhYU/"
    height="100vh"
  >
    <v-container class="mt-4" fill-height grid-list-md text-xs-center>
      <v-layout align-center>
        <v-flex xs10 offset-xs1 md4 offset-md4>
          <div class="box-input white elevation-3 pa-4">
            <div class="title-panel transparent py-4 ">
              <h1 class="white--text">Login</h1>
            </div>
            <div class="py-3">
              <v-text-field
                type="email"
                name="email"
                label="Email"
                v-model="email">
              </v-text-field>
              <v-text-field
                type="password"
                name="password"
                placeholder="Password"
                v-model="password">
              </v-text-field>
            </div>
            <div v-html="error"/>
            <div>
              <v-btn round outline class="primary--text " dark @click="login">Login
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
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
        this.$router.push('/songs')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .box-input {
    border-radius: 4px;
  }
  .title-panel {
    margin-top: -100px;
    border-radius: 4px;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
