<template>
    <div ref="CesiumRef" class="cesium_container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
// const CesiumToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0OWZkOGZjNC1kYTYxLTRmODctOTQzNC02ZTM0NjlhMTdkMjYiLCJpZCI6MTY3NDc3LCJpYXQiOjE2OTUxOTA0OTd9.PIl4NEUdk7ejD6nZNgi042lFbI_TciNlqEQS-HOzHps";
window.CESIUM_BASE_URL = "./Cesium";

const CesiumRef = ref(null)
let viewer

onMounted(() => {
    viewer = new Viewer(CesiumRef.value, {
        // Cesium Viewer 配置
    });
});

onUnmounted(() => {
    // 销毁 Cesium Viewer 实例
    viewer && viewer.destroy();
});


onMounted(() => {

})
</script>

<style>
.cesium_container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
</style>