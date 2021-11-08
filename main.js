
window.addEventListener("load",init)

const levels = {
    easy:7,
    medium:5,
    hard:3
};
const current_level=levels.easy;
let time=current_level;
let score =0;
let isPlaying;
//DOM element 
const current_word=document.querySelector("#current-word")
const word_input=document.querySelector("#word-input")
const display_score =document.querySelector("#score")
const display_time=document.querySelector("#time")
const message=document.querySelector("#message")

//array of words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion',
    'Avengers',
    'Stark',
    'Thor',
    'Captain'
];


 function init()
 {
    // console.log(words.length);
     display_words(words)
     word_input.addEventListener('input',start_match)
     setInterval(countdown,1000)
     setInterval(checkstatus,50)
 }

 //generate random words
 function display_words(words){
     const random_index=Math.floor(Math.random() * words.length);
     //console.log(words[random_index])
     current_word.innerHTML=words[random_index]
 }
 
 function start_match(){
     console.log("bdh")
     if(match_word()){
        word_input.value=""
        display_words(words) 
        time=current_level+1;
           score++;   
     }
     display_score.innerHTML=score
 }

 //match curretnt word to  input word
 function match_word(){
    if(word_input.value===current_word.innerHTML){
        message.innerHTML="Correct !!!!"
        return true;
    }else{
        message.innerHTML="Incorrect !!!!"
        return false;
    }
}

function countdown()
{
    //console.log("hello");
	if(time>0){
		// Decerement
	time--;
	}
	else if(time ==0){
	    time=0;
        isPlaying=false;
    }
	display_time.innerHTML = time;

}

function checkstatus(){
        if(isPlaying='false' && time==0){
    message.innerHTML="Game Over !!!"
    //display_words(words)

    }
}
