let devMode = false;

function init() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
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
};

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
