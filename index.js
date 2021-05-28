const landingPage = document.getElementById('landing');
const homePage = document.getElementById('home');
const scrollPos = document.querySelector(':root');

// Setting the page height to the height of the landing page and home page combined
// so that the page is scrollable
document.body.style.height = `${homePage.scrollHeight + landingPage.scrollHeight}px`;

// === 3D TRANSFORM ===
window.addEventListener('scroll', () => {
    // If bottom of landing page is still not at the top of the page, send transform degrees to css
    if (landingPage.getBoundingClientRect().bottom > 0) {
        scrollPos.style.setProperty('--transform', `${parseFloat(90 - landingPage.getBoundingClientRect().bottom / window.innerHeight * 90)}deg`)
        landingPage.style.opacity = `${landingPage.getBoundingClientRect().bottom / window.innerHeight}`
        homePage.style.opacity = `${1 - landingPage.getBoundingClientRect().bottom / window.innerHeight}`
    }
    // if bottom of landing page is higher than top of screen, set degrees to 90 incase it couldnt update quick enough
    else {
        scrollPos.style.setProperty('--transform', '90deg')
        landingPage.style.opacity = '1';
        homePage.style.opacity = '1';
    }
})