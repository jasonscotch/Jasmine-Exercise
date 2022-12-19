describe('helpers test (with setup and tear-down)', function () {
    beforeEach(function() {
        billAmtInput.value = 25;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });

    it('should sum tip total from allPayments objects', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(5);
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(15);
    });

    it('should sum bill total from allPayments objects', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(25);
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(75);
    });

    it('should sum tip % from allPayments objects', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value = 25;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should calculate tip percentage', function() {
        expect(calculateTipPercent(25,5)).toEqual(20);
        expect(calculateTipPercent(100,25)).toEqual(25);
    });

    it('should create a new td element', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'testing');

        expect(newTr.firstChild.innerHTML).toEqual('testing');
        expect(newTr.children.length).toEqual(1);
    });

    // it('should remove a server td element when clicked', function() {

    // })



    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
        serverTbody.innerHTML = '';
      });

})