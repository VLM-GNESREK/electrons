// StringCalculator.js

function StringCalculator() {}
StringCalculator.prototype.add = function(array) 
{
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
        if(array[i] < 0 || array[i] > 6)
        {
            return -1; // Invalid Input
        }
        if(array[i] === 3)
        {
            sum += 2;
        }
        else if(array[i] === 5)
        {
            sum += 4;
        }
    }

    return sum;
};