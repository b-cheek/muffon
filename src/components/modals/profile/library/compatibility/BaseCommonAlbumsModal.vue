<template>
  <BaseProfileLibraryCommonModalContainer
    ref="modal"
    :profile-id="profileId"
    :scope="scope"
  >
    <template
      #default="slotProps"
    >
      <BaseAlbumsSimpleList
        :albums="slotProps[scope]"
        :profile-id="profileId"
        :top-tracks-count="slotProps.topTracksCount"
        is-with-artist-name
        is-link-to-library
        is-compatibility
        is-with-library
        is-with-created
        is-with-page-option
        is-with-library-option
        is-with-favorite-option
        is-with-bookmark-option
        is-with-listened-option
        is-with-share-option
        @link-click="handleLinkClick"
      />
    </template>
  </BaseProfileLibraryCommonModalContainer>
</template>

<script>
import BaseProfileLibraryCommonModalContainer
  from '@/components/containers/modals/profile/library/BaseProfileLibraryCommonModalContainer.vue'
import BaseAlbumsSimpleList
  from '@/components/lists/albums/BaseAlbumsSimpleList.vue'

export default {
  name: 'BaseCommonAlbumsModal',
  components: {
    BaseProfileLibraryCommonModalContainer,
    BaseAlbumsSimpleList
  },
  props: {
    profileId: String
  },
  data () {
    return {
      scope: 'albums'
    }
  },
  methods: {
    handleLinkClick () {
      this.hide()
    },
    show () {
      this.$refs
        .modal
        .show()
    },
    hide () {
      this.$refs
        .modal
        .hide()
    }
  }
}
</script>

<style lang="sass" scoped></style>
