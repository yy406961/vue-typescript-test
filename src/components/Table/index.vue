<template>
    <div ref="wrap">
        <div
            :id="option.scrollListContainer"
            class="ga-table"
            @mousewheel="tableMouseWheel"
        >
            <el-table
                ref="multipleTable"
                :data="tableListData"
                :stripe="option.stripe"
                :height="height"
                :defaultSort="option.defaultSort"
                :highlight-current-row="option.highlightRow"
                v-loading.body="option.listLoading"
                @cell-click="cellClick"
                @row-click="rowClick"
                @sort-change="sortChange"
                @select-all="handleSelectAll"
                @select="handleSelect"
                @selection-change="handleSelectionChange"
                :row-style="rowStyle"
                :empty-text="emptyText"
            >
                <template v-for="(item, index) in tableColumn">
                    <el-table-column
                        v-if="
                            item.value === 'index' || item.value === 'selection'
                        "
                        :type="item.value"
                        :label="item.name"
                        :width="item.width"
                        :align="item.align || 'left'"
                        :fixed="item.fixed"
                        :class-name="setClassName(item)"
                        :selectable="item.selectable"
                    >
                    </el-table-column>
                    <el-table-column
                        v-else-if="item.value === 'level'"
                        :label="item.name"
                        :width="item.width"
                        :class-name="setClassName(item)"
                        :align="item.align || 'left'"
                    >
                        <el-table-column
                            v-for="(items, index) in item.level"
                            :key="index"
                            :label="items.name"
                            :width="items.width"
                            :align="items.align || 'left'"
                        >
                            <template slot-scope="scope">
                                <span>{{ scope.row[items.value] }}</span>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column
                        v-else-if="item.prop"
                        :prop="item.prop"
                        :type="item.value"
                        :label="item.name"
                        :width="item.width"
                        :align="item.align || 'left'"
                        :filters="item.filters"
                        :filter-method="filterHandler"
                        :fixed="item.fixed"
                        :sortable="item.sortable"
                        :class-name="setClassName(item)"
                    >
                    </el-table-column>
                    <el-table-column
                        v-else
                        :label="item.name"
                        :width="item.width"
                        :align="item.align || 'left'"
                        :class-name="setClassName(item)"
                        :show-overflow-tooltip="item.tooltip"
                        :fixed="item.fixed"
                    >
                        <template slot-scope="scope">
                            <div
                                v-if="item.highlightKey"
                                v-html="highlightReplace(scope, item)"
                            ></div>
                            <div v-else-if="item.operations">
                                <template v-for="operate in item.operations">
                                    <button
                                        v-if="operate.type === 'icon'"
                                        style="border: none;background: transparent;outline: none"
                                        :class="[
                                            'fa',
                                            'fa-' + operate.icon,
                                            operate.callback(
                                                scope.row,
                                                scope.$index
                                            )
                                        ]"
                                        @click="
                                            operate.click(
                                                rowClickJM(scope.row),
                                                scope.$index,
                                                event
                                            )
                                        "
                                        :disabled="operate.disabled"
                                    ></button>
                                    <el-button
                                        v-if="
                                            operate.type === 'label' &&
                                                !item.value
                                        "
                                        :class="[
                                            'operateBtn',
                                            operate.callback(
                                                scope.row,
                                                scope.$index
                                            )
                                        ]"
                                        @click="
                                            operate.click(
                                                scope.row,
                                                scope.$index,
                                                $event
                                            )
                                        "
                                        :disabled="operate.disabled"
                                    >
                                        {{ operate.label }}
                                    </el-button>
                                    <el-button
                                        v-if="
                                            operate.type === 'label' &&
                                                item.value
                                        "
                                        :class="[
                                            'operateBtn',
                                            operate.callback(
                                                scope.row,
                                                scope.$index
                                            )
                                        ]"
                                        @click="
                                            operate.click(
                                                rowClickJM(scope.row),
                                                scope.$index,
                                                event
                                            )
                                        "
                                        :disabled="operate.disabled"
                                    >
                                        {{ scope.row[item.value] }}
                                    </el-button>
                                </template>
                            </div>
                            <div v-else-if="item.type === 'icon'">
                                <i
                                    :class="
                                        item.callback(scope.row, scope.$index)
                                    "
                                    @click="
                                        item.clickFn(
                                            scope.row,
                                            scope.$index,
                                            $event
                                        )
                                    "
                                ></i>
                            </div>
                            <div v-else-if="item.color">
                                <div
                                    v-if="scope.row[item.value] === 1"
                                    class="ga-table__colorInstall"
                                >
                                    <i class="el-icon-check"></i>
                                </div>
                                <div v-else="scope.row[item.value] === 0">
                                    <i
                                        style="font-size: 18px;color: #ffffff"
                                        class="fa fa-ban"
                                    ></i>
                                </div>
                            </div>
                            <div v-else-if="item.eventType">
                                <div
                                    v-if="scope.row[item.value] - 0 === 0"
                                    style="background: #0198F1"
                                    class="ga-eventType"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    v-else-if="scope.row[item.value] - 0 === 1"
                                    style="background: #000267"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    v-else-if="scope.row[item.value] - 0 === 2"
                                    style="background: #FDF21C"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    v-else-if="scope.row[item.value] - 0 === 3"
                                    style="background: #00931B"
                                >
                                    &nbsp;
                                </div>
                            </div>
                            <div v-else>
                                <span>{{ scope.row[item.value] }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </div>
        <pagination
            v-if="option.pagination"
            :option="option.pageOpt"
            ref="pagination"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange"
        ></pagination>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import pagination from './pagination.vue'
// import { mapGetters } from 'vuex'
import { cloneDeeps, isFunction, maxs } from '@/utils/lib'
// import { phoneNumChange, nameChange } from '@/utils/assist'

@Component({
    components: { pagination }
})
export default class Table extends Vue {
    @Prop() private option!: any
    @Prop() private comSize?: any

    private phoneMap: any = {}
    private tableListData: any = []
    private heightChange: number = 0
    private highlightRow: boolean = false
    private columnWidth: boolean = false
    private emptyText: string = this.option.emptyText || '暂无数据'
    private curNum: number = 1
    private isScrollAbled: boolean = true
    private currentPage: number = 1
    private isHandleSelectAll: boolean = false

    mounted() {
        let me: any = this
        this.setHeight(this.comSize.height)
        this.tableShowScroll()
        if (this.option.scrollLoading) {
            this.$nextTick(() => {
                let listContainer =
                    this.option.scrollListContainer.substr(0, 1) === '#'
                        ? this.option.scrollListContainer
                        : '#' + this.option.scrollListContainer
                $(listContainer)
                    .find('.el-table__body-wrapper')
                    .eq(0)
                    .scroll(function() {
                        let wrapperH = me.clientHeight
                        let contentH = $(me)
                            .find('table')
                            .eq(0)
                            .height()
                        let wScrollTop = $(me).scrollTop()
                        if (
                            me.isScrollAbled &&
                            wScrollTop === contentH - wrapperH
                        ) {
                            me.curNum++
                        }
                    })
            })
        }
    }
    @Watch('comSize.height')
    comSizeHeightChange(newval: any) {
        this.setHeight(newval)
    }

    @Watch('option.listLoading')
    optionListLoadingChange(newval: any) {
        if (newval) {
            this.emptyText = ' '
        } else {
            this.emptyText = '暂无数据'
        }
    }

    @Watch('option.emptyText')
    optionEmptyTextChange(newval: any) {
        if (newval === ' ') {
            this.emptyText = ' '
        } else {
            this.emptyText = '暂无数据'
        }
    }

    @Watch('option.data')
    optionDataChange(newval: any) {
        this.$nextTick(() => {
            if (this.option.scrollLoading) {
                this.tableListData = []
                this.isHandleSelectAll = false
                if (this.curNum === 1) {
                    this.fetchScrollData()
                } else {
                    this.isScrollAbled = true
                    this.curNum = 1
                }
            } else {
                // if (this.isPhoneJM) {
                //     this.tableListData = this.getPhoneEncrypt(newval)
                // } else {
                //     this.tableListData = this.option.data
                // }
                this.tableListData = this.option.data
            }
        })
    }

    @Watch('curNum')
    curNumChange(newval: any) {
        this.fetchScrollData(newval)
    }

    // get ...mapGetters({
    //     isPhoneJM: 'global/isPhoneJM'
    // })

    get height() {
        let paginationHeight = this.option.pagination ? 32 : 0
        let h = this.comSize.height - paginationHeight - 10
        return h
    }

    get tableColumn() {
        let column = this.option.column
        let data = this.option.data
        let maxWidthColumn: any = []
        let maxColumnData: any = []
        column.forEach((it: any) => {
            if (it.widthType && data.length) {
                maxWidthColumn.push(it.value)
            }
            if (it.operations) {
                it.operations.map((item: any) => {
                    if (!item.callback) {
                        item.callback = function() {}
                    }
                })
            }
            if (it.value === 'multipleIndex' && data.length) {
                let curPage = this.currentPage
                let curPageSize = this.option.pageOpt.pageSize
                data.forEach((d: any, i: any) => {
                    d.multipleIndex = i + 1 + curPageSize * (curPage - 1)
                })
            }
        })
        maxWidthColumn.forEach((it: any) => {
            let arr: any = []
            let maxLength: any = 0
            data.forEach((d: any) => {
                if (d[it] !== null) {
                    arr.push(d[it].length)
                }
            })
            maxLength = maxs(arr)
            maxColumnData.push({ column: it, value: maxLength })
        })

        maxColumnData.forEach((it: any) => {
            column.forEach((c: any) => {
                if (it.column === c.value) {
                    c.width = it.value * 16 + 100
                }
            })
        })
        return column
    }

    filterHandler(value: any, row: any, column: any) {
        return row[column.property] === value
    }
    tableMouseWheel() {
        $('.el-tooltip__popper.is-dark').css({
            display: 'none'
        })
    }
    tableShowScroll() {
        $('.el-table__body-wrapper').mouseover(() => {
            $('.el-table__body-wrapper').css({
                overflow: 'auto'
            })
        })
        $('.el-table__body-wrapper').mouseout(() => {
            $('.el-table__body-wrapper').css({
                overflow: 'hidden'
            })
        })
    }
    sortReset(sort: any, order: any) {
        let ref: any = this.$refs.multipleTable
        ref.clearSort()
        ref.sort(sort, order)
    }
    setRow(row: any) {
        let ref: any = this.$refs.multipleTable
        ref.setCurrentRow(row)
    }
    handleToggleRowSelection(rows: any, val: any) {
        if (rows) {
            rows.forEach((row: any) => {
                let ref: any = this.$refs.multipleTable
                ref.toggleRowSelection(this.option.data[row], val)
            })
        }
    }
    isString(str: any) {
        return typeof str === 'string' && str.constructor === String
    }
    toggleSelection() {
        let ref: any = this.$refs.multipleTable
        $(ref.$el)
            .find('.el-checkbox__inner')[0]
            .click()
    }
    handleCurrentChange(val: any) {
        this.$emit('handleCurrentPageChange', val)
        this.currentPage = val
    }
    handleSizeChange(val: any) {
        this.$emit('handleSizePageChange', val)
    }
    rowClickJM(row: any) {
        let newRow = cloneDeeps(row)
        let keys = Object.keys(newRow)
        // keys.forEach(key => {
        //     if (this.phoneReg.test(key)) {
        //         newRow[key] = this.phoneMap[newRow[key]]
        //     }
        // })
        // return this.isPhoneJM ? newRow : row
        return row
    }
    cellClick(row: any, column: any, cell: any, event: any) {
        if (this.option.cellClick && isFunction(this.option.cellClick)) {
            // this.option.cellClick(row, column, cell, event)
            this.option.cellClick(this.rowClickJM(row), column, cell, event)
        }
    }
    rowClick(row: any, event: any, column: any) {
        if (this.option.rowClick && isFunction(this.option.rowClick)) {
            // this.option.rowClick(row, event, column)
            let newRow = cloneDeeps(row)
            let keys = Object.keys(newRow)
            keys.forEach(key => {
                // if (this.phoneReg.test(key)) {
                //     newRow[key] = this.phoneMap[newRow[key]]
                // }
                newRow[key] = this.phoneMap[newRow[key]]
            })
            this.option.rowClick(this.rowClickJM(row), event, column)
        }
    }
    operateClick(
        operate: any,
        opeIndex: any,
        opeArr: any,
        scope: any,
        event: any
    ) {
        operate.click(this.rowClickJM(scope.row), scope.$index, event)
    }
    // 加密所有手机号字段
    // getPhoneEncrypt(data) {
    //     if (data && data.length) {
    //         let coData = cloneDeeps(data)
    //         coData.forEach(it => {
    //             let keys = Object.keys(it)
    //             keys.forEach(key => {
    //                 if (this.phoneReg.test(key)) {
    //                     let newPhone = phoneNumChange(it[key])
    //                     this.phoneMap[newPhone] = it[key]
    //                     it[key] = newPhone
    //                 }
    //                 if (this.nameReg.test(key)) {
    //                     let newName = nameChange(it[key])
    //                     this.phoneMap[newName] = it[key]
    //                     it[key] = newName
    //                 }
    //             })
    //         })
    //         return coData
    //     }
    //     return data
    // }
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    handleSelect(val: any) {
        this.$emit('handleSelect', val)
    }
    // 复选框全选事件
    handleSelectAll(val: any) {
        if (val.length) {
            this.isHandleSelectAll = true // 全选
            this.$emit('handleSelectionChange', this.option.data)
        } else {
            this.isHandleSelectAll = false // 取消全选
            this.$emit('handleSelectionChange', [])
        }
    }
    // 复选框change事件
    handleSelectionChange(val: any) {
        this.$emit('handleSelectionChange', val)
        // if (!this.isHandleSelectAll) {
        //     this.$emit('handleSelectionChange', val)
        // } else {
        //     let restData = [].concat(this.option.data); // 列表未显示的数据
        //     restData.splice(0, this.curNum * this.option.scrollListLength);
        //     let newData = val.concat(restData) // 去掉未勾选的数据后重组的数据
        //     this.$emit('handleSelectionChange', newData)
        // }
    }
    setHeight(height: any) {
        let ref: any = this.$refs.pagination
        let paginationHeight = this.option.pagination ? $(ref.$el).height() : 0
        // let paginationHeight = this.option.pagination ? 32 : 0;
        this.heightChange = height - paginationHeight - 10
    }
    setClassName(item: any) {
        let className = item.fixed
            ? 'ga-table__fixed ' + (item.className || '')
            : item.className
        return className
    }
    highlightReplace(scope: any, item: any) {
        let htmlCon = scope.row[item.value]
        item.keys.forEach((it: any) => {
            htmlCon = htmlCon.replace(
                new RegExp(it, 'gm'),
                `<span style='color:#efb414'>$&</span>`
            )
        })
        return htmlCon
    }
    setColumnKeys(col: any, keys: any) {
        this.tableColumn.forEach((it: any) => {
            if (it.value === col) {
                it.keys = keys
            }
        })
    }
    rowStyle(row: any, index: any) {
        let rowStyle, rowHeight
        rowHeight = {
            height: this.option.rowHeight + 'px'
        }
        if (this.option.rowStyle && isFunction(this.option.rowStyle)) {
            rowStyle = this.option.rowStyle(row, index)
        }
        return Object.assign({}, rowHeight, rowStyle)
    }
    fetchScrollData(m: any = 0) {
        /**
         * lmin - lmax 为当前列表的显示范围 默认是 0 - 1
         * scrollListLength 为一个级别的范围显示的条数
         * listLenMin - listLenMax 为table显示的具体数据索引
         * isScrollAbled 为 false 时表示数据条数不够时禁用此方法
         */
        let lmin = m - 1 || 0
        let lmax = m || 1
        let scrollListLength = this.option.scrollListLength || 10
        let listLenMin = lmin * scrollListLength
        let listLenMax = lmax * scrollListLength
        for (let i = listLenMin; i < listLenMax; i++) {
            if (this.option.data[i]) {
                this.tableListData.push(this.option.data[i])
                if (this.isHandleSelectAll) {
                    let ref: any = this.$refs.multipleTable
                    ref.toggleRowSelection(this.option.data[i], true)
                }
            } else {
                this.isScrollAbled = false
            }
        }
    }
    sortChange(e: any) {
        if (this.option.sortChange && isFunction(this.option.sortChange)) {
            this.option.sortChange(e)
        }
    }
    // 多选框默认勾选
    // checked() {
    // 首先el-table添加ref="table"引用标识
    //     let ref: any = this.$refs.table
    //     ref.toggleRowSelection(this.tableData3[0], true) //官网方法，重点。
    // }
}
</script>

<style></style>
