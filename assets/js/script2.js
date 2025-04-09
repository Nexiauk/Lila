// Story object to dynamically insert Story titles and chapters into pre-defined sections in index.html
const story = {
    currentChapter: "welcome",
    welcome: {
        title: "Welcome",
        storyImage: "./assets/images/lila-sleepy.avif",
        storyText: `Welcome!<br>Lila is a little girl who has experienced a sudden and heartbreaking loss.<br>The loss has been so intense that she has lost her ability to speak.<br>
            Travel with Lila and help her to find the words she needs to express how she's feeling...`,

    },

    intro: {
        title: "Introduction",
        storyImage: "./assets/images/lila-sleepy.avif",
        storyText: `Lila sits on her bed looking at the floor, a curtain of dark hair covering her face. Her soft plushies watch her from their shelves with sad eyes and downturned mouths. Lila doesn't move, not even when her mum pops her head around the doorway and and says "Goodnight, sweetheart"; gently, carefully, as if anything above a whisper would shatter her fragile daughter. Lila doesn't respond. She can't. The words won't come out.
The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. She picks up the letters from the bedspread and starts to build a word...`,
        choice1: "Go to sleep",
        choice2: "",
        word: "SADNESS",
        hint: ""
    },

    void: {
        title: "The Void",
        storyImage: "./assets/images/lila-spin.avif",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `,
        choice1: "Go to sleep",
        choice2: "",
        word: "DARKNESS",
        hint: ""
    },

    forestEmpty: {
        title: "The Forest",
        storyImage: "./assets/images/lila-forest.avif",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `,
        word: "EMPTINESS",
        hint: ""
    },
    forestFull: {
        title: "The Forest",
        storyImage: "./assets/images/lila-forest.avif",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `,
        choice1: "Go to sleep",
        choice2: "",
    },
};

const getPuzzle = document.getElementById("get-puzzle");
const resetButton = document.getElementById("reset-button");
const checkButton = document.getElementById("check");
const startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);

loadChapter();


function startGame() {
    Object.defineProperty(story, "currentChapter", {
        value: "intro",
    });
startButton.style.visibility = "hidden";
getPuzzle.style.visibility = "visible";
    loadChapter();
};

// Function to grab all the content needed to load a new chapter from the story object
function loadChapter() {

    document.getElementById("title").innerText = story[story.currentChapter].title;
    document.getElementById("story-text").innerHTML = story[story.currentChapter].storyText;
    document.getElementById("story-text").classList.add(`chapter-${story.currentChapter}`);
    const storyImage = document.getElementById("story-image");
    storyImage.src = story[story.currentChapter].storyImage;
}


// Used to delay the passing of this function until the DOM has finished loading. Important as the getPuzzle button is added via dynamically modified DOM content.
setTimeout(() => {
    const puzzleButton = document.getElementById("get-puzzle");
    if (puzzleButton) {
        puzzleButton.addEventListener("click", initialisePuzzle);
    } else {
        console.error("Button not found!")
    }
}, 0);


// Puzzle1 tied to chapter 1. scrambles a word and creates tiles and empty slots.
function initialisePuzzle() {
    const word = story[story.currentChapter].word;
    const checkArea = document.getElementById("buttons");


    getPuzzle.style.visibility = "hidden";
    checkArea.style.visibility = "visible";

    checkButton.addEventListener("click", () => checkAnswer(word));
    resetButton.addEventListener("click", resetPuzzle);

    // First function splits the word into an array of letters and then maps an id to each letter that matches the array indexes.
    const letterArray = word.split("").map((letter, index) => ({
        letter: letter,
        id: index,
    }));

    /*Function to reverse iterate through the letter array and swap elements i and j. Fisher-Yates shuffle model.
    This function is used to shuffle the letterarray created by splitting the original word*/
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    shuffle(letterArray);

    // Clear the puzzle areas of any existing content to ensure a blank canvas for this puzzle.
    const puzzleQuestion = document.getElementById("puzzle-question");
    const puzzleAnswer = document.getElementById("puzzle-answer");
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    /*splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div.
    Adds the slot class for styling into boxes.
    eventlistener calls the clickedslot function*/
    word.split("").forEach((letter) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);
        slot.addEventListener("click", () => clickedSlot(slot));
    });

    /*For every letter stored in letterArray, a new lettered tile is created in the puzzleQuestion div. 

    Populates with each letter in the shuffled order. 
    Adds the tile class for styling into tiles.
    Ensures that each tile has an id and content matching the letterArray and then runs the clickedTile function.
    */
    letterArray.forEach((letter) => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = letter.letter;
        tile.dataset.id = letter.id;
        puzzleQuestion.appendChild(tile);
        tile.addEventListener("click", () => clickedTile(letter, tile));
    });

    /*Function to select the first empty slot and populate it with the letter of the clicked tile. 
    Passes the letter and the tile through to the function and if there's an available slot, it passes the letter id and content to the slot.
    The tile is then hidden.*/
    function clickedTile(letter, tile) {
        let availableSlot = document.querySelector(".slot:empty")
        if (availableSlot) {
            availableSlot.dataset.id = letter.id;
            availableSlot.textContent = letter.letter;
            tile.style.visibility = "hidden";
        }
    }

    /*Function to clear a letter from a slot and make its correlating tile visible again.
    If there's no current id assigned to a slot because a tile's data hasn't been passed to it, then the function will end.
    If there is an id, then this function will clear the textcontent from the clicked slot and remove the data-id attribute.
    The queryselector then finds the tile with with an id that matches the slot's id and makes it visible again.*/
    function clickedSlot(slot) {
        const id = slot.dataset.id;
        if (!id) return;
        slot.textContent = "";
        slot.removeAttribute("data-id");
        const matchingTile = document.querySelector(`.tile[data-id='${id}']`);
        if (matchingTile) {
            matchingTile.style.visibility = "visible";
        }
    }
}

/*Function to check the user's answer against the original word passed into the initialisegame function. 
Different messages are returned depending on whether all slots have been filled, and whether they've been filled correctly or not*/
function checkAnswer(word) {
    const slots = document.querySelectorAll(".slot");
    // check if all slots are filled
    const allFilled = Array.from(slots).every(slot => slot.textContent !== "");
    // If not all slots are filled, alert the user and exit the function
    if (!allFilled) {
        alert("Please fill all the slots!");
        return;
    }
    // If all slots are filled
    let userAnswer = "";
    slots.forEach(slot => {
        userAnswer += slot.textContent;
    });
    if (userAnswer == word) {
        alert("You did it!");
    } else {
        alert("That's not correct, try again!");
    }
}

// function to reset the tiles and the slots to the initialisepuzzle state, without resetting the entire game and reshuffling the tiles into different places.
function resetPuzzle() {
    const slots = document.querySelectorAll(".slot");
    const tiles = document.querySelectorAll(".tile");

    slots.forEach(slot => {
        slot.textContent = "";
        slot.removeAttribute("data-id");
    });

    tiles.forEach(tile => {
        tile.style.visibility = "visible";
    });
};