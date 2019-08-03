pragma solidity >=0.4.21 <0.6.0;

contract Streams {
    //unique user id
    uint256 public uuid;

    //mapping of uuid to Person object
    mapping(uint256 => Person) public people;

    //struct representing a Person object
    struct Person {
        string name;
        string[] skills;
    }

    //unique skill request id
    uint256 public skillRequestId;

    //mapping of skillRequestId to SkillRequest object
    mapping(uint256 => SkillRequest) public skillRequests;

    //a bounty created by a consumer on the platform
    struct SkillRequest {
        string description;
        uint256 pricePerHour;
        uint256 maxTimeLimit;
    }



    //struct representing a Stream on the platform
    struct Stream {
        Person consumer;
        Person provider;
        uint256 pricePerHour;
        uint256 maxTimeLimit;
    } 

    //event emitted when a new skill request is made
    event NewSkillRequest (
        uint256 indexed bountyId
    );




    //function for creating a skill request on the network
    function createSkillRequest(string memory _description, uint256 _pricePerHour, uint256 _maxTimeLimit) public payable{
        
        //verify that requester has enough eth
        require(
            msg.value == _pricePerHour * _maxTimeLimit,
            "Please check if sufficient funds are being locked."
        );
        
        //creating a bounty object
        SkillRequest memory skillRequest = SkillRequest({
            description: _description, 
            pricePerHour: _pricePerHour,
            maxTimeLimit: _maxTimeLimit
        });

        //persist Bounty to the blockchain
        skillRequests[skillRequestId] = skillRequest;

        //emit an event to notify the clients
        emit NewSkillRequest(skillRequestId++);
    }

    


    //function for accepting a bounty on the network
    function acceptSkillRequest(uint256 _skillRequestId) public {
        //retreiving skill request object from the blockchain
        SkillRequest storage skillRequest = skillRequests[_skillRequestId];




    }
    

}