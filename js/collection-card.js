/**
 * 首页合集卡片：展开 / 收起交互
 */
(function () {
  function bind() {
    document.querySelectorAll('.collection-toggle').forEach(function (btn) {
      if (btn.dataset.collectionBound) return;
      btn.dataset.collectionBound = '1';
      btn.addEventListener('click', function () {
        var card = btn.closest('.collection-card');
        if (!card) return;
        var expanded = card.classList.toggle('expanded');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        var text = btn.querySelector('.collection-toggle-text');
        if (text) text.textContent = expanded ? '收起' : '展开';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
