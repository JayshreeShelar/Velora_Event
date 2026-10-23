(function () {
    var g = document.querySelector('[data-filter-group]');
    if (g) { var items = document.querySelectorAll('[data-cat]'); g.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; g.querySelectorAll('button').forEach(function (x) { x.classList.remove('on') }); b.classList.add('on'); items.forEach(function (i) { i.style.display = (b.dataset.f == 'all' || i.dataset.cat == b.dataset.f) ? '' : 'none' }) }) }
    var lb = document.getElementById('lb'); if (!lb) return;
    var fig = [].slice.call(document.querySelectorAll('.gi')), cur = 0, im = lb.querySelector('img'), cp = lb.querySelector('figcaption');
    function vis() { return fig.filter(function (f) { return f.style.display != 'none' }) }
    function show(i) { var v = vis(); cur = (i + v.length) % v.length; var s = v[cur].querySelector('img'); im.src = s.src.replace('w=700', 'w=1400'); im.alt = s.alt; cp.textContent = s.alt }
    function open(f) { lb.hidden = false; show(vis().indexOf(f)) }
    fig.forEach(function (f) { f.onclick = function () { open(f) }; f.onkeydown = function (e) { if (e.key == 'Enter') open(f) } });
    lb.querySelector('.pv').onclick = function () { show(cur - 1) }; lb.querySelector('.nx').onclick = function () { show(cur + 1) };
    lb.onclick = function (e) { if (e.target === lb || e.target.dataset.close !== undefined) lb.hidden = true };
    addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key == 'Escape') lb.hidden = true; if (e.key == 'ArrowLeft') show(cur - 1); if (e.key == 'ArrowRight') show(cur + 1) })
})();
