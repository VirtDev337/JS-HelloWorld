    const calendarSelect = document.querySelector('#calendar');
    const list = document.querySelector('ul');
    const h2 = document.querySelector('h2');
    
    calendarSelect.addEventListener('change', () => {
    const choice = calendarSelect.value;
    
    // ADD CONDITIONAL HERE
    let days = 31;
    if (choice == "February") {
        days = 28;
    } else if (choice == "April" || choice == "June" || choice == "September" || choice == "November") {
        days = 30;
    }
    createCalendar(days, choice);
    });
    
    function createCalendar(days, choice) {
    list.innerHTML = '';
    h2.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
    }

    createCalendar(31,'January');