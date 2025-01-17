import i18n from '#/plugins/i18n'
import {
  main as formatVideoPlaylistMainLink
} from '@/helpers/formatters/links/videoPlaylist'

export default function (
  {
    channelTitle,
    playlistTitle,
    playlistId,
    scope
  }
) {
  function formatVideoPlaylistPageTitle () {
    if (scope) {
      return i18n.global.t(
        `navigation.model.${scope}`,
        {
          modelName: playlistTitle
        }
      )
    } else {
      return playlistTitle
    }
  }

  const videoChannelPageTitle =
    i18n.global.t(
      'navigation.model.playlists',
      {
        modelName: channelTitle
      }
    )

  const title = [
    formatVideoPlaylistPageTitle(),
    videoChannelPageTitle
  ].join(
    ' | '
  )

  function formatPath () {
    switch (scope) {
      default:
        return formatVideoPlaylistMainLink(
          {
            playlistId
          }
        ).path
    }
  }

  return {
    icon: 'videoPlaylist',
    title,
    path: formatPath()
  }
}
