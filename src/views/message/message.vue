<template>
    <div class="message">
            <van-nav-bar
            title="消息中心"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="content">
            <img src="@/assets/img/message/icon_message.png" alt="">
            <div class="message">暂无聊天信息</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.content {
    img {
        width: 100%;
        margin-top: 80px;
    }
    .message {
        width: 100%;
        text-align: center;
    }
}
</style>
