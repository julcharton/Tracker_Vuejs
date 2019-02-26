<template>
  <v-container>
    <v-layout row>
        <v-flex xs12>
          <panel title="Songs">
            <!-- <router-link :to="{name:  'create-song'}" slot="action"> -->
              
            <!-- </router-link> -->
            <div class="mt-3">
              <div class="quote primary--text mt-4 mb-2">{{quote}}<br>{{source}}</div>
              <v-btn to="/songs/create"
              class="darken-1 mb-4"
              fab outline
              >
                <v-icon>add</v-icon>
              </v-btn>
              <v-layout>
                <v-container
                  fluid
                  grid-list-lg
                >
                  <v-layout row wrap align-center  >
                    <v-flex
                      v-for="song in songs"
                      :key="song.id"
                      xs12 sm6
                    >
                      <v-card flat>
                        <v-layout row>
                          <v-flex xs12 >
                            <v-img
                              :src="song.albumImage"
                              max-height="200px"
                              max-width="200px"
                              class= "md-card-jacket elevation-3"
                              @click="navigateTo({
                              name: 'song', 
                              params: {
                              songId: song.id
                              }})"
                            ></v-img>
                          </v-flex>
                          <v-flex xs6 grow>
                            <v-layout align-start>
                              <div class="text-xs-left mt-2 mx-1">
                                <div class="headline pb-3 font-weight-bold">{{song.title}}</div>
                                <div class="primary--text text-uppercase subheading font-weight-medium">{{song.artist}}</div>
                              </div>
                            </v-layout>
                            <v-btn round outline class="primary left mt-4 mx-0 hidden-sm-and-down" flat 
                            :to="{
                            name: 'song', 
                            params: {
                            songId: song.id
                            }}">
                              See Tabs
                            </v-btn>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-layout>
            </div>
          </panel>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<script>
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null,
      quote: "If heavy metal bands ruled the world, we'd be a lot better off.",
      source: 'Bruce Dickinson'
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
  .headline {
  font-size: 18px!important;
}
  .quote {
   font-style: italic;
   font-size: 18px
  }
.md-card-jacket {
  border-radius: 7px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
