const Streams = artifacts.require('../contracts/Streams.sol');

contract('Streams', async accounts => {
  let streamsInstance;

  const account0 = accounts[0];
  const account1 = accounts[1];
  console.log(accounts[0]);

  const pph = 1e14;

  const value = pph + pph * 0.51;

  it('initializes', async () => {
    streamsInstance = await Streams.deployed();
  });

  // it('logs the balance of the test accounts', async () => {
  //   const b1 = await web3.eth.getBalance(account0);
  //   const b2 = await web3.eth.getBalance(account1);
  //   console.log(b1);
  //   console.log(b2);
  // });

  it('creates 2 new people', async () => {
    try {
      await streamsInstance.createNewPerson('ajmal', {
        from: account0
      });
      await streamsInstance.createNewPerson('madhav', {
        from: account1
      });
      const acc0 = await streamsInstance.people(0);
      const acc1 = await streamsInstance.people(1);
      assert.equal(acc0['name'], 'ajmal', 'Account 1 isn\'t working');
      assert.equal(acc1['name'], 'madhav', 'Account 1 isn\'t working');
    } catch (err) {
      throw err;
    }
  });

  it('makes a new skill request', async () => {
    try {
      await streamsInstance.createSkillRequest('coding', 'code', pph, 1, 0, {
        from: account0,
        value
      });
      const skill = await streamsInstance.skillRequests(0);
      assert.equal(skill['skill'], 'coding', 'skill field is inconsistent');
      assert.equal(skill['description'], 'code', 'description field is inconsistent');
      assert.equal(skill['pricePerHour'], pph, 'pph field is inconsistent');
      assert.equal(skill['maxTimeLimit'], 1, 'mtl field is inconsistent');
      assert.equal(skill['creatorId'], 0, 'creatorId field is inconsistent');
    } catch (err) {
      throw err;
    }
  });

  it('accepts a skill request', async () => {
    try {
      const now = new Date().getTime();
      const withdrawTime = now + 1 * 86400;
      await streamsInstance.acceptSkillRequest(0, 1, {
        'from': account1
      });
      const stream = await streamsInstance.streams(0);
      assert.equal(stream['mentorId'], 1, 'mentorId field is inconsistent');
      assert.equal(stream['menteeId'], 0, 'menteeId field is inconsistent');
      assert.equal(stream['requestId'], 0, 'requestId field is inconsistent');
      assert.equal(stream['pricePerHour'], pph, 'pph field is inconsistent');
      assert.equal(stream['maxTimeLimit'], 1, 'mentorId field is inconsistent');
      // ! TODO fix this test case
      // console.log(stream['withdrawTime']);
      // assert.isAbove(parseInt(stream['withdrawTime'], 16), withdrawTime, 'withdrawId field is inconsistent');
      assert.equal(stream['isCompleted'], false, 'isCompleted field is inconsistent');
    } catch(err) {
      throw err;
    }
  });

  it('fails when one tries to withdraw funds before the withdrawTime has elapsed', async () => {
    try {
      await streamsInstance.completeStream(0, {
        from: account1
      });
      assert.fail('The completeStream call worked :(');
    } catch (err) {
      assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert Cannot withdraw before stream ends -- Reason given: Cannot withdraw before stream ends.');
    }
  });

  it('completes a stream when the appropriate amount of time has passed', async () => {
    try {
      // ? TODO check this
      var wait = ms => new Promise((r) => setTimeout(r, ms))
      await streamsInstance.createSkillRequest('test2', 'test2-desc', pph, 1, 0, {
        from: account0,
        value
      });
      await streamsInstance.acceptSkillRequest(1, 1, {
        from: account1
      });
      await wait(3000);
      await streamsInstance.completeStream(1, {
        from: account1
      });
    } catch (err) {
      throw err;
    }
  });

  it('fails to allow a person to withdraw his/her fees twice', async () => {
    try {
      await streamsInstance.completeStream(1, {
        from: account1
      });
      assert.fail('The completeStream function call executed! :(');
    } catch (err) {
      assert.equal(err.message, 'Returned error: VM Exception while processing transaction: revert This transaction has already been completed -- Reason given: This transaction has already been completed.', 'Incorrect error');
    }
  });

  it('returns the collateral when the corresponding function is invoked', async () => {
    try {
      const wait = ms => new Promise((r) => setTimeout(r, ms));
      const ib0 = await web3.eth.getBalance(account0);
      const ib1 = await web3.eth.getBalance(account1);
      await streamsInstance.createSkillRequest('test3', 'test3-desc', pph, 1, 0, {
        from: account0,
        value
      });
      await streamsInstance.acceptSkillRequest(2, 1, {
        'from': account1
      });
      await wait(3000);
      await streamsInstance.completeStreamWithCollateralPayout(2, {
        from: account1
      });
      const fb0 = await web3.eth.getBalance(account0);
      const fb1 = await web3.eth.getBalance(account1);
      console.log(`Account 0 (mentee) - Initial ${ib0} to final ${fb0}`);
      console.log(`Account 1 (mentor) - Initial ${ib1} to final ${fb1}`);
    } catch (err) {
      throw err;
    }
  });
});