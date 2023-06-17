/* PENRU A SCHIMBA FONT-SIZE  */
function changeFontSize(size) {
    document.body.style.fontSize = size;
    sessionStorage.setItem('fontSize', size);
}
/* SE SCHIMBA CULOAREA TEXTULUI */
function changeColor(color) {
    document.body.style.color = color;
    sessionStorage.setItem('textColor', color);
}

/* AICI SCHIMBAM FONT-FAMILYA TEXTULUI */
function changeFontFamily(font) {
    document.body.style.fontFamily = font;
    sessionStorage.setItem('fontFamily', font);
}

// Function to get the font size from sessionStorage and apply it if exists
function applyChanges() {
    /* FONT-SIZE */
    var size = sessionStorage.getItem('fontSize');
    if (size) {
        document.body.style.fontSize = size;
    }
    /* TEXT-COLOR */
    var color = sessionStorage.getItem('textColor');
    if (color) {
        document.body.style.color = color;
    }
    /* FONT-FAMILY */
    var font = sessionStorage.getItem('fontFamily');
    if (font) {
        document.body.style.fontFamily = font;
    }

}

