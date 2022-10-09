<template>
    <div class="tab-bar">
        <template v-for="(item,index) in tabbarData" :key="index">
            <div 
                class="tab-bar-item" 
                :class="{ active: currentIndex === index }" @click="itemClick(index,item)"
            >
                <img v-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
                <img v-else :src="getAssetURL(item.image)" alt="">
                <span class="text">{{ item.title }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load.assets.js"
import { ref } from "@vue/reactivity"
import { useRouter } from "vue-router";

const currentIndex = ref(0);
const router = useRouter();
const itemClick = (index,item) => {
    currentIndex.value = index;
    router.push(item.path)
}

</script>

<style lang="less" scoped>
.tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    display: flex;

    border-top: 1px solid #f3f3f3;

    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.active {
            color: #ff9857;
        }

        img {
            width: 36px;
        }
    }

}


</style>
