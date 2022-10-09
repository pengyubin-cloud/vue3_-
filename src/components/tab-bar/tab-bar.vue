<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
            <template v-for="(item,index) in tabbarData" :key="index">
                <van-tabbar-item :to="item.path" >
                    <span>{{item.title}}</span>
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
                        <img v-else :src="getAssetURL(item.imageActive)" alt="">
                    </template>
                </van-tabbar-item> 
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load.assets.js"
import { ref } from "@vue/reactivity"
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";

// 监听路由改变时，找到对应的索引
const currentIndex = ref(0);
const route = useRoute()
watch(route,(newRoute) => {
    const index = tabbarData.findIndex((item) => item.path === newRoute.path)
    if (index === -1) return
    currentIndex.value = index
})


</script>

<style lang="less" scoped>
.tab-bar {
    height: 50px;
    img {
        height: 30px;
    }
}


</style>
