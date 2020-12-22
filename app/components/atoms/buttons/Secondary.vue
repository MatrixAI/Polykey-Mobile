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
      class: `bg-grey3 rounded-p2 font-opensans text-content1 text-sm font-bold ${this.class}`,
      width: this.width,
    };
    return {
      attributes,
    };
  },
};
</script>

<style scoped lang="scss"></style>
