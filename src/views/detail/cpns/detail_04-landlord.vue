<template>
    <div class="landlord">
        <detail-section title="房东介绍"  moreText="查看房东主页">
            <div class="top">
                <img :src="landlordData.topScroll" alt="">
            </div>
            <div class="hotelIntro">
                <span class="logo">
                    <img :src="landlordData.hotelLogo" alt="">
                </span>
                <div class="landlordMessage">
                    <div class="name">{{landlordData.hotelName}}</div>
                    <div class="tags">
                        <template v-for="(item,index) in landlordData.hotelTags" :key="index">
                        <div class="tag" :style="{color:'#9b9b9b'}">{{item.tagText.text}}</div>
                    </template>
                    </div>
                </div>
            </div>
            <div class="summary">
                <template v-for="(item,index) in landlordData.hotelSummary" :key="index">
                   <div class="item">
                     <div class="title">{{item.title}}</div>
                    <div class="intro">{{item.introduction}}</div>
                    <div class="tip">{{item.tip}}</div>
                   </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue"

const props = defineProps({
    landlordData:{
        type:Object,
        default:() => ({})
    }
})
</script>

<style lang="less" scoped>
.landlord {
    border-top: 2px solid #f3f4f5;
    .top {
        img {
            width: 100%;
        }
    }
    .hotelIntro {
        display: flex;
        margin-top: 10px;
        .logo {
            width: 60px;
            img {
                width: 55px;
                height: 54px;
            }
        }
        .landlordMessage {
            flex: 1;
            display: flex;
            flex-direction: column;
            .name {
                font-weight: 700;
                display: flex;
                align-items: center;
                font-size: 16px;
                line-height: 18px;
                margin-top: 8px;
            }
            .tags {
                display: flex;
                align-items: center;
                font-size: 12px;
                line-height: 18px;
                margin-top: 4px;
                .tag {
                    margin-right: 4px;
                }
            }
        }
    }
    .summary {
        display: flex;
        padding: 10px 10px;
        justify-content: space-between;
        .item {
            .title {
                font-size: 12px;
                color: #999;
            }
            .intro {
                font-size: 18px;
                font-weight: 700;
                margin: 6px 0;
            }
            .tip {
                font-size: 12px;
                color: #999;
            }
        }
    }
    
}
</style>
