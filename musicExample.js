const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute() {
    music.volume = 0;
  },
  next() {
    music.trackIdx += 1;
    this.currentTrack = this.currentPlaylist[this.trackIdx];
    console.log("Now Playing: ", music.currentTrack);
    console.log("Playlist: ", music.currentPlaylist);
  },
};

if (!process.argv[2]) {
console.log("Welcome to The Music Machine.");
console.log("Now Playing: ", music.currentTrack);
console.log("Run with 'next' to play the next song");
console.log("Playlist: ", music.currentPlaylist);
} else if (process.argv[2] === 'next') {
  music.next();
}
