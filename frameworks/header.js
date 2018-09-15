const navbar = document.getElementById('navbar')
const alternaMenuMobile = () => {
  return navbar.classList.toggle('is-active')
}

document.getElementById('navbar-burger').addEventListener('click', alternaMenuMobile)
