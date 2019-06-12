<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <hr />
        <vueChart ref="line" :options="chartStyle"></vueChart>
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
    chartStyle: Object = {
        width: '600px',
        height: '400px'
    }

    mounted() {
        getMenuList(1).then(resp => {
            console.log(resp.data)
        })
        this.init()
    }

    init() {
        let lineOption = getLineOption()
        this.$refs.line.build(lineOption)

        let pieOption = getPieOption()
        this.$refs.pie.build(pieOption)

        let mapOption = getMapOption()
        this.$refs.map.build(mapOption)
    }
}
</script>
