<template>
  <v-layout row wrap>
    <v-flex xs12 md5 offset-md1>
      <panel title="Song Metadata" class="ma-3">
        <v-text-field
          label="Title"
          :rules='required'
          v-model="song.title">
        </v-text-field>
        <v-text-field
          label="Artist"
          :rules='required'
          v-model="song.artist">
        </v-text-field>
        <v-text-field
          label="Album"
          :rules='required'
          v-model="song.album">
        </v-text-field>
        <v-text-field
          label="Album Image URL"
          :rules='required'
          v-model="song.albumImage">
        </v-text-field>
        <v-text-field
          label="Youtube ID"
          :rules='required'
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs12 md5>
      <panel title="Song Structure" class="ma-3">
        <v-textarea
          label="lyrics"
          :rules='required'
          v-model="song.lyrics"
          multi-line>
        </v-textarea>
        <v-textarea
          label="tab"
          :rules='required'
          v-model="song.tab"
          multi-line>
        </v-textarea>
      </panel>
      <v-btn
      round class="light-blue mt-3" dark @click="create">Create Song
      </v-btn>
      <div class="danger-alert mt-2 red--text" v-if="error">
        {{error}}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      error: null,
      required: [v => !!v || 'The input is required'],
      song: {
        title: null,
        artist: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the fields !'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style>
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
