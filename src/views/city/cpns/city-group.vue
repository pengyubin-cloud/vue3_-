<template>
    <div class="city-group">
        <van-index-bar :sticky="false" :index-list="indexList">
        <!-- <van-index-bar :sticky="false"> -->
            <van-index-anchor index="热门" />
            <div  class="list">
                <template v-for="(city,index) in groupData.hotCities" :key="index">
                    <div class="city"  @click="cityClick(city)">{{city.cityName}}</div>
                </template>
            </div>
             
            <template v-for="(group,index) in groupData.cities" :key="index">
                <van-index-anchor :index="group.group" />
                <template v-for="(city,indey) in group.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="cityClick(city)" />
                </template>
            </template>
        </van-index-bar>

        <!-- <template v-for="(group,index) in groupData.cities" :key="index">
            <div class="group-item">
                <h2 class="title">标题：{{group.group}}</h2>
                <div class="list">
                    <template v-for="(city,indey) in group.cities" :key="indey"> 
                        <div class="city">{{city.cityName}}</div>
                    </template>
                </div>
            </div>
        </template> -->
    </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"
import  useCityStore  from "@/stores/modules/city"
import { useRouter } from "vue-router"

    const props = defineProps({
        groupData:{
            type:Object,
            default:() => ({})
        }
    })

    // a-z报错map
    const indexList = computed(() => {
        const indexs = props.groupData.cities?.map(item => item.group) 
        indexs?.unshift("#")
        return indexs
    }) 

    // 获得城市
    const router = useRouter();
    const cityStore = useCityStore();
    const cityClick = (city) => {
        
        cityStore.currentCity.cityName = city.cityName;
        console.log(cityStore.currentCity);
        router.back();
    }


</script>  

<style lang="less" scoped>
.list {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    padding-right: 20px;
    flex-wrap: wrap;
    .city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        background-color: #fff4ec;
        color: #000;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        margin: 8px 0;
    }
}
</style>
