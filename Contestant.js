class Contestant{
    constructor(){
     this.index = null;
    // this.distance = 0;
     this.name = null;
     //this.rank = 0;
     this.answer = 0;
    }

 getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
    contestantCount = data.val();
    })
  }  

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getContestantInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }

  /*readRank(){
    var rankref = database.ref('Rank');
    rankref.on('value',(data)=>{
      this.rank = data.val();
      console.log(this.rank);
    })
  }

  static updateRank(rank){
    database.ref('/').update({
      Rank:rank
    })
  }*/
}