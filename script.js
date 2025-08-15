const question=document.querySelector(".question")
const gif=document.querySelector(".gif")
const yesBtn=document.querySelector(".yes-btn")
const noBtn=document.querySelector(".no-btn")
yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "Yayy I love you";
    gif.src="https://gifdb.com/images/high/bear-couple-stickers-animated-funny-hug-p32obe0cigrfy9b5.gif"
})
noBtn.addEventListener("mouseover", ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})