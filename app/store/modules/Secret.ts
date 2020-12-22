import PolykeyClient from '@/resources/PolykeyClient'

export default {
  namespaced: true,
  state: {
    selectedVaultName: '',
    selectedSecretName: '',
    selectedSecretContent: '',
    secretNames: []
  },
  actions: {
    loadSecretNames: async function({ commit }, vaultName: string) {
      const secretNames = await PolykeyClient.ListSecrets(vaultName)
      commit('setSecretNames', { vaultName, secretNames })
    },
    selectSecret: async function({ commit, state }, secretName?: string) {
      if (secretName) {
        const secretContent = await PolykeyClient.GetSecret({ vaultName: state.selectedVaultName, secretName })
        commit('setSelectedSecret', { secretName, secretContent })
      } else {
        commit('setSelectedSecret', { secretName: '', secretContent: '' })
      }
    },
    updateSecret: async function(
      { commit, state },
      { secretName, secretContent }: { secretName: string; secretContent: string }
    ) {
      const successful = await PolykeyClient.UpdateSecret({
        secretPath: {
          vaultName: state.selectedVaultName,
          secretName
        },
        secretContent: secretContent,
        secretFilePath: ''
      })
      if (successful) {
        commit('setSelectedSecret', { secretName: secretName, secretContent: secretContent })
      }
    },
    deleteSecret: async ({ commit, state }, secretName: string) => {
      await PolykeyClient.DeleteSecret({
        vaultName: state.selectedVaultName,
        secretName
      })
    }
  },
  mutations: {
    setSecretNames: function(state, { vaultName, secretNames }: { vaultName: string; secretNames: string[] }) {
      state.selectedVaultName = vaultName
      state.secretNames = secretNames
    },
    setSelectedSecret: function(state, { secretName, secretContent }: { secretName: string; secretContent: string }) {
      state.selectedSecretName = secretName
      state.selectedSecretContent = secretContent
    }
  },
  getters: {}
}