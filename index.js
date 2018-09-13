(function() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
  const options = [];
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
  for (let i = currentYear - 60; i <= (currentYear + 60); i += 1) {
  	const option = setOption(i);
		yearsSelect.append(option);
  }
}())
