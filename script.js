const display=document.getElementById('inputs');
const history=document.getElementById('historyList');
let hist=[];
let score=0;
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value='';
}

function clearLastNum(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let result=eval(display.value);
        hist.push(`${display.value} = ${result}`);
        // keep only last 5
        if (hist.length > 5) {
            hist.shift();
        }
        display.value = result;
        if(result > -1 ){
            score+=1;
            alert("Positive Result, your score is "+ score);
        }else{
            score-=1;
            alert("Negetive Result, your score is "+ score);
        }

    }
    catch(error){
        display.value='Error';
    }
}

function historyRec(){
    history.style.display = 'block';
    history.innerHTML = hist.join('<br>');
}

function DELhistoryRec(){
    history.innerHTML ='';
}