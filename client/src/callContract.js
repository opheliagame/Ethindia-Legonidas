import web3 from './web3';


const address = '0xbFBB116A5F6C12F62d8582209AFf79Fbc15cb535';

const abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "skillRequestId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "skillRequests",
      "outputs": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "pricePerHour",
          "type": "uint256"
        },
        {
          "name": "maxTimeLimit",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "uuid",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "bountyId",
          "type": "uint256"
        }
      ],
      "name": "NewSkillRequest",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_pricePerHour",
          "type": "uint256"
        },
        {
          "name": "_maxTimeLimit",
          "type": "uint256"
        }
      ],
      "name": "createSkillRequest",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_skillRequestId",
          "type": "uint256"
        }
      ],
      "name": "acceptSkillRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"skillRequestId\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"skillRequests\",\"outputs\":[{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"pricePerHour\",\"type\":\"uint256\"},{\"name\":\"maxTimeLimit\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_pricePerHour\",\"type\":\"uint256\"},{\"name\":\"_maxTimeLimit\",\"type\":\"uint256\"}],\"name\":\"createSkillRequest\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"people\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_skillRequestId\",\"type\":\"uint256\"}],\"name\":\"acceptSkillRequest\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"uuid\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"bountyId\",\"type\":\"uint256\"}],\"name\":\"NewSkillRequest\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/anushka/Hackathon/Ethindia-Legonidas/contracts/Streams.sol\":\"Streams\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/anushka/Hackathon/Ethindia-Legonidas/contracts/Streams.sol\":{\"keccak256\":\"0x822512b098de5a1fff5672b81a0e6f7f82b5bd26632686e3d775852d7adecdd0\",\"urls\":[\"bzzr://1247708b796d37b360a48e0be73fd01d1a47ef3269aa3c5ee3846e530151232a\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506106ff806100206000396000f3fe6080604052600436106100555760003560e01c8063702a971b1461005a57806374b5bf8e146100855780639bd42b7d146101475780639e7a13ad14610216578063ac5de74a146102ca578063bb07e85d14610305575b600080fd5b34801561006657600080fd5b5061006f610330565b6040518082815260200191505060405180910390f35b34801561009157600080fd5b506100be600480360360208110156100a857600080fd5b8101908080359060200190929190505050610336565b6040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561010a5780820151818401526020810190506100ef565b50505050905090810190601f1680156101375780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6102146004803603606081101561015d57600080fd5b810190808035906020019064010000000081111561017a57600080fd5b82018360208201111561018c57600080fd5b803590602001918460018302840111640100000000831117156101ae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291905050506103f8565b005b34801561022257600080fd5b5061024f6004803603602081101561023957600080fd5b8101908080359060200190929190505050610504565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028f578082015181840152602081019050610274565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102d657600080fd5b50610303600480360360208110156102ed57600080fd5b81019080803590602001909291905050506105ba565b005b34801561031157600080fd5b5061031a6105d5565b6040518082815260200191505060405180910390f35b60025481565b6003602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b5050505050908060010154908060020154905083565b8082023414610452576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806106a26032913960400191505060405180910390fd5b61045a6105db565b60405180606001604052808581526020018481526020018381525090508060036000600254815260200190815260200160002060008201518160000190805190602001906104a99291906105fc565b50602082015181600101556040820151816002015590505060026000815480929190600101919050557f491ac035c198a1d7ed99c004eaf061f1098e73ac77e28ceb404fa12b9f69e2b360405160405180910390a250505050565b6001602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b05780601f10610585576101008083540402835291602001916105b0565b820191906000526020600020905b81548152906001019060200180831161059357829003601f168201915b5050505050905081565b60006003600083815260200190815260200160002090505050565b60005481565b60405180606001604052806060815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063d57805160ff191683800117855561066b565b8280016001018555821561066b579182015b8281111561066a57825182559160200191906001019061064f565b5b509050610678919061067c565b5090565b61069e91905b8082111561069a576000816000905550600101610682565b5090565b9056fe506c6561736520636865636b2069662073756666696369656e742066756e647320617265206265696e67206c6f636b65642ea165627a7a723058205b1df28e3a5189f4a8205b2d51bda26e8a85f5f07db270ae1b6909d6448c2e320029",
  "deployedBytecode": "0x6080604052600436106100555760003560e01c8063702a971b1461005a57806374b5bf8e146100855780639bd42b7d146101475780639e7a13ad14610216578063ac5de74a146102ca578063bb07e85d14610305575b600080fd5b34801561006657600080fd5b5061006f610330565b6040518082815260200191505060405180910390f35b34801561009157600080fd5b506100be600480360360208110156100a857600080fd5b8101908080359060200190929190505050610336565b6040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561010a5780820151818401526020810190506100ef565b50505050905090810190601f1680156101375780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6102146004803603606081101561015d57600080fd5b810190808035906020019064010000000081111561017a57600080fd5b82018360208201111561018c57600080fd5b803590602001918460018302840111640100000000831117156101ae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803590602001909291905050506103f8565b005b34801561022257600080fd5b5061024f6004803603602081101561023957600080fd5b8101908080359060200190929190505050610504565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028f578082015181840152602081019050610274565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102d657600080fd5b50610303600480360360208110156102ed57600080fd5b81019080803590602001909291905050506105ba565b005b34801561031157600080fd5b5061031a6105d5565b6040518082815260200191505060405180910390f35b60025481565b6003602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b5050505050908060010154908060020154905083565b8082023414610452576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806106a26032913960400191505060405180910390fd5b61045a6105db565b60405180606001604052808581526020018481526020018381525090508060036000600254815260200190815260200160002060008201518160000190805190602001906104a99291906105fc565b50602082015181600101556040820151816002015590505060026000815480929190600101919050557f491ac035c198a1d7ed99c004eaf061f1098e73ac77e28ceb404fa12b9f69e2b360405160405180910390a250505050565b6001602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b05780601f10610585576101008083540402835291602001916105b0565b820191906000526020600020905b81548152906001019060200180831161059357829003601f168201915b5050505050905081565b60006003600083815260200190815260200160002090505050565b60005481565b60405180606001604052806060815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061063d57805160ff191683800117855561066b565b8280016001018555821561066b579182015b8281111561066a57825182559160200191906001019061064f565b5b509050610678919061067c565b5090565b61069e91905b8082111561069a576000816000905550600101610682565b5090565b9056fe506c6561736520636865636b2069662073756666696369656e742066756e647320617265206265696e67206c6f636b65642ea165627a7a723058205b1df28e3a5189f4a8205b2d51bda26e8a85f5f07db270ae1b6909d6448c2e320029",
  "sourceMap": "34:2040:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34:2040:2;;;;;;;",
  "deployedSourceMap": "34:2040:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;335:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;335:29:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;426:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;426:53:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;426:53:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;426:53:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1035:756;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1035:756:2;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1035:756:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1035:756:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1035:756:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1035:756:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;143:40;;8:9:-1;5:2;;;30:1;27;20:12;5:2;143:40:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;143:40:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;143:40:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1857:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1857:209:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1857:209:2;;;;;;;;;;;;;;;;;:::i;:::-;;78:19;;8:9:-1;5:2;;;30:1;27;20:12;5:2;78:19:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;335:29;;;;:::o;426:53::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1035:756::-;1267:13;1251;:29;1238:9;:42;1217:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:32;;:::i;:::-;1445:146;;;;;;;;1485:12;1445:146;;;;1526:13;1445:146;;;;1567:13;1445:146;;;1410:181;;1677:12;1645:13;:29;1659:14;;1645:29;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1767:14;;:16;;;;;;;;;;;;1751:33;;;;;;;;;;1035:756;;;;:::o;143:40::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1857:209::-;1989:33;2025:13;:30;2039:15;2025:30;;;;;;;;;;;1989:66;;1857:209;;:::o;78:19::-;;;;:::o;34:2040::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity >=0.4.21 <0.6.0;\n\ncontract Streams {\n    //unique user id\n    uint256 public uuid;\n\n    //mapping of uuid to Person object\n    mapping(uint256 => Person) public people;\n\n    //struct representing a Person object\n    struct Person {\n        string name;\n        string[] skills;\n    }\n\n    //unique skill request id\n    uint256 public skillRequestId;\n\n    //mapping of skillRequestId to SkillRequest object\n    mapping(uint256 => SkillRequest) public skillRequests;\n\n    //a bounty created by a consumer on the platform\n    struct SkillRequest {\n        string description;\n        uint256 pricePerHour;\n        uint256 maxTimeLimit;\n    }\n\n\n\n    //struct representing a Stream on the platform\n    struct Stream {\n        Person consumer;\n        Person provider;\n        uint256 pricePerHour;\n        uint256 maxTimeLimit;\n    } \n\n    //event emitted when a new skill request is made\n    event NewSkillRequest (\n        uint256 indexed bountyId\n    );\n\n\n\n\n    //function for creating a skill request on the network\n    function createSkillRequest(string memory _description, uint256 _pricePerHour, uint256 _maxTimeLimit) public payable{\n        \n        //verify that requester has enough eth\n        require(\n            msg.value == _pricePerHour * _maxTimeLimit,\n            \"Please check if sufficient funds are being locked.\"\n        );\n        \n        //creating a bounty object\n        SkillRequest memory skillRequest = SkillRequest({\n            description: _description, \n            pricePerHour: _pricePerHour,\n            maxTimeLimit: _maxTimeLimit\n        });\n\n        //persist Bounty to the blockchain\n        skillRequests[skillRequestId] = skillRequest;\n\n        //emit an event to notify the clients\n        emit NewSkillRequest(skillRequestId++);\n    }\n\n    \n\n\n    //function for accepting a bounty on the network\n    function acceptSkillRequest(uint256 _skillRequestId) public {\n        //retreiving skill request object from the blockchain\n        SkillRequest storage skillRequest = skillRequests[_skillRequestId];\n\n\n\n\n    }\n    \n\n}",
  "sourcePath": "/home/anushka/Hackathon/Ethindia-Legonidas/contracts/Streams.sol",
  "ast": {
    "absolutePath": "/home/anushka/Hackathon/Ethindia-Legonidas/contracts/Streams.sol",
    "exportedSymbols": {
      "Streams": [
        171
      ]
    },
    "id": 172,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 81,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 171,
        "linearizedBaseContracts": [
          171
        ],
        "name": "Streams",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 83,
            "name": "uuid",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "78:19:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 82,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "78:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 87,
            "name": "people",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "143:40:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Person_$93_storage_$",
              "typeString": "mapping(uint256 => struct Streams.Person)"
            },
            "typeName": {
              "id": 86,
              "keyType": {
                "id": 84,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "151:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "143:26:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Person_$93_storage_$",
                "typeString": "mapping(uint256 => struct Streams.Person)"
              },
              "valueType": {
                "contractScope": null,
                "id": 85,
                "name": "Person",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 93,
                "src": "162:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.Person",
            "id": 93,
            "members": [
              {
                "constant": false,
                "id": 89,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 93,
                "src": "256:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 88,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "256:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 92,
                "name": "skills",
                "nodeType": "VariableDeclaration",
                "scope": 93,
                "src": "277:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 90,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 91,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "277:8:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Person",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "232:67:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 95,
            "name": "skillRequestId",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "335:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 94,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "335:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 99,
            "name": "skillRequests",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "426:53:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
              "typeString": "mapping(uint256 => struct Streams.SkillRequest)"
            },
            "typeName": {
              "id": 98,
              "keyType": {
                "id": 96,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "434:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "426:32:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                "typeString": "mapping(uint256 => struct Streams.SkillRequest)"
              },
              "valueType": {
                "contractScope": null,
                "id": 97,
                "name": "SkillRequest",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 106,
                "src": "445:12:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                  "typeString": "struct Streams.SkillRequest"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.SkillRequest",
            "id": 106,
            "members": [
              {
                "constant": false,
                "id": 101,
                "name": "description",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "569:18:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 100,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "569:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 103,
                "name": "pricePerHour",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "597:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 102,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "597:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 105,
                "name": "maxTimeLimit",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "627:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 104,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "627:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SkillRequest",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "539:115:2",
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.Stream",
            "id": 115,
            "members": [
              {
                "constant": false,
                "id": 108,
                "name": "consumer",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "737:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 107,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 93,
                  "src": "737:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                    "typeString": "struct Streams.Person"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 110,
                "name": "provider",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "762:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 109,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 93,
                  "src": "762:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                    "typeString": "struct Streams.Person"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 112,
                "name": "pricePerHour",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "787:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 111,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "787:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 114,
                "name": "maxTimeLimit",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "817:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 113,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "817:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Stream",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "713:131:2",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 119,
            "name": "NewSkillRequest",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "indexed": true,
                  "name": "bountyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "936:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "936:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "926:40:2"
            },
            "src": "904:63:2"
          },
          {
            "body": {
              "id": 157,
              "nodeType": "Block",
              "src": "1151:640:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 129,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "1238:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1238:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "_pricePerHour",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 123,
                            "src": "1251:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "_maxTimeLimit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "1267:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1251:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1238:42:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6561736520636865636b2069662073756666696369656e742066756e647320617265206265696e67206c6f636b65642e",
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1294:52:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4b89ab0fa9a862500fab9048d7fb68d20db9a68a8bbb215a31c8deb9de062487",
                          "typeString": "literal_string \"Please check if sufficient funds are being locked.\""
                        },
                        "value": "Please check if sufficient funds are being locked."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4b89ab0fa9a862500fab9048d7fb68d20db9a68a8bbb215a31c8deb9de062487",
                          "typeString": "literal_string \"Please check if sufficient funds are being locked.\""
                        }
                      ],
                      "id": 128,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        189,
                        190
                      ],
                      "referencedDeclaration": 190,
                      "src": "1217:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1217:139:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1217:139:2"
                },
                {
                  "assignments": [
                    139
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 139,
                      "name": "skillRequest",
                      "nodeType": "VariableDeclaration",
                      "scope": 157,
                      "src": "1410:32:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_memory_ptr",
                        "typeString": "struct Streams.SkillRequest"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 138,
                        "name": "SkillRequest",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 106,
                        "src": "1410:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                          "typeString": "struct Streams.SkillRequest"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 145,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 141,
                        "name": "_description",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1485:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 142,
                        "name": "_pricePerHour",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1526:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 143,
                        "name": "_maxTimeLimit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1567:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 140,
                      "name": "SkillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "1445:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_SkillRequest_$106_storage_ptr_$",
                        "typeString": "type(struct Streams.SkillRequest storage pointer)"
                      }
                    },
                    "id": 144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "description",
                      "pricePerHour",
                      "maxTimeLimit"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "1445:146:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_memory",
                      "typeString": "struct Streams.SkillRequest memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1410:181:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 146,
                        "name": "skillRequests",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "1645:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                          "typeString": "mapping(uint256 => struct Streams.SkillRequest storage ref)"
                        }
                      },
                      "id": 148,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "skillRequestId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1659:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1645:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                        "typeString": "struct Streams.SkillRequest storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 149,
                      "name": "skillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "1677:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_memory_ptr",
                        "typeString": "struct Streams.SkillRequest memory"
                      }
                    },
                    "src": "1645:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                      "typeString": "struct Streams.SkillRequest storage ref"
                    }
                  },
                  "id": 151,
                  "nodeType": "ExpressionStatement",
                  "src": "1645:44:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "1767:16:2",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "skillRequestId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "1767:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 152,
                      "name": "NewSkillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "1751:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1751:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 156,
                  "nodeType": "EmitStatement",
                  "src": "1746:38:2"
                }
              ]
            },
            "documentation": null,
            "id": 158,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createSkillRequest",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "name": "_description",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1063:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 123,
                  "name": "_pricePerHour",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1091:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 122,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1091:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125,
                  "name": "_maxTimeLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1114:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1114:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:74:2"
            },
            "returnParameters": {
              "id": 127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1151:0:2"
            },
            "scope": 171,
            "src": "1035:756:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 169,
              "nodeType": "Block",
              "src": "1917:149:2",
              "statements": [
                {
                  "assignments": [
                    164
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 164,
                      "name": "skillRequest",
                      "nodeType": "VariableDeclaration",
                      "scope": 169,
                      "src": "1989:33:2",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                        "typeString": "struct Streams.SkillRequest"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 163,
                        "name": "SkillRequest",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 106,
                        "src": "1989:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                          "typeString": "struct Streams.SkillRequest"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "skillRequests",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "2025:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                        "typeString": "mapping(uint256 => struct Streams.SkillRequest storage ref)"
                      }
                    },
                    "id": 167,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 166,
                      "name": "_skillRequestId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "2039:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2025:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                      "typeString": "struct Streams.SkillRequest storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1989:66:2"
                }
              ]
            },
            "documentation": null,
            "id": 170,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "acceptSkillRequest",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 160,
                  "name": "_skillRequestId",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "1885:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1884:25:2"
            },
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1917:0:2"
            },
            "scope": 171,
            "src": "1857:209:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 172,
        "src": "34:2040:2"
      }
    ],
    "src": "0:2074:2"
  },
  "legacyAST": {
    "absolutePath": "/home/anushka/Hackathon/Ethindia-Legonidas/contracts/Streams.sol",
    "exportedSymbols": {
      "Streams": [
        171
      ]
    },
    "id": 172,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 81,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".21",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 171,
        "linearizedBaseContracts": [
          171
        ],
        "name": "Streams",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 83,
            "name": "uuid",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "78:19:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 82,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "78:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 87,
            "name": "people",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "143:40:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Person_$93_storage_$",
              "typeString": "mapping(uint256 => struct Streams.Person)"
            },
            "typeName": {
              "id": 86,
              "keyType": {
                "id": 84,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "151:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "143:26:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Person_$93_storage_$",
                "typeString": "mapping(uint256 => struct Streams.Person)"
              },
              "valueType": {
                "contractScope": null,
                "id": 85,
                "name": "Person",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 93,
                "src": "162:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.Person",
            "id": 93,
            "members": [
              {
                "constant": false,
                "id": 89,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 93,
                "src": "256:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 88,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "256:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 92,
                "name": "skills",
                "nodeType": "VariableDeclaration",
                "scope": 93,
                "src": "277:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 90,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 91,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "277:8:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Person",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "232:67:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 95,
            "name": "skillRequestId",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "335:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 94,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "335:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 99,
            "name": "skillRequests",
            "nodeType": "VariableDeclaration",
            "scope": 171,
            "src": "426:53:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
              "typeString": "mapping(uint256 => struct Streams.SkillRequest)"
            },
            "typeName": {
              "id": 98,
              "keyType": {
                "id": 96,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "434:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "426:32:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                "typeString": "mapping(uint256 => struct Streams.SkillRequest)"
              },
              "valueType": {
                "contractScope": null,
                "id": 97,
                "name": "SkillRequest",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 106,
                "src": "445:12:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                  "typeString": "struct Streams.SkillRequest"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.SkillRequest",
            "id": 106,
            "members": [
              {
                "constant": false,
                "id": 101,
                "name": "description",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "569:18:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 100,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "569:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 103,
                "name": "pricePerHour",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "597:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 102,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "597:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 105,
                "name": "maxTimeLimit",
                "nodeType": "VariableDeclaration",
                "scope": 106,
                "src": "627:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 104,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "627:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "SkillRequest",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "539:115:2",
            "visibility": "public"
          },
          {
            "canonicalName": "Streams.Stream",
            "id": 115,
            "members": [
              {
                "constant": false,
                "id": 108,
                "name": "consumer",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "737:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 107,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 93,
                  "src": "737:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                    "typeString": "struct Streams.Person"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 110,
                "name": "provider",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "762:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                  "typeString": "struct Streams.Person"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 109,
                  "name": "Person",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 93,
                  "src": "762:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Person_$93_storage_ptr",
                    "typeString": "struct Streams.Person"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 112,
                "name": "pricePerHour",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "787:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 111,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "787:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 114,
                "name": "maxTimeLimit",
                "nodeType": "VariableDeclaration",
                "scope": 115,
                "src": "817:20:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 113,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "817:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Stream",
            "nodeType": "StructDefinition",
            "scope": 171,
            "src": "713:131:2",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 119,
            "name": "NewSkillRequest",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 117,
                  "indexed": true,
                  "name": "bountyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 119,
                  "src": "936:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 116,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "936:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "926:40:2"
            },
            "src": "904:63:2"
          },
          {
            "body": {
              "id": 157,
              "nodeType": "Block",
              "src": "1151:640:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 129,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "1238:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 130,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1238:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "_pricePerHour",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 123,
                            "src": "1251:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 132,
                            "name": "_maxTimeLimit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "1267:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1251:29:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1238:42:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6561736520636865636b2069662073756666696369656e742066756e647320617265206265696e67206c6f636b65642e",
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1294:52:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4b89ab0fa9a862500fab9048d7fb68d20db9a68a8bbb215a31c8deb9de062487",
                          "typeString": "literal_string \"Please check if sufficient funds are being locked.\""
                        },
                        "value": "Please check if sufficient funds are being locked."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4b89ab0fa9a862500fab9048d7fb68d20db9a68a8bbb215a31c8deb9de062487",
                          "typeString": "literal_string \"Please check if sufficient funds are being locked.\""
                        }
                      ],
                      "id": 128,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        189,
                        190
                      ],
                      "referencedDeclaration": 190,
                      "src": "1217:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1217:139:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "1217:139:2"
                },
                {
                  "assignments": [
                    139
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 139,
                      "name": "skillRequest",
                      "nodeType": "VariableDeclaration",
                      "scope": 157,
                      "src": "1410:32:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_memory_ptr",
                        "typeString": "struct Streams.SkillRequest"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 138,
                        "name": "SkillRequest",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 106,
                        "src": "1410:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                          "typeString": "struct Streams.SkillRequest"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 145,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 141,
                        "name": "_description",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 121,
                        "src": "1485:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 142,
                        "name": "_pricePerHour",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 123,
                        "src": "1526:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 143,
                        "name": "_maxTimeLimit",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 125,
                        "src": "1567:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 140,
                      "name": "SkillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "1445:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_SkillRequest_$106_storage_ptr_$",
                        "typeString": "type(struct Streams.SkillRequest storage pointer)"
                      }
                    },
                    "id": 144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [
                      "description",
                      "pricePerHour",
                      "maxTimeLimit"
                    ],
                    "nodeType": "FunctionCall",
                    "src": "1445:146:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_memory",
                      "typeString": "struct Streams.SkillRequest memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1410:181:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 150,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 146,
                        "name": "skillRequests",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 99,
                        "src": "1645:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                          "typeString": "mapping(uint256 => struct Streams.SkillRequest storage ref)"
                        }
                      },
                      "id": 148,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "skillRequestId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "1659:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1645:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                        "typeString": "struct Streams.SkillRequest storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 149,
                      "name": "skillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 139,
                      "src": "1677:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_memory_ptr",
                        "typeString": "struct Streams.SkillRequest memory"
                      }
                    },
                    "src": "1645:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                      "typeString": "struct Streams.SkillRequest storage ref"
                    }
                  },
                  "id": 151,
                  "nodeType": "ExpressionStatement",
                  "src": "1645:44:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "1767:16:2",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 153,
                          "name": "skillRequestId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "1767:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 152,
                      "name": "NewSkillRequest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 119,
                      "src": "1751:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1751:33:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 156,
                  "nodeType": "EmitStatement",
                  "src": "1746:38:2"
                }
              ]
            },
            "documentation": null,
            "id": 158,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createSkillRequest",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 121,
                  "name": "_description",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1063:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 123,
                  "name": "_pricePerHour",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1091:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 122,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1091:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 125,
                  "name": "_maxTimeLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "1114:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 124,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1114:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:74:2"
            },
            "returnParameters": {
              "id": 127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1151:0:2"
            },
            "scope": 171,
            "src": "1035:756:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 169,
              "nodeType": "Block",
              "src": "1917:149:2",
              "statements": [
                {
                  "assignments": [
                    164
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 164,
                      "name": "skillRequest",
                      "nodeType": "VariableDeclaration",
                      "scope": 169,
                      "src": "1989:33:2",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                        "typeString": "struct Streams.SkillRequest"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 163,
                        "name": "SkillRequest",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 106,
                        "src": "1989:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_SkillRequest_$106_storage_ptr",
                          "typeString": "struct Streams.SkillRequest"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 165,
                      "name": "skillRequests",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 99,
                      "src": "2025:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_SkillRequest_$106_storage_$",
                        "typeString": "mapping(uint256 => struct Streams.SkillRequest storage ref)"
                      }
                    },
                    "id": 167,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 166,
                      "name": "_skillRequestId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "2039:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2025:30:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SkillRequest_$106_storage",
                      "typeString": "struct Streams.SkillRequest storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1989:66:2"
                }
              ]
            },
            "documentation": null,
            "id": 170,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "acceptSkillRequest",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 160,
                  "name": "_skillRequestId",
                  "nodeType": "VariableDeclaration",
                  "scope": 170,
                  "src": "1885:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1885:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1884:25:2"
            },
            "returnParameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1917:0:2"
            },
            "scope": 171,
            "src": "1857:209:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 172,
        "src": "34:2040:2"
      }
    ];