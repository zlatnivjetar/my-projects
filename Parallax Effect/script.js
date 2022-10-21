const wrap = document.querySelector('.wrapper')
const wrapTwo = document.querySelector('.wrapper-two')
const footer = document.querySelector('footer')
const header = document.querySelector('header')
const lightDarkMode = document.querySelector('.header-buttons img')

const heroButton = document.querySelector('#hero button')
const contentBg = document.querySelector('#content')
const contentHeaderOne = document.querySelector('.content-left-box .one')
const contentHeaderTwo = document.querySelector('.content-left-box .two')
const contentImage = document.querySelector('.content-right-box img')
const movingForeground = document.querySelector('#mission .foreground')

const heroTitle = document.querySelector('#hero h2')
const pictureTitle = document.querySelector('.content-right-box h2')
const missionTitle = document.querySelector('#mission h2')
const connectTitle = document.querySelector('#mission h2[title="connect"]')

const navLinks = document.querySelectorAll('ul li a')
const h2 = document.querySelectorAll('h2')
const h5 = document.querySelectorAll('h5')
const p = document.querySelectorAll('p')

// Since my wrappers are not placed ideally, footer would usually stick out until the user scrolls back to the top of the 1st wrapper.
// To prevent this, I added EL on 2nd wrapper that removes the footer and puts it back again if the bottom is reached.
let checkPos
wrapTwo.addEventListener('scroll', (e) => {
  let pos = wrapTwo.scrollTop
  let triggerPos = wrapTwo.getBoundingClientRect().height * 1.03
  let connectTop = connectTitle.getBoundingClientRect().top

  if (connectTop < triggerPos) {
    connectTitle.classList.remove('puff-in')
  }

  if (pos > 530) {
    checkPos = 400
    footer.classList.remove('hidden')
  }
  if (pos < checkPos) {
    wrapTwo.scrollTo(0, checkPos + 80)
    footer.classList.add('hidden')
    checkPos = null
  }

  movingForeground.style.left = `${pos}px`
  movingForeground.style.bottom = `-${pos / 2}px`
  console.log(pos)
})

// Add text effect depending on the scroll position on the 1st wrapper
wrap.addEventListener('scroll', (e) => {
  let pos = wrap.scrollTop
  let triggerPos = window.innerHeight * 0.85
  let headerOneTop = contentHeaderOne.getBoundingClientRect().top
  let headerTwoTop = contentHeaderTwo.getBoundingClientRect().top
  let pictureTitlePos = pictureTitle.getBoundingClientRect().top
  let contentImagePos = contentImage.getBoundingClientRect().top
  let missionTitlePos = missionTitle.getBoundingClientRect().top

  if (headerTwoTop < triggerPos) {
    contentHeaderTwo.classList.remove('from-left')
  }
  if (headerOneTop < triggerPos) {
    contentHeaderOne.classList.remove('from-left')
  }
  if (pictureTitlePos < triggerPos) {
    pictureTitle.classList.remove('puff-in')
  }
  if (contentImagePos < triggerPos) {
    contentImage.classList.remove('tilt-in')
  }
  if (missionTitlePos < triggerPos) {
    missionTitle.classList.remove('puff-in')
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
  }, 3000);
})

const hamburgerMenu = document.querySelector('.hamburger-menu')
const navMobile = document.querySelector('nav.mobile')

// Open mobile navigation
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open')
  navMobile.classList.toggle('open')
  wrap.classList.toggle('open')
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
  document.querySelectorAll('#mission h2').forEach(title => title.style.color = '#000000')
  document.querySelectorAll('#mission h5').forEach(text => text.style.color = '#000000')
  document.querySelectorAll('#mission p').forEach(text => text.style.color = '#000000')

}