// StringCalculator.js

function StringCalculator() {}
StringCalculator.prototype.add = function(array) 
{
    let evenCount = 0;
    let oddCount = 0;

    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 === 0)
        {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let sum = evenCount + oddCount;

    return sum;
};