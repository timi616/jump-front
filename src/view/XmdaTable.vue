<template>
    <Table stripe :columns="columns1" :data="data1"></Table>
</template>
<script>

    import axios from 'axios'

    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '订单单号',
                        key: 'xmdadocno'
                    },
                    {
                        title: '订单日期',
                        key: 'xmdadocdt'
                    },
                    {
                        title: '业务人员',
                        key: 'xmda002'
                    },
                    {
                        title: '业务部门',
                        key: 'xmda003'
                    },
                    {
                        title: '客户编号',
                        key: 'xmda004'
                    }
                ], //表头
                data1: [] //data1 后台数据显示
            }
        }
        ,
        mounted(){
            let url = "/index/getOrderList/NBQS" //路径
            axios.get(url).then((res)=>{
                console.log(res.data); //显示在浏览器的控制台上
                this.data1=res.data;   //将后台数据赋值 data1
            })
        }
    }
    
</script>