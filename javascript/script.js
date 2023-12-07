/*
await fetch('http://localhost/Communaut-DeLaPOOP/pages/api.php').then(response => {
        console.log(response.ok)
        return response.json()
    }).then(data => {
        return data
    })
 */


async function getData() {
    let response = await fetch('http://localhost/Communaut-DeLaPOOP/pages/api.php');
    let questionsList = await response.json()
    return questionsList
}


document.addEventListener('DOMContentLoaded', async function () {
    let questionsList = await getData()

    let buttonFalse = document.getElementById('buttonFalse');
    let buttonTrue = document.getElementById('buttonTrue');

    let question = document.getElementById('question')
    let image = document.getElementById('card_image')


    let currentQuestion;
    changeQuestion()

    console.log(currentQuestion)

    function changeQuestion(){
        let index = Math.floor(Math.random() * (questionsList.length) )
        currentQuestion = questionsList[index]
        questionsList.splice(index, 1)
        question.textContent = currentQuestion.question
    }

    buttonFalse.addEventListener('mousedown', function(){
        if(questionsList.length > 0)
            changeQuestion()
    })

    buttonTrue.addEventListener('mousedown', function(){
        if(questionsList.length > 0)
            changeQuestion()
    })
})



