var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('modal3');
    var back = document.getElementById("scrollback");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   back.style.display = "block";
 } else {
   back.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

    function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById('#main').style.background='rgba(0, 0, 0, 0.37)';
  object.style.zIndex="100";}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";}
    
