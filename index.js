import ancientsData from "./data/ancients";
const azathoth = document.querySelector('.ancient-card-1');

function checkAnciont() {
    azathoth.classList.add('checked-antiont')
}
azathoth.addEventListener('click', checkAnciont);

const medium = document.querySelector('.medium');

const ancientsObj = new Object();
const blue = [
    'bl1', 'bl2', 'bl3', 'bl4', 'bl5', 'bl6', 'bl7', 'bl8', 'bl9', 'bl10'
]
const brown = [
    'br1', 'br2', 'br3', 'br4', 'br5', 'br6', 'br7', 'br8', 'br9', 'br10', 'br11', 'br12']

const green = [
    'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12'

]

 function getAncientsData() {
    ancientsObj.name = ancientsData.name
    console.log(ancientsData)
}
getAncientsData()
// let randomNum = 0;
function getRandomNum(max){
    return Math.floor(Math.random() * (max + 1))
}
// getRandomNum(10)
// console.log(randomNum);
 
let arr = [];

function getBlueCards(){
    for (let i = 0; i < 5; i++){
        let randomNum = getRandomNum(9)
        console.log(randomNum);
        console.log('wtf');
        arr.push(blue[randomNum])
    }
    let set = new Set(arr)
    console.log(set);
    arr = Array.from(set);
    console.log(arr);
    arr = arr.slice(0,2)
}
getBlueCards()
console.log(arr);

function setCards() {
    // 5gr 9br 2bl


}

medium.addEventListener('click', setCards)