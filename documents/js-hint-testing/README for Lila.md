# **Lila and the Lost Words**

![Game displaying on various different screen sizes](/assets/images/readme-images/responsive.png)

[View the live project here](https://nexiauk.github.io/Lila/)

This game has been created as a project during my [Code Institute](https://codeinstitute.net/) Level 5 Web App Development course.

---

## **Table of Contents**

* [Inspiration](#inspiration)  
* [Website Goals](#website-goals)  
* [User Experience](#user-experience-ux)  
  * [Types of Users](#types-of-users)  
  * [User Stories](#user-stories)  
* [Design](#design)  
  * [Colour Scheme](#colour-scheme)  
  * [Typography](#typography)  
  * [Imagery](#imagery)  
  * [Wireframes](#wireframes)  
  * [Story Plotting](#story-plotting)
  * [End Product Design Changes](#end-product-design-changes)  
* [Features](#features)  
  * [Responsiveness](#responsiveness)  
  * [Header](#header)  
  * [Footer](#footer)  
  * [Socials Bar](#socials-bar)
  * [Interactive Elements](#interactive-elements)   
* [Future Features](#future-features)  
* [Testing](#testing)  
  * [User Story Testing](#user-story-testing)  
  * [Automated Testing](#automated-testing)  
    * [The W3C Markup Validation Service](#the-w3c-markup-validation-service)  
    * [The W3C CSS Validation Service](#the-w3c-css-validation-service)  
    * [The JSHint Validator](#the-jshint-validator)
    * [The WAVE Web Accessibility Evaluation Tool](#the-wave-webb-accessibility-evaluation-tool)  
    * [Chrome Lighthouse](#chrome-lighthouse)  
  * [Manual Testing](#manual-testing---features-and-responsiveness)  
  * [Bugs/Interesting Problems](#bugsinteresting-problems)  
* [Technologies and Languages](#technologies-and-languages)  
  * [Languages](#languages)  
  * [Frameworks, Libraries and Programs](#frameworks-libraries--programs)  
* [Deployment](#deployment)  
  * [Creating a Fork](#creating-a-fork)  
  * [Cloning a repository](#cloning-a-repository)  
* [Credits](#credits)  
  * [Media](#media)  
  * [Code Help](#code-help)  
  * [Acknowledgements](#acknowledgements)  
  * [Creator Comments](#creator-comments)

## **Lila and the Lost Words**

Lila and the Lost Words is a choose your own adventure game with integrated word puzzles. Lila is a young girl who has experienced a sudden and heartbreaking loss.  
The loss has been so intense that she has lost her ability to speak.  
Travel with Lila through her dreams and help her to find the words she needs to express how she's feeling and cope with the grief she’s experiencing.

## **Inspiration**

I work in a library at an FE college where I run an award-winning tabletop gaming programme for disengaged 14-18 year olds. The programme is called Gameracy and it helps students to improve literacy, numeracy, teamwork and strategy skills by playing tabletop games to take the stress out of learning. 

Another part of the Gameracy programme is our coding club, where we teach students the basics of creating a Choose-Your-Own-Adventure (CYOA) game using software called Twine. Students take elements from the tabletop games (storyline, monsters, boss fights, loot and inventory systems) and create their own digital games based on these concepts. 

My colleagues and I upskilled ourselves in Twine and the coding format called SugarCube. We have created a series of games and demos that our students can play, to demonstrate the types of mechanics they can create using HTML and CSS.

I’d never ventured into JavaScript myself, only used freely available packages/libraries created by others for the demos that we created, so when the opportunity arose as part of my Level 5 to create an app using HTML, CSS and JavaScript, the obvious choice for me was a CYOA game that I could publish on our Virtual Learning Environment for our Gameracy students to play.

We’ve also created a video game collection for the Gameracy programme consisting of titles that are designed to help with literacy and numeracy, that explore themes such as grief, mental health, and friendship, among others. I’d recently played an immersive, emotional game from this collection called Gris, which was like playing through a piece of art that explored the 5 stages of grief. 

Gris became my inspiration behind the story of Lila’s Lost Words. I wanted to create a game to help improve literacy and understanding of text, but I also wanted the storyline to be something beautiful and cathartic that people could connect with; an experience.

Lila and the Lost Words has been designed hugely with accessibility in mind, as a lot of the students who attend our programme have specific learning difficulties and struggle with reading \- it’s important to me to remove barriers to entry for those students.It has also been designed to be responsive across mobiles, tablets and desktop screens; this is important as most of our students predominantly use their phones.

[Back to Table of Contents](#table-of-contents)

---

## **Game Goals**

* Improve literacy through the comprehension of story text.  
* Improve logical and problem solving skills through the use of word puzzles as an integral game mechanic.  
* Create a story that users can connect with and will want to read.  
* Create an immersive, emotional experience using graphics and colour.  
* Offer a gentle, low-pressure gaming experience.

[Back to Table of Contents](#table-of-contents)

---

## **User Experience (UX)**

### Types of Users

* **Disengaged or Struggling Students**  
  Students who struggle to connect with traditional learning and teaching methods, and who are reluctant to read  
* **Students with Specific Learning Difficulties (SpLDs)**  
  Students who may have specific learning difficulties, such as dyslexia  
* **Students Who Primarily Use Mobile Devices**  
  Students whose main form of technology access is their mobile phone  
* **Students Interested in Games, Storytelling, and Creativity**  
  Game players who are drawn to story-driven experiences and creative problem-solving  
* **Anyone Seeking an Emotional, Artistic Game Experience**  
  Anyone else with access to the published product who is interested in playing through a story-driven game

### User Stories

#### **🎮 Student Users**

**As a disengaged learner**

* I want to explore a story world through simple button clicks and intuitive choices, so that I can improve my reading skills without feeling overwhelmed.  
* I want to be challenged by the puzzles but also have a system in place to help me if I get stuck

**As a student with an SpLD**

*  I want to read short, clear passages in a calm, uncluttered layout, so that I can easily follow the story and enjoy it at my own pace  
* I want the fonts, line spacing and colours to be accessible

**As a creative student who enjoys storytelling**

*  I want to experience a game with an emotional narrative so that I feel immersed in the journey and inspired to tell stories of my own.

**As a creative student who enjoys games**

* I want to be engaged with creative problem solving that helps improve my literacy  
* I want to be able to track my progress and see how well I’m doing at the puzzles

**As a student who primarily uses a smartphone**

* I want the game’s interface to respond smoothly on a small screen, with large, easy-to-tap buttons and clear navigation, so that I can enjoy the full experience without needing a computer.

#### **🌟 General Audience**

**As someone who enjoys emotional, story-rich games**

*  I want to be gently led through a journey using beautiful visuals, smooth transitions, and clear interactive elements, so that I can connect with the story, reflect on the themes, and enjoy the experience in a meaningful way

[Back to Table of Contents](#table-of-contents)



## **Design**

### Colour Scheme

*     --main-colour: #420f2a; Colour name: What we do in the shadows 
*     --intro-colour: #1b1f2e; Colour name: Dark 
*     --void-colour: #642133; Colour name: Siren
*     --lake-colour: #19406a; Colour name: Nightlife
*     --forest-colour: #1c5d55; Colour name: Philodendron
*     --library-colour: #a7130c; Colour name: Buchel Cherry 
*     --ending-colour: #FDD788; Colour name: No. 5
*     --chapter-text: white;  
*     --ending-text: black;  
*     --base-colour: #FBF7F0; Colour name: Silver Bird

![Image showing a palette of all the colours](/assets/images/readme-images/colour-palette.png)


I created variables for the colour scheme so that it was easier to apply them to elements as the story dynamically updated and changed.   
All the colours were sampled directly from the chapter images and tweaked until they fully passed and complied with WCAG regulations pertaining to contrast ratios.  
The main colour was sampled directly from Lila’s own eye colour and has been used on the main game elements throughout \- the header, the word inventory and the footer. These elements do not change their colour throughout the story. It has also been used as the colour for the About page.  
The chapter colours are used on the image border, as the background colour for the story text, and for the puzzle slots. These elements change colour as the player traverses through each chapter.

The base colour is the fallback colour for the game’s background image. It is sampled directly from the paper image.

[Adobe Colour](https://color.adobe.com/create/color-contrast-analyzer)’s contrast checker was used to check the contrast ratio of the text colour against each background


### Typography

* I used [fontjoy.com](http://www.fontjoy.com) to generate a scheme of fonts that go well together, that are accessible, and that are attractive. I took a little time with this because I didn't want fonts that contained double-storey letters, as they can be harder for people with specific learning difficulties to process. They all also needed to be Sans serif fonts, which are recommended for people with dyslexia or who have low vision.   
* I asked FontJoy to create a set of fonts that were similar to each other in contrast and specifically double-checked them against Google font feelings for a vintage and playful feel, to convey the retro CYOA theme and the fact the main character is a child.  
    
  * I chose Fugaz One for the game title in the nav-brand area.  It falls under and is classified under the following Google Font feelings:  
    * Vintage  
    * Child-like  
    * Playful  
    * Sans serif  

  * Fontjoy suggested Alegreya Sans for headings. Feelings:  
    * Vintage  
    * Calm  
    * Sans serif  

  * Josefin Sans was chosen for the paragraph and nav-link text. Feelings:  
    * Vintage  
    * Artistic  
    * Sans serif

### Imagery

The Lila character was created in an art style referred to as Chibi. Chibi refers to a super-deformation (SD), caricature art style originating in Japan, often used in anime and manga. It features characters with exaggerated features like large heads, large eyes, and small bodies, often described as cute or childlike.

![An image of the Lila character, dressed in a coat with long, black hair. She looks sad](/assets/images/readme-images/lila-sad.png)

Chibi art style falls under a concept called ‘Kawaii’ \-  a Japanese phenomenon which means cute or adorable, which Lila is, but also has a deeper meaning \- it can imply something powerless, delicate, or in need of care. A concept which links to Lila in this difficult time she is experiencing. Kawaii is used to express positive feelings and emotions, and is seen as a way to escape the stresses of everyday life. Each chapter portrays a positive outcome with beautiful art and good feelings. The confetti when a puzzle is guessed correctly gives a sense of achievement and enjoyment, as well as whimsy. The entire game is a momentary respite from the stresses of life and a cathartic experience to connect with.

* The image of Lila the character is a free to use game asset. She can be customised with different hair colours and styles, expressions, accessories and clothes. It was important that she had a range of expressions to depict her feelings in the before and after scenes of each chapter to convey the emotions she is experiencing but also to portray positive outcomes - [see credits section](#credits)  
* The chibi image of myself in the About page was created by uploading a profile image into ChatGPT and asking it to create a chibi version. I wanted to match the style of Lila and keep the theme of the imagery consistent.  

![A chibi-style image of the game creator, Lucy Sears](/assets/images/lucy-chibi-small.avif)

* To create each scene, I used [Adobe Firefly](https://www.adobe.com/products/firefly.html) and asked it to use the chibi Lila as a frame of reference for the artistic style. I then generated each scene using a range of prompts pertaining to the environment, the atmosphere and the contents of each chapter.  
* Generative AI editing in [Photoshop](https://www.adobe.com/uk/products/photoshop.html) allowed me to add and remove elements based on the scene and its emotive feel. Once I was happy I was then able to plug it back into Adobe Firefly as a composition reference and adjust the prompts to match a new mood for the post-puzzle scene. This process allowed me to create a full matching set of images that were similar to each other in style and composition.  
* Each scene has a pre-puzzle ‘gloom’ where Lila is portrayed as either sad, angry, or frustrated. The atmosphere and her surroundings match how she is feeling.  
* Each post-puzzle scene is light and happy, displaying gorgeous animations and lush colours to paint the scene of bringing colour and light and magic back into the world as Lila deals with the 5 stages of grief in her dream-world.  
* I used [Paint.Net](http://getpaint.net) to layer Lila into the scenes; Paint.Net is a programme that I have extensive experience with so I was able to not only layer Lila onto the images, but also, as in the lake scene, incorporate her properly into the depth of the image and make her seem a real part of it.  
* I uploaded the finished images into [Canva](https://www.canva.com/) and used Canva pro to add animations to each chapter image. I could have stuck with simple static images, but I wanted to really enhance the visuals in the game for those students and players who might struggle with the text. A lot of our students in the Gameracy programme read word-by-word and sometimes struggle to ascertain context from what they’ve read. The animated visuals give a striking and immediately noticeable effect that complements the story scene and conveys a sense of achievement through the changing of the chapter’s mood.  
* I downloaded these animated visuals as GIFS, but GIFS perform poorly on Lighthouse tests so I used [Ez Gif](https://ezgif.com/) to first resize each one, and then convert them into animated AVIF images, which use a codec to compress the images without sacrificing quality.   
* I was inspired by this [Codepen](https://codepen.io/janoamaral/pen/wvBrPzd)’s old book layout and decided that an old paper background image would be a good match for Lila and the Lost Words, due to the storybook feel.

### Wireframes

I created my wireframes using [Canva](https://www.canva.com/) to map out the layout, design, and colour scheme of the game. I have extensive experience of using Canva in my job and they have built-in templates for website and mobile website mockups. It was also easier to keep everything together, as all of the scenes with Lila were animated using Canva.

* [Website design on bigger screens](https://www.canva.com/design/DAGkzujaEFk/jFyWB-p0SsHOVN9jWxXRTQ/view?utm_content=DAGkzujaEFk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9fffcd8018) (8 pages)  
* [Website design on mobile screens](https://www.canva.com/design/DAGmC1MdloA/YAt0NNjOWDZ6teQDJzfL3w/view?utm_content=DAGmC1MdloA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h057f405cb1) (3 pages)

### Story Plotting
I plotted out my storyline using [Twine 2](https://twinery.org/2/#/) simply as a navigation map for how the text should flow before and after the puzzles, and as the player visits each game area. You can use Twine to build CYOA games with HTML frameworks, CSS and JavaScript, but it's a wonderful plotter and mapper due to how it renders the different game areas as passage blocks. Using Twine allowed me to access the file online and edit the story text as I became inspired. it also kept all the story ideas in place and stopped them going off piste.

![An image of the main nav-bar in collapsed mobile mode](/assets/images/readme-images/twine-story-mapping.png)

### End Product Design Changes

* I wasn’t happy with the horizontal reflow on larger screen sizes as it looked clunky and, in my opinion, not as professional as the stacked layout on mobile and tablet.So I decided to keep the layout the same on all screen sizes from 768px up and pay particular attention to container sizes and text sizes using media queries to ensure that it scaled up nicely.   
* I added a background colour to the footer as it looked better and highlighted the copyright more effectively.  
* I kept the puzzle area centred under the other elements instead of left-aligned under the story image as it looked better and made more sense with the stacked layout. The puzzles affect both the images and the text, so it made sense to group it under both.

[Back to Table of Contents](#table-of-contents)

---

## **Features**

### Responsiveness

Lila’s Lost Words has been designed mobile-first, built initially to look good on a screen 320px wide in Google Chrome. It is responsive across various screens and devices up to 4k (2560+). This has been achieved using Bootstrap grid sizes as well as CSS3 media queries to ensure the layout changes appropriately and looks good across all screen sizes. Depending on the screen size, the word-inventory section will appear/disappear to ensure that the game looks clean and clutter-free on smaller devices, but the empty space is filled by an interesting background image on larger screens.

### Header

* The header (color: \#420f2a**)** consists of a navbrand on the left with the Game’s title (font: Fugaz One, colour: white), and a nav-bar section on the right.  
* Clicking on the title will only bring the user back to the home-page if they click it while on the about page. Otherwise, it just has a bootstrap hover effect. This is to negate accidental game restarts while there is no save system in place.  
* The navbar collapses on mobile screens to become a burger icon that opens and closes a vertical dropdown nav.  
* Each nav-link (font: Josefin Sans) has a hover colour and an active state; the text changes color accordingly to keep the contrast ratio accessible.


![An image of the main nav-bar in full screen mode](/assets/images/readme-images/navbar-large.png)

![An image of the main nav-bar in collapsed mobile mode](/assets/images/readme-images/navbar-small.png)

### Footer

The footer (color: \#420f2a. Font-colour: white) only contains a copyright notice, as all the social media links are on the About Page \- this is intentional so that my personal information doesn’t distract or detract from the game itself.

![An image of the site footer](/assets/images/readme-images/footer.png)

### 

### Socials bar

The socials bar sits on the about page and contains links to my Github profile, my Facebook page and my LinkedIn bio. Font Awesome icons were used and styled to match the game site’s overall theme. Hover effects were applied to give feedback on which icon you are hovering over.The hover effect inverts the site colours to keep it consistent and accessible. Each link opens in a new tab and takes you to my actual live profiles. The socials bar resizes across different screens and the padding adjusts to keep all the icons centered.  
The image shows the facebook icon highlighted on hover.  

![An image of the socials bar on the about page, with links to Facebook, LinkedIn and GitHub. The facebook icon's styling is different as it's on hover mode.](/assets/images/readme-images/socials-bar.png)

### Interactive Elements

Interactivity has been achieved by ensuring that effects and animations are applied when certain elements are hovered over, such as the nav links, the social media icons, and any buttons that appear. I ensured that the hover effect colours were in keeping with the overall colour scheme of the site and that text colour changed to keep the contrast ratios accessible.

Buttons increase in size when hovered over and gain a box-shadow effect.

![An image of the start button](/assets/images/readme-images/button-before.png)
![An image of the start button in hover mode with added effects.](/assets/images/readme-images/button-hover-effect.png)

The slots and tiles also increase in size and gain a coloured border when hovered over.  

![An image of a highlighted tile which has grown in size and gained a green border](/assets/images/readme-images/puzzle-effects.png)
![An image of a highlighted slot, which has increased in size and gained a green border](/assets/images/readme-images/puzzle-effects2.png)

The hover effects for the check and reset buttons are slightly different to everywhere else, to give immediate visual clues as to the effect they apply while in the puzzle state.

![An image of the highlighted check button, which has turned green and gained a black border](/assets/images/readme-images/check-answer.png)
![An image of the highlighted reset button, which has turned red and gained a black border.](/assets/images/readme-images/reset.png)

[Back to Table of Contents](#table-of-contents)

---

## **Future Features**

In the future I would like to implement the following features:

* I want to add SessionStorage so that if the tab refreshes for any reason, progress isn’t lost and the player doesn’t need to start over, as this could prove frustrating for my students.  
* I would like to add fade-in text effects to each paragraph of story text so that it appears gradually, with possibly the option to control it with a ‘next’ button. This would allow students to gradually read the story at their own pace, without being overwhelmed by a box that’s already full of text.

[Back to Table of Contents](#table-of-contents)

---

## **Testing**

### User Story Testing

#### **🎮 Student Users**

**As a disengaged learner**  
 I want to explore a story world through simple button clicks and intuitive choices, so that I can improve my reading skills without feeling overwhelmed.

* *Lila and the Lost Words* offers a gentle, immersive alternative learning experience through storytelling and puzzle-solving, helping to build literacy and comprehension skills in a low-pressure environment.  
* Buttons appear exactly when they’re meant to and disappear again when not needed, to limit the overwhelm from too many different choices. They are clearly labelled and provide stylistic feedback when hovered over to encourage the player to use them.   
* Designed with low-stress mechanics—no timers, fail states, or high-pressure choices—so players can explore at their own pace.

I want to be challenged by the puzzles but also have a system in place to help me if I get stuck

* A hint system has been put in place that is clearly outlined at the start of the game. All the words highlighted as hints lead back to the puzzle answer when looked up in a thesaurus.  
* All puzzles relate directly to the story text and the emotional theme of the current chapter, and can be solved without the hint system if a player wants them to be more challenging.

**As a student with an SpLD**  
 I want to read short, clear passages in a calm, uncluttered layout, so that I can easily follow the story and enjoy it at my own pace.

* Designed with accessibility in mind, the game is suitable for students with specific learning difficulties, or learning differences. Visual storytelling, simplified interaction, and responsive design help reduce barriers to entry.  
* The game avoids overly cluttered screens, using visual hierarchy and gentle animations to guide attention and maintain focus.  
* The story text has been kept to a minimum length for each chapter, with obvious headings and titles for each section.  
* Simple sentence structures and carefully chosen vocabulary make the story accessible without oversimplifying its emotional depth.

I want the fonts, line spacing and colours to be accessible

* Sans Serif with good line spacing are used throughout the game to reduce visual strain  
* High-contrast text and backgrounds help support players with visual processing difficulties or dyslexia. These have been validated using [Adobe Colour Checker](https://color.adobe.com/Contrast-Checker-2-color-theme-19812400/) and the [WAVE accessibility checker](https://wave.webaim.org/).

**As a creative student who enjoys storytelling,**  
 I want to experience a game with an emotional narrative so that I feel immersed in the journey and inspired to tell stories of my own.

* A lot of thought and care has gone into the creation of the storyline and each chapter scene that has been written.   
* There is pre and post puzzle story text, giving a satisfactory conclusion to completing each word puzzle and to each emotion explored during the chapters.   
* Personal details have been woven into the narrative that relate to Lila’s memories and dreams of the person she has lost, thus giving the player an immediate connection to the main character.

**As a creative student who enjoys games,**  
I want to be engaged with creative problem solving that helps improve my literacy

* Anagram word puzzles relating to emotions experienced during the five stages of grief are an integral mechanic of the game. They are the core of each chapter and the puzzles themselves are integral to the main character’s story arc of trying to get her voice back.  
* Solving these puzzles requires a degree of investigation and the possible use of a thesaurus.   
* The hints are synonyms of each puzzle’s word, expanding the student’s vocabulary almost immediately.  
* Solving anagrams promotes lateral thinking, vocabulary enhancement, and problem-solving skills.

I want to be able to track my progress and see how well I’m doing at the puzzles

* On larger screen sizes (768px+) a word inventory has been added that will display the puzzle’s word after it has been guessed correctly, and will show the number of attempts made at guessing it. This will allow students to try and beat their own score next time.

**As a student who primarily uses a smartphone,**  
 I want the game’s interface to respond smoothly on a small screen, with large, easy-to-tap buttons and clear navigation, so that I can enjoy the full experience without needing a computer.

* Recognising that many students access content on their phones, the game is fully responsive across mobile, tablet, and desktop screens.  
* The game has been designed mobile-first, with text that is large enough and easy to read.   
* The words for the puzzles have been kept to a minimum length to ensure that the tiles and slots are easy to press on a mobile phone and don’t shrink too small.  
* Buttons sizes have been considered to ensure that they aren’t too small or difficult to press.  
* Navigation is simple and intuitive through dynamically inserted buttons at appropriate times, and via the navigation bar.

#### **🌟 General Audience**

**As someone who enjoys emotional, story-rich games,**  
 I want to be gently led through a journey using beautiful visuals, smooth transitions, and clear interactive elements, so that I can connect with the story, reflect on the themes, and enjoy the experience in a meaningful way

*  *Lila and the Lost Words* invites anyone to explore a heartfelt story about loss, growth, and language. It's an experience meant to resonate emotionally with the reader/player.  
* The emotional tone and pacing are carefully considered to be soothing rather than overstimulating.  
* A matching set of carefully-crafted images lends itself to the visual aspect of the game, illustrating the beginning and ending of each scene with gorgeous animations and an appealing main character who has been designed with an easily recognisable art style.  
* Smooth transitions and automatic scrolling help to keep the flow of the game without any awkward UI interaction, allowing full immersion into the story.  
* Interactive elements are highlighted using hover effects and gentle transformations/transitions.

[Back to Table of Contents](#table-of-contents)

### Automated Testing

#### [The W3C Markup Validation Service](https://validator.w3.org/)

Html validation testing results on 30/4/25 for index.html

1.      Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections or else use a div element instead for any cases where no heading is needed.
        From line 55, column 13; to line 55, column 88
        <section class="col col-12 col-md-9 col-lg-9 col-xxl-8 mt-2" id="image-div">      
2.      Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections or else use a div element instead for any cases where no heading is needed. 
        From line 53, column 9; to line 53, column 115  
        <section class="row gx-0 justify-content-between justify-content-xxl-center mt-2 mt-xxl-3" id="story-area">     
3.      Warning: Section lacks heading. Consider using h2 - h6 elements to add identifying headings to all sections or else use a div element instead for any cases where no heading is needed.
        From line 103, column 9; to line 103, column 74<section class="row mt-4 justify-content-center" id="puzzle-area">     
4.      Error: Stray end tag: div 
        From line 115, column 5; to line 115, column 10
        
All issues listed above were resolved - sections without titles were changed into div elements and the stray end tag was removed. HTML validation now passes without warnings or errors.

![An image of the W3C Markup Validation Service check on index.html, showing no errors](/assets/images/readme-images/html-validation.png)

HTML validation testing results on 1/5/25 for about.html
![An image of the W3C Markup Validation Service check on about.html, showing some errors](/assets/images/readme-images/html-validator-about.png)

All issues listed above were resolved by correcting the incorrect my' tag. HMTL validation now passes without warnings or errors.

![An image of the W3C Markup Validation Service check on about.html, showing no errors](/assets/images/readme-images/html-validation-about-success.png)

#### [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

I used the file upload section to directly input my CSS file into the checker. The results are listed below: 

*     CSS validation 30/04/25  Sorry! We found the following errors (4)  
      URL : style.css 
      | 267 |  | Unknown dimension 0eg |
      | 267 |  | too few values for the property `transform` : rotate() |
      | 292 | #puzzle-question | `no-wrap` is not a `flex-wrap` value : no-wrap |
      | 300 | #puzzle-answer | `no-wrap` is not a `flex-wrap` value : no-wrap |

*     Warnings (6)
      | 120 | .navbar .nav-link.active:hover | Same color for `background-color` and `border-top-color` 
      | 120 | .navbar .nav-link.active:hover | Same color for `background-color` and `border-right-color` |
      | 120 | .navbar .nav-link.active:hover | Same color for `background-color` and `border-bottom-color` |
      | 120 | .navbar .nav-link.active:hover | Same color for `background-color` and `border-left-color` |
      | 268 |  | No declarations in the rule |

All issues were addressed and resolved. Flex-wrap value was removed where it wasn’t being applied. Removed the unnecessary border colour on the nav-link hover effect. Corrected the mistake on the animation that was meant to say 0deg.  

CSS validation now passes with no errors or warnings.

![An image of the W3C CSS Validation Service check on style.css, showing no errors](/assets/images/readme-images/css-validator.png)

#### [The JSHint validator](https://jshint.com/)

I copied the contents of my JS file directly into JSHint.  
It came back with only missing semicolons on a couple of lines and an unused variable.  
Added the semi-colons and removed the unused variable. I ran JS hint on a couple of occasions during the development process to ensure that I wasn’t making silly mistakes as I went along. 

* [JS Hint Testing 22-4-25](/documents/js-hint-testing/jshint-testing-22-4.txt)
* [JS Hint Testing 23-4-25](/documents/js-hint-testing/jshint-testing-23-4.txt)
* [HS Hint Testing 30-4-25](/documents/js-hint-testing/jshint-testing-30-4.txt)

[Back to Table of Contents](#table-of-contents)

#### [The WAVE Webb Accessibility Evaluation Tool](https://wave.webaim.org/)

* The WAVE Webb test results came back with 0 errors and 0 contrast errors. It contained 1 warning for an element that it thinks should be a header, but it really shouldn’t be as it’s just the bottom of the story text. 

![Screenshot of the WAVE accessibility testing results showing 0 errors and 1 warning](/assets/images/readme-images/wave-testing-results.png)

The reason this text was flagged is because the paragraph in question contains less than 50 characters, which could indicate that it’s a heading but in this case is just a short sentence.

![An image of the text it thinks should be a header, but doesn't need to be.](/assets/images/readme-images/wave-alert.png)
  
[Back to Table of Contents](#table-of-contents)



#### Chrome Lighthouse

* Index.html mobile results  
The performance on mobile sits at 97 due to the preloading of all the game’s images when the site loads. This is a calculated measure designed to improve the performance of the images loading as the chapters and images dynamically update throughout the game. There had been noticeable lag on the animated images uploading even with their small sizes, so I implemented a function that would preload ALL images once the DOM had finished loading. I think the trade-off on an initial slight performance drop is worth it.  
![An image showing the chrome lighthouse results for a mobile test, with 100 for Accessibility, Best Practices and SEO, but 97 for performance](/assets/images/readme-images/mobile-lighthouse.png)
![An image showing the warning about avoiding enormous network payloads due to the preloading images](/assets/images/readme-images/mobile-lighthouse2.png)

* Index.html desktop results  
![][image16]  
Desktop performance was one point off 100 due to an oversized image. Resized down and the score is now 100 across all areas and pretty confetti animation played.  
![][image17]

* About.html mobile results
![An image showing the chrome lighthouse results for a mobile test, with 100 for Accessibility, Best Practices and SEO, but 98 for performance](/assets/images/readme-images/about-mobile-lighthouse.png)

* About.html desktop results
![An image showing the chrome lighthouse results for a desktop test, with 100 for Performance, Accessibility, Best Practices and SEO](/assets/images/readme-images/about-desktop-lighthouse.png)

[Back to Table of Contents](#table-of-contents)

### Manual Testing \- features and responsiveness

I tested my site on Chrome, Edge, FireFox and Safari.

* **Chrome**   
    
  Mobile 320px. Tablet 768px. Laptop 1024px. Laptop L 1440px. 4k 2560px.  
  * All nav links work on all pages  
  * All external links open in a new browser window  
  * All images display/disappear as expected across different screen sizes  
  * The layout reflows and changes as expected across different screen sizes  
  * The background image appears as it should on different screen sizes  
  * Hover colours and animations work as expected on laptops and desktops  
  * The burger icon expands and collapses the nav list as expected on mobile screens.


* **Edge** 

  Mobile 320px. Tablet 768px. Laptop 1024px. Laptop L 1440px. 4k 2560px.

  * All nav links work on all pages  
  * All external links open in a new browser window  
  * All images display/disappear as expected across different screen sizes  
  * The layout reflows and changes as expected across different screen sizes  
  * The background image appears as it should on different screen sizes  
  * Hover colours and animations work as expected on laptops and desktops  
  * The burger icon expands and collapses the nav list as expected on mobile screens.  
      
* **FireFox**   
  Mobile 320px. Tablet 768px. Laptop 1024px. Laptop L 1440px. 4k 2560px.  
    
  * All nav links work on all pages  
  * All external links open in a new browser window  
  * All images display/disappear as expected across different screen sizes  
  * The layout reflows and changes as expected across different screen sizes  
  * The background image appears as it should on different screen sizes  
  * Hover colours and animations work as expected on laptops and desktops  
  * The burger icon expands and collapses the nav list as expected on mobile screens.  
      
* **Safari**   
  Tested on an iPhone SE 2023  
    
  * The burger nav dropdown works as expected on all pages, expanding and collapsing 
  * All nav links work on all pages  
  * All active nav-links display in the appropriate colour on the appropriate page
  * All external links open in a new browser window 

### Bugs/Interesting problems 

[Navigate to Acknowledgements](#acknowledgements) for links.

* Had to look at different animated filetypes for game images, as gifs affect lighthouse performance very negatively. Lighthouse suggested using MP4 files, but I wanted the animations on the images to loop forever, so went with animated AVIF in the end.  

* Interesting issue with event handlers being triggered multiple times when using the reset function in its original form (it initialised the entire puzzle again). Readjusted the reset function to only return the tiles to their original places instead of reinitialising the whole puzzle. Had to do a lot of research on event listeners to stop them stacking up, and how they need to be removed in the exact same way they were added, so you have to be careful using anonymous functions to add event listeners. I ended up creating two handler functions to assist with this issue which resolved it entirely. ChatGPT kindly suggested this to me. 

* Interesting issue with ensuring the correct tiles are made visible again after clicking on slots to remove their letters. I started off using indexes but realised that wouldn't work and that I needed to attach id datasets to each tile and ensure that the same id passed through to the slots.  

* Got very fed up adding span and mark to already existing paragraph text, so went and figured out how to set a shortcut in VS Code for Emmett abbreviation to make it easier to highlight certain words in the story text and enclose them in a span class/mark.  

* Wanted the puzzle button to auto scroll to the puzzle section without changing it into a link styled as a button that would scroll to a section puzzleArea.scrollIntoView({ behavior: "smooth" }); - [see credits section](#credits)  

* Issue with being a delay on the next dynamically inserted image loading. Had to research how to preload images into the cache so they could be almost instantaneously used - [see credits section](#credits)  

* Ended up in a rabbit hole of which javascript way to randomise the word shuffling. Lots of debate on the internet for this one, but the general consensus was that the Fisher Yates model was the fairest way of all - [see credits section](#credits)

[Back to Table of Contents](#table-of-contents)

---

## **Technologies and Languages**

### Languages

* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) \- was used to structure this project  
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) \- was used to style HTML elements  
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) was used for the dynamic insertion of story elements and to create the word puzzles.

### Frameworks, Libraries & Programs

1. [Adobe Color](https://color.adobe.com/)- was used to generate an accessible colour palette 
2. [Adobe Contrast Analyzer](https://color.adobe.com/create/color-contrast-analyzer) - was used to check background and foreground colour contrast for accessibility
3. [Adobe Firefly](https://www.adobe.com/products/firefly.html) \- for generating each chapter’s scene in two different moods.  
4. [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) \- For putting together the Lila character  
5. [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) \- was used to build a mobile-first, responsive grid layout  
6. [Canva](https://www.canva.com/) \- was used for the wireframe designs and for adding animations to images  
7. [ChatGPT](https://openai.com/index/chatgpt/) \- for help with story ideas and names, as well as coding troubleshooting  
8. [EZGIF](https://ezgif.com/) \- For resizing GIFs and converting into animated AVIF files  
9. [Favicon.io](https://favicon.io/) \- was used to create a custom favicon  
10. [Font Awesome](https://fontawesome.com/) \- was used for the social media and external-link icons  
11. [Font Joy](https://fontjoy.com/) \- was used to generate font combinations  
12. [Git](https://git-scm.com/) \- was used as version control software  
13. [GitHub Desktop](https://desktop.github.com/download/) \- was used to simplify the development workflow between VSCode and github  
14. [Google Fonts](https://fonts.google.com/) \- was the source of the fonts used  
15. [Paint.Net](http://getpaint.net) \- for layering Lila onto the background images  
16. [Twine 2](https://twinery.org/2/) \- mapping out plotline and story  
17. [Visual Code Studio](https://code.visualstudio.com/) \- was the code editor used for this project  

[Back to Table of Contents](#table-of-contents)

---

## **Deployment**

1. Navigate to the [repository](https://github.com/Nexiauk/Gameracy).  
2. Click on **Settings** at the top.  
3. Click on **Pages** in the left-hand sidebar (under **Code and automation**)  
4. In the **Source** dropwdown, select \*\*Deploy from a branch.  
5. In the **Branch** dropdown, select **Main** \-  this tells GitHub which branch to use for the deployment.  
6. Click the **Save** button next to Main and Root.  
7. The page should refresh and the deployment link will appear in the right-hand sidebar of the repository (under **Deployments**)

### Creating a Fork

1. Navigate to the [repository](https://github.com/Nexiauk/Gameracy).  
2. In the top-right corner of the page click on the down arrow next to the **Fork** button and select **Create a new fork**.  
3. You can change the name of the fork in **Repository name** and add an optional description.  
4. Tick **Copy the main branch only**.  
5. Click the **Create a Fork** button.  
6. A new repository should appear in your GitHub with the name you chose.

### Cloning a Repository

1. Navigate to the [repository](https://github.com/Nexiauk/Gameracy).  
2. Click on the **Code** button on top of the repository and copy the link.  
3. Open Git Bash and change the working directory to the location where you want the cloned directory.  
4. Type git clone and then paste the link.  
5. Press Enter to create your local clone.

[Back to Table of Contents](#table-of-contents)

---

## **Credits**

### Media

* Lila \- [Dicortesia on itch.io](https://dicortesia.itch.io/female-character-chibi)  
* Paper background \- [Freepik.com](https://www.freepik.com/free-vector/hand-drawn-painted-whitewash-background_138123213.htm#fromView=search&page=1&position=22&uuid=f44ffa23-617a-4414-979d-71feffb9fb2e&query=paper+background)

### Code help

* CSS \- [w3schools.com](https://www.w3schools.com/css/default.asp)  
* HTML \- [w3schools.com](https://www.w3schools.com/html/default.asp)  
* JavaScript \- [JavaScript \- MDN Web Docs \- Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
* Bootstrap \- [getbootstrap.com](https://getbootstrap.com/docs/5.3/getting-started/introduction/)  
* Help understanding how to create  a CYOA game using HTML, CSS and JavaScript [https://www.youtube.com/watch?v=kayFBMl06q8](https://www.youtube.com/watch?v=kayFBMl06q8)  
* Scrollintoview code for scrolling elements nicely into the view screen - [https://medium.com/swlh/auto-scroll-in-javascript-283bdf76dc01](https://medium.com/swlh/auto-scroll-in-javascript-283bdf76dc01)  
* Help on how to dynamically insert picture srcset from javascript [https://www.dhiwise.com/post/mastering-srcset-html-for-responsive-images-a-practical-guide](https://www.dhiwise.com/post/mastering-srcset-html-for-responsive-images-a-practical-guide)  
* Shake animation used for the wrong answer class \- [https://unused-css.com/blog/css-shake-animation/](https://unused-css.com/blog/css-shake-animation/)  
* Preloading images in JavaScript \- [https://www.kirupa.com/html5/preloading\_images.htm](https://www.kirupa.com/html5/preloading_images.htm)  
* Fisher Yates shuffle model \- [https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/](https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/)

### Acknowledgements

* README file \- [README from my Gameracy project as a template](https://github.com/Nexiauk/Gameracy/blob/main/docs/README.md)  
* Webkits for media queries on different browsers \- [CSS Auto Prefixer](https://autoprefixer.github.io/)

[Back to Table of Contents](#table-of-contents)

---

### Creator Comments