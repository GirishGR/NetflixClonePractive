 function validateEmail(){
        let email = document.getElementById('email').value;
        if(email.length<1){
            document.getElementById('inerror').innerText='Please enter an email';
            document.getElementById('inerror').style.color='red';
        }else{
            if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")==null)
            {
    document.getElementById('inerror').innerText='Please enter valid email';
    document.getElementById('inerror').style.color='red';
            }
            else{
                document.getElementById('inerror').innerText='';
            }
            }
        }



     
let a = document.getElementById('Clicks');
let currDis = "none";

a.addEventListener('click', () =>{
    if (currDis ===  "none"){
        
document.getElementById('click').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis = "none2";
}
else{
    currDis = "none";
    
document.getElementById('click').style.display='none';
}
console.log(currDis);

}

)




let ab = document.getElementById('Clicks2');
let currDis1 = "none";

ab.addEventListener('click', () =>{
    if (currDis1 ===  "none"){
        
document.getElementById('click2').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis1 = "none2";

}
else{
    currDis1 = "none";
    
document.getElementById('click2').style.display='none';
}
console.log(currDis1);
}
)


// Click3;


let abc = document.getElementById('Clicks3');
let currDis2 = "none";

abc.addEventListener('click', () =>{
    if (currDis2 ===  "none"){
        
document.getElementById('click3').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis2 = "none2";

}
else{
    currDis2 = "none";
    
document.getElementById('click3').style.display='none';
}
console.log(currDis2);
}
)


let abcd = document.getElementById('Clicks4');
let currDis3 = "none";

abcd.addEventListener('click', () =>{
    if (currDis3 ===  "none"){
        
document.getElementById('click4').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis3 = "none2";

}
else{
    currDis3 = "none";
    
document.getElementById('click4').style.display='none';
}
console.log(currDis3);
}
)

let abcde = document.getElementById('Clicks4');
let currDis4 = "none";

abcde.addEventListener('click', () =>{
    if (currDis4 ===  "none"){
        
document.getElementById('click4').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis4 = "none2";

}
else{
    currDis4 = "none";
    
document.getElementById('click4').style.display='none';
}
console.log(currDis4);
}
)


let ac = document.getElementById('Clicks5');
let currDis5 = "none";

ac.addEventListener('click', () =>{
    if (currDis5 ===  "none"){
        
document.getElementById('click5').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis5 = "none2";

}
else{
    currDis5 = "none";
    
document.getElementById('click5').style.display='none';
}
console.log(currDis5);
}
)


let ad = document.getElementById('Clicks6');
let currDis6 = "none";

ad.addEventListener('click', () =>{
    if (currDis6 ===  "none"){
        
document.getElementById('click6').style.display='inherit';
document.querySelector('.FAQs').style.height='auto';
        currDis6 = "none2";

}
else{
    currDis6 = "none";
    
document.getElementById('click6').style.display='none';
}
console.log(currDis6);
}
)





// let bg = document.getElementById('Clicks');
// let curr = "none";

// bg.addEventListener('mouseover', () =>{
//     if (curr ===  "none"){
        
// document.getElementsByClassName('idk').style.backgroundColor= rgb(94, 91, 91);  

//         curr = "none2";

// }
// else{
//     curr = "none";
    
// document.getElementsByClassName('idk').style.backgroundColor= rgb(58, 57, 57); 
// }
// console.log(curr);
// }
// )

let background = document.getElementById('Clicks');

background.addEventListener('mouseover', () =>{
document.querySelector('.idk').style.backgroundColor= 'rgb(94, 91, 91)';

})

let background1 = document.getElementById('Clicks');

background1.addEventListener('mouseout', () =>{
document.querySelector('.idk').style.backgroundColor= 'rgb(58, 57, 57)';

})





// let background2 = document.getElementById('Clicks2');

// background2.addEventListener('mouseover', () =>{
// document.querySelector('.idk').style.backgroundColor= 'rgb(94, 91, 91)';

// })

// let background3 = document.getElementById('Clicks2');

// background4.addEventListener('mouseout', () =>{
// document.querySelector('.idk').style.backgroundColor= 'rgb(58, 57, 57)';

// })



function validateEmail2(){
    let email2 = document.getElementById('email2').value;
    if(email2.length<1){
        document.getElementById('inerror2').innerText='Please enter an email';
        document.getElementById('inerror2').style.color='red';
    }else{
        if(email2.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")==null)
        {
document.getElementById('inerror2').innerText='Please enter valid email';
document.getElementById('inerror2').style.color='red';
        }
        else{
            document.getElementById('inerror2').innerText='';
        }
        }
    }

