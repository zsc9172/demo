<template>
    <div class="control">
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src="item" ref="bannerHeight" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                require("../assets/img/control/没钱1.jpg"),
                require("../assets/img/control/没钱2.jpg"),
                require("../assets/img/control/没钱3.jpg"),
                require("../assets/img/control/没钱4.jpg"),
            ],
            bannerHeight: 100,//图片父容器的高度
            screenWidth: 0,//屏幕的宽度
        }
    },
    mounted() {
        this.screenWidth = window.innerWidth;
        this.setSize();
        window.onresize = () => {
            this.screenWidth = window.innerWidth;
            this.setSize();
        };
    },
    methods: {
        setSize: function () {
            // 通过屏幕宽度(图片宽度)计算高度
            this.bannerHeight = 400 / 1920 * this.screenWidth;
        },
    }

}
</script>
<style lang="less" scoped>
.control {
    width: 700px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .el-carousel {
        top: 20%;
    }
    img {
        width: 700px;
        height: 500px;
    }
}
</style>