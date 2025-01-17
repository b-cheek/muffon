import fs from 'fs'
import {
  selectCover
} from 'music-metadata'

export function tags (
  {
    file,
    tags
  }
) {
  const artistData = {
    name: tags.artist
  }

  const cover =
    selectCover(
      tags.picture
    )

  const image =
    formatImage(
      cover
    )

  return {
    title: tags.title,
    artist: artistData,
    artists: [
      artistData
    ],
    album: {
      title: tags.album
    },
    image: image && {
      extrasmall: image,
      large: image
    },
    created: fs.statSync(
      file.path
    ).birthtime
  }
}

function formatImage (
  image
) {
  if (image) {
    const {
      format
    } = image

    const base64 =
      image.data.toString(
        'base64'
      )

    return `data:${format};base64,${base64}`
  }
}
