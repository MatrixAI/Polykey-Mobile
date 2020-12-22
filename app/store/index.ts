import Vuex from "vuex";
import Key from "@/store/modules/Key";
import Peer from "@/store/modules/Peer";
import Secret from "@/store/modules/Secret";
import User from "@/store/modules/User";
import Vault from "@/store/modules/User";

export default new Vuex.Store({
  modules: {
    Key,
    Peer,
    Secret,
    User,
    Vault,
  },
});
