function showPleasewait(the_id) {
  document.getElementById(the_id).innerHTML = "Please wait..";
  setTimeout(function () {
        document.getElementById(the_id).style.display='none';
    }, 5000); // 10000 sec
    return false;
}

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function toggle(theID) {
    var x = document.getElementById(theID);
    var tohide = document.getElementById("tohide");
    x.className = "";
    if (x.style.display === "none") {
        x.style.display = "block";
        tohide.style.display = "none";
    } else {
        x.style.display = "none";
        tohide.style.display = "block";
    }
}
