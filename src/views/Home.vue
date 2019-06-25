<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <hr />
        <button @click="changeStyle">改变图表大小</button>
        <hr />
        <div class="show">
            <div class="div">
                <relationChart
                    :option="relationOpt"
                    :renderData="relationData"
                ></relationChart>
            </div>
            &nbsp;&nbsp;
            <div class="div">
                <barChart
                    :option="relationOpt"
                    :renderData="barChartData"
                ></barChart>
            </div>
            &nbsp;&nbsp;
            <div class="div">
                <barCom
                    ref="barChart"
                    barType="省份排名"
                    :renderData="barChartData"
                ></barCom>
            </div>
            &nbsp;&nbsp;
            <div class="div">
                <TrajectoryCom
                    ref="barChart"
                    :renderData="trajectoryData"
                ></TrajectoryCom>
            </div>
        </div>

        <hr />
        <vueChart ref="line" :options="lineChartStyle"></vueChart>
        <hr />
        <vueChart ref="pie" :options="chartStyle"></vueChart>
        <hr />
        <vueChart ref="map" :options="chartStyle"></vueChart>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import vueChart from '@/components/charts/vueChart.vue'
import barCom from '@/components/charts/barCom.vue'
import TrajectoryCom from '@/components/charts/trajectoryCom.vue'
import relationChart from '@/components/charts/relationCharts.vue'
import barChart from '@/components/charts/barCharts.vue'
import {
    getLineOption,
    getPieOption,
    getMapOption
} from '@/utils/setChartsOption.ts'
import { getMenuList, getRelatioData } from '@/api/menu.ts'
@Component({
    components: {
        HelloWorld,
        vueChart,
        relationChart,
        barChart,
        barCom,
        TrajectoryCom
    }
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
    relationOpt = {
        width: '236px',
        height: '175px'
    }
    relationData: any = []
    barChartData: any = []
    trajectoryData: any = []

    mounted() {
        // getMenuList(1).then(resp => {
        //     // console.log(resp.data)
        // })
        this.init()
        this.getData()
    }

    init() {
        let lineEl: any = this.$refs.line
        let lineOption = getLineOption()
        lineEl.build(lineOption)

        let pieEl: any = this.$refs.pie
        let pieOption = getPieOption()
        pieEl.build(pieOption)

        let mapEl: any = this.$refs.map
        let mapOption = getMapOption()
        mapEl.build(mapOption)
    }
    getData() {
        let data = {
            node: [
                {
                    name: '通湖草原',
                    value: 100
                },
                {
                    name: '明翠湖',
                    value: 95
                },
                {
                    name: '黄沙古渡',
                    value: 90
                },
                {
                    name: '西夏盛典',
                    value: 85
                },
                {
                    name: '沙坡头',
                    value: 80
                },
                {
                    name: '影视城',
                    value: 75
                },
                {
                    name: '水洞沟',
                    value: 70
                },
                {
                    name: '沙湖',
                    value: 65
                },
                {
                    name: '西夏陵',
                    value: 60
                },
                {
                    name: '回乡文化园',
                    value: 55
                },
                {
                    name: '火石寨',
                    value: 50
                },
                {
                    name: '贺兰山岩画',
                    value: 45
                },
                {
                    name: '黄河坛',
                    value: 40
                },
                {
                    name: '六盘山国家公园',
                    value: 35
                },
                {
                    name: '西夏风情缘',
                    value: 30
                },
                {
                    name: '金沙岛',
                    value: 25
                }
            ],
            link: [
                {
                    source: '通湖草原',
                    target: '明翠湖',
                    value: 100
                },
                {
                    source: '通湖草原',
                    target: '黄沙古渡',
                    value: 100
                },
                {
                    source: '通湖草原',
                    target: '西夏盛典',
                    value: 100
                },
                {
                    source: '通湖草原',
                    target: '沙坡头',
                    value: 100
                },
                {
                    source: '通湖草原',
                    target: '影视城',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '黄沙古渡',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '西夏盛典',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '影视城',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '水洞沟',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '沙湖',
                    value: 100
                },
                {
                    source: '明翠湖',
                    target: '西夏陵',
                    value: 100
                },
                {
                    source: '沙坡头',
                    target: '沙湖',
                    value: 100
                },
                {
                    source: '沙坡头',
                    target: '影视城',
                    value: 100
                },
                {
                    source: '沙坡头',
                    target: '西夏陵',
                    value: 100
                },
                {
                    source: '沙坡头',
                    target: '回乡文化园',
                    value: 100
                },
                {
                    source: '沙坡头',
                    target: '火石寨',
                    value: 100
                },
                {
                    source: '西夏陵',
                    target: '回乡文化园',
                    value: 100
                },
                {
                    source: '西夏陵',
                    target: '火石寨',
                    value: 100
                },
                {
                    source: '西夏陵',
                    target: '贺兰山岩画',
                    value: 100
                },
                {
                    source: '西夏陵',
                    target: '黄河坛',
                    value: 100
                },
                {
                    source: '西夏陵',
                    target: '六盘山国家公园',
                    value: 100
                },
                {
                    source: '贺兰山岩画',
                    target: '六盘山国家公园',
                    value: 100
                },
                {
                    source: '贺兰山岩画',
                    target: '西夏风情缘',
                    value: 100
                },
                {
                    source: '贺兰山岩画',
                    target: '金沙岛',
                    value: 100
                },
                {
                    source: '贺兰山岩画',
                    target: '黄沙古渡',
                    value: 100
                }
            ]
        }
        this.relationData = data
        // getRelatioData().then(resp => {
        //     this.relationData = resp.data
        //     console.log(this.relationData)
        // })
        let barData = [
            { name: 'a', count: 8 },
            { name: 'b', count: 6 },
            { name: 'c', count: 5 },
            { name: 'd', count: 4 },
            { name: 'e', count: 3 }
        ]
        this.barChartData = barData

        let data1 = [
            { source: '沙湖', target: '影视基地', value: 983 },
            { source: '沙湖', target: '影视基地', value: 983 },
            { source: '沙湖', target: '影视基地', value: 983 },
            { source: '沙湖', target: '影视基地', value: 983 },
            { source: '沙湖', target: '影视基地', value: 983 }
        ]
        this.trajectoryData = data1
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

<style>
.show {
    display: flex;
}
</style>
