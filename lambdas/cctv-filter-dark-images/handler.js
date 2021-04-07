'use strict';
const { S3 } = require('aws-sdk')
const { isDark } = require('./isDark')
const s3 = new S3()

module.exports.hello = async (event) => {
  try {
    const params = getParams(event)
    if (!params.Key.includes('jpg')) {
      throw new Error(`${params.Key} is not an image`)
    }
    const object = await s3.getObject(params).promise();
    const imageColour = isDark(object.Body)? 'dark' : 'light'
    console.log(`${object.Key} is a ${imageColour} image`)
    return imageColour
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getParams = (event) => {
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  return {
    Bucket: bucket,
    Key: key,
  };

}



  // console.log(JSON.stringify(event))
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// }// ;
