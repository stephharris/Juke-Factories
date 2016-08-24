'use strict';

juke.factory('PlayerFactory', function(AlbumFetchingFactory){
  var playerObj = {};
  var playing = false;
  var currentSong = null;
  var audio = document.createElement('audio');
  // non-UI logic in here
  playerObj.start = function(song) {

    this.pause();
    playing = true;
    currentSong = song;
    //if (song === this.currentSong) return audio.play()
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
  };


  playerObj.pause = function(){
     audio.pause();
     playing = false;
  };

  playerObj.resume = function(){
    audio.play();
    playing = true;
  };

  playerObj.isPlaying = function(){
    return playing;
  };

  playerObj.getCurrentSong = function(){
    return currentSong;
  };

  playerObj.next = function(album.id){
    //pause current song
    //change currentSong to next one
    //play currentSong
    if(playing){
      this.pause()
    }
    currentSong = song.id

  AlbumFetchingFactory.fetchById(currentSongid)

  };

   playerObj.previous = function(){};

  return playerObj;
});
