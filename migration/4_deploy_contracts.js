const METoken = artifacts.require("METoken");
const METFaucet = artifacts.require("METFaucet");

module.exports = function(deployer) {
    deployer.deploy(METoken).then(async function(){
        let accounts = await web3.eth.getAccounts();
        let owner = accounts[0];

        //console.log(owner);
        return deployer.deploy(METFaucet, METoken.address, owner);
    });
}
