(function() {

  impress().init();

  // var testTextArea = document.getElementById('test');
  var movie = CodeMirror.movie('async-callback-code');
  // movie.play();

  var button = document.getElementById('play-async-callback');
  button.addEventListener('click', function() {
    if (movie.state() === 'play') {
      movie.pause();
      this.innerHTML = 'Play';
    } else {
      movie.play();
      this.innerHTML = 'Pause';
    }
  });

  movie.on('stop', function() {
    button.innerHTML = 'Play';
  });
})();