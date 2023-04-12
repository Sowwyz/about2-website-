// BLock
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */


var isNS = (navigator.appName == "Netscape") ? 1 : 0;
var EnableRightClick = 0;
if (isNS)
    document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
    if (EnableRightClick == 1) { return true; }
    else { return false; }
}
function mousehandler(e) {
    if (EnableRightClick == 1) { return true; }
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
function keyhandler(e) {
    var myevent = (isNS) ? e : window.event;
    if (myevent.keyCode == 96)
        EnableRightClick = 1;
    return;
}
document.oncontextmenu = mischandler;
document.onkeypress = keyhandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

// BLOCK
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */


function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 800);
}
function closeabout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 800);
}
function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 800);
}
function closework() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 800);
}
function showcontact() {
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 800);
}
function closecontact() {
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 800);
}
setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);

/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
/* Sowwyz#1337 */
