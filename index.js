const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {

  let htmlString = "<ol> <b>testfargate</b>";
  const AWS = require("aws-sdk")
//   var s3 = new AWS.S3({apiVersion: '2006-03-01',accessKeyId:"AKIAXOCGFUCAMJUO5IV4",secretAccessKey:"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"});

//   s3.listObjects({Bucket: "simplesb"}, function(err, data) {
//     if (err) {
//       console.log(err, err.stack);
//       res.send(err);
//     }
//     else {
//             for(var data of data.Contents)              
//                 htmlString += `<li>${data.Key}</li>`;
//             htmlString+="</ol>";
//             console.log(htmlString);
//         }
//     res.send(htmlString);
//   });
  res.send("Hello");

})

let server = app.listen(port, "0.0.0.0",() => {
  console.log(`Example app listening at http://${server.address().address}:${port}`);
})



