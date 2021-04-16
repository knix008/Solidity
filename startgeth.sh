#!/usr/bin/bash

geth --datadir ~/etherprivate --networkid 786 --allow-insecure-unlock --http --http.port 8545 --http.api 'admin,web3,eth,net,debug,personal' --http.corsdomain '*' --nodiscover --identity 'shkwon'
