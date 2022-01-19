$(function() {
				
  var Page = (function() {
    
    var $navArrows = $( '#nav-arrows' ).hide(),
        $shadow = $( '#shadow' ).hide(),
        slicebox = $( '#sb-slider' ).slicebox( {
          onReady : function() {
            
            $navArrows.show();
            $shadow.show();
            
          },
          orientation : 'r',
          cuboidsRandom : true,
          disperseFactor : 30
        } ),
        
        init = function() {
          
          initEvents();
          setInterval(function() { slicebox.next();
            return false;}, 10000);
          
        },
        initEvents = function() {
          

          // add navigation events
          $navArrows.children( ':first' ).on( 'click', function() {
            
            slicebox.next();
            return false;
            
          } );
          $navArrows.children( ':first' ).on( 'click', function() {
            
            slicebox.next();
            return false;
            
          } );
          
          
        };
    
    return { init : init };
    
  })();
  
  Page.init();
  
});