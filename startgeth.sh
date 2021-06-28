#!/usr/bin/bash

geth --datadir ~/ethereum init ~/ethereum/genesis.json
geth --datadir ~/ethereum --nodiscover --allow-insecure-unlock --http --http.port 8545 --http.addr '0.0.0.0' --http.corsdomain '*' --http.api 'admin,eth,debug,miner,net,txpool,personal,web3' --port 30303
