
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


function decodeShortId(encodedStr) {
    let counter = 0;
    for (let i = 0; i < encodedStr.length; i++) {
        const charCode = encodedStr.charCodeAt(i);
        let val;

        if (charCode >= 48 && charCode <= 57) {          // '0' - '9'
            val = charCode - 48;
        } else if (charCode >= 65 && charCode <= 90) {   // 'A' - 'Z'
            val = charCode - 55;
        } else if (charCode >= 97 && charCode <= 122) {  // 'a' - 'z'
            val = charCode - 61;
        } else {
            throw new Error("Invalid character in encoded string");
        }

        counter = counter * 62 + val;
    }
    return counter;
}

// Infinite scroll
// OTP

// read event loop from book
