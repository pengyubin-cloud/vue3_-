<template>
    <div class="favor">
        <div class="top">
            <van-nav-bar
            title="我的收藏"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="content"  >
            <template v-for="(item,index) in items?.items" :key="index">
                <!-- {{item.pictureList[0]}} -->
                <div class="item">
                    <div class="pic">
                        <img :src="item.pictureList[0]" alt="">
                        <van-icon class="like" name="like" color="#ff6666" size=26 />
                        <van-icon class="comment" name="other-pay" size=26 color="#ff6666" />
                    </div>        
                    <div class="address">
                        <template v-for="(iten,indey) in item.unitSummeries" :key="indey">
                            <span class="item">{{iten.text}}</span>
                        </template>
                    </div>          
                    <div class="name">
                        {{item.unitName}}
                    </div>
                    <div class="price">
                        <div class="new">{{"￥"+item.allActiveAndRedPacket.everyDayAmount}}</div>
                        <div class="old">{{item.productPrice}}</div>
                        <div class="tip">
                            <template v-for="(itea,indea) in item.allActiveAndRedPacket.tagTitles" :key="indea">
                                <div class="itea">{{itea.text}}</div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { getFavorData } from "@/service/index"
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

const router =  useRouter()

// 返回上一级
const onClickLeft = () => {
    router.back()
}
// 获取数据
const currentIndex = ref("data")
const favorData = ref({})
const items = computed(() => favorData.value[currentIndex.value])

getFavorData().then(res => {
    favorData.value = res.data
})


</script>

<style lang="less" scoped>

.content {
    padding:  10.0012px 19.9988px;
    
    .item {
        border-bottom: 2px solid #f3f4f5;
        .pic {
            position: relative;
            img {
                margin-top: 14px;
                width: 100%;
                border-radius: 10.0012px;
            }
            .like {
                position: absolute;
                color: red;
                z-index: 99;
                right: 18px;
                top: 90px;
            }
            .comment {
                position: absolute;
                z-index: 99;
                right: 18px;
                top: 130.0012px;
            }
        }
    }
    .address {
        color: #999;
        margin: 6px 0;
        font-size: 12px;
        .item {
            color: #eaeaea;
            background-image: linear-gradient(90deg,#3f4954,#3a1154);
            margin: 0 4.0012px;
            border-radius: 10.0012px;
            padding: 1.9988px 4.9988px;
        }
    }
    .name {
        font-size: 13.9988px;
        font-weight: 700;
        padding-bottom: 7.9987px;
    }
    .price {
        display: flex;
        align-items: center;
        padding-bottom: 7.9987px;
        .new {
            color:#ff9853 ;
            font-size: 18px;
        }
        .old {
            color: #999;
            font-size: 12px;
            text-decoration-line: line-through;
            margin: 0 7.9987px;
        }
        .tip {
            display: flex;
            background-image: linear-gradient(90deg,#fb5959,#fb4a4a);
            color: #fefefe;
            border-radius: 10.0012px;
            padding: 3px 6px;
            font-size: 12px;
            line-height: 12px;
            .itea {
                margin-left: 4.0012px;
            }
        }
    }
}
</style>
