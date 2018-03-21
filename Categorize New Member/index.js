module.exports = function openOrSenior(data){
    return data.map(function(d){
      return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
    });
  }