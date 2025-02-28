function handleKeyDown(e) {
    var ctrlPressed=0;
    var altPressed=0;
    var dPressed=0;
   
    var evt = (e==null ? event:e);
   
    dPressed = evt.keyCode == 68;
    altPressed = evt.altKey;
    ctrlPressed = evt.ctrlKey;
   
   
    if (dPressed && altPressed && ctrlPressed) {
        (function () {Game.LoadMod('https://cdn.jsdelivr.net/gh/Ancyker/Crustulum/Crustulum.js')}());
    }
   
   }
   
   document.onkeydown = handleKeyDown;