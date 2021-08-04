<template>
    <div class="login">
        <div class="loginBox">
            <div class="row">
                <img src="../assets/img/login.png" alt="">
            </div>
            <div class="row">
                <el-input placeholder="用户名" v-model="form.username" clearable>
                </el-input>
            </div>
            <div class="row">
                <el-input placeholder="密码" v-model="form.password" show-password></el-input>
            </div>
            <div class="row">
                <el-button type="primary" @click="toLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/request/api.js'
export default {
    data() {
        return {
            form: {
                username: 'coreshop',
                password: 'coreshop',
            },
            load: {
                lock: true,
                text: 'Loading...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.3)'
            },
        };
    },
    methods: {
        toLogin() {
            if (!this.form.username) {
                this.$message.success('请输入用户名');
                return;
            }
            if (!this.form.password) {
                this.$message.error('请输入密码');
                return;
            }
            const loading = this.$loading(this.load);
            login(this.form).then(res => {
                loading.close();
                if (res.code == 0) {
                    sessionStorage.setItem('token', res.data.token.token_type + ' ' + res.data.token.token);
                    this.$message.success('登录成功');
                    this.$router.push('/control');
                }
            })
        }
    }
};
</script>

<style lang="less" scoped>
.login {
    background: #f6f8fb;
    height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    .loginBox {
        width: 400px;
        height: 340px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .row {
            width: 200px;
            height: 60px;
            img {
                width: 300px;
                height: 80px;
            }
            .el-input {
                width: 345px;
            }
            .el-button {
                width: 345px;
            }
        }
        .row:nth-child(1) {
            height: 90px;
        }
    }
}
</style>