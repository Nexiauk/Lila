// Event listener to check whether the DOM content has loaded - when it has, it runs the preloadImages function
window.addEventListener("DOMContentLoaded", preloadImages);

/**Function to preload all images into the cache after the DOM has loaded - this should ensure that they will be immediately to available to use in advance and stop the small delay in the changeover of chapter images. */
function preloadImages(e) {
    // Creates an array using all image sources
    const imageArray = new Array("./assets/images/bedroom-gloomy.avif", "./assets/images/bedroom-gloomy-small.avif", "./assets/images/bedroom-sleep.avif", "./assets/images/bedroom-sleep-small.avif", "./assets/images/vortex-gloomy.avif", "./assets/images/vortex-gloomy-small.avif", "./assets/images/vortex-lovely.avif", "./assets/images/vortex-lovely-small.avif", "./assets/images/forest-gloomy.avif", "./assets/images/forest-gloomy-small.avif", "./assets/images/forest-lovely.avif", "./assets/images/forest-lovely-small.avif", "./assets/images/lake-gloomy.avif", "./assets/images/lake-gloomy-small.avif", "./assets/images/lake-lovely.avif", "./assets/images/lake-lovely-small.avif", "./assets/images/library-gloomy.avif", "./assets/images/library-gloomy-small.avif", "./assets/images/library-lovely.avif", "./assets/images/library-lovely-small.avif", "./assets/images/game-over.avif", "./assets/images/game-over-small.avif", "./assets/images/bedroom-ending.avif", "./assets/images/bedroom-ending-small.avif");

// Loops through the image array and creates a new tempimage for each one. Setting the source property on each temp image means the browser begins to download the images referenced and they will be cached for later use.
    for (let i = 0; i < imageArray.length; i++) {
        const tempImage = new Image();
        tempImage.src = imageArray[i];
    }
}

/* Story object to dynamically insert story components into pre-defined sections in index.html. Contains a title, a story image with extra srcsets for small and large, and story text. Also has a second image with srcsets for small and large, and storytext2 - the second set of story content is used post-puzzle completion. The choices directly populate the choices buttons that allow navigation to different story areas. tThe word in each chapter directly populates the word puzzle.*/
const story = {
    // currentChapter is set throughout the JS functions to refrence the object key/value pairs to use when dynamically inserting content into index.html
    currentChapter: "",
    intro: {
        title: "Introduction",
        storyImage: "./assets/images/bedroom-gloomy.avif",
        altText: "An image of Lila in her bedroom looking sad",
        storyImageLarge: "./assets/images/bedroom-gloomy.avif",
        storyImageSmall: "./assets/images/bedroom-gloomy-small.avif",
        storyImage2: "./assets/images/bedroom-sleep.avif",
        altText2: "An image of Lila in her bedroom looking sleepy",
        storyImage2Large: "./assets/images/bedroom-sleep.avif",
        storyImage2Small: "./assets/images/bedroom-sleep-small.avif",
        storyText: `<p>Lila sits on her bed in the <mark>dark</mark>, a curtain of hair covering her face. Her soft plushies watch her with <mark>sad</mark> eyes and <mark>dejected</mark> expressions. Lila's' mum pops her head around the doorway and whispers, "Goodnight."</p> <p>Lila doesn't respond. She can't.</p> <p>The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. She doesn't know how to voice what she's feeling, but maybe she could spell it out so that the <mark>ache</mark> in her heart will let her sleep...</p>`,
        storyText2: `<p>Sorrow. That's what she's feeling.</p> <p>A bone-deep sadness at the piece of her that is now gone forever. She'll never see them again, never hear their voice, no more hugs.</p> <p>The feeling hurts, but naming it takes away some of its power and a weariness washes over Lila.</p> <p>All she wants to do is sleep. Sleep, and forget.</p>`,
        choice1: "Go to Sleep",
        choice2: "Stay Awake",
        word: "SORROW",
    },

    void: {
        title: "The Void",
        storyImage: "./assets/images/vortex-gloomy.avif",
        altText: "An image of Lila spinning in the void between wakefulness and sleep.",
        storyImageLarge: "./assets/images/vortex-gloomy.avif",
        storyImageSmall: "./assets/images/vortex-gloomy-small.avif",
        storyImage2: "./assets/images/vortex-lovely.avif",
        altText2: "An image of Lila spinning through rainbows",
        storyImage2Large: "./assets/images/vortex-lovely.avif",
        storyImage2Small: "./assets/images/vortex-lovely-small.avif",
        storyText: `<p>Lila falls into troubled dreams, spinning slowly into a darkness that tries to swallow her whole.</p> <p>The gloom swirls around her in a cloud, trying to get into her eyes, nose, and mouth. She <mark>shakes her head</mark> and closes her eyes, buttons up her mouth, <mark>refuses</mark> to let it in.</p> <p>Lila <mark>turns from</mark> the darkness and all it represents, but the more she <mark>ignores</mark> it the worse it gets. She doesn't know how to make it stop.</p> <p>Letters coalesce in the void and she grabs them, tries to put them in an order that makes sense...</p>`,
        storyText2: `<p>Denial.</p> <p>Lila has been trying to push away the truth in the hopes her loss will become untrue. That it was all some bad dream she could wake up from, if only she knew how.</p>  <p>The void slows down and flashes through with bright, vibrant colours.</p> <p>Despite herself, Lila smiles at the rainbows -  the same rainbows they would look at together out the living room window, when the sun began to shine on a rainy day.</p>`,
        choice1: "Visit the Forest",
        choice2: "Visit the Lake",
        choice3: "Visit the Library",
        word: "DENIAL",
    },

    forest: {
        title: "The Forest",
        storyImage: "./assets/images/forest-gloomy.avif",
        altText: "An image of Lila in a dream forest looking sad",
        storyImageLarge: "./assets/images/forest-gloomy.avif",
        storyImageSmall: "./assets/images/forest-gloomy-small.avif",
        storyImage2: "./assets/images/forest-lovely.avif",
        altText2: "An image of Lila looking happy in a forest surrounded by animals and falling leaves.",
        storyImage2Large: "./assets/images/forest-lovely.avif",
        storyImage2Small: "./assets/images/forest-lovely-small.avif",
        storyText: `<p>The forest is dark and oppressive; Lila feels trapped in a web she can't get out of.</p> <p>She can't <mark>acknowledge</mark> what has happened or <mark>admit</mark> to herself that she doesn't feel okay. That things will never be the same again.</p> <p>She loved to walk with them in the forest; they would tell her to <mark>go ahead</mark> and look for wildlife, and encourage her to <mark>let go</mark> any animals she caught so they could run free.</p> <p>Lila wants to feel <mark>free</mark>. The web around her starts to form the letters of a word... </p>`,
        storyText2: `<p>Accept. Lila must give in, without giving up or forgetting. She needs to remember the good things, the happy memories, the light and colour that lives in the world.</p> <p>The shadows lift, revealing the riotous colour of blossoms and leaves, which drift and fall around her. Dappled light drenches Lila, reminding her that warmth still exists after the cold dark, as the trees show her how to bend, not break.</p> <p>Her animal friends are with her, like <em>they</em> will always be with her.</p> `,
        choice1: "Visit the Library",
        choice2: "Visit the Lake",
        endChoice: "Wake Up",
        word: "ACCEPT",
    },

    lake: {
        title: "The Lake",
        storyImage: "./assets/images/lake-gloomy.avif",
        altText: "An image of Lila in a dream lake looking sad",
        storyImageLarge: "./assets/images/lake-gloomy.avif",
        storyImageSmall: "./assets/images/lake-gloomy-small.avif",
        storyImage2: "./assets/images/lake-lovely.avif",
        altText2: "An image of Lila in a beautiful dream lake looking starry-eyed",
        storyImage2Large: "./assets/images/lake-lovely.avif",
        storyImage2Small: "./assets/images/lake-lovely-small.avif",
        storyText: `<p>Lila drops into the murky waters of a dreary lake, icy rain falling from the cloudy sky. She <mark>wishes</mark> the mist would clear; she <mark>yearns</mark> to see the sky and the stars.</p> <p>She remembers rowing out on a lake with them, <mark>hoping</mark> to see constellations in the midnight skies. A shooting star had carried her <mark>heart's desire</mark> into the universe, while she wrapped up in warm blankets and drank hot chocolate.</p> <p>Lila's chest fills with an emotion she can't express and as she looks up at the sky, the struggling light of distant stars begin to form the letters of a word...</p>`,
        storyText2: `<p>Longing. Lila longs to be held in their arms again, safe and loved while they tell her stories about the constellations.</p> <p>Lila climbs into the boat with her wishes, which she sends out into the universe like shooting stars and the sky fills with them, twinkling so bright and beautiful that her eyes shine with wonder.</p> <p>The mist clears, and the lake glitters with reflected stardust. The moon comes out from behind the clouds and looks down like a kindly face, bestowing its warm glow on Lila.</p>`,
        choice1: "Visit the Forest",
        choice2: "Visit the Library",
        endChoice: "Wake Up",
        word: "LONGING",
    },

    library: {
        title: "The Library",
        storyImage: "./assets/images/library-gloomy.avif",
        altText: "An image of Lila looking angry in a dream library",
        storyImageLarge: "./assets/images/library-gloomy.avif",
        storyImageSmall: "./assets/images/library-gloomy-small.avif",
        storyImage2: "./assets/images/library-lovely.avif",
        altText: "An image of Lila looking happy in the library",
        storyImage2Large: "./assets/images/library-lovely.avif",
        storyImage2Small: "./assets/images/library-lovely-small.avif",
        storyText: `<p>Lila enters the library in a furious <mark>storm</mark> of emotion.</p> <p>The <mark>raging</mark> tempest <mark>ignites</mark></span> the books around her into flames, as though <mark>lashing out</mark> at the unfairness of it all. Pages flutter through the air as she stomps and kicks and breaks things.</p> <p>She can't use her words, and she may have lost her voice, but Lila tries to express herself as she <mark>destroys</mark> the place that had been their sanctum.</p> <p>Scraps of paper fall from the torn pages to the floor, spelling out the emotion that she's feeling...</p>`,
        storyText2: `<p>Furious. Lila is furious at the unfairness of it all.</p> <p>She doesn't want to go to the library alone. She doesn't want to be alone full stop.</p> <p>The storm dies down as she is reminded of the joy she finds in reading, all because of <em>them</em>. She finds peace in the quiet library, it is her safe space, her hideaway, full of magic and stories.</p> <p>Books drift round her like fireflies, filling Lila with an untold joy at the gift she has been given. The gift <em>they</em> gave to her.</p>`,
        choice1: "Visit the Forest",
        choice2: "Visit the Lake",
        endChoice: "Wake Up",
        word: "FURIOUS",
    },

    ending1: {
        title: "Game Over",
        storyImage: "./assets/images/game-over.avif",
        altText: "Game over animation",
        storyImageLarge: "./assets/images/game-over.avif",
        storyImageSmall: "./assets/images/game-over-small.avif",
        storyText: `Unfortunately, your journey with Lila ends here. Without a good night's sleep, she cannot work through her grief. You can always try again.`,
    },

    ending2: {
        title: "Congratulations!!",
        storyImage: "./assets/images/bedroom-ending.avif",
        altText: "An image of Lila in her bedroom looking happy",
        storyImageLarge: "./assets/images/bedroom-ending.avif",
        storyImageSmall: "./assets/images/bedroom-ending-small.avif",
        storyText: `<p>Lila wakes up to a room, and a world, that feels different to the one that existed before she slept.</p> <p>The darkness and the loss hasn't gone away, and it probably never will, but it has faded enough to let the sunshine in. To let the starlight and the rainbows through.</p> <p>It has dispersed enough for Lila to see that she has loved and been loved by someone very special, to see that they will never truly leave her; they will always be with her in memories and in dreams.</p> <p>It has disappeared enough to allow Lila to smile again. To allow her to speak again and she whispers quietly, "I miss you... I love you."</p> <p><strong>Thank you for playing.</strong></p>`,
    }
};

// Global variables
const getPuzzle = document.getElementById("get-puzzle");
const tryAgain = document.getElementById("try-again");
const getHint = document.getElementById("get-hint");
const resetButton = document.getElementById("reset-button");
const checkButton = document.getElementById("check");
const startButton = document.getElementById("start-game");
const storyImage = document.getElementById("story-image");
const storyImageLarge = document.getElementById("large-img");
const storyImageSmall = document.getElementById("small-img");
const storyTitle = document.getElementById("title");
const storyText = document.getElementById("story-text");
const storyOuterCol = document.getElementById("text-col");
const puzzleArea = document.getElementById("puzzle-area");
const puzzleQuestion = document.getElementById("puzzle-question");
const puzzleAnswer = document.getElementById("puzzle-answer");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const endChoice = document.getElementById("end-choice");
const checkArea = document.getElementById("buttons");
const collectedWords = document.getElementById("collected-words");
let checkScore = 0;
let forestVisited = false;
let lakeVisited = false;
let libraryVisited = false;
let word = "";

// Event listeners for various reused buttons
startButton.addEventListener("click", startGame);
getHint.addEventListener("click", showHint);
getPuzzle.addEventListener("click", initialisePuzzle);
tryAgain.addEventListener("click", restartGame);

/**This function is fired after reaching the game over chapter (ending1 it sets the currentchapter back to intro, hides the tryagain button, shows the getpuzzle button and clears the collected words list in the word inventory section */
function restartGame() {
    story.currentChapter = "intro";
    tryAgain.style.display = "none";
    getPuzzle.style.display = "inline-block";
    collectedWords.innerHTML = "";
    loadChapter();
}

/**This function loads when the start game button is pressed. It hides the start button and displays the getpuzzle button. The story object chapter is changed and it automatically loads that chapter and all its relevant content via the loadchapter function*/
function startGame() {
    story.currentChapter = "intro";
    startButton.style.display = "none";
    getPuzzle.style.display = "inline-block";
    loadChapter();
}

/**This function grabs all of the words that have been tagged with 'mark' in the currently displayed story text and adds a class that styles those words to become hints. Class can be toggled on and off. */
function showHint() {
    const marked = document.querySelectorAll("mark");
    marked.forEach(mark => {
        mark.classList.toggle("mark-on");
    });
}

/**Function to grab all the content needed to load a new chapter from the story object's current chapter. Each chapter has a title, storytext, and an image src and srcset that goes with it. Content is dynamically fed through to the specified element IDs in Index.html. Existing chapter and image classes are removed and then re-added with the new current chapter's styling. Choice buttons for story navigation are hidden.*/
function loadChapter() {
    // If statement to show or hide the Try Again button,w hich should only appear if the Game Over screen loads from ending1
    if (story.currentChapter == "ending1") {
        tryAgain.style.display = "inline-block";
    } else {
        tryAgain.style.display = "none";
    }
    // Pulls through the current chapter's story image and the alt text that are both set in the story object's chapter sub-object
    storyImage.src = story[story.currentChapter].storyImage;
    storyImage.alt = story[story.currentChapter].altText;

    // Pulls through appropriate image sourcesets from the chapter objects, depending on screen size. Feeds through to a picture element in index.html where each srcset has been given an ID.
    storyImageSmall.srcset = story[story.currentChapter].storyImageSmall;
    storyImageLarge.srcset = story[story.currentChapter].storyImageLarge;

    // Pulls through title and storytext from the current chapter
    storyTitle.innerHTML = story[story.currentChapter].title;
    storyText.innerHTML = story[story.currentChapter].storyText;

    // Automatically scrolls the screen back up to the story image so changing graphics don't get missed by the player
    storyImage.scrollIntoView({ behavior: "smooth" });

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
    // Adds the current chapter's styling via a dynamically inserted class already stored in the CSS file
    storyOuterCol.classList.add(`chapter-${story.currentChapter}`);
    storyImage.classList.add(`chapter-${story.currentChapter}`);

    // Sets all the story choice buttons so they can't be seen.
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    endChoice.style.display = "none";
}

/**This function loads the word tied to the current chapter, scrambles it and creates tiles and empty slots equal to the letters in the word. It has functionality to automatically scrolldown to the puzzle area so a user doesn't have to use their mouse or keyboard keys. The getPuzzle button is hidden while the puzzle is active and the check and reset buttons are set to appear, with event listeners added to them that connect to further functions. A Get Hint button also appears that will style the marked words in the paragraph text to create clues to the current puzzle.*/
function initialisePuzzle() {
    // Scrolls the puzzle area into view
    puzzleArea.scrollIntoView({ behavior: "smooth" });

    // displays the Get Hint button
    getHint.style.display = "inline-block";

    // Pulls the word from the story object's current chapter sub-object
    word = story[story.currentChapter].word;

    // Sets checkScore to 0 for the current puzzle. The word inventory element stores the number of checked attempts in an unordered list.
    checkScore = 0;

    // Hides and shows appropriate buttons
    getPuzzle.style.display = "none";
    checkArea.style.visibility = "visible";
    checkButton.style.visibility = "visible";
    resetButton.style.visibility = "visible";

    // Removes any previously added event listeners to the check and reset buttons, to stop event listeners stacking up.
    checkButton.removeEventListener("click", checkAnswer);
    resetButton.removeEventListener("click", resetPuzzle);

    // Adds new event listeners to the check and reset buttons
    checkButton.addEventListener("click", checkAnswer);
    resetButton.addEventListener("click", resetPuzzle);

    //Arrow function splits the current word into an array of letters and then maps an id to each letter that matches the array indexes.
    const letterArray = word.split("").map((letter, index) => ({
        letter: letter,
        id: index,
    }));

    /**Function to reverse iterate through the letter array and swap elements i and j. Fisher-Yates shuffle model. This function is used to shuffle the letterarray created by splitting the original word*/
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    shuffle(letterArray);

    //Clears the puzzle areas of any existing content to ensure a blank canvas for the current word puzzle.
    puzzleQuestion.innerText = "";
    puzzleAnswer.innerText = "";

    /*splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div. Adds the slot class for styling into boxes. Eventlistener calls the clickedslot function*/
    word.split("").forEach((letter) => {
        // Creates a new div element in the puzzle answer area and adds a predefined class called slot, which styled it as an empty box
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);

        // Removes any styling that may already be related to the slots
        slot.classList.forEach(cls => {
            if (cls.startsWith("chapter-")) {
                slot.classList.remove(cls);
            }
        });
        // Adds slot styling as per the current chapter's predefined class in CSS. Each set of slots should match the current chapter's colour scheme. Adds an eventlistener to eachs lot that fires the clickedslothandler function
        slot.classList.add(`chapter-${story.currentChapter}`);
        slot.addEventListener("click", clickedSlotHandler);
    });

    /*For every letter stored in letterArray, a new lettered tile is created in the puzzleQuestion div. Populates with each letter in the shuffled order. Adds the tile class for styling into tiles. Ensures that each tile has an id and content matching the letterArray and then runs the clickedTile function, passing through the letter and the tile.*/
    letterArray.forEach((letter) => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = letter.letter;
        tile.dataset.id = letter.id;
        puzzleQuestion.appendChild(tile);

        // Adds an event listener to each tile that fires the clikedtilehandler function
        tile.addEventListener("click", clickedTileHandler);
    });
}

/**Function to select the first empty slot and populate it with the letter of the clicked tile. Passes the letter and the tile through to the function and if there's an available slot, it passes the letter id and content to the slot. The tile is then hidden.*/
function clickedTile(letter, tile) {
    let availableSlot = document.querySelector(".slot:empty");
    if (availableSlot) {
        availableSlot.dataset.id = letter.id;
        availableSlot.textContent = letter.letter;
        tile.style.visibility = "hidden";
    }
}

/**Named handler function for clicked slots, so that the event listener can be properly removed at the check answer stage*/
function clickedSlotHandler(event) {
    clickedSlot(event.currentTarget);
}

/**Named handler function for clicked tiles, so that the event listener can be properly removed at the check answer stage*/
function clickedTileHandler(event) {
    const tile = event.currentTarget;
    const letter = {
        letter: tile.textContent,
        id: tile.dataset.id
    };
    clickedTile(letter, tile);
}

/**Function to clear the letter content from a slot and make its correlating tile visible again. If there's no current id assigned to a slot because a tile's data hasn't been passed to it, then the function will end. If there is an id, then this function will clear the textcontent from the clicked slot and remove the data-id attribute. The queryselector then finds the tile with with an id that matches the slot's id and makes it visible again.*/
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

/**Function to check the user's answer against the original word passed into the initialisegame function. Different outcomes occur depending on whether all slots have been filled, and whether they've been filled correctly or not*/
function checkAnswer() {

    // Everytime check answer button is clicked, it adds 1 to the checkScore variable, which populates into the words list as a number of attempts.
    checkScore = checkScore + 1;
    // Re-declared slot and tile variables as they were definied in another function's block of code.
    const slots = document.querySelectorAll(".slot");
    const tiles = document.querySelectorAll(".tile");

    // arrow function checks if any slots are empty and creates an array of the empty slots
    const allFilled = Array.from(slots).every(slot => slot.textContent !== "");

    // Removes event listener from all slots so they aren't clickable while animation is playing
    slots.forEach(slot => {
        slot.removeEventListener("click", clickedSlotHandler);
    });
    // Removes event listener from all tiles so they aren't clickable while an animation plays
    tiles.forEach(tile => {
        tile.removeEventListener("click", clickedTileHandler);
    });

    /**Function that reverts all slots back to their chapter styling after getting an answer wrong/incomplete. Also re-adds the tile event listeners back on so the puzzle can be re-tried. */
    function revert() {
        checkButton.addEventListener("click", checkAnswer);
        /*Removes the wrong-answer class from all slots; this is added during checkanswer when an answer is fully inocrrect, or when slots haven't been filled. Adds the current chapter's styling back to the slots. readds event listener to all slots for the clickedslothandler function */
        slots.forEach(slot => {
            slot.classList.remove("wrong-answer");
            slot.classList.add(`chapter-${story.currentChapter}`);
            slot.addEventListener("click", clickedSlotHandler);
        }
        );
        // Readds the event listener to all tiles for the clickedtilehandler function
        tiles.forEach(tile => {
            tile.addEventListener("click", clickedTileHandler);

        });
    }

    /* If not all slots are filled, the current chapter class is removed and the wrong answer class is applied to each slot, styling and animating the unfilled slots. The revert function runs after 2 seconds automatically.*/
    if (!allFilled) {
        slots.forEach(slot => {
            if (slot.textContent === "") {
                checkButton.removeEventListener("click", checkAnswer);
                slot.classList.remove(`chapter-${story.currentChapter}`);
                slot.removeEventListener("click", clickedSlotHandler);
                slot.classList.add("wrong-answer");
                setTimeout(revert, 2000);
            }
        });
        // Ensures that checkanswer functions tops here if all slots aren't filled in
        return;
    }

    //If all slots are filled, the slot's data is passed into the userAnswer variable in order to form the word the user has spelt with the tiles. This is then compared to the original word passed into the game.
    let userAnswer = "";
    slots.forEach(slot => {
        userAnswer += slot.textContent;
    });
    //If the word matches, slot colours are changed to a positive green colour and the eventlistener is removed to prevent users removing them from the slots.
    if (userAnswer == word) {
        slots.forEach(slot => {
            slot.style.backgroundColor = "rgb(0, 128, 0)";
            slot.style.color = "rgb(255,255,255)";
            slot.removeEventListener("click", clickedSlotHandler);
        });
        /*Loads the secondary image and srcsets for the current chapter and the secondary post-puzzle story text. */
        storyImage.src = story[story.currentChapter].storyImage2;
        storyImage.alt = story[story.currentChapter].altText2;
        storyImageSmall.srcset = story[story.currentChapter].storyImage2Small;
        storyImageLarge.srcset = story[story.currentChapter].storyImage2Large;
        storyText.innerHTML = story[story.currentChapter].storyText2;

        // Buttons are hidden as they aren't needed until another puzzle is initialised
        resetButton.style.visibility = "hidden";
        checkButton.style.visibility = "hidden";
        getHint.style.display = "none";

        // creates a new list item in the word inventory with the current puzzle's original word and the number of attempts to correctly spell it.
        const newListItem = document.createElement("li");
        newListItem.textContent = word;
        collectedWords.appendChild(newListItem);
        const wordScore = document.createElement("li");
        wordScore.textContent = "Attempts: " + checkScore;
        collectedWords.appendChild(wordScore);

        // Sets a small timeout before scrolling the screen back to the storyimage element. This gives time for the confetti animation to play
        setTimeout(() => {
            storyImage.scrollIntoView({ behavior: "smooth" });
        }, 3000);

        // Runs the confetti function from the canvas confetti external JS library and sets a small timeout before the choice buttons appear to navigate to other chapters
        confetti();
        setTimeout(choices, 4000);

        /*If the answer is incorrect, the event listeners are removed from the check and reset buttons so the animations aren't interrupted, to prevent multiple resets occurring on the wslots, and to players spamming the check answer button and boosting their attempts score infinitely*/ 
    } else {
        checkButton.removeEventListener("click", checkAnswer);
        resetButton.removeEventListener("click", resetPuzzle);

        // Removes the current chapter styling from the slots and then adds the wrong-answer predefined classlist toy style them instead
        slots.forEach(slot => {
            slot.classList.remove(`chapter-${story.currentChapter}`);
            slot.classList.add("wrong-answer");
        });
        // A small timeout to allow the wrong answer animation to play, before automatically resetting the tiles and slots
        setTimeout(resetPuzzle, 3000);
    }
}

/**function to reset the tiles and the slots, without resetting the entire game and reshuffling the tiles into different places. Also re-adds event listeners to all slots and tiles and ensures that the current chapter styling has been applied*/
function resetPuzzle() {
    const slots = document.querySelectorAll(".slot");
    const tiles = document.querySelectorAll(".tile");

    // Readds event listeners to the check and reset buttons
    checkButton.addEventListener("click", checkAnswer);
    resetButton.addEventListener("click", resetPuzzle);

    // Removes the data-id attribute from the slots, as well as the wrong chapter styling. readds current chapter styling and the event listener for the clickedslothandler function so slots are clickable again
    slots.forEach(slot => {
        slot.textContent = "";
        slot.removeAttribute("data-id");
        slot.classList.remove("wrong-answer");
        slot.classList.add(`chapter-${story.currentChapter}`);
        slot.addEventListener("click", clickedSlotHandler);
    });
    // Sets all tiles to visible again and readds the event listener for the clickedtilehandler function so that all tiles are clickable again
    tiles.forEach(tile => {
        tile.style.visibility = "visible";
        tile.addEventListener("click", clickedTileHandler);
    });
}

/**Function automatically runs and displays the choices buttons in the story in the text-col area that contains the storytext. Clears the puzzle area of all current content and populates the choice buttons with the preset text for each choice in the current chapter.*/
function choices() {
    // Setd initial choice button states
    choice1.style.display = "inline-block";
    choice2.style.display = "inline-block";
    choice3.style.display = "none";
    endChoice.style.display = "none";

    // Clears the puzzle area of all content
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    // Definies where the buttons are pulling their text content from in the story object
    choice1.textContent = story[story.currentChapter].choice1;
    choice2.textContent = story[story.currentChapter].choice2;
    choice3.textContent = story[story.currentChapter].choice3;
    endChoice.textContent = story[story.currentChapter].endChoice;

    /*Adds event listeners to each choice button, that when clicked, will automatically load the specified chapter from the story object. Choices are given depending on what the current chapter is. -Visited variables are set for each area that isn't narratively linear so that once an area has been visited, it won't appear again as an option*/

    // If the player is currently on the intro chapter, they will get the choice to either go to sleep, or wake up.
    if (story.currentChapter == "intro") {
        // changes the current chapter before running the load chapter function. Displays the puzzle button if that chapter contains a puzzle
        const choice1ClickHandler = () => {
            story.currentChapter = "void";
            loadChapter();
            getPuzzle.style.display = "inline-block";
            // Removes the event listener to stop them from stacking up
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
    }

    if (story.currentChapter == "void") {
        // This chapter has 3 choices so the choice3 button is added here
        choice3.style.display = "inline-block";

        // The forest, the lake, and the library all have variables set to false. Once they've been visited their variable is set to true to ensure logic handles whether or not they appear again
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
    }

    if (story.currentChapter == "forest") {
        // If statements handle what appears depending on visited variables being true or not for each chapter
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
        }

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
    }

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
        }

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
    }

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
        }

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
        }
    }
    // If all locations have been visited, the wake up option appears, which will take the player to the end game screen.
    if (forestVisited && lakeVisited && libraryVisited) {
        // the endchoice button appears Headers, and only here, no matter which chapter you finish on.
        endChoice.style.display = "inline-block";
        const endChoiceClickHandler = () => {
            story.currentChapter = "ending2";
            loadChapter();
            getPuzzle.style.display = "none";
        };
        endChoice.addEventListener("click", endChoiceClickHandler);
    }
}

