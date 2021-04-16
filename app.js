var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var SimpleContract = web3.eth.contract(
    [{
        "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "returnValue", "type": "bool" }],
        "name": "valueEvent", "type": "event"
    },
    {
        "inputs": [{ "internalType": "uint8", "name": "x", "type": "uint8" }],
        "name": "Matcher", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "nonpayable", "type": "function"
    }]
);

var simplecontract = SimpleContract.at("0xec23eab6bf1331bfc1a98cd329772227f271378b");
console.log(simplecontract);

function callMatchertrue() {
    var txn = simplecontract.Matcher.call(12);
    {
    };
    console.log("return value: " + txn);
}
function callMatcherfalse() {
    var txn = simplecontract.Matcher.call(1); {
    };
    console.log("return value: " + txn);
}
function myFunction() {
    var x = document.getElementById("txtValue").value;
    var txn = simplecontract.Matcher.call(x); {
    };
    console.log("return value: " + txn);
    document.getElementById("decision").innerHTML = txn;
}