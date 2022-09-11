const navbar = document.querySelector(".hero");
const opennav = document.querySelector(".open");
const closeNav = document.querySelector(".close");

opennav.onclick = () => {
	navbar.classList.add("opened");
};
closeNav.onclick = () => {
	navbar.classList.remove("opened");
};
