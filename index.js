let devMode = false;

function init() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
	const resetButton = document.querySelector('#resetButton');
	
  const setOption = i => {
	  const option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : i;
    option.innerText = option.value;
    return option;
  };
	for (let i = 1; i <= 31; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
  for (let i = 1; i <= 12; i += 1) {
  	const option = setOption(i);
		monthsSelect.append(option);
  }
	const currentYear = 2018;
  for (let i = currentYear - 120; i <= currentYear; i += 1) {
  	const option = setOption(i);
		yearsSelect.append(option);
  }
  
  monthsSelect.addEventListener("change", function() { changeDays(); showDate();});
  yearsSelect.addEventListener("change", function() { changeDays(); showDate();});
  resetButton.addEventListener("click", function() { resetForm(); showDate();});
  
};

function showDate() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
	
	if ((monthsSelect.selectedIndex == "0") ||  (yearsSelect.selectedIndex == "0") || (daysSelect.selectedIndex == "0")) {} else 
	{
	var day = daysSelect.options[daysSelect.selectedIndex].value;
	var month = monthsSelect.options[monthsSelect.selectedIndex].value;
	var year = yearsSelect.options[yearsSelect.selectedIndex].value;
	strDate = day+"-"+month+"-"+year;
	
		var date = new Date(strDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
		document.getElementById('date').innerHTML += date.toString();
	}
}

function resetForm() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
	
	monthsSelect.selectedIndex = "0";
	yearsSelect.selectedIndex = "0";
	daysSelect.selectedIndex = "0";
}

function changeDays() {
	
	const setOption = i => {
	  const option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : i;
    option.innerText = option.value;
    return option;
  };
  
	var leapYear = "no";
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
	
	var day = daysSelect.options[daysSelect.selectedIndex].value;
	var month = monthsSelect.options[monthsSelect.selectedIndex].value;
	var year = yearsSelect.options[yearsSelect.selectedIndex].value;
	
  //check if selected year is leap year
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) { leapYear = "yes";}
		} else { leapYear = "yes";}
	}
	
	//empty days dropdown
	document.querySelectorAll('#days option').forEach(option => option.remove());
	
	//add inital option
	const option = document.createElement('option');
    option.value = "Select a day...";
    option.innerText = option.value;
    daysSelect.append(option);

	//if february and leap year
	if (month == 02 && leapYear == "yes") { 
	for (let i = 1; i <= 29; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
	if (day > 29) {daysSelect.selectedIndex = "29";} else {daysSelect.selectedIndex = day;}
}

	//if february and not leap year
	if (month == 02 && leapYear == "no") { 
	for (let i = 1; i <= 28; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
	if (day > 28) {daysSelect.selectedIndex = "28";} else {daysSelect.selectedIndex = day;}
	}
  
  	//if april, june, sept or nov
	if (month == 04 || month == 06 || month == 09 || month == 11) { 
	for (let i = 1; i <= 30; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
	if (day > 30) {daysSelect.selectedIndex = "30";} else {daysSelect.selectedIndex = day;}
}

  	//if other month
	if (!(month == 04 || month == 06 || month == 09 || month == 11 || month == 02)) { 
	for (let i = 1; i <= 31; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
  daysSelect.selectedIndex = day;
}

}

function consoleText(text, target) {
  const textArray = [];
  let timeout = 0;
  for (let i = 0; i < text.length; i++) {
    textArray.push(text.charAt(i));
  }
  textArray.forEach((character, i) => {
    timeout = timeout + 120;
    setTimeout(() => target.append(character), timeout);
  });
};

function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
};

function toggleDevMode(button) {
  const consoleWrapper = document.getElementById('console-wrapper');
  const logo = document.getElementById('logo-img');
  devMode = !devMode;
  if (devMode) {
    const target = document.getElementById('console-text');
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="./css/dev-mode.css" id="dev-mode-css">';
    consoleWrapper.classList.add('d-flex');
    logo.src= './assets/smartpension-white.svg';
    target.innerHTML = '';
    button.innerText = 'Regular Mode';
    setTimeout(() => consoleText('Best of Luck!', target), 1000);
  } else {
    consoleWrapper.classList.remove('d-flex');
    logo.src= './assets/smartpension.svg';
    button.innerText = 'Dev Mode';
    removeElement('dev-mode-css');
  }
};

init();
