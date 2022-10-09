<template>
    <div class="city bar-top" >
        <div class="top">
            <van-search 
            v-model="cityValue" 
            placeholder="城市/区域/位置"
            show-action
            shape="round"
            @cancel="cancelClick"
            />
            <van-tabs v-model:active="tabActive" color="var(--primary-color)">
                <template v-for="(value,key,index) in allCities" :key="index">
                    <van-tab :title="value.title" :name="key" ></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
           <cityGroup  :groupData="currentGroup" />x``
        </div>
    </div>
</template>

<script setup>
import { ref,computed } from "vue"; 
import { useRouter } from "vue-router"
import axios from "axios"
import HYRequest from "@/service/request"
import {getCityAll} from "@/service"
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from "pinia";

import CityGroup from "./cpns/city-group.vue"


const cityValue = ref("")

const tabActive = ref(0) 

const router = useRouter()
const cancelClick = () => {
    router.back()
}
// 网络请求
// axios.get("http://123.207.32.32:1888/api/city/all").then(res => {
//     console.log(res);
// })

// 浅层封装
// HYRequest.get({
//     url:"/city/all"
// }).then(res => {
//     console.log(res);
// }) 

// getCityAll().then(res => {
//     console.log(res);
// }) 

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)


// 数据处理
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.content {
    height: calc(100vh - 98px);
    overflow-y: auto;
}
</style>
