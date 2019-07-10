var app = new Vue({
	el: '#app',
	data:{
  	bpi: null,
    has_error: false,
    loading: true,
    test:"AAAA"
  },
  mounted:function(){
  axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(response){
	    this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
    	console.log(error)
      this.has_error = true
    }.bind(this))
    .finally(function(){
    	this.loading = false
    }.bind(this))
  },
  filters:{
  	currencyDecimal(value){
    return value.toFixed(2)
    }
  }
})