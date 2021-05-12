class Player{
    constructor(){
        this.distance=0;
        this.playerName=null;
        this.index=null;
    }

    getCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
             playerCount=data.val();
        })
    }
    updateCount(count){
         database.ref("/").update({
             playerCount:count
         });

    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.playerName,
            distance:this.distance,
        });
    }
    static getplayerinfo(){
        var playerinforef=database.ref("players")
        playerinforef.on("value",(data)=>{
            allPlayers=data.val();

        })
        
    console.log(allPlayers);

    }
}