import HYRequest from "../request"


export function getFavorData() {
    return HYRequest.get({
        url:"/favor/list"
    })
}