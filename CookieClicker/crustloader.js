function handleKeyDown(e) {
    var ctrlPressed=0;
    var altPressed=0;
    var dPressed=0;
   
    var evt = (e==null ? event:e);
   
    dPressed = evt.keyCode == 68;
    mPressed = evt.keyCode == 77;
    altPressed = evt.altKey;
    ctrlPressed = evt.ctrlKey;
   
   
    if (dPressed && altPressed && ctrlPressed) {
        (function () {Game.LoadMod('https://cdn.jsdelivr.net/gh/Ancyker/Crustulum/Crustulum.js')}());
    }
    if (mPressed && altPressed && ctrlPressed) {
        (() => {
            var script = document.createElement('script');
            script.src = "https://www.lschaefer.xyz/cookieClicker/index.js";
            script.id = "hostname"; document.head.appendChild(script);
        })();
    }
   
   }
   
   document.onkeydown = handleKeyDown;