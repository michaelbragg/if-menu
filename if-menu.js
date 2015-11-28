jQuery( function( $ ) {

  $( 'body' ).on( 'change', '.menu-item-if-menu-enable', function() {
    $( this ).closest( '.if-menu-enable' ).next().toggle( $( this ).prop( 'checked' ) );
  } );

  $( '.wrap' ).on( 'click', '.if-menu-notice button', function() {
    $.post(ajaxurl, { action: 'if_menu_hide_notice' }, function(response) {
      alert('Got this from the server: ' + response);
    });
  } );

} );
