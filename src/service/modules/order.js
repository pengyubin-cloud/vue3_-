import HYRequest from '../request'

export function getOrderData(type){
    return HYRequest.get({
        url:"/order/list",
        params: {
            type
        }
    })
}