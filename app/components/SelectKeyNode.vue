<template>
  <Page>
    <ActionBar class="bg-white w-screen text-left">
      <FlexboxLayout :width="width" class="text-left py-3">
        <Image
          width="40"
          src="~/assets/icon-black.png"
          verticalAlignment="center"
        />
        <Label
          class="ml-3 text-black text-lg font-bold"
          width="100"
          text="POLYKEY"
          verticalAlignment="center"
        />
      </FlexboxLayout>
    </ActionBar>

    <FlexboxLayout class="m-5" flexDirection="column">
      <Label class="text-xl font-bold mb-5" text="Select A Key Node" />
      <FlexboxLayout flexDirection="row">
        <Label class="font-bold text-sm" text="KEYNODE " />
        <Image width="20" src="~/assets/info.png" verticalAlignment="center" />
      </FlexboxLayout>
      <TextField class="ml-0 mb-5 rounded-sm border-2 p-3" hint="~/polykey" />
      <Label class="font-bold text-sm" text="PASSWORD" />
      <TextField
        class="ml-0 mb-5 rounded-sm border-2 p-3"
        hint="Confirm password"
      />
      <StackLayout>
        <Button
          @tap="route()"
          horizontalAlignment="left"
          class="ml-0 font-bold text-white bg-black"
          width="90"
          text="UNSEAL"
        />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import { Screen } from "tns-core-modules/platform";

export default {
  computed: {
    width() {
      return `${Screen.mainScreen.widthPixels - 100} px`;
    },
  },
  methods: {
    route() {
      this.$goto("recoveryCode");
    },
  },
};
</script>

<style scoped lang="scss"></style>
