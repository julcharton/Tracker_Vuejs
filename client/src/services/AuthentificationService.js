import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthentificationService.resgister({
//   email: 'testing@jojo.com',
//   password: 'okokok'
// })
