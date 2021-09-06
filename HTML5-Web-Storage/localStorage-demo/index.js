
function save() {
   if(localStorage) {
    var name = document.getElementById('username').value;
    localStorage.setItem('name', name);
    alert('Local Storage saved Successfully.');
   } else {
    alert('Sorry, your browser doesnt support local storage');
   }
}

function retrieve() {
    if(localStorage) {
        var name = localStorage.getItem('name');
        alert("Hi, " + name);
    } else {
        alert('Sorry, your browser doesnt support local storage');
       }
}