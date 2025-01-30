
function generateShortId(counter) {
    let encodedStr = '';
    let mod;
    while (counter) {
        mod = counter % 62;

        if (mod <= 9) 
            encodedStr = String.fromCharCode(mod + 48) + encodedStr;
        else if (mod >= 10 && mod <= 35)
            encodedStr = String.fromCharCode(mod + 55) + encodedStr;
        else
            encodedStr = String.fromCharCode(mod + 61) + encodedStr;

        counter = Math.floor(counter / 62)
    }
    return encodedStr;
}
// Infinite scroll
// OTP

// read event loop from book
