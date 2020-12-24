# Solidity
Solidity Programming Practice

Truffle console example : 

$truffle console

truffle(ganache)> let instance = await METoken.deployed()
undefined

truffle(ganache)> let accounts = await web3.eth.getAccounts()
undefined

truffle(ganache)> accounts
[
  '0x6B942ed5a758B16458329DbB7873F04A9942Fbe8',
  ... 
]

truffle(ganache)> instance.approve(accounts[0], 10000)

truffle(ganache)> instance.balanceOf(accounts[0])
BN {
  negative: 0,
  words: [ 1000000, <1 empty item> ],
  length: 1,
  red: null
}

truffle(ganache)> instance.transferFrom(accounts[0], METFaucet.address, 1000)

truffle(ganache)> instance.balanceOf(METFaucet.address)
BN {
  negative: 0,
  words: [ 1000, <1 empty item> ],
  length: 1,
  red: null
}

truffle(ganache)> instance.approve(accounts[1], 1000)

truffle(ganache)> METFaucet.deployed().then(instance => {instance.withdraw(100, {from:accounts[1]})})
undefined
truffle(ganache)> instance.balanceOf(accounts[1])
BN {
  negative: 0,
  words: [ 100, <1 empty item> ],
  length: 1,
  red: null
}

truffle(ganache)> instance.balanceOf(METFaucet.address)
BN {
  negative: 0,
  words: [ 1000, <1 empty item> ],
  length: 1,
  red: null
}

truffle(ganache)> 
