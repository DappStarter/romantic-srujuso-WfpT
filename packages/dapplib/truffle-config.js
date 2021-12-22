require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind hour install father fresh test'; 
let testAccounts = [
"0x10560d92964bf190d249b369805de5ddabef2c72a2a64f339a15ed108423fbe4",
"0x4aa406bc8fd9fe84180e72f5ca0ae7b8202823dbc890678287dbb1abd76174b7",
"0xa25480d6f56962a1f175729c5d8ca43be279804e4cf0e9db3763a633d6cbce27",
"0xda9df1c04a43dea5c45bb321d868228667f643ce6e82082838e712647e2a3701",
"0xefba6bf20069d4c43c990ab143851dfb9eacb122b06c19d94116d33103c48bd1",
"0x619e87d8449afb3c682e894495f283cf2ca5912145c0bae070b0702c40823ae5",
"0x8e3fcf06719fb186081f75165db733d872704bd19facc04a177e1e782ccc724a",
"0xa68cccb7543f6575fd1d7d5aaa5d1ab5e98f92fac382891009f8fe953e1e8e22",
"0x90e691ed3bd5c31b5af532cb1860d5581daf15caa25f2a260dc2c1f3291b5dcd",
"0xab9de0fe3e2dc10d0c93597c0d6bfab30b2be2ea6ccb30350a4d507181be4dbb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

