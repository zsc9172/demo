<template>
    <div class="main">
        <search>
            <el-input placeholder="请输入账号" v-model="from.userName" clearable size="small"></el-input>
            <el-input placeholder="请输入昵称" v-model="from.nickName" clearable size="small"></el-input>
            <el-input placeholder="请输入手机号" v-model="from.phone" clearable size="small"></el-input>
        </search>
        <div class="content">
            <div class="operation">
                <el-button type="primary" size="small">添加数据</el-button>
            </div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="id" label="用户id" width="150">
                </el-table-column>
                <el-table-column prop="userName" label="账号" width="120">
                </el-table-column>
                <el-table-column prop="nickName" label="昵称" width="120">
                </el-table-column>
                <el-table-column prop="phone" label="手机号" width="120">
                </el-table-column>
                <el-table-column prop="address" label="角色" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="状态" width="120">
                </el-table-column>
                <el-table-column prop="createTime" label="注册时间" width="300">
                </el-table-column>
                <el-table-column prop="updateTime" label="状态" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="修改时间" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import search from '@/components/public/search.vue'
import { getUserList, getUserEdit } from '@/request/api'
export default {
    components: {
        search
    },
    data() {
        return {
            from: {
                page: 1,
                limit: 10,
                userName: '',
                nickName: '',
                phone: '',
            },
            tableData: [],
            total: 0,
            user: { id: 1 }
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            getUserList(this.from).then(res => {
                if (res.code === 0) {
                    this.tableData = res.data
                    this.total = res.count
                }
            })
            //  getUserEdit(this.user).then(res => {
            //     if (res.code === 0) {
            //         // this.tableData = res.data
            //         // this.total - res.count
            //         console.log(res.data)
            //     }
            // })
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    height: 100%;
    .content {
        margin-top: 10px;
        background: #fff;
        height: calc(100% - 56px);
        padding: 10px;
        .operation {
            height: 40px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
        }
    }
}
</style>