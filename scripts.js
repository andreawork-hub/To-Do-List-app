// 1. Add new list item via form 


function newItem(){
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue); 

    // set up the condition for input
    if(inputValue===""){
        alert("You must write something!");
    }else {
        $("#list").append(li);
    }

// 2. Cross an item out 
// tell to list item what to do when doubleclicked 

    function crossOut(){
        li.toggleClass("strike");
    }
    li.on("dblclick" , function crossOut(){
        li.toggleClass("strike");
    }) ; 

// 3. Add a delete button X
    let crossOutButton = $("<crossOutButton></crossOutButton>"); 
    crossOutButton.append(document.createTextNode("X")); 
    li.append(crossOutButton); 

    // tell to button what to do when clicked
    // in css class delete (display:none), will disappear
    function deleteListItem(){
        li.addClass("delete");
    }

    crossOutButton.on("click", function deleteListItem(){
        li.addClass("delete");
    }); 

// 4. Reordering the items
    $("#list").sortable(); 

};