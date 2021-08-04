<template>
    <div class="search">
        <slot></slot>
        <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
    </div>
</template>

<style lang="less" scoped>
.search {
    height: 46px;
    background: #fff;
    line-height: 46px;
    padding: 0 5px;
    .el-input {
        width: 150px;
        margin-right: 15px;
    }
}
</style>