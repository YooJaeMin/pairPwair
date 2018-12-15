import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var storage = {
  fetch() {
    var tmpArr = [];
    for (let idx = 0; idx < localStorage.length; idx++) {
      if (localStorage.key(idx) != "loglevel:webpack-dev-server") {
        let item = localStorage.getItem(localStorage.key(idx));
        tmpArr.push(item);
      }

    }
    return tmpArr;
  }
};

export const store = new Vuex.Store({
  state: {
    items: [],
    email: '',
    geo: '',
    air: '',
    // 초기화에서 많이 사용하는데 '||' 는 앞의 값이 null일 경우 뒤쪽으로 선언
  },
  getters: {
    geoData(state) {
      return state.geo;
    },
    airData(state) {
      return state.air;
    },
  },
  mutations: {
    saveAirData(state, row) {
      state.air = row;
    }
  }
});
