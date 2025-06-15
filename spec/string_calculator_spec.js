describe('String Calculator', function() 
{
	beforeEach(function() 
	{
		calculator = new StringCalculator();
	});

    it('Should return 6 for the array [1,2,3,4,5]', function()
    {
        expect(calculator.add([1,2,3,4,5])).toEqual(6);
    });

    it('Should return 4 for the array [2,2,3,3]', function()
    {
        expect(calculator.add([2,2,3,3])).toEqual(4);
    });

    it('Should return 2 for the array [6,6,4,4,1,3]', function()
    {
        expect(calculator.add([6,6,4,4,1,3])).toEqual(2);
    });

    it('Should return 12 for the array [3,5,3,5,4,2]', function()
    {
        expect(calculator.add([3,5,3,5,4,2])).toEqual(12);
    });
});
