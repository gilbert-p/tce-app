function contactSubmit() {
    $( "contact-form" ).submit(function( event ) {
      console.log( $( this ).serializeArray() );
      event.preventDefault();
    });
    console.log("WOW");
  }