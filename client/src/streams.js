import web3 from './utils/getWeb3';

const address = '0xE72b81a91b0eF234C9Ff0b49e58451C411c36Cc5';

const abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "streams",
      "outputs": [
        {
          "name": "mentorId",
          "type": "uint256"
        },
        {
          "name": "menteeId",
          "type": "uint256"
        },
        {
          "name": "requestId",
          "type": "uint256"
        },
        {
          "name": "pricePerHour",
          "type": "uint256"
        },
        {
          "name": "maxTimeLimit",
          "type": "uint256"
        },
        {
          "name": "withdrawTime",
          "type": "uint256"
        },
        {
          "name": "isCompleted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
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
          "name": "skill",
          "type": "string"
        },
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
        },
        {
          "name": "creatorId",
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
          "name": "personAddress",
          "type": "address"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "rating",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "balance",
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
      "constant": true,
      "inputs": [],
      "name": "streamId",
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
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "personId",
          "type": "uint256"
        }
      ],
      "name": "NewPerson",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "newStreamId",
          "type": "uint256"
        }
      ],
      "name": "NewStream",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "createNewPerson",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_skill",
          "type": "string"
        },
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
        },
        {
          "name": "_creatorId",
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
        },
        {
          "name": "_mentorId",
          "type": "uint256"
        }
      ],
      "name": "acceptSkillRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_streamId",
          "type": "uint256"
        }
      ],
      "name": "completeStream",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_streamId",
          "type": "uint256"
        }
      ],
      "name": "completeStreamWithCollateralPayout",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "target",
          "type": "address"
        }
      ],
      "name": "faucet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

export default new web3.eth.Contract(abi, address);
