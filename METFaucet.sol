// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract METFaucet {
    ERC20 public METoken;
    address public METOwner;

    constructor(address _METoken, address _METOwner) public {
      METoken = ERC20(_METoken);
      METOwner = _METOwner;
    }

    function withdraw(uint withdraw_amount) public {
      require(withdraw_amount <= 1000);
      METoken.transferFrom(METOwner, msg.sender, withdraw_amount);
    }
    receive () external payable { revert(); }
}
