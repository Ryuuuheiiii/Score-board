<script>
  //initialize team scores
  
  let firstTeamScore = 0;
  let secondTeamScore = 0;
  
  let firstTeamScoreValue = document.getElementById("firstTeamScore");
  
  let secondTeamScoreValue = document.getElementById("secondTeamScore");
  
// Function for increasing score  
  
  let increase = (team) => {
    
    if (team === "firstTeam"){
      firstTeamScore ++;
      firstTeamScoreValue.textContent =  firstTeamScore;
    }
    else if ((team = "secondTeam")){
      secondTeamScore ++;
      secondTeamScoreValue.textContent = secondTeamScore;
    }
  };
  
// Function for decreasing score  
  
  let decrease = (team) => {
    
    if (team === "firstTeam" && firstTeamScore > 0 ){
      firstTeamScore --;
      firstTeamScoreValue.textContent =  firstTeamScore;
     
      
    }
    else if ((team = "secondTeam" && secondTeamScore > 0 )){
      secondTeamScore --;
      secondTeamScoreValue.textContent = secondTeamScore;
    }
  }; 

let resetScore = () => {
  firstTeamScore = 0;
  secondTeamScore = 0;
   firstTeamScoreValue.textContent = firstTeamScore;
   secondTeamScoreValue.textContent = secondTeamScore;
};
  
</script>  
