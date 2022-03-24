require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note praise code gesture cart force gather'; 
let testAccounts = [
"0x96b50a1ccc66bda1999c06af1050640a02df76cb72634cf418bf10b2baac023a",
"0x57259ec4b95452264662f7663e5449f6b6790bc42c23539b878f71be4dd4c0a7",
"0xec448efead91260ce5c0e5b12e99700cbcf70abf97b03336a64e6d5676546c9a",
"0x9238db1d82ca212a7d52fc58dac912fd0b51ec6f6a0d64aab992f2adbc990b5d",
"0xbe455fa98e6017d311d6c07fc17520a56a0eba376a5170d8e6478db0e7ec9d32",
"0x3540cd4db75918a979034830896b6cd065a05b6bf942f8392c4970cae75ede83",
"0xe02ff7aff4e16776c7b71011487dc85f582141ff93633ba2ac96b7a45b3c2a0e",
"0x95972fd0a59f6554a8f1db75a63d900784034406ab13c6a96ad93d1afac23a53",
"0xe1f557aaff8819fa143161e19b3884d08eebac5ab42c566d31a792621cbb81c8",
"0x222bb0e5d6a1a03f98b9355bc8538c2ecc4fa49f2f0117ae783b15bc8495fbdb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

