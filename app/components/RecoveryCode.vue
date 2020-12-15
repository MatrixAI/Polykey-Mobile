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
      <Label class="text-xl font-bold mb-2" text="Recovery Code" />
      <Label textWrap class="text-sm mb-5" text="Your account recovery code is used to access your account in the event that you forget your master password. Never disclose your recovery code to anyone." />
      <FlexboxLayout class="border-2 rounded-sm p-2 mb-2" flexDirection="row" flexWrap="wrap">
          <StackLayout class="bg-green-100 m-1 p-2 my-border border-2">
              <Label textWrap class="text-green-700 text-base" text="DOOM X"/>
          </StackLayout>
          <StackLayout class="bg-green-100 m-1 p-2 rounded-3xl">
              <Label textWrap class="text-green-700 text-base" text="MAGIC X"/>
          </StackLayout>
          <StackLayout class="bg-green-100 m-1 p-2 rounded-3xl">
              <Label textWrap class="text-green-700 text-base" text="GOODBYE X"/>
          </StackLayout>
          <StackLayout class="bg-green-100 m-1 p-2 rounded-3xl">
              <Label textWrap class="text-green-700 text-base" text="FOX X"/>
          </StackLayout>
          <StackLayout class="bg-green-100 m-1 p-2 rounded-3xl">
              <Label textWrap class="text-green-700 text-base" text="MORNING X"/>
          </StackLayout> 
      </FlexboxLayout>
      <FlexboxLayout flexDirection="row">
        <Button
          @tap="route()"
          horizontalAlignment="left"
          class="ml-0 font-bold text-black bg-white"
          width="150"
          text="REMIND ME LATER"
        />
        <Button
          @tap="route()"
          horizontalAlignment="left"
          class="ml-0 font-bold text-white bg-gray-500"
          width="70"
          text="NEXT"
        />
      </FlexboxLayout>
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

<style scoped lang="scss">
.my-border {
    border-radius: 20;
}
</style>
