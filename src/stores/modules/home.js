import {defineStore} from "pinia"
import {getHomeHotSuggests,getCategories,getHouseList} from "@/service"

const useHomeStore = defineStore("home",{
    state:() => ({
        hotSuggests:[],
        categories:[],
        currentPage:1,
        houseList:[]
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
            // console.log(res.data);
        },
        async fetchCategoriesData() {
            const res = await getCategories()
            this.categories = res.data
            // console.log(res)
        },
        async fetchHouseListData() {
            const res = await getHouseList(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++;
        }
    }
})
export default useHomeStore