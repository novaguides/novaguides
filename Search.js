
function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("search-list");
  a = div.getElementsByTagName("a");

  /*
    to be added! sort results alphabetically
  */


  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;

    if(filter < 1){
      a[i].style.display = "none";
    }

    else if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div.style.display = "inline-block"
      a[i].style.display = "block";

      /*
        find out how to make it so that on keypress of key "ENTER"
        link automatically opens
      */

    } 
    
    else {
      a[i].style.display = "none";
    }
  }
}