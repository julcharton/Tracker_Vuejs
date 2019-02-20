<template>
  <v-container grid-list-xs class="mt-4">
    <v-layout row>
      <!-- <v-flex xs12 md5 offset-md3>
        <panel title="Songs">
          <router-link :to="{name:  'create-song'}" slot="action">
            <v-btn
            class="red darken-1"
            fab dark absolute small right bottom
            >
              <v-icon>add</v-icon>
            </v-btn>
          </router-link>
          <div
            v-for="song in songs"
            :key="song.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          </div>
        </panel>
      </v-flex> -->
        <v-flex xs12 md5 offset-md3>
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
              <v-hover v-for="song in songs"
                  :key="song.id" id="pointer">
                <v-card color="#B74F6F" class="white--text mb-2" 
                  slot-scope="{ hover }" 
                  :class="`elevation-${hover ? 12 : 2}`"
                  @click="navigateTo({
                  name: 'song', 
                  params: {
                    songId: song.id
                    }
                  })"
                >
                  <v-layout row align-center >
                    <v-flex xs7>
                      <v-card-title  class="song-title" >
                        <div>
                          <div class="headline">{{song.title}}</div>
                          <div>{{song.artist}}</div>
                          <div>{{song.album}}</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs5>
                      <v-layout align-center justify-end pa-2>
                        <v-img
                          :src="song.albumImage" 
                          max-height="125px"
                          contain />
                      </v-layout>
                    </v-flex>
                  </v-layout>
                <!-- <v-divider light></v-divider>
                <v-card-actions class="pa-3">
                  Rate this album
                  <v-spacer></v-spacer>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-card-actions> -->
                </v-card>
              </v-hover>
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
      songs: null
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
<style>
  /* #pointer {
  cursor: pointer;
} */
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
