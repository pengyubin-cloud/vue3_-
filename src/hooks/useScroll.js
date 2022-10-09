import { onMounted,onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll() {
    const isReachBottom = ref(false)
    const clientHeght = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const scrollListenerHander = throttle(() => {
        // clienHeght屏幕高度；scrollHeight内容高度；scrollTop内容上去高度
        clientHeght.value = document.documentElement.clientHeight 
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight
        console.log("节流了~")
        if(scrollHeight.value-10  <= scrollTop.value + clientHeght.value) {
            console.log("到底部了")
            isReachBottom.value = true
        }
    },300)

    onMounted(() => {
        window.addEventListener("scroll",scrollListenerHander)
    })
    onUnmounted(() => {
        window.addEventListener("scroll",scrollListenerHander)
    })
    return {
        isReachBottom,scrollTop,clientHeght,scrollHeight
    }
}