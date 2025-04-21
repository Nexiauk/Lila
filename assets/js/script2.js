// Story object to dynamically insert Story titles and chapters into pre-defined sections in index.html
const story = {
    currentChapter: "",
    intro: {
        title: "Introduction",
        storyImage: "./assets/images/bedroom-gloomy.avif",
        storyImageLarge: "./assets/images/bedroom-gloomy.avif",
        storyImageSmall: "./assets/images/bedroom-gloomy-small.avif",
        storyImage2: "./assets/images/bedroom-sleep.avif",
        storyImage2Large: "./assets/images/bedroom-sleep.avif",
        storyImage2Small: "./assets/images/bedroom-sleep-small.avif",
        storyText: `<p>Lila sits on her bed in the <span class="highlight">dark</span>, a curtain of hair covering her face. Her soft plushies watch her with <span class="highlight">sad</span> eyes and <span class="highlight">dejected</span> expressions. Lila doesn't move, not even when her mum pops her head around the doorway and whispers, "Goodnight"; gently, carefully, as if anything above a whisper would shatter her fragile daughter.</p> <p>Lila doesn't respond. She can't.</p> <p>The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. She doesn't know how to voice what she's feeling, but maybe she could spell it out so that the <span class="highlight">ache</span> in her heart will let her sleep...</p>`,
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
        storyImageLarge: "./assets/images/vortex-gloomy.avif",
        storyImageSmall: "./assets/images/vortex-gloomy-small.avif",
        storyImage2: "./assets/images/vortex-lovely.avif",
        storyImage2Large: "./assets/images/vortex-lovely.avif",
        storyImage2Small: "./assets/images/vortex-lovely-small.avif",
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
        storyImageLarge: "./assets/images/forest-gloomy.avif",
        storyImageSmall: "./assets/images/forest-gloomy-small.avif",
        storyImage2: "./assets/images/forest-lovely.avif",
        storyImage2Large: "./assets/images/forest-lovely.avif",
        storyImage2Small: "./assets/images/forest-lovely-small.avif",
        storyText: `The forest is dark, oppressive, stifling. Lila feels trapped in a web she can't get out of. She can't <span class="highlight">accept</span> what has happened - she doesn't want to. She can't <span class="highlight">admit</span> to herself that they have gone, that they are forever gone, that she doesn't feel <span class="highlight">okay</span> and that things will never be the same again. The forest used to be a place she loved to walk with them, underneath the whispering canopy of leaves. They would tell her to <span class="highlight">go ahead</span> and explore the tranquil forest paths, to look for small animals. They would  encourage her to <span class="highlight">release</span> her animal friends back into the wild, where they can run free.Lila wants to feel free. She just needs to... she must... she doesn't know what the word is.The web around her starts to form the letters of a word... `,
        storyText2: `Surrender. Lila must give in, not give up. She needs to accept her loss, but she doesn't need to forget. She needs to remember the good things, the happy memories, the light and colour that lives in the world. She needs to remember how to be free of the darkness. The shadows lift from the trees, revealing the riotous colour of their blossoms and leaves, which drift and fall around her like springtime snow. Dappled light drenches Lila, reminding her that warmth still exists after the cold dark, as the trees lend her their strength and show her how to bend, not break. The animal friends she released into the forest have joined her, are with her, like <em>they</em> will always be with her. `,
        choice1: "Visit the Library",
        choice2: "Visit the Lake",
        endChoice: "Wake Up",
        word: "SURRENDER",
        hint: ""
    },

    lake: {
        title: "The Lake",
        storyImage: "./assets/images/lake-gloomy.avif",
        storyImageLarge: "./assets/images/lake-gloomy.avif",
        storyImageSmall: "./assets/images/lake-gloomy-small.avif",
        storyImage2: "./assets/images/lake-lovely.avif",
        storyImage2Large: "./assets/images/lake-lovely.avif",
        storyImage2Small: "./assets/images/lake-lovely-small.avif",
        storyText: `Lila drops into the murky waters of a dreary lake. Icy rain falls from the cloudy sky and she shivers, teeth chattering as the grey water drenches through to her skin. The lake seems familiar, but she can't quite place it - everything seems wrong in the dense fog. She <span class="highlight">wishes</span> the mist would clear; she <span class="highlight">yearns</span> to see the sky and the stars. She remembers rowing out on a lake with them, <span class="highlight">hoping</span> to see constellations in the midnight skies. A shooting star had carried her <span class="highlight">heart's desire</span> into the universe, while she wrapped up in warm blankets and drank hot chocolate with them in the swaying, bobbing little boat. Lila's chest fills with an emotion she can't express and as she looks up at the sky, the struggling light of distant stars begin to form the letters of a word...`,
        storyText2: `Longing. Lila longs to be held in their arms again, safe and loved. She wishes they would come home and sit in the little boat with her, telling her stories about the constellations and what they mean. Lila aches for them to be here, instead of there. Lila climbs into the boat with her wishes, which she sends out into the universe like so many shooting stars and the sky fills with them, twinkling so bright and so beautiful that her eyes shine with wonder. Their light is so brilliant that the mist clears, and the lake  glitters with reflected stardust. The moon comes out from behind the clouds and looks down like a kindly, benevolent face bestowing its warm glow on Lila.`,
        choice1: "Visit the Forest",
        choice2: "Visit the Library",
        endChoice: "Wake Up",
        word: "LONGING",
        hint: ""
    },

    library: {
        title: "The Library",
        storyImage: "./assets/images/library-gloomy.avif",
        storyImageLarge: "./assets/images/library-gloomy.avif",
        storyImageSmall: "./assets/images/library-gloomy-small.avif",
        storyImage2: "./assets/images/library-lovely.avif",
        storyImage2Large: "./assets/images/library-lovely.avif",
        storyImage2Small: "./assets/images/library-lovely-small.avif",
        storyText: `Lila enters the library in a furious <span class="highlight">storm</span> of emotion. She feels wild with it, as though thunder crashes in her chest and lightning strikes through her heart. The <span class="highlight">raging</span> tempest <span class="highlight">ignites</span> the books around her into flames, as though <span class="highlight">lashing out</span> at the unfairness of it all. Pages flutter through the air, torn out in rebellion and she stomps as loudly as she can, kicking and breaking and doing everything she's not meant to do in a library. She can't use her words, and she may have lost her voice, but Lila tries to express herself through action as she <span class="highlight">destroys</span> the very same place that had been their sanctum. She doesn't want to be quiet now, she wants to be heard. Scraps of paper fall from the torn pages to the floor, spelling out the emotion that she's feeling so she can quell it with the waters of understanding...`,
        storyText2: `Furious. Lila is furious at the unfairness of it all. She doesn't want to go to the library alone. She doesn't want to be alone full stop. She doesn't want to be without them. The storm dies down as she thinks about the long afternoons they'd spent browsing the shelves, reading quietly in big comfy chairs, simply enjoying stillness and togetherness. She is reminded of the joy she finds in reading books, all because of <em>them</em>.  She finds peace in the quiet library, it is her safe space, her hideaway, full of magic and stories. The fires morph into a beautiful sunset and the books drift round her like fireflies, filling Lila with an untold joy at the gift she has been given. The gift <em>they</em> gave to her.`,
        choice1: "Visit the Forest",
        choice2: "Visit the Lake",
        endChoice: "Wake Up",
        word: "FURIOUS",
        hint: ""
    },

    ending1: {
        title: "Game Over",
        storyImage: "",
        storyImage2: "",
        storyText: `Short ending if you choose not to go to sleep`,
        choice1: "Start Again",
        choice2: "",
        word: "TEMPEST",
        hint: ""
    },

    ending2: {
        title: "Congratulations!!",
        storyImage: "./assets/images/bedroom-ending.avif",
        storyImageLarge: "./assets/images/bedroom-ending.avif",
        storyImageSmall: "./assets/images/bedroom-ending-small.avif",
        storyText: `Lila wakes up to a room, and a world, that feels different to the one that existed before she slept. The darkness and the loss hasn't gone away, will probably never go away, but it has faded enough to let the sunshine in. To let the starlight and the rainbows through. It has dispersed enough for Lila to see that she has loved and been loved by someone very special, to see that they will never fully leave her, they will always be with her in memories and in dreams. It has disappeared enough to allow Lila to smile again.`,
        choice1: "Wake Up"
    }
};

// Global variables
const getPuzzle = document.getElementById("get-puzzle");
const resetButton = document.getElementById("reset-button");
const checkButton = document.getElementById("check");
const startButton = document.getElementById("start-game");
const storyImage = document.getElementById("story-image");
const storyImageLarge = document.getElementById("large-img");
const storyImageSmall = document.getElementById("small-img");
const navBar = document.getElementById("navbar");
const storyTitle = document.getElementById("title");
const storyText = document.getElementById("story-text");
const storyOuterCol = document.getElementById("text-col");
const puzzleArea = document.getElementById("puzzle-area");
const puzzleQuestion = document.getElementById("puzzle-question");
const puzzleAnswer = document.getElementById("puzzle-answer");
const systemText = document.getElementById("system-text");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const endChoice = document.getElementById("end-choice");
const checkArea = document.getElementById("buttons");
const collectedWords = document.getElementById("collected-words");
const mainSection = document.getElementById("main-container");
let checkScore = 0;
let forestVisited = false;
let lakeVisited = false;
let libraryVisited = false;
let start = false
let word = "";

startButton.addEventListener("click", startGame);
getPuzzle.addEventListener("click", initialisePuzzle)

/*This function loads when the start game button is pressed. It hides the start button and displays the getpuzzle button. The story object chapter is changed and it automatically loads that chapter and all its relevant content*/
function startGame() {
    story.currentChapter = "intro";
    startButton.style.display = "none";
    getPuzzle.style.display = "inline-block";
    loadChapter();
};

/** Function to grab all the content needed to load a new chapter from the story object's current chapter. Each chapter has a title, storytext, and an image src that goes with it. Content is dynamically fed through to the specified element IDs in Index.html. Chapter and image classes are removed and then re-added with the new current chapter's styling. Choice buttons for story navigation are hidden. */ 
function loadChapter() {
    storyTitle.innerHTML = story[story.currentChapter].title;
    storyText.innerHTML = story[story.currentChapter].storyText;

    // Removes any chapter classes currently applied to the story text's outer column
    storyOuterCol.classList.forEach(cls => {
        if (cls.startsWith("chapter-")) {
            storyOuterCol.classList.remove(cls);
        }
    });
// Removes any chapter classes currently applied to the story image
    storyImage.classList.forEach(cls => {
        if (cls.startsWith("chapter-")) {
            storyImage.classList.remove(cls);
        }
    });
    storyOuterCol.classList.add(`chapter-${story.currentChapter}`);
    storyImage.classList.add(`chapter-${story.currentChapter}`);
    storyImage.src = story[story.currentChapter].storyImage;
    storyImageSmall.srcset= story[story.currentChapter].storyImageSmall;
    storyImageLarge.srcset = story[story.currentChapter].storyImageLarge;
    storyImage.scrollIntoView({ behavior: "smooth" });
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    endChoice.style.display = "none";
}

/* Used to delay the passing of this function until the DOM has finished loading. Important as the getPuzzle button is added via dynamically modified DOM content. This was added to solve an issue whereby clicking on the getPuzzle button didn't do anything. The timeout gives the DOM time to fully load. */
// setTimeout(() => {
//     const puzzleButton = document.getElementById("get-puzzle");
//     if (puzzleButton) {
//         puzzleButton.addEventListener("click", initialisePuzzle);
//     } else {
//         console.error("Button not found!")
//     }
// }, 0);


/** Loads the word tied to the current chapter, scrambles it and creates tiles and empty slots equal to the letters in the word. It has functionality to automatically scrolldown to the puzzle area so a user doesn't have to use their mouse or keyboard keys. The getPuzzle button is hidden and the check and reset buttons are set to appear, with event listeners added to them that connect to further functions. */
function initialisePuzzle() {
    puzzleArea.scrollIntoView({ behavior: "smooth" });
    word = story[story.currentChapter].word;
    checkScore = 0;
    getPuzzle.style.display = "none";
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

    /**Function to reverse iterate through the letter array and swap elements i and j. Fisher-Yates shuffle model.
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

    /* splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div.
    Adds the slot class for styling into boxes.
    eventlistener calls the clickedslot function*/
    word.split("").forEach((letter) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);
        slot.classList.forEach(cls => {
            if (cls.startsWith("chapter-")) {
                slot.classList.remove(cls);
            }
        });
        slot.classList.add(`chapter-${story.currentChapter}`);
        slot.addEventListener("click", clickedSlotHandler);
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

    /**Function to select the first empty slot and populate it with the letter of the clicked tile. 
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

/**Function to clear a letter from a slot and make its correlating tile visible again.
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

/**Function to check the user's answer against the original word passed into the initialisegame function. 
Different messages are returned depending on whether all slots have been filled, and whether they've been filled correctly or not*/
function checkAnswer() {
    // Everytime check answer button is clicked, it adds 1 to the checkScore variable, which populates into the words list as a number of attempts.
    checkScore = checkScore + 1;
    const slots = document.querySelectorAll(".slot");
    // arrow function checks if any slots are empty
    const allFilled = Array.from(slots).every(slot => slot.textContent !== "");
    // If not all slots are filled, alert the user and exit the function
    if (!allFilled) {
        slots.forEach(slot => {
            if (slot.textContent === "") {
                slot.classList.remove(`chapter-${story.currentChapter}`);
                slot.classList.add("wrong-answer");
            }
        });
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
            slot.removeEventListener("click", clickedSlotHandler);
        });
        /*Loads the secondary image for the chapter and the secondary text. Hides the puzzle buttons and creates a new list item with this puzzle's original word and the number of attempts to correctly spell it. Runs the confetti function from the canvas confetti external JS library and sets a small timeout before the choice buttons appear to navigate to other chapters*/
        storyImage.src = story[story.currentChapter].storyImage2;
        storyImageSmall.srcset= story[story.currentChapter].storyImage2Small;
        storyImageLarge.srcset = story[story.currentChapter].storyImage2Large;
        storyText.innerHTML = story[story.currentChapter].storyText2;
        resetButton.style.display = "none";
        checkButton.style.display = "none";
        const newListItem = document.createElement("li");
        newListItem.textContent = word;
        collectedWords.appendChild(newListItem);
        const wordScore = document.createElement("li");
        wordScore.textContent = "Attempts: " + checkScore;
        collectedWords.appendChild(wordScore);
        storyImage.scrollIntoView({ behavior: "smooth" });        
        confetti();
        setTimeout(choices, 3000);
// Gives an alert to try again and runs the resetpuzzle function to make all tiles visible and empty all slots.
    } else {
        slots.forEach(slot => {
            slot.classList.remove(`chapter-${story.currentChapter}`);
            slot.classList.add("wrong-answer");
        });
        setTimeout(resetPuzzle, 3000);
    };
};

/**function to reset the tiles and the slots to the initialisepuzzle state, without resetting the entire game and reshuffling the tiles into different places.*/
function resetPuzzle() {
    const slots = document.querySelectorAll(".slot");
    const tiles = document.querySelectorAll(".tile");
    slots.forEach(slot => {
        slot.textContent = "";
        slot.removeAttribute("data-id");
        slot.classList.remove("wrong-answer");
        slot.classList.add(`chapter-${story.currentChapter}`);
    });

    tiles.forEach(tile => {
        tile.style.visibility = "visible";
    });
};

/**Function automatically runs and displays the choices buttons in the story in the text-col area that contains the storytext. Clears the puzzle area of all current content and populates the choice buttons with the preset text for each choice in the current chapter. */
function choices() {
    choice1.style.display = "inline-block";
    choice2.style.display = "inline-block";
    choice3.style.display = "none";
    endChoice.style.display = "none";
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";
    choice1.textContent = story[story.currentChapter].choice1;
    choice2.textContent = story[story.currentChapter].choice2;
    choice3.textContent = story[story.currentChapter].choice3;
    endChoice.textContent = story[story.currentChapter].endChoice;

/*Adds event listeners to each choice button, that when clicked, will automatically load the specified chapter from the story object. Choices are given depending on what the current chapter is. -Visited variables are set for each area that isn't narratively linear so that once an area has been visited, it won't appear again as a option*/
    if (story.currentChapter == "intro") {
        const choice1ClickHandler = () => {
            story.currentChapter = "void";
            loadChapter();
            getPuzzle.style.display = "inline-block";
            choice1.removeEventListener("click", choice1ClickHandler);
        };

        const choice2ClickHandler = () => {
            story.currentChapter = "ending1";
            loadChapter();
            getPuzzle.style.display = "none";
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
            getPuzzle.style.display = "inline-block";
            choice1.removeEventListener("click", choice1ClickHandler);
        };
        const choice2ClickHandler = () => {
            story.currentChapter = "lake";
            lakeVisited = true;
            loadChapter();
            getPuzzle.style.display = "inline-block";
            choice2.removeEventListener("click", choice2ClickHandler);

        };
        const choice3ClickHandler = () => {
            story.currentChapter = "library";
            libraryVisited = true;
            loadChapter();
            getPuzzle.style.display = "inline-block";
            choice3.removeEventListener("click", choice3ClickHandler);
        };
        choice1.addEventListener("click", choice1ClickHandler);
        choice2.addEventListener("click", choice2ClickHandler);
        choice3.addEventListener("click", choice3ClickHandler);
    };


    if (story.currentChapter == "forest") {
        if (libraryVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "library";
                libraryVisited = true;
                loadChapter();
                getPuzzle.style.display = "inline-block";
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
                getPuzzle.style.display = "inline-block";
                choice2.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";
        }
    };

    if (story.currentChapter == "library") {
        if (forestVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "forest";
                forestVisited = true;
                loadChapter();
                getPuzzle.style.display = "inline-block";
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
                getPuzzle.style.display = "inline-block";
                choice2.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";

        };
    };

    if (story.currentChapter == "lake") {
        if (forestVisited == false) {
            const choice1ClickHandler = () => {
                story.currentChapter = "forest";
                forestVisited = true;
                loadChapter();
                getPuzzle.style.display = "inline-block";
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
                getPuzzle.style.display = "inline-block";
                choice2.removeEventListener("click", choice2ClickHandler);
            };
            choice2.addEventListener("click", choice2ClickHandler);
        } else {
            choice2.style.display = "none";
        };

    };

    if (forestVisited && lakeVisited && libraryVisited) {
        endChoice.style.display = "inline-block";
        const endChoiceClickHandler = () => {
            story.currentChapter = "ending2";
            loadChapter();
            getPuzzle.style.display = "none";
        };
        endChoice.addEventListener("click", endChoiceClickHandler);
    };
};