 # Project Name
    Trivia


<!-- project deployment -->

# Technologies Used
* JS
* jQuery 
 * Front End:
     * HTML
     * CSS
     * MP3 Audios
     * GIF images



<!-- Links -->
<!-- [Google](http://google.com) -->
<!-- images -->
<!-- ![wireframe](path) -->

<!-- hr  --- -->
# User Stories
The quiz starts after clicking the Start button. Then, the quiz page appears with the question, question's picture, choices, progress flags, timer and a reset button.
The picture and the question appeared besides each other, the choices are 3 and they are below the question and question's picture. 
The progress flags are at the bottom right. Each question has a flag. Flags are white circles, when the user chooses the correct answer, the flag color turned into green, when the answer is wrong, the flag color turns into red. 
The timer is 15 second and when the time is up, the answer for that question will be considered as a wrong answer.
When the user finished the quiz, by reaching the last question, a score page will pop up above the quiz page showing the score (correct answers/total number of questions). If the user answered all questions correctly, a cheering sound will be played and ballons background will be showed. If the user answered all the questions wrongly, a failure sound will be played.
The reset button will reset the flags, timer and score, then move to the go back to the first question again.


# Planning and Development Process
The game has to go through three main stages, Start stage, Quize stage and the Score stage.
* ### Start Stage:
    a page consists of the start button has to be pressed to start the quiz by moving to the quiz page. 
* ### Quize Stage:
    This stage consists of The question and its picture, the below it the choices then the progress flags and Timer and finally the reset button at the bottom of the page. 
    I have made a quiz inside a div, and that div is set as "display : none" in the HTML. After the Start button is clicked, a code in the JS will set the display of the Quiz div as "block" and the Start div as "none".
    The progress flags are automatically made based on the number of Qs, so each question has its own flag to demonstrate the progress of the quiz. When the flag's background turned to green means the Q has been answered correctly and when it turned to red means the Q has been answered wrongly. 
    When the timer is finished and the user hasn't chose an answer, that Q's score would be considered as a wrong answer and automatically will move to the next Q.
    When the Qs are finished, the Timer will stop counting the time, and the Score page will pop up.
    When reset button is clicked, the Timer, Flags and Score will be resetted and then it will move back to the first Q. 
* ### Score Stage:
    The score page will be showed above the quiz page.
    The score div display property is setted to "none" in the HTML, and it will be resetted to "block" by JS when the Qs is finished.
     It will display the score (total of correct answers/ total of Qs)and the image and the Audio based on that score. 
    If the user has answered all the Qs correctly, the green image will be showed along with cheering sound and ballons background.
    If the score is between 0 and total number of Qs, a yellow smiley face will be showed.
    If the score is 0, the red sad face image will be showed along with failure sound.




# Describe any lines or function in the code

```js
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"; //adding flag(div) for each question with id number (question index)
    }
}
```
As the comment illustrates the process above, when new question is added, this peace of code will construct a flag for it.
## Challenges
I have struggled in creating the reset button. Creating it was challenging beacuse I had to refer back to each function and consider the consequences carefully that will accure when resetting them to its original situations and values.

<!-- # Unsolved problems which would be fixed in future iterations. -->
