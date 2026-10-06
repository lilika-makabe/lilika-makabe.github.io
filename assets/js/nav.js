// 共通ナビゲーション - ここを変更すれば全ページに反映
function createNav() {
    const logoText = "Lilika";
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = `
    <div class="container">
        <a href="index.html" class="logo">${logoText}</a>
        <ul class="nav-links">
            <li><a href="index.html#about" ${currentPage === 'index.html' ? 'class="active"' : ''}>About</a></li>
            <li><a href="index.html#news">News</a></li>
            <li><a href="index.html#experience">Experience</a></li>
            <li><a href="index.html#publications">Publications</a></li>
            <li><a href="cv.html" ${currentPage === 'cv.html' ? 'class="active"' : ''}>CV</a></li>
        </ul>
    </div>
    `;
    
    document.querySelector('nav').innerHTML = navHTML;
}

document.addEventListener('DOMContentLoaded', createNav);
