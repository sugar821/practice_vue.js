var app = new Vue({
	el: '#app',
	data:{
	  colors:[
	    {name: "red"},
	    {name: "green"},
	    {name: "blue"}
	    ]
	  },
	  watch:{
	    colors:{
	      handler: function(newValue,oldValue){
	        console.log("update")
	      },
	      deep:true
	    }
	  }
})
