<template>
    <div class="about">
        <h1>This is an about page123</h1>
        <hr />
        <CompTest :msg="msg" :person="person" @text="text"></CompTest>
        <hr />
        <div v-text="newTxt"></div>
        <input v-model="msg" />
        <p>msg: {{ msg }}</p>
        <p>computed msg: {{ computedMsg }}</p>
        <button @click="greet">Greet</button>
        <p>vuex userName {{ userName }}</p>
        <button @click="changeUserName('帅锅')">修改username为 帅锅</button>
        <p>-------------- element button -------------</p>
        <el-button :type="btnType" @click="warn">我是按钮 </el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getData } from '@/api/menu.ts'
import CompTest from './compTest.vue'
import { State, Getter, Action } from 'vuex-class'
import { Route } from 'vue-router'
import { storage } from '@/common/storage'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    // 所有的组件选项都可以放在这里
    components: { CompTest }
})
export default class About extends Vue {
    // vuex
    @Getter userName: any
    @Action SET_USERNAME: any

    // data
    private msg: string = '这是about'
    private person: string = '李四'
    private newTxt: string = ''
    private btnType: string = 'primary'

    // 生命周期
    mounted() {
        console.log('默认userName', this.userName)
        this.getDataResp()
        this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
        })
    }

    // 计算属性
    get computedMsg() {
        return 'computed ' + this.msg
    }

    // methods
    changeUserName(name: string) {
        this.SET_USERNAME(name)
        console.log('修改后的userName', this.userName)
        storage.session.set('userName', name)
    }
    text(val: any) {
        this.newTxt = val
    }
    greet() {
        alert('greeting: ' + this.msg)
    }
    getDataResp() {
        getData().then(resp => {
            this.person = resp.data.data.name
            console.log('post', resp.data.data.title)
        })
    }
    warn() {
        this.$message({
            message: '瞎点啥',
            type: 'warning'
        })
    }
}
</script>
