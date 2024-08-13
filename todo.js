let frm = document.getElementById("frm");
let inp = document.getElementById("input_field");
let items = document.getElementById("item_list");
let modal = document.getElementById("moda");

frm.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let inputs = inp.value;
    const li = document.createElement("li");
    const span = document.createElement("span");



    // check emptyness of input field
    function checkInput(){
        if(inputs.trim() === ""){
            modal.style.display = "block";
        }else{
            modal.style.display = "none";
            addItem();
        }
    }
    checkInput();

    function addItem(){
        // const li = document.createElement("li");
        // const span = document.createElement("span");
        li.textContent = inputs;
        span.textContent = "x";
        items.appendChild(li);
        li.appendChild(span);
    }
    

    span.addEventListener("click", ()=>{
        li.style.display = "none";
    })
})