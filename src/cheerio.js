var axois = require('axios')
var cheerio = require('cheerio');

module.exports = async function(url){
  const response = await axois.get(url);
  const $ = cheerio.load(response.data);
  var result = $('link[rel="shortcut icon"]').attr('href')
  if (!result){
    return "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png"
  }
  console.log("RESULT BEFORE IF STMT: ",result);
  if (result.charAt(0) == '/') {
      result = response.request._redirectable._options.protocol + '//' + response.request.socket.servername + result;
  }
  console.log("HOST_URL ",response.request.socket.servername);
  console.log('RESULT RETURNED: ',result)
  return result
}

// console.log("entering getFav, url is "+ url)
//     if (!error && response.statusCode == 200) {
//       const $ = cheerio.load(html);
//       var result = $('link').attr('rel', 'shortcut icon').attr('href');
//       if (result.charAt(0) == '/') {
//           result = response.request.uri.href + result.substr(1);
//       }
//       console.log("RESULT "+result)
//       return result || "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png"
//     }
//     console.log("FAILED")
//     return "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png";




// const getFav = (url) => {
//     var retVal;
//     request(url, function (error, response, html) {
//         alert("entered request");
//         if (!error && response.statusCode == 200) {
//         alert("entered if statement");
//         const $ = cheerio.load(html);
//         var result = $('link').attr('rel', 'shortcut icon').attr('href');
//         if (result.charAt(0) == '/') {
//             result = response.request.uri.href + result.substr(1);
//         }
//         retVal = result ? (result) : ("https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png");
//         }
//         alert('exiting getFav');
//         retVal = "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png";
//     });
//     return retVal;
// }  
// export default getFav;


// request(process.argv[2], function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//       const $ = cheerio.load(html);
//       var result = $('link').attr('rel', 'shortcut icon').attr('href');
//       if (result.charAt(0) == '/') {
//           result = response.request.uri.href + result.substr(1);
//       }
//       console.log(result);
//       return;
//     }
  
//     console.log('fail');
//   });

// var answer;
// request('https://google.com', function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//       const $ = cheerio.load(html);
//       var result = $('link').attr('rel', 'shortcut icon').attr('href');
//       if (result.charAt(0) == '/') {
//           result = response.request.uri.href + result.substr(1);
//       }
//       answer = result ? (result) : ("https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png");
//     }
  
//     answer = "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png";
//   });
// export default answer;