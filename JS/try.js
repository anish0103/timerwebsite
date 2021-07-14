console.log("Hey this my new Timer App");
let iphr = document.getElementById("iphr");
let ipmin = document.getElementById("ipmin");
let ipsec = document.getElementById("ipsec");
let shr = document.getElementById("shr");
let smin = document.getElementById("smin");
let ssec = document.getElementById("ssec");
let startbtn = document.getElementById("start");

startbtn.addEventListener("click", start);

function start() {
    setInterval(startoperation, 1000);
    // setInterval(blink, 500);
}

function startoperation() {
    let ihr;
    let imin;
    let isec;
    ihr = iphr.value;
    imin = ipmin.value;
    isec = ipsec.value;
    if (iphr.value == "" && ipmin.value == "" && ipsec.value == "") {
        if (shr.innerHTML == "--" || shr.innerHTML == 0) {
            shr.innerHTML = "--";
        } else {
            if (smin.innerHTML == 0) {
                let value = shr.innerHTML;
                value = value - 1;
                shr.innerHTML = value;
                if (smin.innerHTML == 0 && shr.innerHTML != "--") {
                    smin.innerHTML = 60;
                }
            } else {
                let value = shr.innerHTML;
                shr.innerHTML = value;
            }
        }

        if ((smin.innerHTML == "--" || smin.innerHTML == 0) && shr.innerHTML == "--") {
            smin.innerHTML = "--";
        } else {
            if (ssec.innerHTML == 0) {
                let value = smin.innerHTML;
                value = value - 1;
                smin.innerHTML = value;
            } else {
                let value = smin.innerHTML;
                smin.innerHTML = value;
            }
        }

        if ((ssec.innerHTML == "--" || ssec.innerHTML == 0) && smin.innerHTML == "--") {
            ssec.innerHTML = "--";
        } else {
            if (ssec.innerHTML == 0 && smin.innerHTML != "--") {
                ssec.innerHTML = 59;
            } else {
                let value = ssec.innerHTML;
                value = value - 1;
                ssec.innerHTML = value;
            }
        }
        if (shr.innerHTML == "--" && smin.innerHTML == "--" && ssec.innerHTML == "--") {
            playaudio();
        }

    } else {
        startbtn.innerHTML = "Started...";
        if (ihr == "") {
            shr.innerHTML = "--";
        } else {
            shr.innerHTML = ihr;
        }
        if (imin == "") {
            smin.innerHTML = "--";
        } else {
            smin.innerHTML = imin;
        }
        if (isec == "") {
            ssec.innerHTML = "--";
        } else {
            ssec.innerHTML = isec;
        }
        iphr.value = "";
        ipmin.value = "";
        ipsec.value = "";
    }

}

// function blink() {
//     let blink = document.getElementById("blink")
//     if(Element.style.display==block) {
//         Element.style.display=none;
//     }else {
//         Element.style.display=block;
//     }
// }

function playaudio() {
    var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
    audio.play();
}
