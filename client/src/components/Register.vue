<template>
  <v-img
      :gradient="gradient"
      dark
      src="https://source.unsplash.com/ASKeuOZqhYU/"
      height="100vh"
    >
    <v-container class="mt-4" fill-height grid-list-md text-xs-center>
      <v-layout align-center>
        <v-flex xs10 offset-xs1 md4 offset-md4>
          <div class="box-input white elevation-3 pa-4">
            <div class="title-panel transparent py-4">
              <h1 class="white--text">Register</h1>
            </div>
            <form
            name="tab-tracker-register"
            autocomplete="off">
            <div class="py-3">
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
            </div>
            <div v-html="error"/>
            <div>
              <v-btn round outline class="primary--text" @click="register">Register
              </v-btn>
            </div>
            </form>
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
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/login')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.title-panel {
    margin-top: -100px;
    border-radius: 4px;
  }
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
