var request = require('request');

/**
 * Get lates currencies from open ex-chanfe Rates
 * pass appId and Callback
 * @param {*} appID  
 * @param {*} callback  
 * @returns 
 */
async function getLatestCurrencies(appId,alterntive=1, callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/latest.json?app_id=${appId}/only_alternative=${alterntive}`,
    'headers': {
    }
  };
  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}



/**
 * @description Get Bid_ask url 
 * @param {*} appId 
 * @param {*} callback 
 * @returns 
 */
async function getLatestCurrenciesWithBidAndAsk(appId,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/latest.json?app_id=${appId}/show_bid_ask=1`,
    'headers': {
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}

/**
 * @Description Get Currencies for spacefic One or array
 * @param {*} appId 
 * @param {*} symbols 
 * @param {*} callback 
 * @returns 
 */
async function getLatestCurrenciesForSymbols(appId,symbolsOrString,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/latest.json?app_id=${appId}&symbols=${symbolsOrString.toString()}`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}

/**
 * 
 * @param {*} appId 
 * @param {*} amount 
 * @param {*} from 
 * @param {*} to 
 * @param {*} callback 
 * @returns 
 */
async function convertCurrencies(appId,amount,from,to,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/convert/${amount}/${from}/${to}?app_id=${appId}`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}

/**
 * 
 * @param {*} appId 
 * @param {*} callback 
 * @returns 
 */
async function gettAllCurrencies(appId,alterntive=1,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/currencies.json/only_alternative=${alterntive}`,
    'headers': {  
      'Authorization': `Bearer ${appId}`
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}


/**
 * 
 * @param {*} appId 
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 * @param {*} callback 
 * @returns 
 */
async function getHistoricalExchange(appId,year,month,day,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/historical/${year}-${month}-${day}.json?app_id=${appId}`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}

/**
 * 
 * @param {*} appId 
 * @param {*} firstDate 
 * @param {*} secondDate 
 * @param {*} baseCurrency 
 * @param {*} symbols 
 * @param {*} callback 
 * @returns 
 */
async function timeSeries(appId,firstDate="2022-01-01",secondDate="2022-01-31",baseCurrency="USD",symbols,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/time-series.json?app_id=${appId}&start=${firstDate}&end=${secondDate}&base=${baseCurrency}&symbols=${symbols.toString()}&prettyprint=1`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}
/**
 * 
 * @param {*} appId 
 * @param {*} callback 
 * @returns 
 */
async function usage(appId,callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/usage.json?app_id=${appId}`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}


/**
 * 
 * @param {*} appId 
 * @param {*} currency 
 * @param {*} callback 
 * @returns 
 */
async function changeBaseCurrency(appId,currency="USD",callback){
  var options = {
    'method': 'GET',
    'url': `https://openexchangerates.org/api/latest.json?app_id=[[app:${appId}]]&base=${currency}`,
    'headers': {  
    }
  };

  const result = await request(options, function (error, response) {
    if (error) throw new Error(error);
    return(callback(null,response.body));
  });
  return (result);
}







module.exports.exchange = {
  getLatestCurrencies,
  getLatestCurrenciesWithBidAndAsk,
  getLatestCurrenciesForSymbols,
  convertCurrencies,
  gettAllCurrencies,
  timeSeries,
  usage,
  changeBaseCurrency

}

