<template>
    <div class="trajectoryCom">
        <div>
            <span class="trajectoryCom__index">排名</span>
            <span class="trajectoryCom__back">路线</span>
            <span class="trajectoryCom__count">热度</span>
        </div>
        <div v-for="item in renderData" class="trajectoryCom__container">
            <div class="trajectoryCom__index" ref="barIndex"></div>
            <div class="trajectoryCom__back" ref="backBar">
                <span v-text="item.source"></span>
                ->
                <span v-text="item.target"></span>
            </div>
            <div class="trajectoryCom__count">{{ item.value }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'trajectoryCom',
    data() {
        return {
            width: 100,
            height: 100
        }
    },
    updated() {
        this.$nextTick(function() {
            this.barStyle()
        })
    },
    props: ['title', 'renderData'],
    computed: {
        baseWidth() {
            if (this.renderData && this.renderData.length !== 0) {
                return this.renderData[0].count
            }
            return 5
        }
    },
    methods: {
        barStyle() {
            let bar = this.$refs.lightBar
            let baseWidth = this.baseWidth
            if (bar) {
                bar.forEach(item => {
                    let width = item.getAttribute('w')
                    let per = (width / baseWidth) * 100
                    item.style.width = `calc(${per}%)`
                })
            }
            let index = this.$refs.barIndex
            if (index) {
                index.forEach(item => {
                    let c = item.getAttribute('c')
                    let color = 'rgba(162, 238, 255, 1)'
                    switch (c) {
                        case '0':
                            color = 'rgba(255,80,80,1)'
                            break
                        case '1':
                            color = 'rgba(255,157,107,1)'
                            break
                        case '2':
                            color = 'rgba(218,210,106,1)'
                            break
                        default:
                            color = 'rgba(162, 238, 255, 1)'
                            break
                    }
                    item.style.color = color
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.trajectoryCom {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    color: $font-color;
    font-size: $sml-size;
    position: relative;
    p {
        margin-top: 2px;
    }
    &__numCount {
        position: absolute;
        top: 0;
        right: 14px;
    }
    &__container {
        height: 25px;
        line-height: 25px;
        display: flex;
        border: 1px solid $border-color;
        border-radius: 3px;
    }
    &__index {
        width: 25px;
        text-align: center;
    }
    &__back {
        width: calc(100% - 75px);
        border-radius: 4px;
        // background-image: linear-gradient(
        //     90deg,
        //     $border-color 0%,
        //     rgba(24, 105, 134, 0.2) 100%
        // );
        background: rgba(24, 105, 134, 0.2);
    }
    &__bar {
        padding-left: 6px;
        margin-right: 10px;
        min-width: 5px;
        height: 23px;
        border-radius: 0 4px 4px 0;
        background-image: linear-gradient(
            90deg,
            rgba(0, 118, 255, 1) 0%,
            rgba(0, 196, 255, 1) 100%
        );
        transition: width 1s;
        -moz-transition: width 1s; /* Firefox 4 */
        -webkit-transition: width 1s; /* Safari and Chrome */
        -o-transition: width 1s; /* Opera */
    }
    &__count {
        padding: 0 6px;
        width: 50px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
</style>
