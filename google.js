function waitForElement(){
    if(typeof googletag !== "undefined"){
      googletag.cmd.push(function() {
        googletag.defineSlot('/59676769/MediumRectangle300x250', [300, 250], 'div-gpt-ad-1418599326001-0')
          .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1418599326001-0'); });
   }
    else{
        setTimeout(function(){
            waitForElement();
        },1000);
    }
}
waitForElement()
