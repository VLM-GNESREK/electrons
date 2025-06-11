// StringCalculator.js

function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) 
{
	if(string_numbers === '') return 0;

	let sum = 0;

	const numberArray = string_numbers.split(',');

	for(let i = 0; i < numberArray.length; i++)
	{
		const number = parseInt(numberArray[i]);
		if(!isNaN(number))
		{
			sum += number;
		}
	}

	return sum;
};
