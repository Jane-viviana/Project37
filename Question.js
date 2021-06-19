class Question{
    constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    }

 hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
 }

 display(){
    this.title.html("Curious Quiz Game");
    this.title.position(350,0);

    this.question.html("What colour is the M in McDonalds symbol?");
    this.question.position(150,80);
    this.option1.html("Orange");
    this.option1.position(150,100);
    this.option2.html("Red");
    this.option2.position(150,120);
    this.option3.html("Yellow");
    this.option3.position(150,140);

    this.input1.position(150,230);

    this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
    })

 }
}    
