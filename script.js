// getting the initial value from btn
const incrementbtn = document.getElementById("incrementbutton");
const decrementbtn = document.getElementById("decrementbutton");
const displayvalue = document.getElementById("displayno");
const reset = document.getElementById("reset");

// for decrement button
decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value - 1;
    }
    else {
        alert("Negative number are not allowed");
    }
});

// for increment button

incrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value >= 10) {
        alert("Number greater than 10 are not allowed");
    }
    else {
        displayvalue.innerText = value + 1;
    }
});


// Reset button 
reset.addEventListener("click", () => {
    displayvalue.innerText = 0;
});