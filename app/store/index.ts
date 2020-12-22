import { createStore } from "vuex";

import Keys from "@shared/modules/Keys";
import Peers from "@shared/modules/Peers";
import Secrets from "@shared/modules/Secrets";
import Vaults from "@shared/modules/Vaults";
import User from "@shared/modules/User";

export default createStore({
  modules: {
    Keys,
    Peers,
    Secrets,
    Vaults,
    User
  }
});
