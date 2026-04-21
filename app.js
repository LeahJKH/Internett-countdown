const endDate = new Date("may 04, 2026 11:00:00").getTime() // date for timer too end chage using same format
const display = document.querySelector("#count-down")
const overlay = document.querySelector("#overlay")
 let start = ((endDate - Date.now()) / 1000) | 0; // this steps through giving us the accurate time between or just 0 if not
display.innerHTML = `<span class="text-date">days:</span> ${start/86400|0} <span class="text-date">hours:</span> ${start%86400/3600|0} <span class="text-date">minutes:</span> ${start%3600/60|0} <span class="text-date">seconds:</span> ${start%60}`; // the actuall timer under ill make seperate but chage this too text node and u can have one p tag

if (start <= 0) {
display.innerHTML = `WE HAVE INTERNET!`; // the actuall timer under ill make seperate but chage this too text node and u can have one p tag
overlay.style.background = "url(./confetti.gif)"
overlay.style.backgroundSize = "cover"
} else {

    let counter = setInterval(function() {
        // version one  
        let step = ((endDate - Date.now()) / 1000) | 0; // this steps through giving us the accurate time between or just 0 if not
        display.innerHTML = `<span class="text-date">days:</span> ${step/86400|0} <span class="text-date">hours:</span> ${step%86400/3600|0} <span class="text-date">minutes:</span> ${step%3600/60|0} <span class="text-date">seconds:</span> ${step%60}`; // the actuall timer under ill make seperate but chage this too text node and u can have one p tag
        
    }, 1000)
}
    