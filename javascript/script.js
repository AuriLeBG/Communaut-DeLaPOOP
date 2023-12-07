
async function getData() {
    let response = await fetch('http://localhost/Communaut-DeLaPOOP/pages/get_questions.php');
    let questionsList = await response.json()
    return questionsList
}


document.addEventListener('DOMContentLoaded', async function () {
    let questionsList = await getData()

    let card = document.getElementById('card')

    let image = document.getElementById('card_image')
    let question = document.getElementById('question')
    let title = document.getElementById('title')

    let buttonFalse = document.getElementById('buttonFalse');
    let buttonTrue = document.getElementById('buttonTrue');
    let buttonNext = document.getElementById('next');

    let answer = document.getElementById('answer')
    let titleAnswer = document.getElementById('titleAnswer')
    let details = document.getElementById('details')

    let results = document.getElementById('results')
    let titleResults = document.getElementById('titleResults')
    let corrects = document.getElementById('corrects')
    let errors = document.getElementById('errors')

    let nbCorrects = 0
    let nbErrors = 0

    let currentQuestion;
    changeQuestion()


    function changeQuestion(){
        let index = Math.floor(Math.random() * (questionsList.length) )
        currentQuestion = questionsList[index]
        questionsList.splice(index, 1)
        title.textContent = currentQuestion.question
        image.setAttribute('src', "../image/"+currentQuestion.image)

    }

    function wrongAnswer()
    {
        titleAnswer.textContent = 'Incorrect !'
        card.classList.add('card-error')
        nbErrors++;
    }

    function correctAnswer()
    {
        titleAnswer.textContent = 'Correct !'
        card.classList.add('card-correct')
        nbCorrects++;
    }

    function revealCorrection(){
        question.classList.add('hide')
        answer.classList.remove('hide')
        details.textContent = currentQuestion.explication
    }

    function hideCorrection(){
        question.classList.remove('hide')
        answer.classList.add('hide')
        card.classList.remove('card-correct')
        card.classList.remove('card-error')
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
        if(questionsList.length > 0){
            hideCorrection()
            changeQuestion()
        }
        else{
            answer.classList.add('hide')
            results.classList.remove('hide')

            corrects.textContent += nbCorrects
            errors.textContent += nbErrors
            titleResults.textContent = "Malheureusement, il n'y a plus d'autres questions !"
        }
    })
})



