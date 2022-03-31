let binary = [1,0,1,1,0,1];

function convertBinary (binary) {
    let counter = binary.length - 1;
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        let digit = binary[i];
        decimal += digit * (2 ^ counter);
        counter--;
    }
    return decimal;
}

console.log("results: ", convertBinary(binary));