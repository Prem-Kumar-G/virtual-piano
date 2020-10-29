//Application functionality of Keys

document.addEventListener("keypress",function (e) {
    if(e.code == "KeyA" || e.code == "KeyS" || e.code == "KeyD" || e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" || e.code == "KeyJ" || e.code == "KeyW" || e.code == "KeyE" || e.code == "KeyT" || e.code == "KeyY" || e.code == "KeyU"){
        console.log("The '"+e.key+"' key is pressed.")

        let aKey = document.createElement("AUDIO");
        aKey.type = 'audio/mp3';

        if(e.key == 'A' || e.key == 'a'){
            aKey.src ="music/A.mp3";
            aKey.play();

        }
        if(e.key == 'S' || e.key == 's'){
            aKey.src ="music/S.mp3";
            aKey.play();

        }
        if(e.key == 'D' || e.key == 'd'){
            aKey.src ="music/D.mp3";
            aKey.play();

        }
        if(e.key == 'F' || e.key == 'f'){
            aKey.src ="music/F.mp3";
            aKey.play();

        }
        if(e.key == 'G' || e.key == 'g'){
            aKey.src ="music/G.mp3";
            aKey.play();

        }
        if(e.key == 'h' || e.key == 'H'){
            aKey.src ="music/H.mp3";
            aKey.play();

        }
        if(e.key == 'J' || e.key == 'j'){
            aKey.src ="music/J.mp3";
            aKey.play();

        }

        if(e.key == 'w' || e.key == 'W'){
            aKey.src ="music/W.mp3";
            aKey.play();

        }
        if(e.key == 'e' || e.key == 'E'){
            aKey.src ="music/E.mp3";
            aKey.play();

        }
        if(e.key == 't' || e.key == 'T'){
            aKey.src ="music/T.mp3";
            aKey.play();

        }
        if(e.key == 'y' || e.key == 'Y'){
            aKey.src ="music/Y.mp3";
            aKey.play();

        }
        if(e.key == 'u' || e.key == 'U'){
            aKey.src ="music/U.mp3";
            aKey.play();

        }
    }

    else {
        console.log("unbound key was pressed.")
    }

})