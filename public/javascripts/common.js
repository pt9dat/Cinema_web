function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    var expires = "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
 
}

function checkCookie() {
    //deleteCookie('vistorname');
    var vistor=getCookie("vistorname");
    if (vistor != "") {
        var welcome_msg = window.document.getElementById('welcome-msg');
        welcome_msg.innerHTML="Welcome "+vistor;
    } else {
       vistor = prompt("What is your name?","");
       if (vistor != "" && vistor != null) {
           setCookie("vistorname", vistor, 30);
       }
    }
}