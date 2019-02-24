<template>
  <v-flex xs12 sm6>
    <panel title="Song Metadata">
      <div>
        {{song.youtubeId}}
      </div>
    </panel>
  </v-flex>
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
      song: null
    }
  },
 async mounted () {
    const songId = this.$store.state.route.params.songId
     this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style>

</style>


