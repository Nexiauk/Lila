// Story object to dynamically insert Story titles and chapters into pre-defined sections in index.html
const story = {
    currentChapter: "welcome",
    welcome: {
        title: `Welcome`,
        storyImage: "./assets/images/title-screen.avif",
        storyText: `Welcome!<br>Lila is a little girl who has experienced a sudden and heartbreaking loss.<br>The loss has been so intense that she has lost her ability to speak.<br>
            Travel with Lila and help her to find the words she needs to express how she's feeling...`
    },

    intro: {
        title: "Introduction",
        storyImage: "./assets/images/bedroom-gloomy.avif",
        storyImage2: "./assets/images/bedroom-sleep.avif",
        storyText: `Lila sits on her bed in the <span class="highlight">dark</span>, a curtain of hair covering her face. Her soft plushies watch her with <span class="highlight">sad</span> eyes and <span class="highlight">dejected</span> expressions. Lila doesn't move, not even when her mum pops her head around the doorway and whispers, "Goodnight"; gently, carefully, as if anything above a whisper would shatter her fragile daughter. Lila doesn't respond. She can't. The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. She doesn't know how to voice what she's feeling, but maybe she could spell it out so that the <span class="highlight">ache</span> in her heart will let her sleep...`,
        storyText2: `Sorrow. <br><br>That's what she's feeling. <br><br>A bone-deep sadness at the piece of her that is now gone forever. She'll never see them again, never hear their voice, no more hugs.
The feeling hurts, but naming it takes away some of its power and a weariness washes over Lila. All she wants to do is sleep. Sleep, and forget.`,
        choice1: "Go to sleep",
        choice2: "Stay Awake",
        word: "SORROW",
        hint: ""
    },

    void: {
        title: "The Void",
        storyImage: "./assets/images/vortex-gloomy.avif",
        storyImage2: "./assets/images/vortex-lovely.avif",
        storyText: `Lila falls into troubled dreams, spinning slowly into a darkness that tries to swallow her whole. The gloom swirls around her in a cloud, trying to get into her eyes, nose, and mouth. She <span class="highlight">shakes her head</span> and closes her eyes, buttons up her mouth, <span class="highlight">refuses</span> to let it in. Lila <span class="highlight">turns from</span> the darkness and all it represents, from the loss that she is feeling, but the more she <span class="highlight">ignores</span> it the deeper it swallows her. She doesn't understand what she's feeling or how to make it stop. Letters coalesce in the void and she grabs them, tries to put them in an order that makes sense...`,
        storyText2: `Denial. Lila has been trying to push away the truth in the hopes her loss will become untrue. That it was all some bad dream she could wake up from, if only she knew how. Where did they go? Will she see them again? As she thinks about these important questions, the void slows down and flashes through with bright, vibrant colours. Despite herself, Lila smiles at the rainbows -  the same rainbows they would look at together out the living room window when the sun began to shine on a rainy day.`,
        choice1: "Visit the Forest",
        choice2: "Visit the Lake",
        choice3: "Visit the Library",
        word: "DENIAL",
        hint: ""
    },

    forest: {
        title: "The Forest",
        storyImage: "./assets/images/forest-gloomy.avif",
        storyImage2: "./assets/images/forest-lovely.avif",
        storyText: `This should load the forest story text. `,
        storyText2: `Post-puzzle text for the forest`,
        choice1: "Visit the Library",
        choice2: "Visit the Lake",
        word: "SURRENDER",
        hint: ""
    },

    lake: {
        title: "The Lake",
        storyImage: "./assets/images/lake-gloomy.avif",
        storyImage2: "./assets/images/lake-lovely.avif",
        storyText: `Insert story text here about the lake`,
        storyText2: `Post-puzzle text for the lake`,
        choice1: "Visit the Forest",
        choice2: "Visit the Library",
        word: "LONGING",
        hint: ""
    },

    library: {
        title: "The Library",
        storyImage: "./assets/images/library-gloomy.avif",
        storyImage2: "./assets/images/library-lovely.avif",
        storyText: `Insert story text here about the library`,
        storyText2: `Post-puzzle text for the library`,
        choice1: "Visit the Forest",
        choice2: "Visit the Lake",
        word: "FURIOUS",
        hint: ""
    },

    ending1: {
        title: "Game Over",
        storyImage: "",
        storyImage2: "",
        storyText: `Short ending if you choose not to go to sleep`,
        choice1: "",
        choice2: "",
        word: "TEMPEST",
        hint: ""
    },

    ending2: {
        title: "Congratulations!!",
        storyImage: "./assets/images/bedroom-ending.avif",
        storyImage2: "",
        storyText: `Game completion ending`,
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
const choice3 = document.getElementById("choice-3");
const checkArea = document.getElementById("buttons");
const collectedWords = document.getElementById("collected-words");
const mainSection = document.getElementById("main-container");
let checkScore = 0;
let forestVisited = false;
let lakeVisited = false;
let libraryVisited = false;
let word = "";
startButton.addEventListener("click", startGame);

// Immediately loads the first chapter from the story object, which is set to 'welcome' by default
loadChapter();

/*This function loads when the start game button is pressed. It hides the start button and displays the getpuzzle button. The story object chapter is changed and it automatically loads that chapter and all its relevant content*/
function startGame() {
    story.currentChapter = "intro";
    startButton.style.display = "none";
    getPuzzle.style.display = "inline-block";
    getPuzzle.style.visibility = "visible";
    loadChapter();
};

/* Function to grab all the content needed to load a new chapter from the story object's current chapter. Each chapter has a title, storytext, and an image src that goes with it. Content is dynamically fed through to the specified elemtn IDs in Index.html. storyOuterCol adds a class to the outer text column so that the column background colours can be changed depending on the chapter loaded. The choice buttons are set to not appear here and to not take up any space while they're not needed. */ 
function loadChapter() {
    storyTitle.innerHTML = story[story.currentChapter].title;
    storyText.innerHTML = story[story.currentChapter].storyText;
    storyOuterCol.classList.add(`chapter-${story.currentChapter}`);
    storyImage.src = story[story.currentChapter].storyImage;
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
}


/* Used to delay the passing of this function until the DOM has finished loading. Important as the getPuzzle button is added via dynamically modified DOM content. This was added to solve an issue whereby clicking on the getPuzzle button didn't do anything. The timeout gives the DOM time to fully load. */
setTimeout(() => {
    const puzzleButton = document.getElementById("get-puzzle");
    if (puzzleButton) {
        puzzleButton.addEventListener("click", initialisePuzzle);
    } else {
        console.error("Button not found!")
    }
}, 0);


/* Initialise puzzle function loads the word tied to the current chapter, scrambles it and creates tiles and empty slots equal to the letters in the word. It has functionality to automatically scrolldown to the puzzle area so a user doesn't have to use their mouse or keyboard keys. The getPuzzle button is hidden and the check and reset buttons are set to appear, with event listeners added to them that connect to further functions. */
function initialisePuzzle() {
    puzzleArea.scrollIntoView({ behavior: "smooth" });
    word = story[story.currentChapter].word;
    checkScore = 0;
    getPuzzle.style.visibility = "hidden";
    checkArea.style.visibility = "visible";
    checkButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
    checkButton.addEventListener("click", checkAnswer);
    resetButton.addEventListener("click", resetPuzzle);

    // Arrow function splits the word into an array of letters and then maps an id to each letter that matches the array indexes.
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

    // Clears the puzzle areas of any existing content to ensure a blank canvas for the current word puzzle.
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    /*splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div.
    Adds the slot class for styling into boxes.
    eventlistener calls the clickedslot function*/
    word.split("").forEach((letter) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);
        slot.addEventListener("click", clickedSlot);
    });

    /*For every letter stored in letterArray, a new lettered tile is created in the puzzleQuestion div. 
    Populates with each letter in the shuffled order. 
    Adds the tile class for styling into tiles.
    Ensures that each tile has an id and content matching the letterArray and then runs the clickedTile function, passing through the letter and the tile.
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

/*Function to clear a letter from a slot and make its correlating tile visible again.
If there's no current id assigned to a slot because a tile's data hasn't been passed to it, then the function will end.
If there is an id, then this function will clear the textcontent from the clicked slot and remove the data-id attribute.
The queryselector then finds the tile with with an id that matches the slot's id and makes it visible again.*/
function clickedSlot(slot) {
    const id = slot.dataset.id;
    if (!id) return;
    slot.textContent = "";
    slot.removeAttribute("data-id");
    slot.style.backgroundColor = "white";
    const matchingTile = document.querySelector(`.tile[data-id='${id}']`);
    if (matchingTile) {
        matchingTile.style.visibility = "visible";
    }
}

/*Function to check the user's answer against the original word passed into the initialisegame function. 
Different messages are returned depending on whether all slots have been filled, and whether they've been filled correctly or not*/
function checkAnswer() {
    // Everytime check answer button is clicked, it adds 1 to the checkScore variable, which populates into the words list as a number of attempts.
    checkScore = checkScore + 1;
    const slots = document.querySelectorAll(".slot");
    // arrow function checks if any slots are empty
    const allFilled = Array.from(slots).every(slot => slot.textContent !== "");
    // If not all slots are filled, alert the user and exit the function
    if (!allFilled) {
        alert("Please fill all the slots!");
        return;
    }
    // If all slots are filled, the slots are passed into the userAnswer variable in order to form the word the user has spelt with the tiles. This is then compared to the original word passed into the game.
    let userAnswer = "";
    slots.forEach(slot => {
        userAnswer += slot.textContent;
    });
    // Slot colours are changed to a positive green colour and the eventlistener is removed to prevent users removing them from the slots. Auto scrolls back to the main content container.
    if (userAnswer == word) {
        mainSection.scrollIntoView({ behavior: "smooth" });
        slots.forEach(slot => {
            slot.style.backgroundColor = "rgb(0, 128, 0)";
            slot.style.color = "rgb(255,255,255)";
            slot.removeEventListener("click", clickedSlot);
        });
        /*Loads the secondary image for the chapter and the secondary text. Hides the puzzle buttons and creates a new list item with this puzzle's original word and the number of attempts to correctly spell it. Runs the confetti function from the canvas confetti external JS library and sets a small timeout before the choice buttons appear to navigate to other chapters*/
        storyImage.src = story[story.currentChapter].storyImage2;
        storyText.innerHTML = story[story.currentChapter].storyText2;
        resetButton.style.display = "none";
        checkButton.style.display = "none";
        const newListItem = document.createElement("li");
        newListItem.textContent = word;
        collectedWords.appendChild(newListItem);
        const wordScore = document.createElement("li");
        wordScore.textContent = "Attempts: " + checkScore;
        collectedWords.appendChild(wordScore);
        confetti();
        setTimeout(choices, 3000);
// Gives an alert to try again and runs the resetpuzzle function to make all tiles visible and empty all slots.
    } else {
        alert("That's not correct, try again!");
        resetPuzzle();
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

/*Function automatically runs and displays the choices buttons in the story in the text-col area that contains the storytext. Clears the puzzle area of all current content and populates the choice buttons with the preset text for each choice in the current chapter. */
function choices() {
    choice1.style.display = "inline-block";
    choice2.style.display = "inline-block";
    choice3.style.display = "none";
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";
    choice1.textContent = story[story.currentChapter].choice1;
    choice2.textContent = story[story.currentChapter].choice2;
    choice3.textContent = story[story.currentChapter].choice3;

    /*Once all areas are visited, the ending will automatically load*/
    if (forestVisited && lakeVisited && libraryVisited) {
        story.currentChapter = "ending2";
        loadChapter();
        getPuzzle.style.visibility = "hidden";
        return;
    };

/*Adds event listeners to each choice button, that when clicked, will automatically load the specified chapter from the story object. Choices are given depending on what the current chapter is. -Visited variables are set for each area that isn't narratively linear so that once an area has been visited, it won't appear again as a option*/
    if (story.currentChapter == "intro") {
        const choice1ClickHandler = () => {
            story.currentChapter = "void";
            loadChapter();
            getPuzzle.style.visibility = "visible";
            choice1.removeEventListener("click", choice1ClickHandler);
        };

        const choice2ClickHandler = () => {
            story.currentChapter = "ending1";
            loadChapter();
            getPuzzle.style.visibility = "hidden";
            choice2.removeEventListener("click", choice2ClickHandler);
        };
        choice1.addEventListener("click", choice1ClickHandler);
        choice2.addEventListener("click", choice2ClickHandler);

    };



    if (story.currentChapter == "void") {
        choice3.style.display = "inline-block";

        const choice1ClickHandler = () => {
            story.currentChapter = "forest";
            forestVisited = true;
            loadChapter();
            getPuzzle.style.visibility = "visible";
            choice1.removeEventListener("click", choice1ClickHandler);
        };
        const choice2ClickHandler = () => {
            story.currentChapter = "lake";
            lakeVisited = true;
            loadChapter();
            getPuzzle.style.visibility = "visible";
            choice2.removeEventListener("click", choice2ClickHandler);

        };
        const choice3ClickHandler = () => {
            story.currentChapter = "library";
            libraryVisited = true;
            loadChapter();
            getPuzzle.style.visibility = "visible";
            choice3.removeEventListener("click", choice3ClickHandler);
        };
        choice1.addEventListener("click", choice1ClickHandler);
        choice2.addEventListener("click", choice2ClickHandler);
        choice3.addEventListener("click", choice3ClickHandler);
    };


    if (story.currentChapter == "forest") {
        console.log("The forest has been visited")

        if (libraryVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "library";
                libraryVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice1.removeEventListener("click", choice1ClickHandler);
            };
            choice1.addEventListener("click", choice1ClickHandler);
        } else {
            choice1.style.display = "none";
        };

        if (lakeVisited == false) {
            const choice2ClickHandler = () => {
                story.currentChapter = "lake";
                lakeVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice1.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";
        }
    };

    if (story.currentChapter == "library") {
        console.log("The library has been visited")

        if (forestVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "forest";
                forestVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice1.removeEventListener("click", choice1ClickHandler);
            };
            choice1.addEventListener("click", choice1ClickHandler);
        } else {
            choice1.style.display = "none";
        };

        if (lakeVisited == false) {
            const choice2ClickHandler = () => {
                story.currentChapter = "lake";
                lakeVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice2.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";

        };
    };

    if (story.currentChapter == "lake") {
        console.log("The lake has been visited")

        if (forestVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "forest";
                forestVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice1.removeEventListener("click", choice1ClickHandler);
            };
            choice1.addEventListener("click", choice1ClickHandler);
        } else {
            choice1.style.display = "none";
        };

        if (libraryVisited == false) {
            const choice2ClickHandler = () => {
                story.currentChapter = "library";
                libraryVisited = true;
                loadChapter();
                getPuzzle.style.visibility = "visible";
                choice2.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";
        };

    };
};