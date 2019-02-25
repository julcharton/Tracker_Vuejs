<template>
  <v-container>
    <v-layout row>
        <v-flex xs12>
          <panel title="Songs">
            <router-link :to="{name:  'create-song'}" slot="action">
              <v-btn
              class="red darken-1 mb-2"
              fab dark absolute small right bottom
              >
                <v-icon>add</v-icon>
              </v-btn>
            </router-link>
            <div class="mt-3">
              <div class="quote primary--text my-4">{{quote}}<br>{{source}}</div>
                <!-- <v-card flat>
                   <v-container
                    fluid
                    grid-list-xs
                  > -->
              <v-card flat>
                <v-container
                  fluid
                  grid-list-md
                  
                >
                  <v-layout row wrap>
                    <v-flex
                      v-for="song in songs"
                      :key="song.id"
                      xs12 sm6
                    >
                      <v-card flat>
                        <v-layout align-start justify-center row>
                          <v-flex xs12 >
                            <v-img
                              :src="song.albumImage"
                              max-height="200px"
                              width="200px"
                              class= "md-card-jacket elevation-3"
                            ></v-img>
                          </v-flex>
                          <v-flex xs6 grow>
                            <v-layout>
                              <div class="text-sm-left mr-3">
                                <div class="headline py-3 font-weight-bold">{{song.title}}</div>
                                <div class="primary--text text-uppercase subheading font-weight-medium">{{song.artist}}</div>
                                <div class="primary--text subheading">{{song.album}}</div>
                              </div>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
                    <v-layout>
                      <v-flex>
                        <v-hover v-for="song in songs"
                        :key="song.id" id="pointer">
                        <v-card>
                          
                          </v-card>
                        </v-hover>
                      </v-flex>
                    </v-layout>
                  <!-- </v-container>
                </v-card> -->
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
      source: "Bruce Dickinson"
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
