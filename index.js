// import ancientsData from "./data/ancients";
const azathoth = document.querySelector('.ancient-card-1');

function checkAnciont() {
    azathoth.classList.add('checked-antiont')
}
azathoth.addEventListener('click', checkAnciont);

const medium = document.querySelector('.medium');

//  function getAncientsData() {
//     ancientsObj.name = ancientsData.name
//     console.log(ancientsData)
// }
// getAncientsData()
// let randomNum = 0;
function getRandomNum(max){
    return Math.floor(Math.random() * (max + 1))
}

let blueArr = [];
let brownArr = [];
let greenArr = [];

function getGreenCards(){
    for (let i = 0; i < 5; i++){
        let cardNumG = getRandomNum(18) ;
        if (greenArr.includes(cardNumG)){
            i--
        } else greenArr.push(cardNumG)
    }
}

function getBrownCards(){
    for (let i = 0; i < 9; i++){
        let cardNumBr = getRandomNum(21) ;
        if (brownArr.includes(cardNumBr)){
            i--
        } else brownArr.push(cardNumBr)
    }
}
function getBlueCards(){
    for (let i = 0; i < 2; i++){
        let cardNumBl = getRandomNum(12);
        console.log(cardNumBl);
        if (blueArr.includes(cardNumBl)){
            i--
        } else blueArr.push(cardNumBl)
    }
}

// getGreenCards();
// console.log(greenArr);
// getBrownCards();
// console.log(brownArr);
// getBlueCards()
// console.log(blueArr);

const srcGreen = []
const srcBrown = []
const srcBlue = []

const greenLink = 'https://raw.githubusercontent.com/Luffi2539/eldritch-codejam/main/assets/MythicCards/green/'

function setGreenCards(){
    getGreenCards();
    for (let i = 0; i < greenArr.length; i++){
        srcGreen.push(`${greenLink}green${greenArr[i]}.png`)
    }
}

function setBrownCards(){
    getBrownCards();
    for (let i = 0; i < brownArr.length; i++){
        srcBrown.push(`https://raw.githubusercontent.com/Luffi2539/eldritch-codejam/main/assets/MythicCards/brown/brown${brownArr[i]}.png`)
    }
}
function setBlueCards(){
    getBlueCards();
    console.log(blueArr.length);
    console.log(blueArr);

    for (let i = 0; i < blueArr.length; i++){
        srcBlue.push(`https://raw.githubusercontent.com/Luffi2539/eldritch-codejam/main/assets/MythicCards/blue/blue${blueArr[i]}.png`)
    }
    console.log(srcBlue);

}
const stages = {
    'stage-1': {
        'green': 1,
        'brown' : 2,
        'blue': 1,
    },
    'stage-2': {
        'green': 2,
        'brown' : 3,
        'blue': 1,
    },
    'stage-3': {
        'green': 2,
        'brown' : 4,
        'blue': 0,
    }
}


// const img = new Image();
//     img.src = `${imgSrcArr[0]}`
//     // img.onload = () => {      
//     //     card.style.backgroundImage = `url(${img.src})`;
//     // }; 
//     card.style.backgroundImage = `url(${img.src})`;
//     // body.style.backgroundImage = `url(https://raw.githubusercontent.com/viktorykings/codejam-eldritch/eldritch/assets/MythicCards/brown/brown10.png?token=GHSAT0AAAAAABXN3QMXQ6X2QTXW6MOCAIWYYYH3GWQ)`;

//     console.log(img.src);
function setCards() {
    setGreenCards();
    setBrownCards();
    setBlueCards();
    console.log('click');
    console.log(srcGreen);
}

let flatStage1 = []
const stage1 = [];
    const stage2 = [];
    const stage3 = [];
function mixCards() {
    setCards()
    const greenSt1 = [];
    const greenSt2 = [];
    const greenSt3 = [];
    const brownSt1 = [];
    const brownSt2 = [];
    const brownSt3 = [];
    const blueSt1 = [];
    const blueSt2 = [];
    const blueSt3 = [];
    

    // mix greens
    for(let i = 0; i < srcGreen.length; i++){
        let num = getRandomNum(4)
        if (greenSt1.length < stages["stage-1"].green){
            if (greenSt1.includes(srcGreen[num])){
                i--
            } else {
                greenSt1.push(srcGreen[num])
            }
        } else if (greenSt2.length < stages["stage-2"].green){
            if (greenSt1.includes(srcGreen[num]) || greenSt2.includes(srcGreen[num])){
                i--
            } else {
                greenSt2.push(srcGreen[num])
            }
        } else {
            if (greenSt1.includes(srcGreen[num]) || greenSt2.includes(srcGreen[num]) || greenSt3.includes(srcGreen[num])){
                i--
            } else {
                greenSt3.push(srcGreen[num])
            }
        }
    }
    // mix browns
    for(let i = 0; i < srcBrown.length; i++){
        let num = getRandomNum(8)
        if (brownSt1.length < stages["stage-1"].brown){
            if (brownSt1.includes(srcBrown[num])){
                i--
            } else {
                brownSt1.push(srcBrown[num])
            }
        } else if (brownSt2.length < stages["stage-2"].brown){
            if (brownSt1.includes(srcBrown[num]) || brownSt2.includes(srcBrown[num])){
                i--
            } else {
            brownSt2.push(srcBrown[num])
        }} else {
            if (brownSt1.includes(srcBrown[num]) || brownSt2.includes(srcBrown[num]) || brownSt3.includes(srcBrown[num])){
                i--
            } else {
                 brownSt3.push(srcBrown[num])
                }
        }
    } 
    // mix blues
    for(let i = 0; i < srcBlue.length; i++){
        let num = getRandomNum(1)
        if (blueSt1.length < stages["stage-1"].blue){
            if (blueSt1.includes(srcBlue[num])){
                i--
            } else {
                blueSt1.push(srcBlue[num])
            }
        } else if (blueSt2.length < stages["stage-2"].blue){
            if (blueSt1.includes(srcBlue[num]) || blueSt2.includes(srcBlue[num])){
                i--
            } else {
                blueSt2.push(srcBlue[num])
            }
        } else {
            if(blueSt1.includes(srcBlue[num]) || blueSt2.includes(srcBlue[num]) || blueSt3.includes(srcBlue[num])){
                i--
            } else{
                blueSt3.push(srcBlue[num])
            }
        }
    }

    stage1.push(greenSt1, brownSt1, blueSt1)
    flatStage1 = stage1.flat(1)
    console.log(stage1);
    console.log(flatStage1);

// console.log(brownArr);
// console.log(brownSt1);
// console.log(brownSt2);
// console.log(brownSt3);

    

}

console.log(flatStage1);

const card = document.querySelector('.cards');
const deck = document.querySelector('.deck');

function openCard() {
    // for(let i = 0; i < flatStage1.length; i++){
    

const img = new Image();
  
img.src = `${flatStage1[ind-1]}`
    

    //     // img.onload = () => {      
    //     //     card.style.backgroundImage = `url(${img.src})`;
    //     // }; 
    card.style.backgroundImage = `url(${img.src})`;

    // }
        console.log('open');
    
}
let ind = 0;  
   deck.onclick = function(e){
  ind += 1;
  console.log(ind)}
// function getNextCard(){
//     openCard()
//     let ind = 0;  
//    deck.onclick = function(e){
//   count += 1;
//   console.log(count)
// }
//     const img = new Image();
// let i = 0
//     img.src = `${flatStage1[i++]}`
//     card.style.backgroundImage = `url(${img.src})`;


    
// }


// deck.onclick = function() {
//     let count = 0
//    ++count;
//     console.log(count);
// }
medium.addEventListener('click', mixCards);
// deck.addEventListener('click', getNextCard)
deck.addEventListener('click', openCard)