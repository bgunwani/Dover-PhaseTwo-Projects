
function save() {
   if(sessionStorage) {
    var name = document.getElementById('username').value;
    sessionStorage.setItem('uname', name);
    alert('Session Storage saved Successfully.');
   } else {
    alert('Sorry, your browser doesnt support session storage');
   }
}

function retrieve() {
    if(sessionStorage) {
        var name = sessionStorage.getItem('uname');
        alert("Hi, " + name);
    } else {
        alert('Sorry, your browser doesnt support session storage');
       }
}