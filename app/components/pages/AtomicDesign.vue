<template>
  <Page>
    <StackLayout>
      <Label text="ATOMIC DESIGN" />
      <PPrimaryButton text="PRIMARY BUTTON" width="150" />
      <PSecondaryButton text="SECONDARY BUTTON" width="200" />
    </StackLayout>
  </Page>
</template>

<script>
import PPrimaryButton from "@/components/atoms/buttons/Primary";
import PSecondaryButton from "@/components/atoms/buttons/Secondary";

export default {
  components: {
    PPrimaryButton,
    PSecondaryButton,
  },
};
</script>
