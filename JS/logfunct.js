
function modeswitcher(content,elmnt){
let formcontent, i, togglebtn;

formcontent = document.getElementsByClassName("formcontent");

for(i=0; i<formcontent.length; i++){
  formcontent[i].style.display = 'none';
}

//setting the visible content
document.getElementById(content).style.display = "block";




//btntraits set to none
togglebtn = document.getElementsByClassName('togglebtns');

for(i=0; i<togglebtn.length; i++){
  togglebtn[i].style.backgroundColor = "rgba(0, 0, 0, 0.192)";
  
}

elmnt.style.backgroundColor = "rgba(245, 103, 39, 1)"





}

document.getElementById("signin").click()

