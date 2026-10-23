(function () {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, f = document.getElementById('cf'); if (!f) return;
    var q = new URLSearchParams(location.search).get('event'); if (q) { var o = [].slice.call(f.type.options).filter(function (x) { return x.text.indexOf(q) > -1 })[0]; if (o) f.type.value = o.text }
    f.onsubmit = function (e) { e.preventDefault(); var ok = true; f.querySelectorAll('[required]').forEach(function (i) { var m = '', v = i.value.trim(); if (!v) m = 'This field is required.'; else if (i.type == 'email' && !re.test(v)) m = 'Enter a valid email address.'; i.nextElementSibling.textContent = m; i.setAttribute('aria-invalid', !!m); if (m) ok = false }); document.getElementById('ok').hidden = !ok; if (ok) f.reset() }
})();
