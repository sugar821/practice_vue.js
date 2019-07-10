Vue.component('hello-component',{
	template: "<p>hello from template</p>"
})

var app = new Vue({
	el: '#app' ,
  data:{
  	msg : 'hello world',
    url : 'https://jp.vuejs.org/',
    toggle: false,
    languages:["js","ruby","python"],
    von_msg: ""
  },
  methods:{
  	onclick:function(){
    this.von_msg = "clicked"
    }
    }
})