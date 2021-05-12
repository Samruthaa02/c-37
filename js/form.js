class Form{
    constructor(){
        this.input=createInput("");
        this.title=createElement("h2");
        this.button=createButton("PLAY");
        this.greeting=createElement("h2");

    }
   display(){
       
      // var title=createElement("h2");
       this.title.html("CAR RACING GAME");
       this.title.position(550,30);
       
      // var input=createInput("");
      this.input.attribute("placeholder","NAME")
      this.input.position(510,150);
      this.input.size(300,30);
       
      // var button=createButton("PLAY");
      this.button.position(600,300)
      this.button.size(100,50);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        
          var name=this.input.value();
          var name1=name.toUpperCase();
          player.playerName=name1
           
          // player.playerName=player.playerName.toUpperCase();
           
           playerCount=playerCount+1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);

          // var greeting=createElement("h2");
          this.greeting.html("HELLO "+player.playerName)
          this.greeting.position(600,300)
       })

       
   }
 hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
    
 }

}