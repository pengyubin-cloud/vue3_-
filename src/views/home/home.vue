<template>
    <div class="home" ref="homeRef">
        <HomeNavBar />
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <SearchBox  />
        <Category />
        <SearchBar v-if="isShowSearch" />
        <Content />
    </div>
</template>

<script setup>
import HomeNavBar from '../home/cpns/home-nav-bar.vue'
import SearchBox from '../home/cpns/home-search-box.vue'
import Category from "./cpns/home-categories.vue"
import Content from "../home/cpns/home-content.vue"
import SearchBar from "@/components/search-bar/search-bar.vue"
import HYRequest from '@/service/request/index'
import { ref } from '@vue/reactivity'
import useHomeStore from '@/stores/modules/home'
import  useScroll  from '@/hooks/useScroll'
import { onActivated, watch } from '@vue/runtime-core'


const homeRef = ref()

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()
// 监听window创建滚动
// const scrollListenerHander = () => {
//     // clienHeght屏幕高度；scrollHeight内容高度；scrollTop内容上去高度
//     const clientHeght = document.documentElement.clientHeight 
//     const scrollTop = document.documentElement.scrollTop
//     const scrollHeight = document.documentElement.scrollHeight
//     if(scrollHeight-10  <= scrollTop + clientHeght) {
//         homeStore.fetchHouseListData()
//     }
// }
// onMounted(() => {
//     window.addEventListener("scroll",scrollListenerHander)
// })
// onUnmounted(() => {
//     window.addEventListener("scroll",scrollListenerHander)
// })

// ***在store获取传到子组件
// 获取网络数据
// const hotSuggests = ref([])
// HYRequest.get({
//     url:'/home/hotSuggests'
// }).then(res => {
//     hotSuggests.value = res.data
// })
const { isReachBottom,scrollTop } = useScroll(homeRef)
watch(isReachBottom,(newValue)=> {
    if(newValue) {
        homeStore.fetchHouseListData().then(() => {
            isReachBottom.value = false
        })
    }
})
const isShowSearch = ref(false)
watch(scrollTop,(newValue) => {
    // console.log(newValue)
    // if(newValue > 200){
    //     isShowSearch.value = true 
    // }else {
    //     isShowSearch.value = false
    // }
    // 简便写法
    isShowSearch.value = newValue > 200
})

// 跳转回home时，保留原来的位置
// onActivated(() => {
//     homeRef.value?.scrollTo({
//         top:scrollTop.value
//     })
// })
</script>

<style lang="less" scoped>
.home {
    padding-bottom:65px;
    height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;
    }
.banner {
    img {
        width: 100%;
    }
}

</style>