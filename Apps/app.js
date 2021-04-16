//var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "uint8"
			}
		],
		"name": "Matcher",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "returnValue",
				"type": "bool"
			}
		],
		"name": "valueEvent",
		"type": "event"
	}
];
var address = "0x27Bc22126E5F1708ddA0d1Ca6604a7b18b9826E5";
var from = "0x5e849CaE0b6970B9C4328919AB84199cD9F287DC";
var gasPrice = '3000000';
var simplecontract = new web3.eth.Contract(abi, address, from, gasPrice );

//var simplecontract = SimpleContract.address('');
console.log(simplecontract);

function callMatchertrue() {
    simplecontract.methods.Matcher(12).call().then(function(res){
        console.log("return value: " + res);
    }, function(res){
        console.log("error occurred : " + res)
    });
}

function callMatcherfalse() {
    simplecontract.methods.Matcher(1).call().then(function(res){
        console.log("return value: " + res);
    }, function(res){
        console.log("error occurred : " + res)
    });
}

function myFunction() {
    var x = document.getElementById("txtValue").value;
    var txn;
    simplecontract.methods.Matcher(x).call().then(function(res){
        console.log("return value: " + res);
        txn = res;
    }, function(res){
        console.log("error occurred : " + res)
        txn = 0;
    });
    document.getElementById("decision").innerHTML = txn;
}
