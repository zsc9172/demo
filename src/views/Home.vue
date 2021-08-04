<template>
    <div class="home">
        <div class="lifeMain" :style="{width:isCollapse?'65px':'240px'}">
            <div class="logo">{{isCollapse?'...':'核心商城系统'}}</div>
            <div class="leftNav">
                <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router background-color="#28333e" text-color="#f8f8f8" :default-active="activeIndex">
                    <el-submenu :index="item.id+''" v-for="item in menus" :key="item.id">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item :index="childItem.path" v-for="childItem in item.children" :key="childItem.id">
                            <template slot="title">
                                <span>{{childItem.title}}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
        <div class="rightMain">
            <div class="header">
                <div class="collapse"><i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="toggleCollapse"></i></div>
                <div class="operation">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{nickName}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>基本资料</el-dropdown-item>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="breadcrumb" v-if="isBreadcrumb">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/control' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{parentMenu}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{childrenMenu}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import menus from "@/util/menus.js";
import { getUserInfo } from "@/request/api.js"
export default {
    data() {
        return {
            menus: [],
            isCollapse: false,
            activeKey: '',
            panes: [],
            parentMenu: '',
            childrenMenu: '',
            activeIndex: '/control',
            isBreadcrumb: false,
            nickName: '管理员'
        }
    },
    components: {

    },
    created() {
        this.menus = menus
        this.activeIndex = this.$route.path
        this.changeBreadcrumb(this.$route.path)
        getUserInfo().then(res => {
            if (res.code == 0) {
                this.nickName = res.data.nickName
            }
        })
    },
    methods: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        changeBreadcrumb(path) {
            if (path == '/control') {
                this.isBreadcrumb = false
            }
            else {
                this.isBreadcrumb = true
            }
            this.menus.forEach(item => {
                let children = item.children.find(children => children.path === path)
                if (children) {
                    this.parentMenu = item.title
                    this.childrenMenu = children.title
                    return false
                }
            })
        },
        logout() {
            this.$confirm('确认退出吗?', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                sessionStorage.removeItem('token');
                // this.$router.push('/login');
                location.reload()
            }).catch(() => {

            })
        },
        handleCommand(command) {
            console.log(command)
            switch (command) {
                case 'logout':
                    this.logout()
                    break

            }
        }

    },
    watch: {
        $route(to, from) {
            this.changeBreadcrumb(to.path)
        },
    }
}
</script>

<style lang="less" scoped>
@mainColor: #009688;
@fontColor: #f8f8f8;
.home {
    display: flex;
    height: 100%;
    .lifeMain {
        width: 240px;
        .logo {
            background: @mainColor;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            color: @fontColor;
            letter-spacing: 2px;
        }
        .leftNav {
            background: #28333e;
            height: calc(100% - 60px);
            .el-menu {
                border-right: 1px solid #28333e;
            }
        }
    }
    .rightMain {
        flex-grow: 1;
        .header {
            height: 60px;
            background: @mainColor;
            display: flex;
            justify-content: space-between;
            .collapse,
            .operation {
                width: 80px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 18px;
                color: @fontColor;
            }
            .operation {
                width: 120px;
                margin-right: 20px;
            }
            .el-dropdown-link {
                cursor: pointer;
                color: @fontColor;
            }
        }
        .breadcrumb {
            background: #fff;
            height: 32px;
            padding-left: 10px;
            .el-breadcrumb {
                line-height: 0;
                height: 32px;
                line-height: 32px;
            }
        }
        .body {
            height: calc(100% - 92px);
            padding: 10px;
            background: #ebeef5;
        }
    }
}
</style>
