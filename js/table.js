new Vue({
    el:'#app',
    data:{
        usernav:false,
        themes:'',
        shownav:false,
        navlist:[
            {
                nav:'表单和表格',
                icon:'icon-tongzhi',
                current:true,
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
        ],
        tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-02',
            name: '张小盒',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-04',
            name: '汪大东',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-01',
            name: '李先生',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-01',
            name: '忙得很',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }],
        tableData5: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
        }, {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
        }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
        }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
        }]
    },
    methods:{
        showNav:function(index){
            this.navlist.forEach(function(e){
                e.current=false;
            })
            this.navlist[index].current=true;
        },
        lookdata:function(index){
           var tag=this.$createElement;
            this.$msgbox({
                title:'详细信息',
                message:tag('ul',{class:'itemdetail'},[
                    tag('li',null,'日期：'+this.tableData[index].date),
                    tag('li',null,'姓名：'+this.tableData[index].name),
                    tag('li',null,'地址：'+this.tableData[index].address)
                ])
            })
        },
        editdata:function(index,row){//index当前操作的位置，row当前操作的内容
            var tag=this.$createElement;
            this.$msgbox({
                title:'编辑信息',
                message:tag('ul',{class:'itemdetail'},[
                    tag('li',null,[
                        tag('span',null,'日期：'),
                        tag('el-input',{value:'7777'},'777')
                    ]),
                    tag('li',null,[
                        tag('span',null,'姓名：'),
                        tag('el-input',{value:'7777'},this.tableData[index].name)
                    ]),
                    tag('li',null,[
                        tag('span',null,'地址：'),
                        tag('el-input',{value:'7777'},this.tableData[index].address)
                    ])
                ]),
                showCancelButton: true,
                cancelButtonText: '取消'
            })
        }
    }
})