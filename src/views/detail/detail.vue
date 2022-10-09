<template>
    <div class="detail">
        <van-nav-bar
            title="房屋详情"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="main" v-if="mainPart">
            <detaiSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
            <detaiInfos :infos-data="mainPart.topModule" />
            <detailFacility :house-facility="dynamicModule?.facilityModule?.houseFacility" />
            <detailLandlord :landlord-data="landlordModule"/>
            <detailComment :comment="dynamicModule?.commentModule" />
            <detailRules  :order-rules="detailInfos.mainPart.dynamicModule.rulesModule.orderRules" />
            <detailIntro :intro="detailInfos.mainPart.introductionModule" />
        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">宏图旅途，永无止境</div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getDetailInfo } from "@/service"
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

import detaiSwipe from "../detail/cpns/detail_01-swipe.vue"
import detaiInfos from "..//detail/cpns/detail_02-infos.vue"
import detailFacility from "../detail/cpns/detail_03-factility.vue"
import detailLandlord from "../detail/cpns/detail_04-landlord.vue"
import detailComment from "../detail/cpns/detail_05-comment.vue"
import detailRules from "../detail/cpns/detail_06-rules.vue"
import detailIntro from "../detail/cpns/detail_07-intro.vue"

const route = useRoute()
const router = useRouter() 
const onClickLeft = () => {
    router.back()
} 
const houseId = route.params.id
const detailInfos = ref({})
// 数据拆解
const mainPart = computed(() => detailInfos.value?.mainPart)
 const dynamicModule = computed(() => detailInfos.value?.mainPart?.dynamicModule)
 const landlordModule = computed(() => detailInfos.value?.mainPart?.dynamicModule?.landlordModule)
getDetailInfo(houseId).then(res => {
    detailInfos.value = res.data
})

</script>

<style lang="less" scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    img {
        width: 30%;
        margin: 10px 0;
    }
    .text {
        margin-bottom: 30px;
        color: #999;
        font-size: 12px;
    }
}
</style>
