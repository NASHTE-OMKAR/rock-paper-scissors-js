let choices = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg");
let usercon = document.querySelector("#user");
let comcon = document.querySelector("#com");
let re = document.querySelector("#RESET");
let ccmr = document.querySelector("#ccm");
let ycmr = document.querySelector("#ycm");
let scb = document.querySelector(".score-bord");
let usercn = 0, comcn = 0;


let genecomp = () => {
    let ranid = Math.floor(Math.random() * 3);
    let arr = ["paper", "rock", "scss"];

    return arr[ranid];
}

let upnm = (win, userS, comp) => {

    ycmr.innerText = `Your Choice is ${userS}`;
    ccmr.innerText = `Computor Choice is ${comp}`;
    console.log("from update game " + userS + "=" + comp)
    if (win === "You") {
        usercn++;

        usercon.innerText = `${usercn}`;

        msg.innerText = `${win} win`;
        msg.style.backgroundColor = "chartreuse";


    } else if (win === "Comp") {
        comcn++;
        comcon.innerText = `${comcn}`;

        msg.innerText = `You Lost`;
        msg.style.backgroundColor = "brown";
    }


}

const playgame = (userS) => {
    let comp = genecomp();
    let win = " ";
    console.log("from play game " + userS + "=" + comp);
    if (comp === userS) {
        console.log("from draw   " + userS + "=" + comp);
        msg.innerText = "Game Draw , Play Again";
        msg.style.backgroundColor = "#c9c9c9";
        ycmr.innerText = `Your Choice is ${userS}`;
        ccmr.innerText = `Computor Choice is ${comp}`;
    } else {

        if (userS === "rock") {
            win = comp === "scss" ? "You" : "Comp";
            win = comp === "paper" ? "Comp" : "You";

        } else if (userS === "paper") {

            win = comp === "scss" ? "Comp" : "You";
            win = comp === "rock" ? "You" : "Comp";

        } else if (userS === "scss") {

            win = comp === "rock" ? "Comp" : "You";
            win = comp === "paper" ? "You" : "Comp";
        }

        upnm(win, userS, comp);
    }
}
choices.forEach((choise) => {
    choise.addEventListener("click", () => {
        let userS = choise.getAttribute("id");
        visall();
        playgame(userS);



    })

});

re.addEventListener("click", () => {
    console.log("reset game");
    resetgame();
});

let resetgame = () => {
    comcn = 0;
    usercn = 0;
    usercon.innerText = `${usercn}`;
    comcon.innerText = `${comcn}`;
    msg.style.backgroundColor = "#c9c9c9";
    msg.innerText = "ROCK and ROLL";
    hidsall();

}

let visall = () => {
    ccmr.style.visibility = "visible";
    ycmr.style.visibility = "visible";
    scb.style.visibility = "visible";
}

let hidsall = () => {
    ccmr.style.visibility = "hidden";
    ycmr.style.visibility = "hidden";
    scb.style.visibility = "hidden";
}