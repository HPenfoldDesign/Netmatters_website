var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus === 1) {
    //document.getElementsByClassName('sidebar').style.right = "0px";
    // alert("test");
    $(".sidebar").css("right", "0");

    toggleStatus = 0;
  } else if (toggleStatus === 0) {
    // document.getElementById('sidebar').style.right = " -320px";
    $(".sidebar").css("right", "-320px");
    toggleStatus = 1;
  }
}