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
});
