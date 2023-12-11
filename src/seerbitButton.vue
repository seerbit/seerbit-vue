<script>
export default {
  name:"SeerBitButton",
  props: {
    buttonText: {
      type: String,
      required: false,
      default: "Pay With SeerBit"
    },
  },
}
</script>

<template>
  <button class="seerbitButton">{{buttonText}}</button>
</template>

<style>
  .seerbitButton {
    align-self: center;
    background-color: #263a81ee;
    color: #ffffff;
    width: 200px;
    height: 50px; 
    font-weight: 800; 
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0 transparent;
    font-size: 16px;
  }
</style>