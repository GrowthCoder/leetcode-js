<template>
    <div>
        <!-- 搜索框 -->
        <el-select
            v-loadmore="loadmore"
            v-model="svalue"
            :remote-method="querySearchAsync"
            :disabled="disabled"
            filterable
            remote
            reserve-keyword
            placeholder="请输入"
            @change="handleSelect">
            <el-option
                v-for="(item,index) in options"
                :key="index"
                :label="item.label"
                :value="item.value">
                <ul>
                    <li>
                    {{ item.value.Name }}
                    </li>
                    <li>
                        <span style="float: left;margin-right:40px; color: #8492a6; font-size: 13px;width:100px">{{ item.value.code }}</span>
                        <span style="float: left;color: #8492a6; font-size: 13px;width:200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{ item.value.model }}</span>
                    </li>
                </ul>
            </el-option>
        </el-select>
    </div>
</template>
<script>
import { querylike } from '@/api/repairDetailed'
export default {
    props: {
        row: {
            type: Object,
            default: () => {}
        },
        value: {
            type: String,
            default: () => ''
        },
        disabled: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            options: [],
            svalue: this.value,
            formData: {
                pageIndex: 1,
                pageSize: 20,
                code: null
            }
        }
    },
    watch: {
        // 判断下拉框的值是否有改变
        row(val) {
            console.log(val, '监听器监听value值')
            this.svalue = this.value// ②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        }
    },
    methods: {
        loadmore() {
            this.formData.pageIndex += 1
            const _this = this
            let buffer = []
            querylike(_this.formData).then(res => {
                console.log('返回值', res)
                buffer = res.map(item => {
                    return { value: item, label: `${item.code}` }
                })
                _this.options.push(...buffer)
            })
        },
        querySearchAsync(query) {
            const _this = this
            if (query !== '') {
                _this.formData.materialCode = query
                    querylike(_this.formData).then(res => {
                        console.log('返回值', res)
                        _this.options = res.map(item => {
                            return { value: item, label: `${item.code}` }
                        })
                    })
                } else {
                _this.options = []
            }
        },
        // 下拉框点击事件
        handleSelect() {
            this.svalue = arguments[0].code
            this.$emit('handle', arguments[0], this.row)
        }
    }
}
</script>