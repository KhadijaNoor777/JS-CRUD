
var books = ["harry potter", "Alchemist", "Diverjent"];

books.push("angels land");
books.push("the hamlet");

var bname = document.forms["f1"]["bname"];
//var bname = document.getElementById(bna)

function add(){
    //document.getElementById("p1").innerHTML = bname.value;
    books.push(bname.value);
    view();
}

function view(){
    var text = " ";
    for(var i=0; i<books.length; i++){
        //document.write(books[i], "<br>");
        var a=i;
        text = text + books[i] + `<button id="d1" style="margin-left: 1%; margin-top:1%"  onclick="deleteFunc('${i}')">Delete</button>`
        + `<button style="margin-left: 1%; margin-top:1%" onclick="editFunc('${i}')">Edit</button>` + "<br>";
    }
    document.getElementById("dis").innerHTML=text;

}

function deleteFunc(id){
    //document.getElementById("sp1").innerHTML= id;
    //alert(id);
    this.books.splice(id,1);
    view();
}


function editFunc(id){
    var e = document.getElementById('edit-name');
    e.value = this.books[id];
    document.getElementById('spoiler').style.display = 'block';
    document.getElementById('saveEdit').onsubmit = function() {
        var book = e.value;
        if (book) {
            books.splice(id, 1, book.trim());
            view();
            CloseInput();
        }
    }  
}

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}