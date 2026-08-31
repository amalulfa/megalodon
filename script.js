const sentenceElement =
    document.getElementById("sentence");

const randomButton =
    document.getElementById("randomButton");


/*
    Decode Base64
*/

function decodeSentence(encoded) {

    try {

        return decodeURIComponent(
            Array.prototype.map.call(
                atob(encoded),
                function(char) {

                    return '%'
                        + ('00'
                        + char.charCodeAt(0)
                        .toString(16))
                        .slice(-2);

                }
            ).join('')
        );

    } catch (error) {

        return atob(encoded);

    }
}


/*
    Membuat daftar kalimat
*/

function getSentences() {

    return encryptedSentences.map(
        decodeSentence
    );

}


/*
    Random sentence
*/

function randomSentence() {

    const sentences =
        getSentences();


    const randomIndex =
        Math.floor(
            Math.random()
            * sentences.length
        );


    sentenceElement.textContent =
        sentences[randomIndex];

}


/*
    Button
*/

randomButton.addEventListener(
    "click",
    randomSentence
);