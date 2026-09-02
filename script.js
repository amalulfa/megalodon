const sentence = document.getElementById("sentence");
const randomButton = document.getElementById("randomButton");


function randomSentence() {

    const randomIndex = Math.floor(
        Math.random() * encryptedSentences.length
    );

    const result = atob(
        encryptedSentences[randomIndex]
    );

    sentence.textContent = result;
}


randomButton.addEventListener(
    "click",
    randomSentence
);
