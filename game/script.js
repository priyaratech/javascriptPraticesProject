const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const result = document.getElementById('result')
const history = document.getElementById('history')

// computer choice
const computerchoice = () => {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0)  {
        return 'rock';
    }else if (choice === 1) {
        return 'paper';
    }else {
        return 'scissor';
    }
}

// player choice
const playerchoice = (choice ) => {
    if (choice === rock.id) {
        return 'rock';
    }else if (choice === paper.id) {
        return 'paper';
    }else {
        return scissor.id;
}
}

// logic
const logicgame = (selectplayer , computerchoice) => {
    if(selectplayer === computerchoice) {
        
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so draw`;
        
    }else if(selectplayer === 'rock' && computerchoice === 'scissor') {
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so user is Winner`;


    }else if(selectplayer === 'rock' && computerchoice === 'paper') {
        
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so computer is Winner`;


    }else if(selectplayer === 'paper' && computerchoice === 'scissor') {
       
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so computer is Winner`;


    }else if(selectplayer === 'paper' && computerchoice === 'rock') {
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so user is Winner`;


    }else if(selectplayer === 'scissor' && computerchoice === 'paper') {
      
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so user is Winner`;


    }else if(selectplayer === 'scissor' && computerchoice === 'rock') {
       
        return result.innerHTML = `user select ${selectplayer} and computer select ${computerchoice} so computer is Winner`;


    }   
}

// event listener
rock.addEventListener('click', () => {
    logicgame(playerchoice(rock.id), computerchoice());
    historygame(playerchoice(rock.id), computerchoice());
})
paper.addEventListener('click', () => {
    logicgame(playerchoice(paper.id), computerchoice());
    historygame(playerchoice(paper.id), computerchoice());
})
scissor.addEventListener('click', () => {
    logicgame(playerchoice(scissor.id), computerchoice());
    historygame(playerchoice(scissor.id), computerchoice());
})


// history
const historygame = (selectplayer , computerchoice) => {
    console.log(`count ${history.children.length}`);
    history.innerHTML += `<li>user select ${selectplayer} and computer select ${computerchoice}</li>`;
}



