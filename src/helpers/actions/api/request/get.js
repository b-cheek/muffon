import profileStore from '@/stores/profile'
import axios from 'axios'
import {
  snakeCase
} from 'snake-case'

export default function (
  {
    url,
    params = {},
    isWithSelfId,
    isWithSelfToken,
    isWithSelfLanguage,
    page,
    limit,
    order,
    onComplete,
    onSuccess,
    onError
  }
) {
  if (this) {
    this.error = null
    this.isLoading = true
  }

  const profileId = profileStore().id

  const {
    token,
    language
  } = profileStore()

  const anonymousToken =
    process.env.VUE_APP_ANONYMOUS_TOKEN

  const paramsData = {
    ...params,
    ...(isWithSelfId && {
      profile_id: profileId
    }),
    ...(isWithSelfToken && {
      token: (
        token || anonymousToken
      )
    }),
    ...(isWithSelfLanguage && {
      language
    }),
    ...(page && {
      page
    }),
    ...(limit && {
      limit
    }),
    ...(order && {
      order: snakeCase(
        order
      )
    })
  }

  const handleComplete = () => {
    if (this) {
      this.isLoading = false
    }

    if (onComplete) {
      return onComplete()
    }
  }

  function handleSuccess (
    response
  ) {
    return onSuccess(
      response
    )
  }

  const handleError = (
    error
  ) => {
    if (this) {
      this.error = error
    }

    if (onError) {
      return onError(
        error
      )
    } else {
      throw error
    }
  }

  return axios.get(
    url,
    {
      params: paramsData
    }
  ).finally(
    handleComplete
  ).then(
    handleSuccess
  ).catch(
    handleError
  )
}
