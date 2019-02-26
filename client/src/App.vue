<template>
  <div id="app">
    <v-app>
      <page-header/>
      <page-background/>
      <v-content>
          <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import PageBackground from '@/components/Background.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageBackground
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box-input {
    border-radius: 4px;
}

</style>
