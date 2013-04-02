(function() {

  // Launch Impress (slides)
  impress().init();

  // Setup behavior for code movies
  _([
    'async-callback',
    'callbacks-pyramid',
    'each',
    'map',
    'async-auto'
  ]).forEach(function(step) {

    var movie = CodeMirror.movie(step + '-movie'),
        playBtn = document.getElementById(step + '-button'),
        execBtn = document.getElementById(step + '-exec');

    // Play button behavior
    if (playBtn) {
      playBtn.addEventListener('click', function() {
        if (movie.state() === 'play') {
          movie.pause();
          this.innerHTML = 'Play';
        } else {
          movie.play();
          this.innerHTML = 'Pause';
        }
      });
      movie.on('stop', function() {
        playBtn.innerHTML = 'Play';
      });
    }


    // Execute code from a Code Mirror editor
    if (execBtn) {
      execBtn.addEventListener('click', function() {
        eval(movie._editor.getValue());
      });
    }

  });

})();