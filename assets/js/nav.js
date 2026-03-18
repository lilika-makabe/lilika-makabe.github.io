// 共通ナビゲーション - ここを変更すれば全ページに反映
function createNav() {
    const logoText = "Lili";
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = `
    <div class="container">
        <a href="index.html" class="logo">${logoText}</a>
        <ul class="nav-links">
            <li><a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a></li>
            <li><a href="about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>About</a></li>
            <li><a href="publications.html" ${currentPage === 'publications.html' ? 'class="active"' : ''}>Publications</a></li>
            <li><a href="cv.html" ${currentPage === 'cv.html' ? 'class="active"' : ''}>CV</a></li>
            <li><a href="contact.html" ${currentPage === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
        </ul>
    </div>
    `;
    
    document.querySelector('nav').innerHTML = navHTML;
}

document.addEventListener('DOMContentLoaded', createNav);
