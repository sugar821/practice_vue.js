Vue.component('hello-component',{
	template: "<p>hello from template</p>"
})

var app = new Vue({
	el: '#app',
	data:{
	  new_item:"",
	  to_dos:[]
	},
  methods:{
  	addItem:function(event){
    	if(this.new_item == "") return;
      var to_do = {
        item: this.new_item,
        isdone: false
      }
      this.to_dos.push(to_do)
      this.new_item = ""
    },
    delete_item:function(index){
      this.to_dos.splice(index,1)
    }
  }
})