import request from '@/common/ajax'

/**
 * 测试接口
 * @param id
 */
export const getMenuList = (id: number) => {
    return request({
        url: '/getMenuList',
        method: 'get',
        data: {
            id
        }
    })
}

/**
 * 测试post
 *
 */
export const getData = () => {
    return request({
        url: '/getData',
        method: 'post'
    })
}
// dashboard/relation 关系图
export const getRelatioData = () => {
    return request({
        url: '/dashboard/relation',
        method: 'post'
    })
}