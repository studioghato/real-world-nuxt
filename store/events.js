import EventService from '@/services/EventService.js'

/* When using Nuxt + Vuex with modules,
 * we need to return the state as an
 * anonymous function to create a new instance
 * of the state in the server for each request.
 * Otherwise a unique instance would be shared
 * with all requests.
 */
export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },

  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  }
}
