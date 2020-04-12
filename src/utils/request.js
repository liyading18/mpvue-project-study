// 将mpvue的API方法封装成Promise
export default function(obj) {
    // 处理默认参数的值
    let url = obj.url || ''
    let method = obj.method || 'GET'
    let data  = obj.data || {}
    // 设置基础路径
    let baseUrl = 'https://www.zhengzhicheng.cn'
    url = baseUrl + url
    return new Promise((resolve, reject) => {
        mpvue.request({
            url,
            method,
            data,
            success(info) {
                resolve(info.data)
            },
            fail(error) {
                reject(error)
            }
        })
    })
}