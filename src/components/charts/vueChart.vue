<template>
    <div class="vueEcharts" ref="chart"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import echarts, { ECharts, EChartOption } from 'echarts'

import 'echarts/map/js/china'

@Component
export default class vueEcharts extends Vue {
    @Prop() private options?: Object
    private width: Number = 600
    private height: Number = 300

    EC: echarts.ECharts | undefined
    mounted() {
        this.EC = echarts.init(this.$refs.chart as HTMLCanvasElement)
    }

    build(option: any) {
        if (this.EC && option) {
            try {
                this.EC.clear()
                this.EC.setOption(option)
            } catch (e) {
                console.error(e)
            }
        }
    }
    resize() {
        if (this.EC) {
            this.EC.resize()
        }
    }
    dispose() {
        if (this.EC) {
            this.EC.dispose()
        }
    }
    beforeDestory() {
        if (this.EC) {
            this.EC.dispose()
        }
    }

    get chartStyle() {
        // let width =
        //     this.width.toString().substr(this.width.length - 1) === '%' ?
        //         this.width :
        this.width + 'px'
        // let height =
        //     this.height.toString().substr(this.height.length - 1) === '%' ?
        //         this.height :
        this.height + 'px'
        return {
            width: this.width,
            height: this.height
        }
    }
}
</script>

<style>
.vueEcharts {
    height: 500px;
    width: 800px;
}
</style>
