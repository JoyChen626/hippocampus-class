const state = {
  landFlag: false,
  userName: sessionStorage.getItem('userName') || '',
  phoneNumber: sessionStorage.getItem('phoneNumber') || '',
  password: sessionStorage.getItem('password') || '',
  checkGender: '',
  checkIdentity: sessionStorage.getItem('checkIdentity') || '',
  school: '',
  class: '',
  region: '',
  photo: ''
}

export default state