(function () {
  var scriptEl = document.currentScript;
  var jsonUrl = scriptEl.getAttribute('data-search-json');
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var articles = [];
  var loaded = false;

  fetch(jsonUrl)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      articles = data;
      loaded = true;
      status.textContent = articles.length + ' articles indexed.';
      var params = new URLSearchParams(window.location.search);
      var q = params.get('q');
      if (q) {
        input.value = q;
        render(q);
      }
    })
    .catch(function () {
      status.textContent = 'Search index could not be loaded.';
    });

  function render(query) {
    var q = query.trim().toLowerCase();
    results.innerHTML = '';

    if (!q) {
      status.textContent = loaded ? articles.length + ' articles indexed.' : '';
      return;
    }

    var matches = articles.filter(function (a) {
      var haystack = (a.title + ' ' + a.dek + ' ' + a.section).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });

    status.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' for "' + query.trim() + '"';

    matches.forEach(function (a) {
      var link = document.createElement('a');
      link.className = 'teaser';
      link.href = a.url;

      var kicker = document.createElement('p');
      kicker.className = 'teaser__kicker';
      kicker.textContent = a.section;
      if (a.grade) {
        var badge = document.createElement('span');
        badge.className = 'teaser__grade' + (a.grade >= 65 ? ' teaser__grade--high' : a.grade < 45 ? ' teaser__grade--low' : '');
        badge.textContent = a.grade;
        kicker.appendChild(badge);
      }

      var headline = document.createElement('h2');
      headline.className = 'teaser__headline';
      headline.textContent = a.title;

      var dek = document.createElement('p');
      dek.className = 'teaser__dek';
      dek.textContent = a.dek;

      link.appendChild(kicker);
      link.appendChild(headline);
      link.appendChild(dek);
      results.appendChild(link);
    });
  }

  var debounceTimer;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var value = this.value;
    debounceTimer = setTimeout(function () { render(value); }, 120);
  });
})();
