describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if the input is blank', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);

  });

  it('should add a table row element with input values', function () {
    submitServerInfo();
    updateServerTable();

    let TdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(TdList[0].innerText).toEqual('Alice');
    expect(TdList[1].innerText).toEqual('$0.00');
    expect(TdList[2].innerText).toEqual('X');
  });


  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
