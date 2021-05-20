<template>
   <div>
       <!-- 1. v-bind -->
       <span v-bind:title="message">
           1. v-bind:鼠标悬停几秒钟查看此处动态绑定的提示信息！<br/> ---------------------
       </span>
       <!-- 2. seen 是否显示 -->
       <p v-if="seen">2. seen 是否显示:现在你看到我了<br/>---------------------</p> 
       <!-- 3. v-for 循环 -->
       <ol>
           <li v-for="(todo,i) in todos" v-bind:key="i">
               3. v-for 循环:{{todo.text}} 
               <!-- v-for 必须有 v-bind:key ，参数 i 也是要有的但可以不使用 -->
           </li>
       </ol> <br/> ---------------------<br/>
       <!-- 4. v-on 指令添加一个事件监听器，点击事件 -->
       4. v-on:    : {{message_reverse}}
       <button v-on:click="reverseMessage">
           反转消息 
       </button> <br/> ---------------------
       <!-- 5. v-model 表单和应用之间的双向绑定 -->
       <p>5. v-model:表单和应用之间的双向绑定:{{model_message}}</p>
       <input v-model="model_message"> <br/> ---------------------
       <!-- 6. v-bind 指令将待办项传到循环输出的每个组件中 -->
       <ol>
            <!--
            现在我们为每个 todo-item 提供 todo 对象
            todo 对象是变量，即其内容可以是动态的。
            我们也需要为每个组件提供一个“key”，稍后再
            作详细解释。
            -->
            <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id"
            >
            </todo-item>
        </ol>
   </div>
</template>
<script>
    export default {
        data() {
            return {
                // <!--1. v-bind -->
                message: '页面加载于' + new Date().toLocaleString(),
                //<!-- 2. seen 是否显示 -->
                seen: true,  //fase 不显示，true 显示
                //<!-- 3. v-for 循环 -->
                todos:[
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                // <!-- 4. v-on 指令添加一个事件监听器 -->
                message_reverse: 'Hello Vue.js!',
                //<!-- 5. v-model 表单和应用之间的双向绑定 -->
                model_message:'Hello Vue!',
                //<!-- 6. v-bind 指令将待办项传到循环输出的每个组件中 -->
                groceryList: [
                    { id: 0, text: '蔬菜' },
                    { id: 1, text: '奶酪' },
                    { id: 2, text: '随便其它什么人吃的东西' }
                ]
            }
        }
        ,
        methods:{
            //<!-- 4. v-on 指令添加一个事件监听器 -->
            reverseMessage:function(){
                this.message_reverse = this.message_reverse.split('').reverse().join('')
            }
        }
    }

</script>