

document.addEventListener('DOMContentLoaded', function() {

  var click_sw = document.querySelector('.switch.on');


 click_sw.addEventListener('click', function(event) {

    var click_sw = document.querySelector('.switch');
    var click_sw1 = document.querySelector('body');
    var click_sw2 = document.querySelector('.status');

    click_sw.className = "switch off";

    click_sw1.className = "dark";
    click_sw2.innerText  = "I can see YOU !!! "

    event.preventDefault();
    alert("Hey, who turned off the lights?");


  });
  //
});
