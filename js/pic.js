/**
 * Created by Administrator on 2017/7/23.
 */
const vm=new Vue({
    el:'#app',
    data:{
        usernav:false,
        themes:'',
        shownav:false,
        imageUrl: '',
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
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

    },
    methods:{
        showNav:function(index){
            this.navlist.forEach(function(e){
                e.current=false;
            })
            this.navlist[index].current=true;
        },
        handleAvatarSuccess:function(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload:function(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleRemove:function(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview:function(file) {
            console.log(file);
        }
    }
});