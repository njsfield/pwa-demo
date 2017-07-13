/* Mock Data Store */
class MockDB {
  // On initialise, generate data with user
  // specified number of records
  // set default to 10
  constructor(count = 10) {
    this.data = this.generateInitialData(count);
  }
  // Generate Random Num-String Array
  randomNumStringArray() {
    return ['', '', '', '']
      .map(x => Math.random() * 2000)
      .map(Math.floor)
      .map(x => x.toString());
  }
  // Generate array of (count) randomNumStringArrays
  generateInitialData(count) {
    return Array
      .apply(null, {length: count})
      .map(this.randomNumStringArray)
  }
  // Push new random stringy array
  // Delete first
  updateData() {
    this.data = this.data
      .concat([this.randomNumStringArray()])
      .slice(1)
  }
  // Get latest
  getLatest() {
    // (update first)
    this.updateData();
    return this.data[this.data.length - 1]
  }
  // Get oldest
  getOldest() {
    return this.data[0]
  }
  // Dummy authentication
  authenticate({user, password}){
    return user && password;
  }
}

module.exports = new MockDB();
