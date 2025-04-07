let myButton = document.querySelector("#change_user");
let myHeading = document.querySelector("h1");


// in this function When you run the example and get the dialog box that prompts you to enter your user name, try pressing the Cancel button. You should end up with a title that reads Mozilla is cool, null. This happens because the value is set as null when you cancel the prompt. null is a special value in JavaScript that refers to the absence of a value.
// Also, try clicking OK without entering a name. You should end up with a title that reads Mozilla is cool, because you've set myName to an empty string.

// the correction to this bug in the function is after this funtion and above the if else statement s

// function setUserName() {
//     const myName = prompt("Enter Your Name");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Vaibhav Seth is Cool, ${myName}`;
// }         

// correction of the fuction 

function setUserName() {
    const myName = prompt("Please, Enter Your Name.")
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Vaibhav is Cool, ${myName}`;
    }
}

// In human language, this means: If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.

if (localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Vaibhav is cool ${storedName}`
}

myButton.addEventListener("click", () => {
    setUserName();
  })