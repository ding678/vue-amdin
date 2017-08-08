/**
 * Created by Administrator on 2017/7/23.
 */
const vm=new Vue({
    el:'#app',
    mounted:function(){
        this.getchart();
        this.autopopin();
    },
    data:{
        usernav:false,
        themes:'',
        shownav:false,
        navlist:[
            {
                nav:'表单和表格',
                icon:'icon-tongzhi',
                current:false,
                child:[
                    {
                        childnav:'表格',
                        parmas:'tables',
                        current:true
                    },
                    {
                        childnav:'表单',
                        parmas:'form',
                        current:false
                    },
                    {
                        childnav:'可增减表格',
                        parmas:'selftable',
                        current:false
                    }
                ]
            },
            {
                nav:'基本组件',
                icon:'icon-tongzhi',
                current:false,
                child:[
                    {
                        childnav:'富文本编辑器',
                        parmas:'editor',
                        current:false
                    },
                    {
                        childnav:'列表拖拽',
                        parmas:'drag',
                        current:false
                    },
                    {
                        childnav:'分页',
                        parmas:'pages',
                        current:false
                    },
                    {
                        childnav:'图片上传',
                        parmas:'picupload',
                        current:false
                    },
                    {
                        childnav:'弹框',
                        parmas:'popin',
                        current:false
                    }
                ]
            },
            {
                nav:'图表',
                icon:'icon-tongzhi',
                current:false,
                child:[
                    {
                        childnav:'折线图',
                        parmas:'line',
                        current:false

                    },
                    {
                        childnav:'柱图',
                        parmas:'bar',
                        current:false
                    }
                ]
            }
        ]
    },
    methods:{
        getchart:function(){
            let quota=echarts.init(document.querySelector('#quota'));
            quota.showLoading();
            axios.get('../data/quota.json')
                .then(function (response) {
                    let getData=response.data;//请求数据
                    quota.hideLoading();
                    quota.setOption({
                        baseOption:{
                            title: {
                                text: '2017-07月访问量',
                                textStyle:{
                                    color:'#777',
                                    fontSize:14
                                }
                            },
                            tooltip: {},
                            legend: {
                                data:['访问量']
                            },
                            xAxis: {
                                data: ['2017-05-01','2017-05-02','2017-05-03','2017-05-04','2017-05-05','2017-05-06','2017-05-07']
                            },
                            yAxis: {},
                            dataZoom: [
                                {
                                    type: 'slider',
                                    xAxisIndex: 0,
                                    filterMode: 'empty'
                                },
                                {
                                    type: 'inside',
                                    xAxisIndex: 0,
                                    filterMode: 'empty'
                                }
                            ],
                            series: [{
                                name: '访问量',
                                type: 'line',
                                data: [5, 20, 36, 10, 10, 20]
                            }]
                        },
                        media:[
                            {
                                option:{}
                            },
                            {
                                query: {maxWidth: 670, minWidth: 550},
                                option:{}
                            },
                            {
                                query: {maxWidth: 550},
                                option:{}
                            }
                        ]
                    });
                })
        },
        showNav:function(index){
            this.navlist.forEach(function(e){
                e.current=false;
            })
            this.navlist[index].current=true;
        },
        getTheme:function(name){
            this.themes=name;
        },
        autopopin:function(){
            this.$alert('欢迎石武浩',111,{
                showConfirmButton:false
            })
        }
    }
});
