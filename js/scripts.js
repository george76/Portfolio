$(document).ready(function() {


$(window).scroll(function() {
   if ($(this).scrollTop() > 100) {
     $('.back-to-top').fadeIn('slow');
     $('#header').addClass('header-fixed');
   } else {
     $('.back-to-top').fadeOut('slow');
     $('#header').removeClass('header-fixed');
   }
 });

 if ($(this).scrollTop() > 100) {
   $('.back-to-top').fadeIn('slow');
   $('#header').addClass('header-fixed');
 }

 $('.back-to-top').click(function() {
   $('html, body').animate({
     scrollTop: 0
   }, 1500, 'easeInOutExpo');
   return false;
 });


  // Add smooth scrolling to the top of the page
  
  $(document).on("click", ".back-to-top", function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(document).on("click", ".logo", function(){

      window.location = "index.html";
    
  });

  $(document).on('click', '.contact-form-submit', function(event){
    event.preventDefault();
    console.log("now submit the content of this form");
    console.log($('form').serialize());

  });
});

