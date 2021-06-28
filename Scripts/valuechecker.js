var valuecheckerContract = web3.eth.contract([{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"returnValue","type":"bool"}],"name":"valueEvent","type":"event"},{"inputs":[{"internalType":"uint8","name":"x","type":"uint8"}],"name":"Matcher","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]);

var valuechecker = valuecheckerContract.new(
    {
        from: web3.eth.accounts[0],
        data: '0x6080604052600a60005534801561001557600080fd5b50610186806100256000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f9d55e2114610030575b600080fd5b61004a600480360381019061004591906100cd565b610060565b6040516100579190610105565b60405180910390f35b600080548260ff16106100ae577f3eb1a229ff7995457774a4bd31ef7b13b6f4491ad1ebb8961af120b8b4b6239c600160405161009d9190610105565b60405180910390a1600190506100b3565b600090505b919050565b6000813590506100c781610139565b92915050565b6000602082840312156100df57600080fd5b60006100ed848285016100b8565b91505092915050565b6100ff81610120565b82525050565b600060208201905061011a60008301846100f6565b92915050565b60008115159050919050565b600060ff82169050919050565b6101428161012c565b811461014d57600080fd5b5056fea26469706673582212202c806a740aa170e007470399236e42c29dfc2db41a411ed7ec4afcb3ab5ebfa064736f6c63430008030033',
        gas: '4700000'
    }, 
    function(e, contract){
        console.log(e,contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract minded! address : ' + contract.address + ' transactionHash : ' + contract.transactionHash);
        }
    }
)