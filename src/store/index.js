import { Store } from 'vuex'
import { createStore } from 'vuex'
import store from './store'
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default (function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      store
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
