<template>
  <BaseButton v-bind="attributes" />
</template>

<script>
import BaseButton from "@/components/atoms/buttons/Base";

export default {
  components: {
    BaseButton,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  data() {
    const attributes = {
      text: this.text,
      loading: this.loading,
      class: `bg-primary1 rounded-p2 font-opensans text-white text-sm font-bold ${this.class}`,
      width: this.width,
    };
    return {
      attributes,
    };
  },
};
</script>

<style scoped lang="scss"></style>
