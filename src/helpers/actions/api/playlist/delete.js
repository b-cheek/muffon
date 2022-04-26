import store from '*/plugins/store'
import deleteRequest from '*/helpers/actions/api/request/delete'

export default function (
  {
    playlistId
  }
) {
  const profileId =
    store.getters['profile/id']

  const url =
    `/profiles/${profileId}/playlists/${playlistId}`

  return deleteRequest.bind(
    this
  )(
    {
      url,
      isWithSelfToken: true,
      isSaveError: true
    }
  )
}
