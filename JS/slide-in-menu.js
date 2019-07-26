var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus === 1) {
    //document.getElementsByClassName('sidebar').style.right = "0px";
    $(".sidebar").css("right", "0");
    $("header").addClass("fixed-header");
    $(".sidebar").css("position", "fixed"); 
    $(".overlay").css("display", "block");

    toggleStatus = 0;
  } else if (toggleStatus === 0) {
    // document.getElementById('sidebar').style.right = " -320px";
    $(".sidebar").css("right", "-300px");
    $("header").removeClass("fixed-header");
    $(".overlay").css("display", "none");
  
    toggleStatus = 1;
  }
} 

$(".overlay").on("click", function(){
  if($(".sidebar").css("right") === "0px") {
    toggleMenu();
  }
});