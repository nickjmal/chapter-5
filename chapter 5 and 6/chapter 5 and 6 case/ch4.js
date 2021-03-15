
function pressed(){
    var answer = true;
    var text = parseInt(document.getElementById("inp").value);
    var output = document.getElementById("output");

    if (text >= 20){
        output.innerHTML = "You were in your 20's or older when you started collecting!";    
    }else {
        output.innerHTML = "you were a teenager or under when you started collecting!";
    }
}
