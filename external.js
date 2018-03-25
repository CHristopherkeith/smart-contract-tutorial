var Web3 = require('web3');
var contract = require("truffle-contract");

var provider = new Web3.providers.HttpProvider("http://localhost:8545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的.json文件内容
var Test = contract({
  "contractName": "Test",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "f",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "g",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6102338061001e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326121ff014610051578063e2179b8e146100df575b600080fd5b341561005c57600080fd5b61006461016d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ea57600080fd5b6100f26101b0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101756101f3565b6040805190810160405280600a81526020017f6d6574686f642066282900000000000000000000000000000000000000000000815250905090565b6101b86101f3565b6040805190810160405280600a81526020017f6d6574686f642067282900000000000000000000000000000000000000000000815250905090565b6020604051908101604052806000815250905600a165627a7a72305820123ef5eef3198549eae94c5a8325de17827a91703984bcf00ec132d47f5d60f00029",
  "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326121ff014610051578063e2179b8e146100df575b600080fd5b341561005c57600080fd5b61006461016d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a4578082015181840152602081019050610089565b50505050905090810190601f1680156100d15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100ea57600080fd5b6100f26101b0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101756101f3565b6040805190810160405280600a81526020017f6d6574686f642066282900000000000000000000000000000000000000000000815250905090565b6101b86101f3565b6040805190810160405280600a81526020017f6d6574686f642067282900000000000000000000000000000000000000000000815250905090565b6020604051908101604052806000815250905600a165627a7a72305820123ef5eef3198549eae94c5a8325de17827a91703984bcf00ec132d47f5d60f00029",
  "sourceMap": "28:183:0:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "28:183:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;50:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;133:75:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;50:75:0;79:6;;:::i;:::-;98:19;;;;;;;;;;;;;;;;;;;;50:75;:::o;133:::-;162:6;;:::i;:::-;181:19;;;;;;;;;;;;;;;;;;;;133:75;:::o;28:183::-;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\r\n\r\ncontract Test{\r\n\r\n    function f() public returns (string) {\r\n        return \"method f()\";\r\n    }\r\n\r\n    function g() public returns (string) {\r\n        return \"method g()\";\r\n    }\r\n}",
  "sourcePath": "F:\\Ethereum Smart contract\\smart-contract-tutorial\\contracts\\Test.sol",
  "ast": {
    "absolutePath": "/F/Ethereum Smart contract/smart-contract-tutorial/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        18
      ]
    },
    "id": 19,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 18,
        "linearizedBaseContracts": [
          18
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8,
              "nodeType": "Block",
              "src": "87:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "6d6574686f6420662829",
                    "id": 6,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "105:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_3ce86443ed854002c818584751adeb2963f2de447a5441d9674c19e17dd6b2ec",
                      "typeString": "literal_string \"method f()\""
                    },
                    "value": "method f()"
                  },
                  "functionReturnParameters": 5,
                  "id": 7,
                  "nodeType": "Return",
                  "src": "98:19:0"
                }
              ]
            },
            "id": 9,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "f",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "60:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9,
                  "src": "79:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "79:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "78:8:0"
            },
            "scope": 18,
            "src": "50:75:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16,
              "nodeType": "Block",
              "src": "170:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "6d6574686f6420672829",
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "188:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_7e7c528d7cb6d150c5f3f3c63e4be365b456628acdc587e433fa35bbd144eb45",
                      "typeString": "literal_string \"method g()\""
                    },
                    "value": "method g()"
                  },
                  "functionReturnParameters": 13,
                  "id": 15,
                  "nodeType": "Return",
                  "src": "181:19:0"
                }
              ]
            },
            "id": 17,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "g",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "143:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 13,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "162:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "162:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "161:8:0"
            },
            "scope": 18,
            "src": "133:75:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 19,
        "src": "28:183:0"
      }
    ],
    "src": "0:211:0"
  },
  "legacyAST": {
    "absolutePath": "/F/Ethereum Smart contract/smart-contract-tutorial/contracts/Test.sol",
    "exportedSymbols": {
      "Test": [
        18
      ]
    },
    "id": 19,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 18,
        "linearizedBaseContracts": [
          18
        ],
        "name": "Test",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8,
              "nodeType": "Block",
              "src": "87:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "6d6574686f6420662829",
                    "id": 6,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "105:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_3ce86443ed854002c818584751adeb2963f2de447a5441d9674c19e17dd6b2ec",
                      "typeString": "literal_string \"method f()\""
                    },
                    "value": "method f()"
                  },
                  "functionReturnParameters": 5,
                  "id": 7,
                  "nodeType": "Return",
                  "src": "98:19:0"
                }
              ]
            },
            "id": 9,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "f",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "60:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9,
                  "src": "79:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 3,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "79:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "78:8:0"
            },
            "scope": 18,
            "src": "50:75:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16,
              "nodeType": "Block",
              "src": "170:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "6d6574686f6420672829",
                    "id": 14,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "188:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_7e7c528d7cb6d150c5f3f3c63e4be365b456628acdc587e433fa35bbd144eb45",
                      "typeString": "literal_string \"method g()\""
                    },
                    "value": "method g()"
                  },
                  "functionReturnParameters": 13,
                  "id": 15,
                  "nodeType": "Return",
                  "src": "181:19:0"
                }
              ]
            },
            "id": 17,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "g",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "143:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 13,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17,
                  "src": "162:6:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 11,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "162:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "161:8:0"
            },
            "scope": 18,
            "src": "133:75:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 19,
        "src": "28:183:0"
      }
    ],
    "src": "0:211:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.19+commit.c4cbbb05.Emscripten.clang"
  },
  "networks": {
    "1521972264934": {
      "events": {},
      "links": {},
      "address": "0x81982eab285f011c0415da75748fe7e4d6760d61",
      "transactionHash": "0x5ac604496c04a455558bf1df9dc902dfad3b293a0b132cb49adf9db96702087f"
    }
  },
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-03-25T10:43:54.371Z"
});

Test.setProvider(provider);

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，查看自己的客户端启动时，观察打印到控制台的地址
Test.defaults({
  from : "0x83155b29b8eac18aea4fd3a27418b9cb2a9f246f"
});

console.log('233')
console.log(provider.sendAsync, 'provider')
console.log()
// console.log(Test, 'Test')
console.log(Test.deployed, 'deployed')
var instance;
Test.deployed().then(inst => { instance = inst }).catch(function(ins){console.log('ffffffffffff');console.log(ins)});
// Test.deployed().then(function(contractInstance) {
//   instance = contractInstance;
//   console.log(contractInstance, 'contractInstance')
//   // return instance.f.call();
// }).then(function(result){
//   console.log(result, 'result');
//   // return instance.g.call();
// }).then(function(result){
//   console.log(result);
// });