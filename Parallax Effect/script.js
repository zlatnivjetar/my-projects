const wrap = document.querySelector('.wrapper')
const wrapTwo = document.querySelector('.wrapper-two')
const footer = document.querySelector('footer')
const lightDarkMode = document.querySelector('.header-buttons img')

const heroTitle = document.querySelector('#hero h2')
const heroButton = document.querySelector('#hero button')
const contentHeaderOne = document.querySelector('.content-left-box .one')
const contentHeaderTwo = document.querySelector('.content-left-box .two')
const pictureTitle = document.querySelector('.content-right-box h2')
const contentImage = document.querySelector('.content-right-box img')

const missionTitle = document.querySelector('#mission h2')
const connectTitle = document.querySelector('#mission h2[title="connect"]')

// Since my wrappers are not placed ideally, footer would usually stick out until the user scrolls back to the top of the 1st wrapper.
// To prevent this, I added EL on 2nd wrapper that removes the footer and puts it back again if the bottom is reached.
let checkPos

wrapTwo.addEventListener('scroll', (e) => {
  let pos = wrapTwo.scrollTop
  if (pos === 707) {
    checkPos = 550
    footer.classList.remove('hidden')
  }
  if (pos < checkPos) {
    footer.classList.add('hidden')
    checkPos = null
    wrapTwo.scrollTo(0, 700)
  }
  if (pos > 150) {
    connectTitle.classList.remove('puff-in')
  }
  console.log(checkPos, pos)
})

// Add text effect depending on the scroll position on the 1st wrapper
wrap.addEventListener('scroll', (e) => {
  let pos = wrap.scrollTop
  console.log(pos)
  if (pos > 150) {
    contentHeaderOne.classList.remove('from-left')
  }
  if (pos > 200) {
    pictureTitle.classList.remove('puff-in')
  }
  if (pos > 250) {
    contentImage.classList.remove('tilt-in')
  }
  if (pos > 370) {
    contentHeaderTwo.classList.remove('from-left')
  }
  if (pos > 680) {
    missionTitle.classList.remove('puff-in')
  }
  if (pos > 1050) {
    setTimeout(() => {
      connectTitle.classList.remove('puff-in')
    }, 500);
  }
  if (pos < 50) {
    contentHeaderOne.classList.add('from-left')
    contentHeaderTwo.classList.add('from-left')
    pictureTitle.classList.add('puff-in')
    contentImage.classList.add('tilt-in')
    missionTitle.classList.add('puff-in')
    connectTitle.classList.add('puff-in')
  }
})

// Executed on reload
window.addEventListener('load', () => {
  window.scrollTo(0, 0)
  setTimeout(() => {
    heroTitle.style.animation = "glow 2s infinite"
    heroButton.style.animation = "glow 2s infinite"
  }, 3000);
})

// Swap between light and dark mode
let darkMode = false

lightDarkMode.addEventListener('click', () => {
  let current = lightDarkMode.getAttribute('src')
  if (current.includes('dark')) {
    lightDarkMode.setAttribute('src', '/images/lightmode.png')
    darkMode = true
  }
  if (current.includes('light')) {
    lightDarkMode.setAttribute('src', '/images/darkmode.png')
    darkMode = false
  }
  if (darkMode) {
    setDarkMode()
  }
  if (!darkMode) {
    setLightMode()
  }
})

// Add colors for darkmode in CSS
function setDarkMode() {
  console.log(document.querySelector(':root').getAttribute('--navColor'))
}

// Return original color values in CSS
function setLightMode() {
  console.log(document.querySelector(':root').getAttributeNames())

}
// +++++++ ADD TEXT ANIMATIONS ON SCROLL, ADD MEDIAS +++++

// header, nav, buttons, #content, content h2, content p
// header 