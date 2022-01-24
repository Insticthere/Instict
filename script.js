

function myFunction() {
    document.getElementById('mbody').classList.toggle('bback');
    var sid = document.getElementsByClassName('sbox');
    for(i=0; i<sid.length; i++) {
        sid[i].classList.toggle('bbox');
    }
  }

