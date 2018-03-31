var Web3 = require('web3');
var contract = require("truffle-contract");
var config = require('./build/contracts/Test.json')

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的.json文件内容

var Test = contract(config)



var provider = new Web3.providers.HttpProvider("http://localhost:8545");

Test.setProvider(provider);

if (typeof Test.currentProvider.sendAsync !== "function") {
  Test.currentProvider.sendAsync = function() {
    return Test.currentProvider.send.apply(
      Test.currentProvider, arguments
    );
  };
}

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，查看自己的客户端启动时，观察打印到控制台的地址
// Test.defaults({
//   from : "0xf832670caaf0150aa81e97f344ea5d667e965bee"
// });

var instance;
// Test.new();
var rs = Test.deployed().then(inst => { instance = inst; return instance.g.call(); }).catch(function(ins){console.log('ffffffffffff');console.log(ins)});

setTimeout(function(){
	console.log('233')
	console.log(rs)
},500)