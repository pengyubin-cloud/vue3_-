<template>
    <div class="search-bar">
        <div class="search">
            <div class="select-time">
                <div class="start">
                    <div class="name">住</div>
                    <div class="data">{{startDateStr}}</div>
                </div>
                <div class="end">
                    <div class="name">离</div>
                    <div class="data">{{endDateStr}}</div>
                </div>
            </div>
            <div class="content">
                <div class="keyword">关键字/位置/民宿</div>
            </div>
            <div class="right">
                <i class="icon"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/main";
import { formatMonthDay } from "@/utils/format";
import { storeToRefs } from "pinia";

const mainStore = useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)
const startDateStr = formatMonthDay(startDate.value,"MM.DD")
const endDateStr = formatMonthDay(endDate.value,"MM.DD")
</script>

<style lang="less" scoped>
.search-bar {
    position: fixed;;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    padding: 16px 16px 10px;
    background: #fff;
    z-index: 9;
    .search {
        display: flex;
        background-color: #f7f8fb;
        .select-time {
            display: flex;
            flex-direction: column;
            padding: 8px;
            flex: 1;
            .start,.end {
                display: flex;
                font-size: 12px;
                margin-top: 2px;
                .name {
                    color: #999;
                }
                .data {
                    color:#333
                }
            }
        }
        .content {
            flex: 4;
            padding: 8px;
            display: flex;
            // justify-content: center;
            align-items: center;
            color: #999;
        }
        .icon {
            flex: 1;
            width: 24px;
            height: 24px;
            display: inline-block;
            background-image: url(../../assets/img/home/home-sprite.png);
            background-position: -29px -151px;
            background-size: 207px 192px;
            margin-top: 10px;
            margin-right: 20px;
        }
    }
}
</style>
