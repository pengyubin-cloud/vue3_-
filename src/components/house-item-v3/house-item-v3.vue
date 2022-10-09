<template>
    <div class="house-item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{itemData.location}}</span>
                </div> 
                <div class="name">{{itemData.houseName}}</div>
                <div class="summary">{{itemData.summaryText}}</div>
                <div class="price">
                    <div class="new">{{"￥"+itemData.finalPrice}}</div>
                    <div class="old">{{"￥"+itemData.productPrice}}</div>
                    <div class="tip">{{itemData?.priceTipBadge?.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    itemData:{
        type:Object,
        default:() => {}
    }
})
</script>

<style lang="less" scoped>
.house-item {
    width: 50%;
    border-radius: 6px;
    overflow: hidden;
    .cover img { 
        width: 100%;
    }
    .info{
        margin: 10px;
        .location {
            font-size: 12px;
            color: #999;
            img {
            width: 12px;
            margin-top: 1px;
        }
        }    
        .name {
            margin: 5px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            color: #666;
        }
        .summary {
            font-size: 12px;
            color: #333;
            margin: 8px 0;
        }
        .price {
            display: flex;
            .new {
                font-size: 14px;
                color: #ff9645;
            }
            .old {
                text-decoration: line-through;
                color: #999;
                font-size: 10px;
                margin: 0 2px;
            }
            .tip {
                color: #fff;
                // display: inline-block;
                // width: 80px;
                // height: 14px;
                padding: 0 6px;
                border-radius: 10px;
                background-image:linear-gradient(270deg,#f66,#ff9f9f) ;
            }
        }
    }
}
</style>
