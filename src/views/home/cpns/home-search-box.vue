<template>
    <div class="search-box">
        <!-- 位置 -->
        <div class="location">
            <div class="city" @click="cityClick">{{ cityStore.currentCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <!-- 入住日期选择 -->
       <div class="data-rang-box">
         <div class="date-rang" @click="showClick">
            <div class="start">
                <span class="start_in">入住</span>
                <span class="start_time">{{startDateStr}}</span>
            </div>
            <div class="stay">共{{ staycount }}晚</div>
            <div class="end">
                <span class="end_out">离店</span>
                <span class="end_time">{{endDateStr}}</span>
            </div>
        </div>
        <van-calendar
                v-model:show="showCalendar" 
                @confirm="onConfirm"
                type="range" 
                color="#ff9867"
            />
        <!--  -->
       </div>
       <!-- 关键字 -->
       <div class="item price-person">
            <div class="price">价格不限</div>
            <div class="person">人数不限</div>
       </div>
       <div class="item bottom-message">关键字/位置/民宿</div>
        <!-- 热门推荐 -->
        <div class="item hot-suggest">
            <template v-for="(item,index) in hotSuggests" :key="index">
                <div 
                class="items" 
                :style="{ color: item.tagText.color,background:item.tagText.background.color}"
                >{{item.tagText.text}}</div>
            </template>
        </div>
        <!-- 搜索按钮 -->
        <div class="item search" @click="searchClick">
            <input type="button" value="开始搜索">
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import {formatMonthDay, getDiffDays} from "@/utils/format"
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home"
import useMainStore from "@/stores/modules/main"
import { computed } from "@vue/runtime-core";


//在store直接获取数据
const homeStore = useHomeStore(); 
const {hotSuggests} = storeToRefs(homeStore)
// 入住选择
//1.日期
const mainStore = useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const staycount = ref(getDiffDays(startDate.value,endDate.value))

// 2.日历弹窗
const showCalendar = ref(false)
const onConfirm = (value) => {
    showCalendar.value = !showCalendar;
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    // 修改数据要修改store中的
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    staycount.value = getDiffDays(selectStartDate,selectEndDate)
}
const showClick = () => {
    showCalendar.value = true
}

// 位置/城市
const router = useRouter();
const cityClick = () => {
    router.push("/city")
}

const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("获取位置成功",res);
    },err => {
        console.log("获取位置失败",err)
    },{
        enableHighAccuracy:true,
        timeout:4000,
        maximumAge:0
    })
}

const cityStore = useCityStore();
// const currentCity = storeToRefs(cityStore)

// const searchClick = () => {
//     router.push({
//         path:"/search",
//         query:{
//             startDate:startDate.value,
//             endDate:endDate.value,
//             currentCity:cityStore.currentCity
//         }
//     })
// }



</script>

<style lang="less" scoped>
.location {
    display: flex;
    height: 46px;
    align-items: center;
    padding: 0 20px;
    .city {
        flex: 1;
        color: #333;
    }
    .position {
        width: 82px;
        display: flex;
        color: #333;
        img {
            margin-left: 3px;
            width: 18px;
            position: relative;
            bottom: 2px;
        };
    }
}

.date-rang {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    .start {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .start_in {
            color: #999;
            font-size: 12px;
        }
        .start_time {
            font-size: 15px;
            color: #333;
            margin-top: 5px;
        }
    }
    .stay {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .end {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .end_out {
            color: #999;
            font-size: 12px;
        }
        .end_time {
            font-size: 15px;
            color: #333;
            margin-top: 5px;
        }
    }
    
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 45px;
}
.price-person {
    .price {
        flex: 1;
        margin-left: 26px;
        color: #999;
    }
    .person {
        flex: 1;
        margin-left: 126px;
        color: #999;
    }
}
.bottom-message {
    justify-content: unset;
    color: #999;
    height: 30px;   
}

.hot-suggest {
    flex-wrap: wrap;
    justify-content:unset;
    height: auto;
    margin: 3px 0;
    .items {
        padding: 3px 5px;
        border-radius: 3px;
        margin: 5px 3px;
    }
}

.search {
    input {
        height: 38px;
        width: 100%;
        border-radius: 20px;
        color: #fff;
        font-size: 18px;
        background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
        border: none;
    }
}
</style>
