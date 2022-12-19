
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 50000, years: 15, rate: 4.5})).toEqual('382.50');
  expect(calculateMonthlyPayment({amount: 450000, years: 30, rate: 6.5})).toEqual('2844.31');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 50000, years: 15, rate: 4.5})).toMatch(/^\d+\.\d\d$/);
});

it("should return NaN when something other than a number is input", function() {
  expect(calculateMonthlyPayment({amount: 50000, years: 'thirty', rate: 4.5})).toMatch('NaN');
});


