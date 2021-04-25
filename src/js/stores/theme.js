import { createStore } from 'framework7';
import $ from 'dom7';
import * as localForage from "localforage";

const theme = createStore({
  state: {
    name: 'theme-dark',
  },
  actions: {
    changeTheme({ state }, name) {
      state.name = name;
    },
    async checkTheme({ state, dispatch }, { selector }){
      let theme = await localForage.getItem('theme');
      if (theme != 'theme-dark'){ $(selector).removeClass('theme-dark'); }
      dispatch('changeTheme', theme);
    },
    async initTheme({state, dispatch}, { selector }){
      let items = await localForage.length();
      if (items > 0){
        await dispatch('checkTheme', { selector });
      }
    },
    async setTheme({ state, dispatch }, name){
      await localForage.setItem('theme', name);
      dispatch('changeTheme', name);
    },
  },
  getters: {
    Name({ state }) {
      return state.name;
    }
  },
})

export default theme;
