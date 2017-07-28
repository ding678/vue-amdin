/**
 * Created by xiaodi on 2017/7/25.
 */
Vue.component('my-btn',{
    props:['mesg'],
    template:'<div><span v-for="(item,index) in btnlist" :class="item" @click="themes(item)"></span></div>',
    data:function(){
       return {
           btnlist:this.mesg
       }
    },
    methods:{
        themes:function(item){
           this.$emit('themes',item);
        }
    }
});
Vue.component('blocks',{

})