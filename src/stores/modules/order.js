import {getOrderData} from "@/service"
import { defineStore } from "pinia"

const useOrderStore = defineStore("order",{
    state:() => ({
        orderAllDate:{},
        param:"all"
    }),
    actions: {
        async fetchAllOrderData() {
            const res = await getOrderData(this.param)
            this.orderAllDate = res.data
        }
    }
})


export default useOrderStore;