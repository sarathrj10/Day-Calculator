//selecting screens
const home=document.getElementById('homescreen');
const result=document.getElementById('resultscreen');
const selector=document.getElementById('selectorscreen');
const negative=document.getElementById('negativescreen');
//adding screen height
home.setAttribute('style',`height: ${window.innerHeight}px;`)

//homescreen
const yesbtn=document.getElementById('buttons').firstElementChild;
const nobtn=document.getElementById('buttons').lastElementChild;
//adding listseners to homescreen
//eventlistner to negative screen
nobtn.addEventListener('click',gonegative);
function gonegative(){
    home.style.display='none';
    result.style.display='none';
    negative.style.display='block';
   setTimeout(function(){
   window.close();
   },3000)
}
//eventlistener to selector screen
yesbtn.addEventListener('click',gonselector);
function gonselector(){
    home.style.display='none';
    selector.style.display='block'; 
    for(var i=1;i<=31;i++){
        const daychoice=document.getElementById('selectday');
        // console.log(daychoice)
        const options=document.createElement('option');
        options.appendChild(document.createTextNode(i));
        daychoice.appendChild(options);
    }
    for(var i=1960;i<=2020;i++){
        const yearchoice=document.getElementById('selectyear');
        // console.log(daychoice)
        const options=document.createElement('option');
        options.appendChild(document.createTextNode(i));
        yearchoice.appendChild(options);
    }
}
//event listner to go button
const gobtn=document.getElementById('go');
gobtn.addEventListener('click',runcalculation);
function runcalculation(){
    // getting year from selectors
    const year=parseInt(document.getElementById('selectyear').value);
    //getting month and day
    const date=new Date();
    const month=date.getMonth();
    const day=date.getDate();
    //convert year to days
    const x=((2020-year)*365);
    //convert months to days
    const y=mnthtodays(month);
    //total days
    let total=x+y+day;
    //adding leap year
    let count=0;
    for(var i=1960;i<=year;i++){
       if((i%4 == 0) && (i%100 != 0) || (i%400 ==0 )){
           count=count+1;
       }
    }
    total=total+count;
    //displaying in the result screen
    const declare=document.createElement('h2');
    declare.className='mt-4 resultdeclare';
    declare.innerHTML=`You have succesfully compleated <span>${total}</span> days on Earth`;
    const buttons=document.querySelector('#resultbuttons');
    result.insertBefore(declare,buttons);
    selector.style.display='none';
    result.style.display='block';
    //selecting the resultscreen buttons
    const goback=document.querySelector('#resultbuttons').firstElementChild;
    const quit=document.querySelector('#resultbuttons').lastElementChild;
    //adding listeners to quit button
    quit.addEventListener('click',gonegative)
    //adding functions to the Goback button
    goback.addEventListener('click',function(){
        result.style.display='none';
        result.querySelector('.resultdeclare').remove();
        selector.style.display='block';
    });
}
function mnthtodays(month){
    if(month == 0){
        return 0;
    }
    if(month == 1){
        return 31;
    }
    if(month == 2){
        return 59;
    }
    if(month == 3){
        return 90;
    }
    if(month == 4){
        return 120;
    }
    if(month == 5){
        return 151;
    }
    if(month == 6){
        return 181;
    }
    if(month == 7){
        return 212;
    }
    if(month == 8){
        return 243;
    }
    if(month == 9){
        return 273;
    }
    if(month == 10){
        return 304;
    }
    if(month == 11){
        return 334;
    }
}