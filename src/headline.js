var axois = require('axios')
var cheerio = require('cheerio');

module.exports = async function(url){
    const response = await axois.get(url);
    const $ = cheerio.load(response.data);
    var result = $('h1').text();
    return result
}
