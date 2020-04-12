// 将mpvue的API方法封装成Promise
export default function(url) {
    console.log('封装API成Promise')
    return new Promise((resolve, reject) => {
        mpvue.request({
            url,
            method: 'GET',
            success(info) {
                resolve(info.data)
            },
            fail(error) {
                reject(error)
            }
        })
    })
}