const formData = new FormData(document.getElementById("signupForm"));
const pwdElem = document.getElementById("password");
const pwdMatchElem = document.getElementById("passwordMatch");
const pwdErrElem = document.createElement("h3");
 pwdErrElem.textContent = "*Required"
pwdElem.parentNode.append(pwdErrElem)

pwdElem.addEventListener("keyup", function(){ 
    let errType = formCheck.pwd(pwdElem.value,pwdMatchElem.value)
    formErr.updateMessage(errType);
    formErr.displayMessage(errType,pwdErrElem);
 })
pwdMatchElem.addEventListener("keyup", function(){
    let errType = formCheck.pwd(pwdElem.value,pwdMatchElem.value)
    formErr.updateMessage(errType);
    formErr.displayMessage(errType,pwdErrElem);
})

const formCheck = ( () => {
    const pwd = (pwdOne,pwdTwo) => {
        if (pwdOne==="" && pwdTwo==="") {
            return [1,"empty"]
        }
        if (pwdOne!=pwdTwo) {
            return [1,"mismatch"];
        }
        else {
            return [0,"none"]
        } 
    }
    return {pwd}
})()

const formErr = ( () => {
        const errList = {
            empty:"*Required",
            mismatch:"*Passwords do not match",
            none:""}
        const updateMessage = (errType) => {pwdErrElem.innerText = errList[errType[1]];}
        const displayMessage = (errType,errElem) => {errElem.style.visibility = errType[0] ? "visible" : "hidden"};
        return {updateMessage,displayMessage}
})()
