<template>
    <div>
        <p>baiduMap</p>
        <div id="map" class="baiduMap"></div>
    </div>
</template>

<script lang="ts">
import BMap from 'BMap'
import BMapLib from 'BMapLib'
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class baiduMap extends Vue {
    // data
    private map: any = ''

    mounted() {
        this.creatMap()
        this.creatMarker()
        this.creatLine()
    }

    creatMap() {
        // 在id为map的div中画地图
        this.map = new BMap.Map('map', {
            minZoom: 4,
            maxZoom: 17
        })
        this.map.centerAndZoom(new BMap.Point(112.978, 28.195), 11) // 初始化地图,设置中心点坐标和地图级别
        let topRightNavigation = new BMap.NavigationControl({
            anchor: 1, // 控件位置，左 0，右 1
            type: 0 // 控件类型
        })
        this.map.addControl(topRightNavigation)
        // 允许地图进行滚轮缩放
        this.map.enableScrollWheelZoom()
    }

    creatMarker() {
        let marker = new BMap.Marker(new BMap.Point(112.978, 28.195)) // 创建点
        this.map.addOverlay(marker) // 增加点
    }

    creatLine() {
        let polyline = new BMap.Polyline(
            [
                new BMap.Point(112.978, 28.195),
                new BMap.Point(113.108, 28.195),
                new BMap.Point(112.978, 28.295)
            ],
            { strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5 }
        ) // 创建折线
        this.map.addOverlay(polyline) // 增加折线
    }
}
</script>

<style>
#map {
    width: 800px;
    height: 500px;
}
</style>
