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
        storyImage2: "./assets/images/lila-spin.avif",
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
        storyImage2: "",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `,
        choice1: "Go to sleep",
        choice2: "",
        word: "DESPAIR",
        hint: ""
    },

    forest: {
        title: "The Forest",
        storyImage: "./assets/images/lila-forest.avif",
        storyImage2: "",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `,
        choice1: "",
        choice2: "",
        word: "ACCEPTANCE",
        hint: ""
    },

    lake: {
        title: "The Lake",
        storyImage: "",
        storyImage2: "",
        storyText: `Insert story text here about the lake`,
        choice1: "",
        choice2: "",
        word: "LONGING",
        hint: ""
    },

    library: {
        title: "The Library",
        storyImage: "",
        storyImage2: "",
        storyText: `Insert story text here about the lake`,
        choice1: "",
        choice2: "",
        word: "TEMPEST",
        hint: ""
    }
};

// Global variables
const getPuzzle = document.getElementById("get-puzzle");
const resetButton = document.getElementById("reset-button");
const checkButton = document.getElementById("check");
const startButton = document.getElementById("start-game");
const storyImage = document.getElementById("story-image");
const storyTitle = document.getElementById("title");
const storyText = document.getElementById("story-text");
const storyOuterCol = document.getElementById("text-col");
const puzzleArea = document.getElementById("puzzle-area");
const puzzleQuestion = document.getElementById("puzzle-question");
const puzzleAnswer = document.getElementById("puzzle-answer");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const checkArea = document.getElementById("buttons");

startButton.addEventListener("click", startGame);
let word = "";
loadChapter();


function startGame() {
    story.currentChapter = "intro";
    startButton.style.display = "none";
    getPuzzle.style.display = "inline-block";
    getPuzzle.style.visibility = "visible";
    loadChapter();
};

// Function to grab all the content needed to load a new chapter from the story object's current chapter
function loadChapter() {
    // window.location.href = "#main-container";
    storyTitle.innerText = story[story.currentChapter].title;
    storyText.innerHTML = story[story.currentChapter].storyText;
    storyOuterCol.classList.add(`chapter-${story.currentChapter}`);
    storyImage.src = story[story.currentChapter].storyImage;
    choice1.style.display = "none";
    choice2.style.display = "none";
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


// Initialise puzzle function loads the word tied to the current chapter, scrambles it and creates tiles and empty slots equal to the letters in the word.
function initialisePuzzle() {
    slotList = [];
    word = story[story.currentChapter].word;
    getPuzzle.style.visibility = "hidden";
    checkArea.style.visibility = "visible";
    checkButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
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
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    /*splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div.
    Adds the slot class for styling into boxes.
    eventlistener calls the clickedslot function*/
    word.split("").forEach((letter) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);
        slotList.push(slot);
        slot.addEventListener("click", clickedSlotHandler);
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
}
// Named handler function for event listener on clicked slots, so that the event listener can be properly removed at the check answer stage
function clickedSlotHandler(event) {
    clickedSlot(event.currentTarget);
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

/*Function to check the user's answer against the original word passed into the initialisegame function. 
Different messages are returned depending on whether all slots have been filled, and whether they've been filled correctly or not*/
function checkAnswer() {
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
        slotList.forEach(slot => {
            slot.style.backgroundColor = "rgb(0, 128, 0)";
            slot.style.color = "rgb(255,255,255)";
        });
        storyImage.src = story[story.currentChapter].storyImage2;
        resetButton.style.display = "none";
        checkButton.style.display = "none";
        confetti();
        setTimeout(choices, 3000);

    } else {
        alert("That's not correct, try again!");
        slots.forEach(slot => {
            slot.style.backgroundColor = "rgb(255, 0, 0)";
            slot.style.color = "rgb(255,255,255)";
        });
    };
};

// function to reset the tiles and the slots to the initialisepuzzle state, without resetting the entire game and reshuffling the tiles into different places.
function resetPuzzle() {
    const slots = document.querySelectorAll(".slot");
    const tiles = document.querySelectorAll(".tile");
    slots.forEach(slot => {
        slot.textContent = "";
        slot.removeAttribute("data-id");
        slot.style.backgroundColor = "rgb(255, 255, 255)";
        slot.style.color = "rgb(0,0,0)";
    });

    tiles.forEach(tile => {
        tile.style.visibility = "visible";
    });
};

function choices() {
    choice1.style.display = "inline-block";
    choice2.style.display = "inline-block";
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    if (story.currentChapter == "intro") {
       choice1.textContent= "Go to Sleep";
       choice2.textContent = "Stay Awake";
        const choice1ClickHandler = () => {
            story.currentChapter = "void";
            loadChapter();
            getPuzzle.style.visibility = "visible";
            choice1.removeEventListener("click", choice1ClickHandler);
        };
        // const choice2ClickHandler = () => {
        //     story.currentChapter = "";
        //     loadChapter();
        //     getPuzzle.style.visibility = "visible";
        //     choice2.removeEventListener("click", choice2ClickHandler);
        // }
        choice1.addEventListener("click", choice1ClickHandler);
        // choice2.addEventListener("click", choice2ClickHandler);
    };

};