const sentenceElement = document.getElementById("sentence");
const randomButton = document.getElementById("randomButton");


function decodeBase64(text) {

    return atob(text);

}


function randomSentence() {

    const randomIndex = Math.floor(
        Math.random() * encryptedSentences.length
    );

    const encodedSentence =
        encryptedSentences[randomIndex];

    const decodedSentence =
        decodeBase64(encodedSentence);

    sentenceElement.textContent =
        decodedSentence;
}


randomButton.addEventListener(
    "click",
    randomSentence
);
