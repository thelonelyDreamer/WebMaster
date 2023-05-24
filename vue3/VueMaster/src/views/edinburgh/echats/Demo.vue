<template>
    <e-charts class="chart" :option="option" />
</template>

<script lang="ts" setup>
import { ref, computed} from 'vue'
const data = ref([
    { value: 50, name: 'A' },
    { value: 50, name: 'B' },
    { value: 50, name: 'C' },
    { value: 50, name: 'D' },
    { value: 50, name: 'E' },
])
setInterval(() => {
    data.value = data.value.map(item => ({
        ...item,
        value: Math.random() * 100
    }))
}, 1000)

const option = computed(() => {
    return {
        xAxis: {
            type: 'category',
            data: data.value.map(d => d.name)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.value.map(d => d.value),
                type: 'line'
            }
        ]
    }
})

</script>

<style scoped>
.chart {
    width: 300px;
    height: 200px;
}
</style>