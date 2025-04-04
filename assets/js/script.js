// Story object to dynamically insert Story titles and chapters into pre-defined sections in index.html
const story = {
    currentChapter: "intro",
    intro: {
        title: "Introduction",
        storyText: `<p>Lila sits on her bed looking at the floor, a curtain of dark hair covering her face. Her soft plushies watch her from their shelves with sad eyes and downturned mouths. Lila doesn't move, not even when her mum pops her head around the doorway and and says "Goodnight, sweetheart"; gently, carefully, as if anything above a whisper would shatter her fragile daughter. Lila doesn't respond. She can't. The words won't come out.
The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. She picks up the letters from the bedspread and starts to build a word...</p>
<center><button id="get-puzzle">Puzzle</button></center>`
    },

    1: {
        title: "Chapter 1: The Void",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `
    }
}

document.getElementById("title").innerText = story[story.currentChapter].title;
document.getElementById("story-text").innerHTML = story[story.currentChapter].storyText;
document.getElementById("story-text").classList.add(`chapter-${story.currentChapter}`);

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
    checkButton = document.getElementById("buttons");
    buttons.style.visibility = "visible";
    getPuzzle = document.getElementById("get-puzzle");
    getPuzzle.style.visibility = "hidden";
    const word = "GOODNIGHT";
    // First function splits the word into an array of letters and then maps an id to each letter that matches the array indexes.
    const letterArray = word.split("").map((letter, index) => ({
        letter: letter,
        id: index,
    }));

    // Function to reverse iterate through the letter array and swap elements i and j. Fisher-Yates shuffle model.
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    shuffle(letterArray);

    // Clear the puzzle areas of any existing content.
    const puzzleQuestion = document.getElementById("puzzle-question");
    const puzzleAnswer = document.getElementById("puzzle-answer");
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";

    // splits the puzzle word into an array of letters and creates a new slot for each one in the puzzleAnswer div
    word.split("").forEach((letter) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        puzzleAnswer.appendChild(slot);
        slot.addEventListener("click", () => clickedSlot(slot));
    });

    /*For every letter stored in letterArray, a new lettered tile is created in the puzzleQuestion div. 
    Populates with each letter in the shuffled order. 
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
    checkCompletion(word);
}

function checkCompletion(word) {
    const button = document.getElementById("check");
    button.addEventListener("click", () => {
        const slots = document.querySelectorAll(".slot");
        const allFilled = Array.from(slots).every(slot => slot.textContent !== "");
        if (!allFilled) {
            alert("Not done");
        } else {
            let userAnswer = "";
            slots.forEach(slot => {
                userAnswer += slot.textContent;
            })
            if (userAnswer == word) {
                alert("Yay");
            } else {
                alert("wrong");
            }
        }
    });
}

const button = document.getElementById("reset-button");
button.addEventListener("click", () => {
    const puzzleQuestion = document.getElementById("puzzle-question");
    const puzzleAnswer = document.getElementById("puzzle-answer");
    puzzleQuestion.innerHTML = "";
    puzzleAnswer.innerHTML = "";
    initialisePuzzle();
})











