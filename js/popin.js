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
                current:true,
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
                        current:true
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
        showNav:function(index){
            this.navlist.forEach(function(e){
                e.current=false;
            })
            this.navlist[index].current=true;
        },
        open:function(){
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                this.$message({
                    type: 'info',
                    message: `您点击了: ${ action }`
        });
}
});
},
open3:function(){
    this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
    }).then(({ value }) => {
        this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
        });
}).catch(() => {
    this.$message({
        type: 'info',
        message: '取消输入'
    });
});
},
open4:function(){
    const h = this.$createElement;
    this.$msgbox({
        title: '消息',
        message: h('p', null, [
            h('span', null, '自定义内容放这里 '),
            h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = '执行中...';
        setTimeout(() => {
            done();
            setTimeout(() => {
                instance.confirmButtonLoading = false;
            }, 300);
        }, 3000);
        } else {
            done();
        }
        }
        }).then(action => {
            this.$message({
                type: 'info',
                message: 'action: ' + action
            });
        });
        },
        success:function() {
            this.$message('恭喜你，这是一条成功消息');
        },
        mesg:function() {
            this.$message({
                showClose:true,//关闭按钮
                message: '这是一条消息提示',
                type: 'success'
            });
        },
        warn:function() {
            this.$message({
                showClose:true,
                message: '警告哦，这是一条警告消息',
                type: 'warning',
                iconClass:'icon iconfont icon-tongzhi'
            });
        },
        error:function() {
            this.$message.error('错了哦，这是一条错误消息');
        },
        openVn:function(){
            const h = this.$createElement;
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('b', { style: 'color: red' }, 'VNode')
                ])
            });
        },
        closed:function() {
            const h = this.$createElement;
            this.$notify({
                title: '标题名称',
                message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
            });
        },
        noclose:function() {
            this.$notify({
                title: '提示',
                message: '这是一条不会自动关闭的消息',
                duration: 0
            });
        },
        successmesg:function() {
            this.$notify({
                title: '成功',
                message: '这是一条成功的提示消息',
                type: 'success'
            });
        },

        warnmesg:function() {
            this.$notify({
                title: '警告',
                message: '这是一条警告的提示消息',
                type: 'warning'
            });
        },

        mesgs:function() {
            this.$notify.info({
                title: '消息',
                message: '这是一条消息的提示消息'
            });
        },

        errormesg:function() {
            this.$notify.error({
                title: '错误',
                message: '这是一条错误的提示消息',
                offset:10
            });
        }
    }
})