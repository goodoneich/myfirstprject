# /commons/types.go
const (
HashLength = 32
AddressLength = 20
)
type Hash [HashLength]byte
type Address [AddressLength]byte
# /go-1.x/src/math/big/int.go
package big
type Int struct {
neg bool // sign, whether negaive
abs nat // absolute value of integer
}
# /core/types/block.go
type Block struct {
header *Header
    transactions Transactions  // type Transactions []*Transaction
...
}
type Header struct {
    ParentHash common.Hash
    Number *big.Int
    ...
}
# /core/types/transaction.go
type Transaction struct {
data txdata
hash, size, from atomic.Value // for cache
}
type txdata struct {
AccountNonce uint64
Price *big.Int
GasLimit *big.Int
Recipient *common.Address
Amount *big.Int
Payload []byte
V, R, S *big.Int // for signature
Hash *common.Hash // for marshalin
}
