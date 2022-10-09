<template>
    <div class="order">
        <div class="top">
             <van-nav-bar
            title="订单列表"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
            />
            <!-- <div v-if="orderNumber">{{orderNumber[0]}}</div> -->
        </div>
        <div class="content">
            <template v-for="(item,index) in orderData?.orders" :key="index">
                <div class="item">
                    <div class="name">
                        <span class="text">{{item.unitName}}</span>
                        <span class="statusDesc">{{item.orderStatusDesc}}</span>
                    </div>
                    <div class="cover">
                        <img :src="item.unitPicture" alt="">
                        <div class="data">
                            <div class="start section">
                                <div class="month">{{item.checkInDate}}</div>
                                <div class="weekend">周三{{item.checkInLatestTime}}</div>
                            </div>
                            <div class="left">→</div>
                            <div class="end section">
                                <div class="month">{{item.checkOutDate}}</div>
                                <div class="weekend">周四{{item.checkOutLatestTime}}</div>
                            </div>
                            <div class="line">*</div>
                            <div class="price section">
                                <div class="text">支付总价</div>
                                <div class="prepay">{{"￥"+item.prepayAmount}}</div>
                            </div>
                        </div>
                    </div>
                    <template v-if="item.summary">
                        <div class="summary" >
                            <span class="endTime">
                                <van-icon name="warning-o" />
                                <span class="text">29分</span>
                                {{item.summary}}
                            </span>
                            <span class="relation">联系房东</span>
                            <span class="pay">去支付</span>
                        </div>
                    </template>
                    <template v-else>
                         <div class="cancel" >
                            <span class="delete">删除</span>
                            <span class="preview">再次预定</span>
                        </div>    
                    </template>                    
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import useOrderStore from "@/stores/modules/order"
import { computed } from "@vue/runtime-core"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import {formatMonthDay} from "@/utils/format"
const router = useRouter()
const arr = []
const orderStore = useOrderStore()
const {orderAllDate} = storeToRefs(orderStore)

const onClickLeft = () => {
    router.back()
}
orderStore.fetchAllOrderData()
const orderData  = computed(() => orderAllDate?.value.data)
const orderNumber = computed(() => orderData.value?.orders.map((item) => {
        // arr.push(item.orderNumber)
        return item = item.orderNumber 
    }))
    // console.log(...orderNumber.keys())
// console.log(arr);
</script>

<style lang="less" scoped>
.order {
    .content {
        border-top: 4px solid #f5f6f7;
        padding: 10px 20px;
        .item {
            border-bottom: 4px solid #f5f6f7;
            .name {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                .text {
                    width: 60%;
                    height: 14px;
                    line-height: 14px;
                    font-size: 14px;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
                .statusDesc {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 17px;
                    color: #ff9645;
                    line-height: 12px;
                    font-weight: 600;
                }
            }
        }
        .cover {
            position: relative;
            img {
                width: 100%;
                border-radius: 10px;
            }
            .data {
                position: absolute;
                width: 100%;
                background-color: rgba(0, 0, 0, .6);
                height: 50px;
                right: 0;
                left: 0;
                bottom: 0;
                border-radius: 0 0 10px 10px;
                color: #f5f6f7;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .section {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                }
                .month {
                    margin-bottom: 4px;
                }
                .left {
                    color: #ff9645;
                    font-size: 20px;
                    font-weight: 700;
                }
                .price {
                    .prepay {
                        color: #ff9645;
                        font-size: 16px;
                    }
                }
            }
        }
        .summary {
            margin: 14px 0;
            .endTime {
                text-align: center;
                font-size: 14px;
                .text {
                    color: #ff9645;
                    margin-left: 4px;
                }
            }
            .relation {
                margin-left: 8%;
                padding: 2px 8px;
                border:1px solid #999;
                border-radius: 6px;
                color: #999;
            }
            .pay {
                padding: 2px 10px;
                background: #ff9645;
                color: #fff;
                border-radius: 6px;
                margin-left: 4px;
                border: 1px solid #ff9645;
            }

        }
        .cancel {
            display: flex;
            justify-content: flex-end;
            margin: 14px 0;
            .delete {
                padding: 2px 8px;
                border:1px solid #999;
                border-radius: 6px;
                color: #999;
                margin-right: 10px;
            }
            .preview {
                padding: 2px 10px;
                background: #ff9645;
                color: #fff;
                border-radius: 6px;
                margin-left: 4px;
                border: 1px solid #ff9645;
                margin-right: 10px;
            }
        }
    }
}
</style>
