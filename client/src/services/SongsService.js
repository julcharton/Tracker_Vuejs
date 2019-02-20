import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}

// AuthentificationService.resgister({
//   email: 'testing@jojo.com',
//   password: 'okokok'
// })
