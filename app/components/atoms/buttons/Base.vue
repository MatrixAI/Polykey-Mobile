<template>
    <Button v-bind="attributes" />
</template>

  <script>
    export default {
      props: {
        text: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        class: {
          type: String,
          required: true,
        },
      },
      data() {
        const attributes = {
          text: this.text,
          loading: this.loading,
          class: this.class,
          width: this.width,
          height: 50,
        };
        console.log(attributes);
        return {
          attributes,
        };
      },
    };
  </script>

  <style scoped lang="scss"></style>
</template>
