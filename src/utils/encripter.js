export function encripter(text) {
    return text.split('').map(char => {
        if (/[aeiouAEIOU]/.test(char)) {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(char)) {
            return String.fromCharCode(char.charCodeAt(0) - 1);
        } else {
            return char;
        }
    }).join('');
}

export function desEncripter(text) {
    return text.split('').map(char => {
        if (/[aeiouAEIOU]/.test(String.fromCharCode(char.charCodeAt(0) - 1))) {
            return String.fromCharCode(char.charCodeAt(0) - 1);
        } else if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(String.fromCharCode(char.charCodeAt(0) + 1))) {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        } else {
            return char;
        }
    }).join('');
}
