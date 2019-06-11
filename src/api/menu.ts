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
