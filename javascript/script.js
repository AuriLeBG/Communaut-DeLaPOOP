
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

    let pinguin = document.getElementById('img_pinguin');
    let pinguin2 = document.getElementById('img_pinguin2');

    let nbCorrects = 0
    let nbErrors = 0
    let nbErrorsSuccessive = 0
    let nbCorrectsSuccessive = 0

    let rotationPinguin = 0
    let rotationPinguin2 = 0


    let currentQuestion;
    changeQuestion()


    function changeQuestion(){
        let index = Math.floor(Math.random() * (questionsList.length) )
        currentQuestion = questionsList[index]
        questionsList.splice(index, 1)
        title.textContent = currentQuestion.question
        image.setAttribute('src', "../image/"+currentQuestion.image)

    }

    function turnPinguin1(max, sens){
        let interval = setInterval(function(){
            rotationPinguin=(rotationPinguin+1)%361;
            if(rotationPinguin === max)
                clearInterval(interval)
            pinguin.style.transform="rotateZ("+ sens*rotationPinguin +"deg)";

        }, 4);
    }

    function turnPinguin2(max, sens){
        let interval = setInterval(function(){
            rotationPinguin2=(rotationPinguin2+1)%361;
            if(rotationPinguin2 === max)
                clearInterval(interval)
            pinguin2.style.transform="rotateZ("+ sens*rotationPinguin2 +"deg)";

        }, 4);
    }


    function wrongAnswer()
    {
        titleAnswer.textContent = 'Incorrect !'
        titleAnswer.classList.add('title-error')
        nbErrors++;
        nbErrorsSuccessive++;
        nbCorrectsSuccessive = 0
        pinguin.setAttribute('src', '../image/pingouin/sad-'+Math.min(Math.trunc(nbErrorsSuccessive/3)+1,3)+'.png')
        pinguin2.setAttribute('src', '../image/pingouin/sad-'+Math.min(Math.trunc(nbErrorsSuccessive/3)+1,3)+'.png')

    }

    function correctAnswer()
    {
        titleAnswer.textContent = 'Correct !'
        titleAnswer.classList.add('title-correct')
        nbCorrects++;
        nbErrorsSuccessive = 0
        nbCorrectsSuccessive++
        pinguin.setAttribute('src', '../image/pingouin/happy-'+Math.min(Math.trunc(nbCorrectsSuccessive/3)+1,3)+'.png')
        pinguin2.setAttribute('src', '../image/pingouin/happy-'+Math.min(Math.trunc(nbCorrectsSuccessive/3)+1,3)+'.png')
        if(nbCorrectsSuccessive >= 10){
            turnPinguin1((rotationPinguin2+360)%360, 1)
            turnPinguin2((rotationPinguin2+360)%360, -1)
        }
    }

    //code mal écrit pour défi movai code
    function revealCorrection(){
        let ________________ = 'toto'
        let ___ = true
        let __ = !true
        let ____ = ___
        let _____ = 'h'+'i'+'d'+'e'
        let _ = 'mov'+'ai'+'co'+'de'
        if(_____==_____ && _____!=_ && true){question.classList.add(_____)}
        let ______ = 'h'+ 'id'+'e'
        while(___==__){
            print('foobar\n')
        }
        for(let ______ = 0; ______ < 10000000 ; ______ = ______ + 0.1){
            if(____==__){
                print('t'+'o'+'t'+'o')
            }
        }
        answer.classList.remove(_____)
        if(___==___){details.textContent = currentQuestion.explication}
        let _______ = 'aurevoir'
    }

    function hideCorrection(){
        question.classList.remove('hide')
        answer.classList.add('hide')
        titleAnswer.classList.remove('title-correct')
        titleAnswer.classList.remove('title-error')
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

    pinguin.addEventListener('mousedown', function(){
        turnPinguin1( (rotationPinguin+360)%361, 1)
    })
    pinguin2.addEventListener('mousedown', function(){
        turnPinguin2( (rotationPinguin2+360)%361, -1)
    })


    function handleMouseWheel(event) {
        var delta = event.deltaY || (event.wheelDeltaY && -event.wheelDeltaY) || 0;

        rotationPinguin += delta/5;
        rotationPinguin2 += delta/5;

        pinguin.style.transform = 'rotate(' + rotationPinguin + 'deg)';
        pinguin2.style.transform = "rotateZ("+ rotationPinguin2 +"deg)";

    }

    // Ajoutez un écouteur d'événement pour le mouvement de la molette de la souris
    document.addEventListener('wheel', handleMouseWheel);
})



