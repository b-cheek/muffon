export default {
  namespaced: true,
  state: {
    currentTrackId: null,
    isAutoplay: true,
    isGettingPrev: false,
    isGettingNext: false,
    isShuffle: false,
    tracks: [],
    tracksShuffled: []
  },
  getters: {
    tracksComputed (
      state
    ) {
      if (state.isShuffle) {
        return state.tracksShuffled
      } else {
        return state.tracks
      }
    },
    tracksCount (
      state
    ) {
      return state.tracks.length
    },
    currentTrackIndex (
      state,
      getters
    ) {
      function isMatchedTrack (
        trackData
      ) {
        return (
          trackData.uuid ===
            state.currentTrackId
        )
      }

      return getters.tracksComputed.findIndex(
        isMatchedTrack
      )
    },
    isStart (
      state,
      getters
    ) {
      return getters.currentTrackIndex === 0
    },
    isEnd (
      state,
      getters
    ) {
      return (
        getters.currentTrackIndex ===
          getters.tracksCount - 1
      )
    },
    prevTrack (
      state,
      getters
    ) {
      return getters.tracksComputed[
        getters.currentTrackIndex - 1
      ]
    },
    nextTrack (
      state,
      getters
    ) {
      return getters.tracksComputed[
        getters.currentTrackIndex + 1
      ]
    }
  },
  mutations: {
    SET_TRACKS (
      state,
      value
    ) {
      state.tracks = value
    },
    SET_TRACKS_SHUFFLED (
      state,
      value
    ) {
      state.tracksShuffled = value
    },
    SET_IS_SHUFFLE (
      state,
      value
    ) {
      state.isShuffle = value
    },
    SET_CURRENT_TRACK_ID (
      state,
      value
    ) {
      state.currentTrackId = value
    },
    SET_IS_GETTING_PREV (
      state,
      value
    ) {
      state.isGettingPrev = value
    },
    SET_IS_GETTING_NEXT (
      state,
      value
    ) {
      state.isGettingNext = value
    },
    SET_IS_AUTOPLAY (
      state,
      value
    ) {
      state.isAutoplay = value
    }
  },
  actions: {
    setTracks (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_TRACKS',
        value
      )
    },
    setTracksShuffled (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_TRACKS_SHUFFLED',
        value
      )
    },
    setIsShuffle (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_IS_SHUFFLE',
        value
      )
    },
    setCurrentTrackId (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_CURRENT_TRACK_ID',
        value
      )
    },
    setIsGettingPrev (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_IS_GETTING_PREV',
        value
      )
    },
    setIsGettingNext (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_IS_GETTING_NEXT',
        value
      )
    },
    setIsAutoplay (
      {
        commit
      },
      value
    ) {
      commit(
        'SET_IS_AUTOPLAY',
        value
      )
    }
  }
}
