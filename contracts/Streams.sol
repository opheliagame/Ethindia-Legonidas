pragma solidity >= 0.5.0;

contract Streams {
    uint256 public balance;

    //unique user id
    uint256 public uuid;

    //mapping of uuid to Person object
    mapping(uint256 => Person) public people;

    //struct representing a Person object
    struct Person {
        address payable personAddress;
        string name;
        string[] skills;
        uint8 rating;
    }

    //unique skill request id
    uint256 public skillRequestId;

    //mapping of skillRequestId to SkillRequest object
    mapping(uint256 => SkillRequest) public skillRequests;

    // ! TODO rename to MentorRequest
    //a bounty created by a consumer on the platform
    struct SkillRequest {
        string skill;
        string description;
        uint256 pricePerHour;
        uint256 maxTimeLimit;
        uint256 creatorId;
    }

    // unique stream ids
    uint256 public streamId;

    // mapping of streamId to Stream object
    mapping(uint256 => Stream) public streams;

    /**
    People in theory won't be able to misuse the platform cuz ETH is never credited back to them. So a mentee with malicious intent has no benefit from withholding completion
     */

    //struct representing a Stream on the platform
    struct Stream {
        uint256 mentorId;
        uint256 menteeId;
        uint256 requestId;
        uint256 pricePerHour;
        uint256 maxTimeLimit;
        uint256 withdrawTime;
        bool isCompleted;
    }

    //event emitted when a new skill request is made
    event NewSkillRequest (
        uint256 indexed bountyId
    );

    event NewPerson (
        uint256 indexed personId
    );

    event NewStream (
        uint256 indexed newStreamId
    );

    // ! TODO augment to integrate skills
    function createNewPerson(string memory _name, string memory _skill1, string memory _skill2, string memory _skill3) public {
        Person memory newPerson = Person({
            personAddress: msg.sender,
            name: _name,
            skills: new string[](3),
            rating: uint8(3)
        });

        newPerson.skills[0] = _skill1;
        newPerson.skills[1] = _skill2;
        newPerson.skills[2] = _skill3;

        people[uuid] = newPerson;

        emit NewPerson(uuid++);
    }

    //function for creating a skill request on the network
    function createSkillRequest(string memory _skill, string memory _description, uint256 _pricePerHour, uint256 _maxTimeLimit, uint256 _creatorId) public payable {

        //verify that requester has enough eth
        uint256 cost = _pricePerHour * _maxTimeLimit;
        // ! TODO see if you can optimise this computation or get it off the chain
        // uint256 minValue = cost + (( 100 * cost ) / 1000);
        uint256 minValue = cost + ((51 * cost) / 100);
        require(
            // our cut - 1%, collateral - 50%
            msg.value >= minValue,
            "Please check if sufficient funds are being locked"
        );

        //creating a bounty object
        SkillRequest memory skillRequest = SkillRequest({
            skill: _skill,
            description: _description,
            pricePerHour: _pricePerHour,
            maxTimeLimit: _maxTimeLimit,
            creatorId: _creatorId
        });

        //persist Bounty to the blockchain
        skillRequests[skillRequestId] = skillRequest;

        //emit an event to notify the clients
        emit NewSkillRequest(skillRequestId++);
    }

    //function for accepting a bounty on the network
    function acceptSkillRequest(uint256 _skillRequestId, uint256 _mentorId) public {
        //retreiving skill request object from the blockchain
        SkillRequest storage skillRequest = skillRequests[_skillRequestId];
        uint256 _menteeId = skillRequest.creatorId;

        uint256 _pricePerHour = skillRequest.pricePerHour;
        uint256 _maxTimeLimit = skillRequest.maxTimeLimit;

        Stream memory newStream = Stream({
            mentorId: _mentorId,
            menteeId: _menteeId,
            requestId: _skillRequestId,
            pricePerHour: _pricePerHour,
            maxTimeLimit: _maxTimeLimit,
            // set the time after which the withdrawal of the fees is valid
            // ! TODO Uncomment this
            withdrawTime: now + _maxTimeLimit * 3600,
            //withdrawTime: now + _maxTimeLimit * 2,
            isCompleted: false
        });

        // persist stream to blockchain
        streams[streamId] = newStream;

        emit NewStream(streamId++);
    }

    function completeStream(uint256 _streamId) public {
        // make sure that enough time has passed before the funds are debited
        Stream storage stream = streams[_streamId];
        require(
            // the time NOW should occur AFTER the withdrawTime
            stream.withdrawTime < now,
            "Cannot withdraw before stream ends"
        );
        // ! TODO unomment this code
        // make sure that his hasn't been marked as completed before
        // require(
        //     stream.isCompleted == false,
        //     "This transaction has already been completed"
        // );
        streams[_streamId].isCompleted = true;
        uint256 _mentorId = stream.mentorId;
        address payable _mentorAddress = people[_mentorId].personAddress;

        uint256 cost = stream.maxTimeLimit * stream.pricePerHour;

        _mentorAddress.transfer(cost);
    }

    function completeStreamWithCollateralPayout(uint256 _streamId) public {
        Stream storage stream = streams[_streamId];
        require(
            // the time NOW should occur AFTER the withdrawTime
            stream.withdrawTime < now,
            "Cannot withdraw before stream ends"
        );
        // ! TODO uncomment this code
        // make sure that his hasn't been marked as completed before
        // require(
        //     stream.isCompleted == false,
        //     "This transaction has already been completed"
        // );

        streams[_streamId].isCompleted = true;
        uint256 _mentorId = stream.mentorId;
        uint256 _menteeId = stream.menteeId;
        address payable _mentorAddress = people[_mentorId].personAddress;
        address payable _menteeAddress = people[_menteeId].personAddress;

        uint256 cost = stream.maxTimeLimit * stream.pricePerHour;

        _mentorAddress.transfer(cost);
        _menteeAddress.transfer(cost / 2);
    }

    function faucet(address payable target) public {
        balance = address(this).balance;
        target.transfer(10 ether);
    }

    function () external payable {}
}

/**
Notes:
1. Maybe an event for when a stream ends
2. Uncomment the one withdrawal only check
 */