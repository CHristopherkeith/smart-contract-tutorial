var Web3 = require('web3');
var contract = require("truffle-contract");
var config = require('./build/contracts/Test.json')

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的.json文件内容
// var Test = contract({
//   "contractName": "Test",
//   "abi": [
//     {
//       "constant": false,
//       "inputs": [],
//       "name": "f",
//       "outputs": [
//         {
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [],
//       "name": "g",
//       "outputs": [
//         {
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ],
//   "bytecode": "0x6060604052341561000f57600080fd5b6102338061001e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326121ff014610051578063e2179b8e146100df575b600080fd5b341561005c57600080fd5b61006461016d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ea57600080fd5b6100f26101b0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101756101f3565b6040805190810160405280600a81526020017f6d6574686f642066282900000000000000000000000000000000000000000000815250905090565b6101b86101f3565b6040805190810160405280600a81526020017f6d6574686f642067282900000000000000000000000000000000000000000000815250905090565b6020604051908101604052806000815250905600a165627a7a72305820123ef5eef3198549eae94c5a8325de17827a91703984bcf00ec132d47f5d60f00029",
//   "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326121ff014610051578063e2179b8e146100df575b600080fd5b341561005c57600080fd5b61006461016d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ea57600080fd5b6100f26101b0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101756101f3565b6040805190810160405280600a81526020017f6d6574686f642066282900000000000000000000000000000000000000000000815250905090565b6101b86101f3565b6040805190810160405280600a81526020017f6d6574686f642067282900000000000000000000000000000000000000000000815250905090565b6020604051908101604052806000815250905600a165627a7a72305820123ef5eef3198549eae94c5a8325de17827a91703984bcf00ec132d47f5d60f00029",
//   "sourceMap": "28:183:1:-;;;;;;;;;;;;;;;;;",
//   "deployedSourceMap": "28:183:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;50:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;133:75:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;50:75:1;79:6;;:::i;:::-;98:19;;;;;;;;;;;;;;;;;;;;50:75;:::o;133:::-;162:6;;:::i;:::-;181:19;;;;;;;;;;;;;;;;;;;;133:75;:::o;28:183::-;;;;;;;;;;;;;;;:::o",
//   "source": "pragma solidity ^0.4.17;\r\n\r\ncontract Test{\r\n\r\n    function f() public returns (string) {\r\n        return \"method f()\";\r\n    }\r\n\r\n    function g() public returns (string) {\r\n        return \"method g()\";\r\n    }\r\n}",
//   "sourcePath": "F:\\Ethereum Smart contract\\smart-contract-tutorial\\contracts\\Test.sol",
//   "ast": {
//     "absolutePath": "/F/Ethereum Smart contract/smart-contract-tutorial/contracts/Test.sol",
//     "exportedSymbols": {
//       "Test": [
//         75
//       ]
//     },
//     "id": 76,
//     "nodeType": "SourceUnit",
//     "nodes": [
//       {
//         "id": 58,
//         "literals": [
//           "solidity",
//           "^",
//           "0.4",
//           ".17"
//         ],
//         "nodeType": "PragmaDirective",
//         "src": "0:24:1"
//       },
//       {
//         "baseContracts": [],
//         "contractDependencies": [],
//         "contractKind": "contract",
//         "documentation": null,
//         "fullyImplemented": true,
//         "id": 75,
//         "linearizedBaseContracts": [
//           75
//         ],
//         "name": "Test",
//         "nodeType": "ContractDefinition",
//         "nodes": [
//           {
//             "body": {
//               "id": 65,
//               "nodeType": "Block",
//               "src": "87:38:1",
//               "statements": [
//                 {
//                   "expression": {
//                     "argumentTypes": null,
//                     "hexValue": "6d6574686f6420662829",
//                     "id": 63,
//                     "isConstant": false,
//                     "isLValue": false,
//                     "isPure": true,
//                     "kind": "string",
//                     "lValueRequested": false,
//                     "nodeType": "Literal",
//                     "src": "105:12:1",
//                     "subdenomination": null,
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_stringliteral_3ce86443ed854002c818584751adeb2963f2de447a5441d9674c19e17dd6b2ec",
//                       "typeString": "literal_string \"method f()\""
//                     },
//                     "value": "method f()"
//                   },
//                   "functionReturnParameters": 62,
//                   "id": 64,
//                   "nodeType": "Return",
//                   "src": "98:19:1"
//                 }
//               ]
//             },
//             "id": 66,
//             "implemented": true,
//             "isConstructor": false,
//             "isDeclaredConst": false,
//             "modifiers": [],
//             "name": "f",
//             "nodeType": "FunctionDefinition",
//             "parameters": {
//               "id": 59,
//               "nodeType": "ParameterList",
//               "parameters": [],
//               "src": "60:2:1"
//             },
//             "payable": false,
//             "returnParameters": {
//               "id": 62,
//               "nodeType": "ParameterList",
//               "parameters": [
//                 {
//                   "constant": false,
//                   "id": 61,
//                   "name": "",
//                   "nodeType": "VariableDeclaration",
//                   "scope": 66,
//                   "src": "79:6:1",
//                   "stateVariable": false,
//                   "storageLocation": "default",
//                   "typeDescriptions": {
//                     "typeIdentifier": "t_string_memory_ptr",
//                     "typeString": "string memory"
//                   },
//                   "typeName": {
//                     "id": 60,
//                     "name": "string",
//                     "nodeType": "ElementaryTypeName",
//                     "src": "79:6:1",
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_string_storage_ptr",
//                       "typeString": "string storage pointer"
//                     }
//                   },
//                   "value": null,
//                   "visibility": "internal"
//                 }
//               ],
//               "src": "78:8:1"
//             },
//             "scope": 75,
//             "src": "50:75:1",
//             "stateMutability": "nonpayable",
//             "superFunction": null,
//             "visibility": "public"
//           },
//           {
//             "body": {
//               "id": 73,
//               "nodeType": "Block",
//               "src": "170:38:1",
//               "statements": [
//                 {
//                   "expression": {
//                     "argumentTypes": null,
//                     "hexValue": "6d6574686f6420672829",
//                     "id": 71,
//                     "isConstant": false,
//                     "isLValue": false,
//                     "isPure": true,
//                     "kind": "string",
//                     "lValueRequested": false,
//                     "nodeType": "Literal",
//                     "src": "188:12:1",
//                     "subdenomination": null,
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_stringliteral_7e7c528d7cb6d150c5f3f3c63e4be365b456628acdc587e433fa35bbd144eb45",
//                       "typeString": "literal_string \"method g()\""
//                     },
//                     "value": "method g()"
//                   },
//                   "functionReturnParameters": 70,
//                   "id": 72,
//                   "nodeType": "Return",
//                   "src": "181:19:1"
//                 }
//               ]
//             },
//             "id": 74,
//             "implemented": true,
//             "isConstructor": false,
//             "isDeclaredConst": false,
//             "modifiers": [],
//             "name": "g",
//             "nodeType": "FunctionDefinition",
//             "parameters": {
//               "id": 67,
//               "nodeType": "ParameterList",
//               "parameters": [],
//               "src": "143:2:1"
//             },
//             "payable": false,
//             "returnParameters": {
//               "id": 70,
//               "nodeType": "ParameterList",
//               "parameters": [
//                 {
//                   "constant": false,
//                   "id": 69,
//                   "name": "",
//                   "nodeType": "VariableDeclaration",
//                   "scope": 74,
//                   "src": "162:6:1",
//                   "stateVariable": false,
//                   "storageLocation": "default",
//                   "typeDescriptions": {
//                     "typeIdentifier": "t_string_memory_ptr",
//                     "typeString": "string memory"
//                   },
//                   "typeName": {
//                     "id": 68,
//                     "name": "string",
//                     "nodeType": "ElementaryTypeName",
//                     "src": "162:6:1",
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_string_storage_ptr",
//                       "typeString": "string storage pointer"
//                     }
//                   },
//                   "value": null,
//                   "visibility": "internal"
//                 }
//               ],
//               "src": "161:8:1"
//             },
//             "scope": 75,
//             "src": "133:75:1",
//             "stateMutability": "nonpayable",
//             "superFunction": null,
//             "visibility": "public"
//           }
//         ],
//         "scope": 76,
//         "src": "28:183:1"
//       }
//     ],
//     "src": "0:211:1"
//   },
//   "legacyAST": {
//     "absolutePath": "/F/Ethereum Smart contract/smart-contract-tutorial/contracts/Test.sol",
//     "exportedSymbols": {
//       "Test": [
//         75
//       ]
//     },
//     "id": 76,
//     "nodeType": "SourceUnit",
//     "nodes": [
//       {
//         "id": 58,
//         "literals": [
//           "solidity",
//           "^",
//           "0.4",
//           ".17"
//         ],
//         "nodeType": "PragmaDirective",
//         "src": "0:24:1"
//       },
//       {
//         "baseContracts": [],
//         "contractDependencies": [],
//         "contractKind": "contract",
//         "documentation": null,
//         "fullyImplemented": true,
//         "id": 75,
//         "linearizedBaseContracts": [
//           75
//         ],
//         "name": "Test",
//         "nodeType": "ContractDefinition",
//         "nodes": [
//           {
//             "body": {
//               "id": 65,
//               "nodeType": "Block",
//               "src": "87:38:1",
//               "statements": [
//                 {
//                   "expression": {
//                     "argumentTypes": null,
//                     "hexValue": "6d6574686f6420662829",
//                     "id": 63,
//                     "isConstant": false,
//                     "isLValue": false,
//                     "isPure": true,
//                     "kind": "string",
//                     "lValueRequested": false,
//                     "nodeType": "Literal",
//                     "src": "105:12:1",
//                     "subdenomination": null,
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_stringliteral_3ce86443ed854002c818584751adeb2963f2de447a5441d9674c19e17dd6b2ec",
//                       "typeString": "literal_string \"method f()\""
//                     },
//                     "value": "method f()"
//                   },
//                   "functionReturnParameters": 62,
//                   "id": 64,
//                   "nodeType": "Return",
//                   "src": "98:19:1"
//                 }
//               ]
//             },
//             "id": 66,
//             "implemented": true,
//             "isConstructor": false,
//             "isDeclaredConst": false,
//             "modifiers": [],
//             "name": "f",
//             "nodeType": "FunctionDefinition",
//             "parameters": {
//               "id": 59,
//               "nodeType": "ParameterList",
//               "parameters": [],
//               "src": "60:2:1"
//             },
//             "payable": false,
//             "returnParameters": {
//               "id": 62,
//               "nodeType": "ParameterList",
//               "parameters": [
//                 {
//                   "constant": false,
//                   "id": 61,
//                   "name": "",
//                   "nodeType": "VariableDeclaration",
//                   "scope": 66,
//                   "src": "79:6:1",
//                   "stateVariable": false,
//                   "storageLocation": "default",
//                   "typeDescriptions": {
//                     "typeIdentifier": "t_string_memory_ptr",
//                     "typeString": "string memory"
//                   },
//                   "typeName": {
//                     "id": 60,
//                     "name": "string",
//                     "nodeType": "ElementaryTypeName",
//                     "src": "79:6:1",
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_string_storage_ptr",
//                       "typeString": "string storage pointer"
//                     }
//                   },
//                   "value": null,
//                   "visibility": "internal"
//                 }
//               ],
//               "src": "78:8:1"
//             },
//             "scope": 75,
//             "src": "50:75:1",
//             "stateMutability": "nonpayable",
//             "superFunction": null,
//             "visibility": "public"
//           },
//           {
//             "body": {
//               "id": 73,
//               "nodeType": "Block",
//               "src": "170:38:1",
//               "statements": [
//                 {
//                   "expression": {
//                     "argumentTypes": null,
//                     "hexValue": "6d6574686f6420672829",
//                     "id": 71,
//                     "isConstant": false,
//                     "isLValue": false,
//                     "isPure": true,
//                     "kind": "string",
//                     "lValueRequested": false,
//                     "nodeType": "Literal",
//                     "src": "188:12:1",
//                     "subdenomination": null,
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_stringliteral_7e7c528d7cb6d150c5f3f3c63e4be365b456628acdc587e433fa35bbd144eb45",
//                       "typeString": "literal_string \"method g()\""
//                     },
//                     "value": "method g()"
//                   },
//                   "functionReturnParameters": 70,
//                   "id": 72,
//                   "nodeType": "Return",
//                   "src": "181:19:1"
//                 }
//               ]
//             },
//             "id": 74,
//             "implemented": true,
//             "isConstructor": false,
//             "isDeclaredConst": false,
//             "modifiers": [],
//             "name": "g",
//             "nodeType": "FunctionDefinition",
//             "parameters": {
//               "id": 67,
//               "nodeType": "ParameterList",
//               "parameters": [],
//               "src": "143:2:1"
//             },
//             "payable": false,
//             "returnParameters": {
//               "id": 70,
//               "nodeType": "ParameterList",
//               "parameters": [
//                 {
//                   "constant": false,
//                   "id": 69,
//                   "name": "",
//                   "nodeType": "VariableDeclaration",
//                   "scope": 74,
//                   "src": "162:6:1",
//                   "stateVariable": false,
//                   "storageLocation": "default",
//                   "typeDescriptions": {
//                     "typeIdentifier": "t_string_memory_ptr",
//                     "typeString": "string memory"
//                   },
//                   "typeName": {
//                     "id": 68,
//                     "name": "string",
//                     "nodeType": "ElementaryTypeName",
//                     "src": "162:6:1",
//                     "typeDescriptions": {
//                       "typeIdentifier": "t_string_storage_ptr",
//                       "typeString": "string storage pointer"
//                     }
//                   },
//                   "value": null,
//                   "visibility": "internal"
//                 }
//               ],
//               "src": "161:8:1"
//             },
//             "scope": 75,
//             "src": "133:75:1",
//             "stateMutability": "nonpayable",
//             "superFunction": null,
//             "visibility": "public"
//           }
//         ],
//         "scope": 76,
//         "src": "28:183:1"
//       }
//     ],
//     "src": "0:211:1"
//   },
//   "compiler": {
//     "name": "solc",
//     "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
//   },
//   "networks": {
//     "1522080497501": {
//       "events": {},
//       "links": {},
//       "address": "0xf832670caaf0150aa81e97f344ea5d667e965bee",
//       "transactionHash": "0x2482cfc79d670061b384b74b1c9baaad78bc0ce7757e8a6893a8503662881175"
//     }
//   },
//   "schemaVersion": "2.0.0",
//   "updatedAt": "2018-03-26T16:15:33.822Z"
// });

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