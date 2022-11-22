function showPanel1(){
    document.getElementById("panel-1").style.display = "block";
}
function showPanel2(){
    document.getElementById("panel-2").style.display = "block";
}
function showPanel3(){
    document.getElementById("panel-3").style.display = "block";
}
function showPanel4(){
    document.getElementById("panel-4").style.display = "block";
}
function showPanel5(){
    document.getElementById("panel-5").style.display = "block";
}
function showPanel6(){
    document.getElementById("panel-6").style.display = "block";
}
function showPanel7(){
    document.getElementById("panel-7").style.display = "block";
}

function hide(){
    panels=document.getElementsByClassName("panel");  // Find the elements
        for(var i = 0; i < panels.length; i++){
            panels[i].style.display = "none";    // Change the content
    }

}


//JACKIE'S NOTES
if (localStorage["sunday"]) {
    var sunday = localStorage["sunday"];
    document.getElementById("sunday").value = sunday;
  } 
  function saveSunday() {
    var sunday = document.getElementById("sunday").value;
    localStorage.setItem("sunday", sunday);
  }
if (localStorage["monday"]) {
    var monday = localStorage["monday"];
    document.getElementById("monday").value = monday;
  } 
  function saveMonday() {
    var monday = document.getElementById("monday").value;
    localStorage.setItem("monday", monday);
  }
  
  if (localStorage["tuesday"]) {
    var tuesday = localStorage["tuesday"];
    document.getElementById("tuesday").value = tuesday;
  }
  function saveTuesday() {
    var tuesday = document.getElementById("tuesday").value;
    localStorage.setItem("tuesday", tuesday);
  }
  
  if (localStorage["wednesday"]) {
    var wednesday = localStorage["wednesday"];
    document.getElementById("wednesday").value = wednesday;
  }
  function saveWednesday() {
    var wednesday = document.getElementById("wednesday").value;
    localStorage.setItem("wednesday", wednesday);
  }
  
  if (localStorage["thursday"]) {
    var thursday = localStorage["thursday"];
    document.getElementById("thursday").value = thursday;
  }
  function saveThursday() {
    var thursday = document.getElementById("thursday").value;
    localStorage.setItem("thursday", thursday);
  }
  
  if (localStorage["friday"]) {
    var friday = localStorage["friday"];
    document.getElementById("friday").value = friday;
  }
  function saveFriday() {
    var friday = document.getElementById("friday").value;
    localStorage.setItem("friday", friday);
  }
  if (localStorage["saturday"]) {
    var saturday = localStorage["saturday"];
    document.getElementById("saturday").value = saturday;
  } 
  function saveSaturday() {
    var saturday = document.getElementById("saturday").value;
    localStorage.setItem("saturday", saturday);
  }
  
  var show = false;
  function showNote() {
    if (show == false) {
      document.getElementById("notes").style.opacity = '1';
      show = true;
    } else if (show == true) {
      document.getElementById("notes").style.opacity = '0';
      show = false;
    }
  }