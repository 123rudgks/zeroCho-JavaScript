let fisrtNum = "";
let secondNum;
let operator;
let result;


let btn = document.querySelectorAll("td");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (event) => {
        let clicked = event.target.textContent;
        if (Number(clicked) || Number(clicked) == 0) { // click된 게 숫자(참)이라면
            fisrtNum += clicked;
            console.log(Number(clicked));
            console.log(fisrtNum);
        }
    });
}



