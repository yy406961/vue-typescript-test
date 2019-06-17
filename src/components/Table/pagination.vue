<template>
    <div :class="pagerStyles.pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="option.currentPage"
            :page-sizes="option.pageSizes"
            :page-size.sync="option.pageSize"
            :layout="layoutTest || option.layout"
            :total="option.total"
        >
        </el-pagination>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class pagination extends Vue {
    @Prop() private option!: any

    private currentPage: number = 1
    private layoutTest: string = 'total, prev, pager, next, jumper'
    private layout: string = 'total, sizes, prev, pager, next, jumper'

    handleSizeChange(val: any) {
        this.$emit('handleSizeChange', val)
    }
    handleCurrentChange(val: any) {
        this.$emit('handleCurrentChange', val)
    }
}
</script>
<style module="pagerStyles"></style>
