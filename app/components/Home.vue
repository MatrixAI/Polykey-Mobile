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
          class="ml-3 text-black text-lg font-bold font-nunito"
          width="100"
          text="POLYKEY"
          verticalAlignment="center"
        />
      </FlexboxLayout>
    </ActionBar>

    <ScrollView orientation="vertical">
      <FlexboxLayout class="page m-5" flexDirection="column">
        <Label class="text-xl font-bold font-opensans" text="Create Password" />
        <FlexboxLayout class="-mt-1 mb-5" flexDirection="row">
          <Label class="text-sm font-nunito" text="Create Password for " />
          <Label class="font-bold text-sm font-nunito" text="Root Key Pair" />
          <Image
            width="20"
            src="~/assets/info.png"
            verticalAlignment="center"
          />
        </FlexboxLayout>
        <Label class="font-bold text-base font-opensans" text="Password" />
        <TextField
          class="ml-0 mb-5 rounded-p2 border-2 p-3"
          hint="Enter password"
        />
        <Label
          class="font-bold text-base font-opensans"
          text="Confirm Password"
        />
        <TextField
          class="ml-0 mb-5 rounded-p2 border-2 p-3"
          hint="Confirm password"
        />
        <StackLayout>
          <Button
            @tap="route()"
            horizontalAlignment="left"
            class="ml-0 font-opensans font-bold text-base text-white bg-mygreen rounded-p2"
            width="60"
            height="40"
            text="SEAL"
          />
        </StackLayout>
      </FlexboxLayout>
    </ScrollView>
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
      this.$goto("selectKeyNode");
    },
  },
};
</script>

<style scoped lang="scss"></style>
