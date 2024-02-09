class MemoryGame {
  constructor(cards) {
  this.cards=cards
  this.pickedCards=[]
  this.pairsClicked=0
  this.pairsGuessed=0
  }

  shuffleCards() {
    // ... write your code here

    if(!this.cards){
      return undefined
    }
    let currentIndex= this.cards.length
   
    let temp = null
    let randomIndex = null
    while(currentIndex!==0){
     
      randomIndex= Math.floor(Math.random()*currentIndex)
      
      currentIndex-=1
      temp = this.cards[currentIndex]
  
      this.cards[currentIndex]=this.cards[randomIndex]
      this.cards[randomIndex]=temp
    }
   return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
    }
   return false
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed===this.cards.length/2
  }
}
