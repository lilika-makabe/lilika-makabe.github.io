// カルーセル - 自動スライド + 手動操作
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel .work-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const autoPlayInterval = 4000; // 4秒ごとに切り替え
    let autoPlay;
    
    // ドットを生成
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    function goTo(index) {
        currentIndex = index;
        if (currentIndex >= totalCards) currentIndex = 0;
        if (currentIndex < 0) currentIndex = totalCards - 1;
        updateCarousel();
        resetAutoPlay();
    }
    
    function next() {
        goTo(currentIndex + 1);
    }
    
    function prev() {
        goTo(currentIndex - 1);
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlay);
        autoPlay = setInterval(next, autoPlayInterval);
    }
    
    // ボタン操作
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    
    // ホバーで一時停止
    track.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.addEventListener('mouseleave', resetAutoPlay);
    
    // 自動再生開始
    autoPlay = setInterval(next, autoPlayInterval);
});
