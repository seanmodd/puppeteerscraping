const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1TpfBeLwYOUBOquVIl7ih40zZtm5RlYZc0xEpMJFRIiI');
  }
  async load() {
    await this.doc.useServiceAccountAuth(require('./credentials.json'));
    await this.doc.loadInfo(); // loads document properties and worksheets
  }
  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows);
  }
}


// Below is a test of the sheet.js file
// (async function() {

//   const sheet = new Sheet()
//   await sheet.load()
//   await sheet.addRows([
//     {title: "Software Engineer", location: "San Francisco, CA 94111"},
//     {title: "Banker", location: "New York, NY 11111"}
//   ])
  
// })()
