
const submitButton = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");
const errImgs = document.querySelectorAll(".err-img");
const errTips = document.querySelectorAll(".error-tip");


function empty(field) {
    if (field === "") {
        return true;
    }
    return false;
}

function validName(name) {
    if(/^[a-zA-Z]+$/.test(name)) {
        console.log(true)
        return true;
    }
    console.log(false);
    return false;
}

function validEmail(email) {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return true;
    }
    return false;
}

function showError(input, index) {
    errImgs[index].classList.add("show-err");
    errTips[index].classList.add("show-err");
    input.classList.add("input-err");
}


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    for(let i = 0; i < 2; i++) {
        if(!validName(inputs[i].value)) {
            showError(inputs[i], i);
            errTips[i].textContent = `${inputs[i].placeholder} is invalid`
        }
    }
    if(!validEmail(inputs[2].value)) {
        showError(inputs[2], 2);
        errTips[2].textContent = `Email is invalid`;
    }

    inputs.forEach((input, index) => {
        if(empty(input.value)) {
            showError(input, index);
            errTips[index].textContent = `${input.placeholder} cannot be empty`;
        }
    })

})
inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        errImgs[index].classList.remove("show-err");
        errTips[index].classList.remove("show-err");
        input.classList.remove("input-err");
    })
})