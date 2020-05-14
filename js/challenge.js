document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter')

  document.querySelector('#comment-form').addEventListener('submit', leaveComment)

  let seconds = 0;
  let paused = false;
  let timer = window.setInterval(changeTimer, 1000);

  const pause = document.getElementById('pause')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const heart = document.getElementById('heart')

  pause.onclick = pauseTimer
  plus.onclick = incrementTimer
  minus.onclick = decrementTimer
  heart.onclick = likeTimer

  function changeTimer() {
    seconds++;
    counter.innerHTML = seconds;
  }

  function pauseTimer() {
    if (paused == false) {
      window.clearInterval(timer);
      heart.disabled = true
      plus.disabled = true
      minus.disabled = true
      pause.textContent = 'resume'
      paused = true;
    } else {
      timer = window.setInterval(changeTimer, 1000);
      heart.disabled = false
      plus.disabled = false
      minus.disabled = false
      pause.textContent = 'pause'
      paused = false;
    }
  }
  
  function incrementTimer() {
    counter.innerHTML = parseInt(counter.textContent) + 1
    seconds ++;
  }

  function decrementTimer() {
    counter.innerHTML = parseInt(counter.textContent) - 1
    seconds --;
  }

  function likeTimer(event) {
    newLike = document.createElement('li') 
    newLike.textContent = `Number ${counter.textContent} liked` 
    document.querySelector('ul.likes').appendChild(newLike)
  }

  function leaveComment(event) {
    text = document.getElementById('comment-input')
    newComment = document.createElement('p')
    newComment.textContent = text.value;
    text.value = ''
    document.getElementById('list').appendChild(newComment);

    event.preventDefault()
  }

  document.getElementById('pause').onclick = pauseTimer
  document.getElementById('plus').onclick = incrementTimer
  document.getElementById('minus').onclick = decrementTimer
  document.getElementById('heart').onclick = likeTimer
  
});
