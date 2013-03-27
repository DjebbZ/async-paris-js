(function() {
  // var testTextArea = document.getElementById('test');
  var movie = CodeMirror.movie('test');
  movie.play();

  // var button = document.getElementById('play');
  // button.addEventListener('click', function() {
  //   if (movie.state() === 'play') {
  //     movie.pause();
  //     this.innerHTML = 'Play';
  //   } else {
  //     movie.play();
  //     this.innerHTML = 'Pause';
  //   }
  // });

  // movie.on('stop', function() {
  //   button.innerHTML = 'Play';
  // });
})();