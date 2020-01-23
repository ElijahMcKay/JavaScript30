function playSound(e) { //just putting all this logic inside of it's own function
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`); // attribute selector in javascript
    
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`); // attribute selector in javascript
    // console.log(key); 
    // console.log(audio); 
    
    key.classList.add('playing'); // also have .remove and .toggle
    
    if(!audio) return; // stops function from running
    
    audio.currentTime = 0; // this resets the sound so you can spam the key 
    
    audio.play(); // IF YOU CALL .PLAY() ON SOMETHING THAT'S ALREADY PLAYING, IT WON'T DO ANYTHING
  }

  function removeTransition(e) {  
    if(e.propertyName !== 'transform') return; 
    // console.log(e); 
    // console.log(this); // equal to the key
    this.classList.remove('playing'); 
  }

  const keys = document.querySelectorAll('.key'); 

  keys.forEach(key => { // you must loop through nodelists to do something to each item in in 
    key.addEventListener('transitionend', removeTransition);  // we're not using a setTimeout because if someone changed the transition time in the CSS, it would get out of sync
  })

  window.addEventListener('keydown', playSound); //final call