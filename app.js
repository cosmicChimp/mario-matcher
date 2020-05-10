document.addEventListener('DOMContentLoaded', () => {
    
    // cards
    const cardArr = [
        {
            name: 'mario',
            img: 'images/9cp6rgqBi (1).png'
        },
        {
            name: 'mario',
            img: 'images/9cp6rgqBi (1).png'
        },
        {
            name: 'toad',
            img: 'images/9cRLA9BMi.png'
        },
        {
            name: 'toad',
            img: 'images/9cRLA9BMi.png'
        },
        {
            name: 'yoshi',
            img: 'images/KcjppAKpi (1).png'
        },
        {
            name: 'yoshi',
            img: 'images/KcjppAKpi (1).png'
        },
        {
            name: 'boo',
            img: 'images/KTjoBMn8c (1).png'
        },
        {
            name: 'boo',
            img: 'images/KTjoBMn8c (1).png'
        },
        {
            name: 'star',
            img: 'images/McLnn6Kbi (1).png'
        },
        {
            name: 'star',
            img: 'images/McLnn6Kbi (1).png'
        },
        {
            name: 'peach',
            img: 'images/ycogxB6zi.png'
        },
        {
            name: 'peach',
            img: 'images/ycogxB6zi.png'
        }
    ]
    cardArr.sort(() => 0.5 - Math.random())
    // game board
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let chosenCard = []
    let chosenCardId = []
    let matchedCards =[]
    

    function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/aiqkoG9iM.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    };   

    // match?
    function checkMatch() {
        let cards = document.querySelectorAll('img')
        const oneId = chosenCardId[0]
        const twoId = chosenCardId[1]
        if (chosenCard[0] === chosenCard[1]) {
            alert("You found a match!!")
            cards[oneId].setAttribute('src', 'images/aceX57Xpi.png')
            cards[twoId].setAttribute('src', 'images/aceX57Xpi.png')
            matchedCards.push(chosenCard)
        } else {
            cards[oneId].setAttribute('src', 'images/aiqkoG9iM.png')
            cards[twoId].setAttribute('src', 'images/aiqkoG9iM.png')
            alert("Sorry, try again")
        }
        chosenCard = []
        chosenCardId = []
        resultDisplay.textContent = matchedCards.length
        if (matchedCards.length === cardArr/2) {
            resultDisplay.textContent = "Congrats!! You found them all!!"
        }
    }


    //flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        chosenCard.push(cardArr[cardId].name)
        chosenCardId.push(cardId)
        this.setAttribute('src', cardArr[cardId].img)
        if (chosenCard.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

createBoard()










})