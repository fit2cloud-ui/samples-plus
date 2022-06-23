<template>
  <div class="errPage-container-1">
    <img src="@/assets/404images/error1.png" width="528" alt="403">
    <h2><span class="oops">Oops!</span>服务器崩溃了...</h2>
    <p>{{ authTime }}s 后自动返回首页</p>
    <el-button @click="router.push('/')" round>返回首页</el-button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()

const authTime = ref(0) /*倒计时 计数器*/
function countDown() {
  // 定义10秒
  authTime.value = 10;
  let authTimetimer = setInterval(() => {
    authTime.value--;
    if (authTime.value <= 0) {
      // 倒计时结束之后跳转到首页，也可以自行更改跳转到指定位置
      router.push({ path: "/" });
      clearInterval(authTimetimer);
    }
  }, 1000);
}

onMounted(() => {
  // countDown()
})
</script>

<style lang="scss" scoped>
.errPage-container-1 {
  width: 80%;
  text-align: center;
  margin-top: 70px;
  color: #666666;

  .oops {
    font-size: 32px;
    font-weight: bold;
    color: #e27426;
    margin-right: 10px;
  }
}
</style>
