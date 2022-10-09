import HYRequest from "../request"

export function getDetailInfo(houseId) {
    return HYRequest.get({
        url:"/detail/infos",
        params:{
            houseId
        }
    })
}