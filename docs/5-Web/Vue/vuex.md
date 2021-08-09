# Vuex

## 基本概念
Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。

## 好处
- 能够在vuex中集中管理共享的数据，易于开发和后期维护
- 能够高效的实现组件之间的数据共享，提高开发效率

## 使用场景
一般情况下，只有组件之间共享的数据，才有必要存储到vuex中，对于组件中的私有数据，依旧存储在自身的data中。

## 基本使用

1. 安装vuex依赖包
``` node
npm install vuex --save 
```
2. 导入vuex包
``` node
import  Vuex from 'vuex'
Vue.use(Vuex)
```
3. 创建store对象
``` node 
const store = new Vuex.Store({
    //state中存放的是全局共享数据
    state: {count: 0}
})
```
4. 将store对象挂载到vue实例中
``` node 
new Vue({
    el: '#app',
    redner: h => h(app),
    router,
    // 将创建的共享数据对象，挂载到vue实例中
    // 所有的组件，就可以直接从store中获取全局的数据了
    store
})
```

## vuex核心概念

### state 
state提供唯一的公共数据源，所有共享的数据都要统一放到store的state中进行存储。

``` node 
// 创建store数据源，提供唯一公共数据源
const store = new Vuex.Store({
    state: {count: 0}
})
```

组件访问state中的第一种方式：
``` node 
this.$store.state.全局数据名称
```
组件访问state中数据的第二种方式：
``` node 
// 1. 从vuex中按需导入 mapState函数
import {mapState} from 'vuex'
```
通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组建的computed计算属性：
``` node 
// 2. 将全局数据，映射为当前组建的计算属性
computed: {
    ...mapState(['count'])
}
```

### Mutation 

Mutation用于变更store中的数据。
1. 只能通过mutation变更store数据，不可以直接操作store中数据。
2. 通过这种方式虽然操作起来稍微繁琐一点，但是可以集中监控所有数据的变化。

``` node 
// 定义Mutation
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state){
            // 变更状态
            state.count++
        }
    }
})
```

``` node 
// 触发mutation
methods: {
    handle(){
        // 触发mutation第一种方式
        this.$store.commit('add')
    }
}
```

在触发mutations时传递参数：
``` node 
// 定义Mutation
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        addN(state,step){
            // 变更状态
            state.count += step
        }
    }
})
```

``` node 
// 触发mutation
methods: {
    handle2(){
        // 在调用commit函数触发mutations时携带参数
        this.$store.commit('addN',3)
    }
}
```

