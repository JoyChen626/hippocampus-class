const mutations = {
  saveSuginInInfor(state, val) {
    state.userName = val.userName;
    state.password = val.password;
  },
  savePersonalData(state, val) {
    state.nickName = val.name;
    state.photoImg = val.photo;
  }
}

export default mutations