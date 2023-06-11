const app=Vue.createApp({
  data() {
    return {
      rangvalue:1,
      originprice:50
    }
  },
  computed :{
    finalprice:function(){
      return this.originprice * this.rangvalue
    }
  }
});


app.mount(`#app`)