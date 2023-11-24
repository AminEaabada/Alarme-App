const form = document.querySelector('form');
const alarmsList = document.querySelector('.alarms');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const time = event.target.time.value;

  const alarm = document.createElement('li');
  alarm.innerHTML = `<span>${time}</span><button class="Edit">Edit</button><button>Delete</button>`;
  alarmsList.appendChild(alarm);
  alarm.style.height = '35px' ;
  alarm.classList.add("NewInp");
  
  event.target.reset();
});

alarmsList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.textContent === 'Delete') {
      event.target.parentElement.remove();
    } else if (event.target.textContent === 'Edit') {
      const span = event.target.previousSibling;
      const time = span.textContent;
      const input = document.createElement('input');
      input.type = 'time';
      input.value = time;
      span.replaceWith(input);
      input.style.width = '100px' ;
      input.style.marginTop = '20px' ;
      event.target.textContent = 'Save';
    } else if (event.target.textContent === 'Save') {
      const input = event.target.previousSibling;
      const time = input.value;
      const span = document.createElement('span');
      span.textContent = time;
      input.replaceWith(span);
      event.target.textContent = 'Edit';
    }
  }
});


  
  const now = new Date();
  const timeNow = now.toLocaleTimeString();
  const updateTime = document.querySelector('.timeN').innerText = timeNow;
  setInterval(updateTime, 1000);