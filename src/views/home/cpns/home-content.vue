<template>
    <div class="content">
        <h2>热门推荐</h2>
        <div class="homeList">
            <template v-for="item in houseList" :key="item.data.houseId"> 
                <houseItemV3
                v-if="item.discoveryContentType === 3" 
                :item-data="item.data" 
                @click="clickItem(item.data)"
                />
                <houseItemV9
                v-else-if="item.discoveryContentType === 9" 
                :item-data="item.data"
                @click="clickItem(item.data)"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const homeStore = useHomeStore()
const {houseList} = storeToRefs(homeStore)
const router = useRouter()
const clickItem = (item) => {
    router.push("/detail/"+item.houseId)
} 

</script>

<style lang="less" scoped>
.content {
    // z-index: 9;
    padding: 0 10px  20px;
    // margin: 10px 0;
    h2{
        margin: 12px;
    }
    .homeList {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
