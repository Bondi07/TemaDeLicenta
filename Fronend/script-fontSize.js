/* ZA MENJANJE FONTA TEST  */
// Function to set the font size and store it in sessionStorage
function changeFontSize(size) {
    document.body.style.fontSize = size;
    sessionStorage.setItem('fontSize', size);
}

// Function to get the font size from sessionStorage and apply it if exists
function applyFontSize() {
    var size = sessionStorage.getItem('fontSize');
    if (size) {
        document.body.style.fontSize = size;
    }
}



