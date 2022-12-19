describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 25;
      tipAmtInput.value = 5;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('25');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('5');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);

    });

    it('should return undefined with neg or empty input', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';

        let payment = createCurPayment();

        expect(payment).toEqual(undefined);

    });

    it('should create a current payment', function (){
        let payment = {billAmt: '25', tipAmt: '5', tipPercent: 20};

        expect(createCurPayment()).toEqual(payment);
    });

afterEach(function() {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    });
});