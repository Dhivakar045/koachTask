// s3Service.js
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: 'us-west-2', // e.g., 'us-west-2'
  accessKeyId: 'key',
  secretAccessKey: 'accesskey'
});

const s3 = new AWS.S3();
const BUCKET_NAME = 'Example';

// Function to store JSON data in S3
async function storeData(data) {
  const params = {
    Bucket: BUCKET_NAME,
    Key: `${Date.now()}.json`,
    Body: JSON.stringify(data),
    ContentType: 'application/json'
  };

  const result = await s3.upload(params).promise();
  return {
    e_tag: result.ETag,
    url: result.Location
  };
}

// Function to retrieve all JSON data from S3
async function retrieveData() {
  const params = {
    Bucket: BUCKET_NAME
  };

  const dataList = [];
  const objects = await s3.listObjectsV2(params).promise();

  for (const obj of objects.Contents) {
    const objectData = await s3.getObject({
      Bucket: BUCKET_NAME,
      Key: obj.Key
    }).promise();
    dataList.push(JSON.parse(objectData.Body.toString()));
  }

  return dataList;
}

module.exports = {
  storeData,
  retrieveData
};
