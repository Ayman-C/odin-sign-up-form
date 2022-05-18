

let formData = new FormData(document.getElementById("signupForm"));
let passwordElem = document.getElementById("password");
let passwordMatchElem = document.getElementById("passwordMatch");

 
passwordElem.addEventListener("keydown", function(target){ 
    passwordErrorElem.style.visibility=matchCheck(passwordElem.value,passwordMatchElem.value,target.key) ? "hidden" : "visible";
 })
passwordMatchElem.addEventListener("keydown", function(target){passwordErrorElem.style.visibility=matchCheck(passwordMatchElem.value,passwordElem.value,target.key)? "hidden" : "visible";
})

function matchCheck(passwordOne,passwordTwo,key) {
    return passwordOne+key === passwordTwo
}

const passwordErrorElem = document.createElement("h3s");
passwordErrorElem.innerText="*Passwords do not match";

passwordElem.parentNode.append(passwordErrorElem)

