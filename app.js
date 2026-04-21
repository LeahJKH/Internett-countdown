const endDate = new Date("apr 4, 2026 11:00:00").getTime() // date for timer too end chage using same format
const display = document.querySelector("#count-down")
const overlay = document.querySelector("#overlay")
 let start = ((endDate - Date.now()) / 1000) | 0; // this steps through giving us the accurate time between or just 0 if not

updateTimer() // initialize

let counter = setInterval(function() {
    updateTimer()
}, 1000) // runs every 1 second

function updateTimer() {

    let step = ((endDate - Date.now()) / 1000) | 0; // this steps through giving us the accurate time between or just 0 if not
    
    // if statment from hell
    if((step/86400) <= 1) {
        if((step%86400/3600) <= 1 ) {
            if(step%3600/60 <= 1) {
                if(step%60 < 1) {
                    display.innerHTML = `WE HAVE INTERNET!`;
                    overlay.style.backgroundSize = "cover"
                    overlay.style.backgroundImage = "url(./confetti.gif)"
                } else {
                    display.innerHTML = `<span class="text-date">seconds:</span> ${step%60}`
                }
            } else {
                display.innerHTML = `<span class="text-date">minutes:</span> ${step%3600/60|0} <span class="text-date">seconds:</span> ${step%60}`
            }
        } else {
            display.innerHTML = `<span class="text-date">hours:</span> ${step%86400/3600|0} <span class="text-date">minutes:</span> ${step%3600/60|0} <span class="text-date">seconds:</span> ${step%60}`
        }
    } else {
        display.innerHTML = `<span class="text-date">days:</span> ${step/86400|0} <span class="text-date">hours:</span> ${step%86400/3600|0} <span class="text-date">minutes:</span> ${step%3600/60|0} <span class="text-date">seconds:</span> ${step%60}`; // the actuall timer under ill make seperate but chage this too text node and u can have one p tag
    }

}