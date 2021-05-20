module.exports = {
    devServer:{
        proxy:{
            "/index":{
                target:"http://localhost:8089",
                        changeOringin:true,
                        pathRewrite:{
                    '/index':'/index'
                }
            }
        }
    }
}