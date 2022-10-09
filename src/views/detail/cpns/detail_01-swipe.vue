<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
            <template v-for="(item,index) in swipeData" :key="index">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="props">
                <div class="custom-indicator">{{ props.active }}/{{ props.total }}</div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
const props = defineProps({
    swipeData:{
        type:Array,
        default:() => []
    }
})
</script>

<style lang="less" scoped>
.swipe {

    .swipe-list {
       .item {

            img {
                width: 100%;
            }
       }
    }

    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
