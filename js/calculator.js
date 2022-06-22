let display = document.getElementById('input-text')

let calculator=(number)=> {
    display.value = display.value+number;
    // another way to write this 
    // display.value+=number;
}

let Result=()=> {
    try {

        display.value = eval(display.value);
    }
    catch(err){
        alert("Enter a valid number");
    }
}

function clearField() {
    display.value = " ";
}

function del() {
    display.value = display.value.slice(0, -1);
}