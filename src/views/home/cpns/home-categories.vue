<template>
    <div class="categories ">
        <template v-for="item in categories" :key="item.id">
            <div class="category">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{item.title}}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)


</script>

<style lang="less" scoped>
.categories {
    display: flex;
    height: 65px;
    overflow-x: auto;
    margin: 10px 0;
    padding: 0 10px;
    &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
    }
    .category {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-shrink: 0;
        width: 70px;
    }
    img {
        width: 32px;
        height: 32px;
    }
    .text {
        font-size: 12px;
        margin-top: 5px;
    }

}
</style>
