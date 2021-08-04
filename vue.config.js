module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8070,
        /* 使用代理 */
        // proxy: {
        //     "/api": {
        //         /* 目标代理服务器地址 */
        //         target: "https://admin.coreshop.corecms.net",
        //         /* 允许跨域 */
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             "^/api": ""
        //         }
        //     },
        // }
    },
    css: {
        loaderOptions: {
            less: {
                additionalData: `@import "@/assets/main.less"`
            }
        }
    }
}