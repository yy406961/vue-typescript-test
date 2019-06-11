<template>
    <div>
        <div>组件 {{ text }} {{ msg }}</div>
        <button @click="btnClick">点击传值</button>
        <p>组件内person {{ person }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class CompTest extends Vue {
    // data
    private text: string = 'string text'

    @Prop() private msg!: string
    @Prop() private person!: string

    @Watch('msg')
    msgChange(val: string, oldVal: string) {
        console.log('msg val', val, 'oldVal', oldVal)
    }

    @Watch('person', { immediate: true, deep: true })
    personChanged1(val: string, oldVal: string) {
        console.log('person val', val, 'oldVal', oldVal)
    }

    @Emit('text')
    btnClick() {
        console.log('aaa点击', this.text)
        return this.text
    }
    // private btnClick() {
    //     子组件传值给父组件
    //     this.$emit('text', this.text)
    // }
}
</script>
