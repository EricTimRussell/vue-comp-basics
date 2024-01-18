import { reactive, computed, watch } from "vue";

export function useCounter(){
  const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })
  
  watch(() => counterData.count, (newCount) => {
    if (newCount === 20) {
      alert("You made it to 20!")
    }
  })
  
  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even"
    return "odd"
  })
  
  function increaseCounter(amount) {
    counterData.count += amount
  }
  
  function decreaseCounter(amount) {
    counterData.count -= amount
  }

  return{
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }

}