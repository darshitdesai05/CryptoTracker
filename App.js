var input = document.querySelector('.input_text');
var curr = document.querySelector('.input_curr');
var n = document.querySelector('#name');
var symbol = document.querySelector('.symbol');
var i=document.querySelector('.img');
var low = document.querySelector('.low');
var high = document.querySelector('.high');
var rank = document.querySelector('.rank');
var change1 = document.querySelector('.c1h');
var change24= document.querySelector('.c24');
var button= document.querySelector('.submit');
button.addEventListener('click', function(name){
    //FetchAPI - Fetching API Data from the side and concoting the the coin's name
    fetch('https://api.coingecko.com/api/v3/coins/'+input.value)
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      n.innerHTML = "Name: "+nameValue;
      var r = data['market_cap_rank']
      rank.innerHTML= nameValue+ " stands at " +"No."+r + " amongst the others in the market";
      var lowest =data['market_data']['low_24h']['inr']
      low.innerHTML="The lowest price for " +nameValue+ "in 24 hours in Indian Rupees is :" + lowest;
      var highest = data['market_data']['high_24h']['inr']
      high.innerHTML = "The highest price for " +nameValue+ "in 24 hours in Indian Rupees is " + highest;
      var c1=data['market_data']['price_change_percentage_1h_in_currency']['inr']
      change1.innerHTML= "The value of " + nameValue  +"has changed "+c1 + " % in the last 1 hour";
      var c24=data['market_data']['price_change_percentage_24h_in_currency']['inr']
      change24.innerHTML= "The value of " + nameValue  +"has changed "+c24 + " % in the last 24 hours";
      input.value ="";
      var sy=data['symbol']
      symbol.innerHTML=sy;
      console.log(data)
      console.log(curr)
    })})