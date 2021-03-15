function fn1() {
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value)
}

function add() {
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    alert(a+b);
}