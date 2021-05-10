import axios from 'axios'
import { raiseProductionError } from '#/utils'

export default function ({ artistName, scope = '', page, limit }) {
  this.isLoading = true

  const artistNameEncoded = encodeURIComponent(artistName)
  const url = `/lastfm/artists/${artistNameEncoded}/${scope}`

  const params = {
    ...(page && { page }),
    ...(limit && { limit })
  }

  const handleSuccess = response => {
    const { artist } = response.data

    this.error = null
    this.artistData = artist

    if (scope === 'tracks') {
      this.topTrackCount ||= artist.tracks[0].listeners_count
    }
  }

  const handleError = error => {
    this.artistData = null
    this.error = error

    raiseProductionError(error)
  }

  const handleFinish = () => {
    this.isLoading = false
  }

  return axios
    .get(url, { params })
    .then(handleSuccess)
    .catch(handleError)
    .finally(handleFinish)
}