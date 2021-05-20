<template>
    <table border="1" cellspacing="0" width="300">
        <tr>
            <th>客户:</th>
            <th>类型:</th>
        </tr>

        <tr v-for="(item,i) in result" v-bind:key="i">
            <td>{{item.custno}}</td>
            <td>{{item.type}}</td>
        </tr>
    </table>
</template>
<script>

    import axios from 'axios'

    export default {
        data () {
            return {
                self: this,  //定义 this
                result:{}
            }
        },
        mounted(){
        // 1.Cors跨域 后端controller配置@CrossOrigin
        // let url = "/index/getList1";
        // let url = "/index/getArrInfo2";
        let url = "/index/getCustomerInfo/00001"
        // let url = "http://localhost:8080/index/getCustomerInfo2?custno=00001"
        axios.get(url).then((res)=>{
          console.log(res.data);
           this.result=res.data;
        })
        }
    }
</script>
