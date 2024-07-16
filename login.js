document.querySelector("#pass1").addEventListener("input", passsame);
document.querySelector("#pass2").addEventListener("input", passsame);

function passsame(){
    let pass1 = document.querySelector("#pass1").value;
    let pass2 = document.querySelector("#pass2").value;
    let passc = document.querySelector("#passc");

    if(pass1 === "" && pass2 === ""){
        passc.innerText = "";
    }
    else if(pass1 === pass2){
        passc.innerText = "Password matched";
        passc.classList.remove("text-white");
        passc.classList.add("text-gray-400");
    }
    else{
        passc.innerText = "Password not matched";
        passc.classList.remove("text-gray-400");
        passc.classList.add("text-white");
    }
};