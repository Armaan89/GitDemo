console.log("external file");
console.log("extra file");

showNotes();
let addBtn= document.getElementById("addBtn");

addBtn.addEventListener("click",function(e){
let addTxt = document.getElementById("addTxt");
let notes=localStorage.getItem("notes");
if(notes == null){
    notesObj=[];
}
else{
    notesObj= JSON.parse(notes);
}

notesObj.push(addTxt.value);
localStorage.setItem("notes",JSON.stringify(notesObj));
console.log(notesObj);

showNotes();

});

function showNotes(){
    let notes=localStorage.getItem("notes");
if(notes == null){
    notesObj=[];
}
else{
    notesObj= JSON.parse(notes);
}

let html="";
notesObj.forEach(function(ele,index){
html +=`    
<div class="card my-2 mx-2 noteCard" style="width: 15rem;">
<div class="card-body">
<h5 class="card-title">Note ${index+1}</h5>
<p class="card-text">${ele}</p>
<button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete note</button>
</div>
</div>
`
});
let notesElem=document.getElementById("notes");
if(notesObj != 0){
notesElem.innerHTML=html;
} 
else{
    notesElem.innerHTML="Nothing to show! use Add a note"
}
}

function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj= JSON.parse(notes);
    }
    
notesObj.splice(index,1);
console.log("im deleteing",index);
localStorage.setItem("notes",JSON.stringify(notesObj));

showNotes();

}

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value;
    console.log(inputVal);
    
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    console.log(cardTxt);
    
    if(cardTxt.includes(inputVal)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
      
});    
});
