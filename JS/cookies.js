//test for cookie, id none adds custom class (in the divs), else nothing happens.
if (typeof(Storage) !== "undefined"){
    let test = sessionStorage.getItem("cookie")
    if (!test) {
        $(document).ready(function(){
            $("#1").append('<div class="cookie-banner"><div class="cookie-container"><p>We use cookies, by clicking continue you are submitting consent for us to do so.</p><button id="cookies">continue</button></div></div>');
          });
    }
}
//checks if document is loaded, if loaded once cookies has been clicked adds cookie, removes cookie banner.
$(document).ready(function(){
    $("#cookies").click(function(){
      sessionStorage.setItem("cookie", "true")
      $(".cookie-banner").remove();
    });
  });

// You could add a date and time for how long cookies last before deletion.

// var today = new Date();
// var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

// function setCookie(name, value)
//   {
// document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
//   }
