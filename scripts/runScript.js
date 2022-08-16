const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

// 1) First upload the image
// const filePath = path.join(__dirname, '../assets/hugo.png');

// 2) Then upload metadata
const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);
