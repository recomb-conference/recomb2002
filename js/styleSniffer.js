<!--
// detects browsers to allow for alternate style sheets.

bName = navigator.appName;
bVer = parseInt(navigator.appVersion);

if (bName == "Netscape" && bVer > 4) br = "e4"; 
else if (bName == "Netscape" && bVer == 4) br = "n4";
else if (bName == "Netscape" && bVer == 3) br = "n3"; 
else if (bName == "Netscape" && bVer == 2) br = "n2"; 
else if (bName == "Microsoft Internet Explorer" && bVer >= 4) br = "e4"; 
else if (bName == "Microsoft Internet Explorer") br = "e3"; 
else br = "n2";

// external css file for IE 4+
if (br == "e4") {
document.write('<LINK rel="stylesheet" href="styles/styleIE5NN6.css">');
}

// external css file for NN 4
if (br == "n4") {
document.write('<LINK rel="stylesheet" href="styles/styleNN4.css">');
}

//reloads the window if Nav4 resized
function MM_reloadPage(init) {  
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

//-->