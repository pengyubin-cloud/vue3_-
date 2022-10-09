<template>
    <div class="infos">
        <div class="name">{{infosData.houseName}}</div>
        <div class="tags">
            <template v-for="(item,index) in infosData.houseTags" :key="index">
                <span 
                class="item"
                v-if="item.tagText"
                :style="{ color:item.tagText.color,background:item.tagText.background.color }"
                >
                {{item.tagText.text}}
                </span>
            </template>
        </div>
        <div class="comment">
            <div class="left">
                <div class="score">{{infosData.commentBrief.overall}}</div>
                <div class="title">{{infosData.commentBrief.scoreTitle}}</div>
                <div class="brief">{{infosData.commentBrief.commentBrief}}</div>
            </div>
            <div class="right">
                <div class="count">
                    {{infosData.commentBrief.totalCount}}条评论
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="position">
            <div class="left">{{infosData.nearByPosition.address}}</div>
            <div class="right">
                地图.周边
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    infosData:{
        type:Object,
        default:() => ({})
    }
})
</script>

<style lang="less" scoped>
.infos {
    padding: 10px 20px 0;
    .name {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: justify;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 14px;
        .item {
            margin-left: 3px;
        }
    }

    .comment {
        display: flex;
        padding: 10px 0;
        background-color: #f5f7fa;
        .left {
            display: flex;
            width: 70%;
            align-items: center;
            padding: 0 8px;
            .score {
                font-size: 18px;
                font-weight: 700;
            }
            .title {
                font-size: 12px;
                font-weight: 600;
                margin: 0 10px;
            }
            .brief {
                font-size: 12px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            margin-left: 20px;
            color: #ff9645;
            font-size: 12px;
        }
    }

    .position {
        display: flex;
        margin-top: 14px;
        padding: 10px 0;
        background-color: #f5f7fa;
        .left {
            font-size: 14px;
            font-weight: 700;
            width: 70%;
            padding: 0 8px;
        }
        .right {
            font-size: 12px;
            margin-left:20px ;
            color: #ff9645;
        }
    }
}
</style>
