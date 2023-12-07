
async function getData() {
    let response = await fetch('http://localhost/Communaut-DeLaPOOP/pages/get_questions.php');
    let questionsList = await response.json()
    return questionsList
}


document.addEventListener('DOMContentLoaded', async function () {
    let questionsList = await getData()

    let image = document.getElementById('card_image')
    let question = document.getElementById('question')
    let title = document.getElementById('title')

    let buttonFalse = document.getElementById('buttonFalse');
    let buttonTrue = document.getElementById('buttonTrue');
    let buttonNext = document.getElementById('next');

    let answer = document.getElementById('answer')
    let titleAnswer = document.getElementById('titleAnswer')
    let details = document.getElementById('details')


    let currentQuestion;
    changeQuestion()

    console.log(currentQuestion)

    function changeQuestion(){
        if(questionsList.length > 0){
            let index = Math.floor(Math.random() * (questionsList.length) )
            currentQuestion = questionsList[index]
            questionsList.splice(index, 1)
            title.textContent = currentQuestion.question
            image.setAttribute('src', "../image/"+currentQuestion.image)
        }
    }

    function wrongAnswer()
    {
        titleAnswer.textContent = 'Incorrect !'
    }

    function correctAnswer()
    {
        titleAnswer.textContent = 'Correct !'
    }

    function revealCorrection(){
        question.classList.add('hide')
        answer.classList.remove('hide')
        details.textContent = currentQuestion.explication
    }

    function hideCorrection(){
        question.classList.remove('hide')
        answer.classList.add('hide')
    }

    function verifyAnswer(answer)
    {
        if(currentQuestion.answer === answer)
            correctAnswer()
        else
            wrongAnswer()
        revealCorrection()
    }

    buttonFalse.addEventListener('mousedown', function(){
        verifyAnswer(false)

    })

    buttonTrue.addEventListener('mousedown', function(){
        verifyAnswer(true)
    })

    buttonNext.addEventListener('mousedown', function(){
        hideCorrection()
        changeQuestion()
    })
})



