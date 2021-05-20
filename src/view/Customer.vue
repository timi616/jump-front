<template>
    <div id="cus">
        客户信息页面
        <br>参数query:{{this.$route.query.uid}},
        <br>参数params:{{this.$route.params.uid}}


        <!-- v-bind:key 保持唯一 -->
        <!-- 数组显示相应字段值 http://localhost:8080/index/getCustomerInfo/00001-->
        <!-- <div>{{result[0]}}</div> -->
        <div v-for="(item1,i) in result" v-bind:key="i">
            <th>值{{i}}:{{item1}}</th>  
        </div>
        <!-- <div v-for="item2 in result" v-bind:key="item2">值:{{item2.custno}}</div> -->
        <!-- 对象显示相应字段值 let url = "http://localhost:8080/index/getCustomerInfo?custno=00001" -->
        <!-- <div>{{result.name}}</div> -->
    </div>
</template>

<script>
    //跨域 1.axios 2.jsonp 3.代理
    import axios from 'axios'
    // import jsonp from 'jsonp'

    export default {
        data(){
            return{
                result:[]
                // result:{}
            }
        },

        methods:{
        
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

        // 2.Jsonp跨域
        // let url = "http://localhost:8080/index/getList1";
        // jsonp(url,(err,res)=>{
        //   let result = res;
        //   this.data = result;
        // })

        // 3.1.代理跨域 Vue创建 vue.config.js
        // let url = "/index/getList1";
        // axios.get(url).then(()=>{
            
        // })
        
        // 3.2.代理跨域 Vue创建 vue.config.js
        // let url = "/api/index/getList1";
        // axios.get(url).then(()=>{
            
        // })

        }
    }
</script>