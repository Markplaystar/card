(function () {
  'use strict';

  const card = document.querySelector('.card');
  if (!card) return;

  // 마우스 따라 카드가 살짝 기울어지는 효과
  card.addEventListener('mousemove', function (e) {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -8;
    const tiltY = (x - 0.5) * 8;
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  card.addEventListener('mouseleave', function () {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
})();
