<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <hr />
        <button @click="changeStyle">改变图表大小</button>
        <vueChart ref="line" :options="lineChartStyle"></vueChart>
        <vueChart ref="pie" :options="chartStyle"></vueChart>
        <vueChart ref="map" :options="chartStyle"></vueChart>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import vueChart from '@/components/charts/vueChart.vue'
import {
    getLineOption,
    getPieOption,
    getMapOption
} from '@/utils/setChartsOption.ts'
import { getMenuList, getData } from '@/api/menu.ts'
@Component({
    components: { HelloWorld, vueChart }
})
export default class Home extends Vue {
    lineChartStyle: Object = {
        width: '100%',
        height: '300'
    }
    chartStyle: Object = {
        width: '700',
        height: '400'
    }

    mounted() {
        getMenuList(1).then(resp => {
            console.log(resp.data)
        })
        this.init()
    }

    init() {
        // let lineEl: any = this.$refs.line
        let lineOption = getLineOption()
        this.$refs.line.build(lineOption)

        let pieEl: any = this.$refs.pie
        let pieOption = getPieOption()
        pieEl.build(pieOption)

        let mapEl: any = this.$refs.map
        let mapOption = getMapOption()
        mapEl.build(mapOption)
    }

    changeStyle() {
        let sizeObj = {
            width: '500',
            height: '300'
        }
        let lineEl: any = this.$refs.line
        lineEl.resizeComp(sizeObj)
    }
}
</script>
