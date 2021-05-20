<template>
    <div>
        <!-- 点击跳转 -->
        <button @click="gotolink1" class="btn btn-success">跳转页面1</button>
        <button @click="gotolink2" class="btn btn-success">跳转页面2</button>
        <button @click="gotolink3" class="btn btn-success">参数传递接收</button>

        <!-- 方法跳转 -->
        <router-link to='/tableList'>
            直接跳转
        </router-link>

        <router-link :to="{path:'tableList',query:{uid:123}}">
            <button>带参跳转1</button>
        </router-link>

        <router-link :to="{name:'customer',params:{uid:123}}">
            <button>带参跳转2</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        methods: {
            //跳转1
            gotolink1(){
                this.$router.replace('/tableList')
            },
            gotolink2(){
                this.$router.push('/tableList')
            },
            
            
            // 参数传递
            // 1.query方式传递参数会在url地址栏中显示
            // gotolink3(){
            //     this.$router.push({
            //             path:'/customer',
            //             query:{
            //                 uid:'query123Id'
            //             }
            //         })
            // }

            // 参数传递
            // 2.params方式传递参数
            gotolink3(){
                this.$router.push({
                        name:'customer', //注意要用name并且不带'/'
                        params:{
                            uid:'params123Id'
                        }
                    })
            }
        }
    }
</script>