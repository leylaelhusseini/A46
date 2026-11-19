const Input= document.getElementById("input")
const Output= document.getElementById("output")
const Save= document.getElementById("save")
Output.textContent=localStorage.getItem("input") || "";
Save.addEventListener("click", function(){
    if (Input.value===""){
        alert("please fill something before saving");
    }
    else{
        localStorage.setItem("input", Input.value);
        Output.textContent= Input.value;
    }
});