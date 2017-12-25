ACCOUNT=627306090abaB3A6e1400e9345bC60c78a8BEf57  # truffle sweets account
PK=c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
DATADIR=/tmp/geth-dev
PASSWORD=password
RPCPORT=8545

mkdir -p $DATADIR

# import account
echo $PK > $DATADIR/pk.txt
yes $PASSWORD | geth account import $DATADIR/pk.txt --datadir $DATADIR

# reset blockchain
IDENTITY=geth-dev-chain
NETWORK_ID=1999
PWFILE=$DATADIR/password
echo $PASSWORD > $PWFILE

# yes | geth removedb --datadir $DATADIR
geth --identity "$IDENTITY" --nodiscover --networkid $NETWORK_ID --datadir $DATADIR init dev-chain-genesis.json
geth --identity "$IDENTITY" --datadir $DATADIR --nodiscover --networkid $NETWORK_ID --rpc --rpcport $RPCPORT --rpcapi "db,eth,net,web3" --mine --minerthreads 1 --unlock $ACCOUNT --password $PWFILE console
