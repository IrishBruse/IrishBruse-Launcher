// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
window.wailsbindings = {"main":{"App":{"Greet":{"name":"main.App.Greet","inputs":[{"type":"string"}],"outputs":[{"type":"string"}]},"ShowDialog":{"name":"main.App.ShowDialog"},"Test":{"name":"main.App.Test","inputs":[{"type":"string"}],"outputs":[{"type":"string"}]}}}};
const go = {
  "main": {
    "App": {
      /**
       * Greet
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<string>}  - Go Type: string
       */
      "Greet": (arg1) => {
        return window.go.main.App.Greet(arg1);
      },
      /**
       * ShowDialog
       * @returns {Promise<void>} 
       */
      "ShowDialog": () => {
        return window.go.main.App.ShowDialog();
      },
      /**
       * Test
       * @param {string} arg1 - Go Type: string
       * @returns {Promise<string>}  - Go Type: string
       */
      "Test": (arg1) => {
        return window.go.main.App.Test(arg1);
      },
    },
  },

};
export default go;