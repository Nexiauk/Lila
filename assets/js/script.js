const story = {
    currentChapter: "1",
    intro: {
        title: "Intro",
        storyText: `Lila sits on her bed looking at the floor, a curtain of dark hair covering her face. Her soft plushies watch her from their shelves with sad eyes and downturned mouths. Lila doesn't move, not even when her mum pops her head around the doorway and calls her name; gently, carefully, as if anything above a whisper would shatter her fragile daughter. Lila doesn't respond. She can't. The words won't come out.
The door clicks softly shut and Lila stares at the magnetic board on the wall above her bed. It should say 'Goodnight' but some of the letters have fallen off. Lila picks them up from the bedspread and starts to place them in the empty spots.`
    },

    1: {
        title: "Chapter 1",
        storyText: `Lila falls into troubled sleep, her dreams dark and twisted. She cries in her dreams, not realising she cries in her bed, too. `
    }
}

document.getElementById("title").innerText = story[story.currentChapter].title;
document.getElementById("story-text").innerText = story[story.currentChapter].storyText;
document.getElementById("story-text").classList.add(`chapter-${story.currentChapter}`)