const Input= document.getElementById("input")
const Output= document.getElementById("output")
const Save= document.getElementById("save")
const SaveT=localStorage.getItem("text") || "";
Output.textContent=SaveT;
Save.addEventListener("click",function(e){
    localStorage.setItem("text",Input.value);
    Output.textContent=Input.value;
});