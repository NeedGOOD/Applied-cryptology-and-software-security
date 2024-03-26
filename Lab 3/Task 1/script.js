function XOR() {
    const plaintext = document.getElementById('plaintext').value
    const keyScale = document.getElementById('key-scale').value

    const binaryCode = stringToBinary(plaintext)
    const resultBinaryCode = combineBinaryWithKey(binaryCode, keyScale)
    const ciphertext = binaryToString(resultBinaryCode)

    displayResult(plaintext, binaryCode, resultBinaryCode, ciphertext)
}

function stringToBinary(inputString) {
    return inputString
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ')
}

function combineBinaryWithKey(binaryCode, keyScale) {
    return binaryCode.split(' ')
        .map((binary, index) => binary
            .split('')
            .map((bit, i) => bit !== keyScale.split(' ')[index][i] ? '1' : '0')
            .join('')
        )
        .join(' ')
}

function binaryToString(binaryString) {
    return binaryString
        .split(' ')
        .map(binary => String.fromCharCode(parseInt(binary, 2)))
        .join('')
}

function displayResult(plaintext, binaryCode, resultBinaryCode, ciphertext) {
    document.getElementById('plaintext-binary-code').innerText = `Відкритий текст "${plaintext}" у двійковому коді: ${binaryCode}`
    document.getElementById('result-binary-code').innerText = `Результат двійкового коду: ${resultBinaryCode}`
    document.getElementById('result-ciphertext').innerText = `Зашифрований шифртекст: ${ciphertext}`
}