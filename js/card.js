
const buttonScrollright = document.querySelector("#scrollbuttonRigth");
const buttonScrollleft = document.querySelector("#scrollbuttonleft");
const containerscroll = document.querySelector(".containerscroll");

buttonScrollright.addEventListener("click", () => {
    containerscroll.scrollLeft -= 350;
});

buttonScrollleft.addEventListener("click", () => {
    containerscroll.scrollLeft += 350;
});


