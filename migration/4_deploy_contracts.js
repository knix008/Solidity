var METoken = artifacts.require("METoken");
var METFaucet = artifacts.require("METFaucet");

//module.exports = function(deployer) {
//    deployer.deploy(METoken).then(async function(){
//        let accounts = await web3.eth.getAccounts();
//        let owner = accounts[0];

        //console.log(owner);
//        return deployer.deploy(METFaucet, METoken.address, owner);
//    });
//}
module.exports = (deployer) => {
  deployer.then(async() => {
    await deployer.deploy(METoken);
    let accounts = await web3.eth.getAccounts();
    let owner = accounts[0];
    await deployer.deploy(METFaucet, METoken.address, owner);
  })
}
