const navHamburgerBtn = document.querySelector('.nav__button')
const nav = document.querySelector('.nav')
const navMenuMobile = document.querySelector('.nav__subpagesmobile')
const navMenuMobileEl = document.querySelectorAll('.nav__subpagesmobile > .nav__href')

const scrollBreakpoint = 100

navHamburgerBtn.addEventListener('click', () => {
	navHamburgerBtn.classList.toggle('is-active')
	navMenuMobile.classList.toggle('nav__subpagesmobile--dflex')
	document.body.classList.toggle('body--overflow')
	if (window.scrollY < scrollBreakpoint) {
		nav.classList.toggle('nav--normalbg')
	}
})

navMenuMobileEl.forEach(el => {
	el.addEventListener('click', () => {
		navHamburgerBtn.classList.remove('is-active')
		navMenuMobile.classList.remove('nav__subpagesmobile--dflex')
		document.body.classList.remove('body--overflow')
	})
})

window.addEventListener('scroll', () => {
	nav.classList.toggle('nav--normalbg', window.scrollY >= scrollBreakpoint)
})
