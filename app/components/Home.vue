<template>
  <Page>
    <ActionBar class="bg-white w-screen text-left">
      <FlexboxLayout :width="width" class="text-left py-3">
        <Image width="40" src="~/assets/icon-black.png" verticalAlignment="center" />
        <Label
          class="ml-3 text-black text-lg font-bold"
          width="100"
          text="POLYKEY"
          verticalAlignment="center"
        />
      </FlexboxLayout>
    </ActionBar>

    <FlexboxLayout class="page m-5" flexDirection="column">
        <Label class="text-xl font-bold" text="Create Password" />
        <FlexboxLayout class="page mb-5" flexDirection="row">
            <Label class="text-sm" text="Create Password for " />
            <Label class="font-bold text-sm" text="Root Key Pair" />
            <Image width="20" src="~/assets/info.png" verticalAlignment="center" />
        </FlexboxLayout>
        <Label class="font-bold text-base" text="Password" />
        <TextField class="ml-0 mb-5 rounded-sm border-2 p-3" hint="Enter password" />
        <Label class="font-bold text-base" text="Confirm Password" />
        <TextField class="ml-0 mb-5 rounded-sm border-2 p-3" hint="Confirm password" />
        <StackLayout>
            <Button horizontalAlignment="left" class="ml-0 text-white bg-black" width="70" text="Seal" />
        </StackLayout>

    </FlexboxLayout>
  </Page>
</template>

<script>
import {Screen} from "tns-core-modules/platform";

export default {
  computed: {
    width () {
        return `${Screen.mainScreen.widthPixels - 100} px`
    },
    message() {
      return "POLYKEY";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
