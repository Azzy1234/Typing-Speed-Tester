const customTextArea = document.getElementById('custom-text');
const setParagraphButton = document.getElementById('set-paragraph-btn'); 
const inputBox = document.getElementById('input-box'); 
const resultDisplay = document.getElementById('result'); 

let startTime, endTime;

// event listener for setting the custom paragraph
setParagraphButton.addEventListener('click', function() {
    const userParagraph = customTextArea.value.trim(); // gets the user input and trim spaces
    if (userParagraph) { // check if the input is not empty
        testText.textContent = userParagraph; // set the paragraph as the test text
        testText.style.display = 'block'; // show the test text
        inputBox.disabled = false; // enable typing in the input box
        startButton.disabled = false; // eneable the start button
        resultDisplay.textContent = ''; // clear previous results
    } else {
        alert('Please enter a paragraph to use for the test.'); // alert if input is empty
    }
});

// event listener for the start button
startButton.addEventListener('click', function() {
    inputBox.value = ''; // clear the input box
    inputBox.focus(); // focus on the input box

    // start the timer
    startTime = new Date().getTime(); // records the start time
});

// event listener for typing input
inputBox.addEventListener('input', function() {
    const typedText = inputBox.value; // get what the user typed

    // check if the typed text matches the test text
    if (typedText === testText.textContent) {
        endTime = new Date().getTime(); // record the end time
        const timeTaken = (endTime - startTime) / 1000; // calculate time in seconds
        
        const wordCount = testText.textContent.split(' ').length; // count words in the test text
        const wordsPerMinute = (wordCount / timeTaken) * 60; // calculate the  WPM
        
        resultDisplay.textContent = `You typed at ${Math.round(wordsPerMinute)} WPM!`; // display the result
        inputBox.disabled = true; // disable your input after completion
    }
});
