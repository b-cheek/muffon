export default function playerState () {
  return {
    isPlayerPanelVisible: false,
    isQueuePanelVisible: false,
    toggleQueuePanel: this.toggleQueuePanel,
    isQueueStart: this.isQueueStart,
    isQueueEnd: this.isQueueEnd,
    getQueueNextTrack: this.getQueueNextTrack,
    toggleAudio: this.toggleAudio,
    stopAudio: this.stopAudio,
    toggleMute: this.toggleMute,
    isMuted: false,
    volume: 100,
    changeVolume: this.changeVolume,
    handleVolumeChange: this.handleVolumeChange,
    isShuffle: false,
    toggleShuffle: this.toggleShuffle,
    isRepeat: false,
    toggleRepeat: this.toggleRepeat,
    currentTime: 0,
    duration: 0,
    handleLoadStart: this.handleLoadStart,
    handlePlay: this.handlePlay,
    handlePause: this.handlePause,
    handleProgress: this.handleProgress,
    handleTimeUpdate: this.handleTimeUpdate,
    handleAudioEnd: this.handleAudioEnd,
    secondsLoaded: 0,
    changeTime: this.changeTime,
    startTimeChange: this.startTimeChange,
    endTimeChange: this.endTimeChange,
    getTrack: this.getTrack,
    getTrackVariant: this.getTrackVariant,
    setCurrentAlbumData: this.setCurrentAlbumData
  }
}