
const story = {
    currentChapter: "intro",
    intro: {
        title: "Introduction",
        storyText: `<p></p>Lila sits on her bed looking at the floor, a curtain of dark hair covering her face. Her soft plushies watch her from their shelves with sad eyes and downturned mouths. Lila doesn't move, not even when her mum pops her head around the doorway and calls her name; gently, carefully, as if anything above a whisper would shatter her fragile daughter. Lila doesn't respond. She can't. The words won't come out.
The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. It should spell a word but the letters have fallen off. Lila picks them up from the bedspread and starts to place them in the empty spots...</p>
<button id="getPuzzle">Puzzle</button>`
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
    const puzzleButton = document.getElementById("getPuzzle");
    if (puzzleButton) {
        puzzleButton.addEventListener("click", puzzle1);
    } else {
        console.error("Button not found!")
    }
}, 0);

// 
function puzzle1() {
    const word = "GOODNIGHT";
    let shuffled = word.split("").sort();
    const puzzleQuestion = document.getElementById("puzzle-question");
    const puzzleAnswer = document.getElementById("puzzle-answer");

    puzzleQuestion.innerHTML = " ";
    puzzleAnswer.innerHTML = " ";

    word.split("").forEach((letter, index) => {
        let slot = document.createElement("div");
        slot.classList.add("slot");
        slot.dataset.index = index;
        puzzleAnswer.appendChild(slot);
        // slot.addEventListener("click", clickedSlot(slot, index));
    });

    shuffled.forEach((letter, index) => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = letter;
        tile.id = `tile-${index}`;
        tile.dataset.letter = letter;
        puzzleQuestion.appendChild(tile);
        // tile.addEventListener("click", clickedTile);
    });
}

function clickedTile() {

}