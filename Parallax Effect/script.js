const wrap = document.querySelector('.wrapper')
const wrapTwo = document.querySelector('.wrapper-two')
const footer = document.querySelector('footer')
const header = document.querySelector('header')
const lightDarkMode = document.querySelector('.header-buttons img')

const heroButton = document.querySelector('#hero button')
const contentHeaderOne = document.querySelector('.content-left-box .one')
const contentHeaderTwo = document.querySelector('.content-left-box .two')
const contentImage = document.querySelector('.content-right-box img')
const movingForeground = document.querySelector('#mission .foreground')

const heroTitle = document.querySelector('#hero h2')
const pictureTitle = document.querySelector('.content-right-box h2')
const missionTitle = document.querySelector('#mission h2')
const connectTitle = document.querySelector('#mission h2[title="connect"]')

const contentBg = document.querySelector('#content')
const navLinks = document.querySelectorAll('ul li a')
const h2 = document.querySelectorAll('h2')
const h5 = document.querySelectorAll('h5')
const p = document.querySelectorAll('p')

// Since my wrappers are not placed ideally, footer would usually stick out until the user scrolls back to the top of the 1st wrapper.
// To prevent this, I added EL on 2nd wrapper that removes the footer and puts it back again if the bottom is reached.
let checkPos

wrapTwo.addEventListener('scroll', (e) => {
  let pos = wrapTwo.scrollTop
  movingForeground.style.left = `${pos}px`
  movingForeground.style.bottom = `-${pos / 2}px`
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
  //console.log(checkPos, pos)
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
    setDarkMode()
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

// Apply darkmode colors
function setDarkMode() {
  header.style.backgroundColor = 'var(--navColorDark)'
  contentBg.style.backgroundColor = 'var(--contentColorDark)'
  navLinks.forEach(link => link.style.color = 'var(--textColorDark)')
  h2.forEach(htwo => htwo.style.color = 'var(--textColorDark)')
  h5.forEach(hfive => hfive.style.color = 'var(--textColorDark)')
  p.forEach(par => par.style.color = 'var(--textColorDark)')
  document.querySelector('#logo h4').style.color = 'var(--textColorDark)'
  document.querySelector('#hero h2').style.color = 'white'
  document.querySelector('#partners h2').style.color = '#dadada'
  document.querySelectorAll('#mission .space-left').forEach(side => side.style.backgroundColor = 'var(--contentColorDark)')
  document.querySelectorAll('#mission .space-right').forEach(side => side.style.backgroundColor = 'var(--contentColorDark)')
}

//Apply light mode colors
function setLightMode() {
  header.style.backgroundColor = 'var(--navColor)'
  contentBg.style.backgroundColor = 'var(--contentColor)'
  navLinks.forEach(link => link.style.color = 'var(--mainColor)')
  h2.forEach(htwo => htwo.style.color = 'var(--textColor)')
  h5.forEach(hfive => hfive.style.color = 'var(--textColor)')
  p.forEach(par => par.style.color = 'var(--textColor)')
  document.querySelector('#logo h4').style.color = 'var(--textColor)'
  document.querySelector('#hero h2').style.color = 'white'
  document.querySelector('#partners h2').style.color = '#dadada'
  document.querySelector('#mission .space-left').style.backgroundColor = '#dadada'
  document.querySelectorAll('#mission .space-left').forEach(side => side.style.backgroundColor = 'var(--contentColor)')
  document.querySelectorAll('#mission .space-right').forEach(side => side.style.backgroundColor = 'var(--contentColor)')
}
// +++++++ ADD MEDIAS, GET PERCENTAGE OF CURRENT SCROLL LOCATION AND DISPLAY IT +++++

// Place the position at which you want the scroll animations to happen in a variable - var = window.innerHeight, maybe include getBoundingClientRect() for wrappers

