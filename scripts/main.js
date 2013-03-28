(function() {

  impress().init();

  _([
    'async-callback',
    'callback-pyramid'
  ]).forEach(function(step) {

    var movie = CodeMirror.movie(step + '-movie'),
        button = document.getElementById(step + '-button');

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

  });
})();