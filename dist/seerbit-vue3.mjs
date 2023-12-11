import { openBlock, createElementBlock, toDisplayString, resolveComponent, Fragment, createCommentVNode, createVNode } from 'vue';

var script$1 = {
  name:"SeerBitButton",
  props: {
    buttonText: {
      type: String,
      required: false,
      default: "Pay With SeerBit"
    },
  },
};

const _hoisted_1 = { class: "seerbitButton" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", _hoisted_1, toDisplayString($props.buttonText), 1 /* TEXT */))
}

script$1.render = render$1;
script$1.__file = "src/seerbitButton.vue";

var script = {
  name:"SeerBitCheckout",
  components: {
    SeerBitButton: script$1
  },
  props: {
    version: {
      type: Number,
      default: 2
    },
    buttonText: {
      type: String,
    },
    publicKey: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
    },
    vendorId: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    mobileNo: {
      type: String,
      required: false
    },
    fullName: {
      type: String,
      required: false
    },
    amount: {
      type: String,
      required: true
    },
    tranref: {
      type: String,
      required: true
    },
    country: {
      type: String,
      default: "NG"
    },
    currency: {
      type: String,
      default: "NGN"
    },
    planId: {
      type: String,
      required: false,
    },
    pocketRef: {
      type: String,
      required: false,
    },
    setAmountByCustomer: {
      type: Boolean,
      required: false,
      default: false,
    },
    tokenize: {
      type: Boolean,
      required: false,
      default: false
    },
    closePrompt: {
      type: Boolean,
      required: false,
      default: false
    },
    customization: {
      type: Object,
      default: function() {
        return {};
      }
    },
    callbackurl: {
      type: String,
      default: ""
    },
    onCallback: {
      type: Function,
      required: true,
      default: function() {}
    },
    onCloseCheckout: {
      type: Function,
      required: true,
      default: function() {}
    },
    autoCheckout: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      scriptLoaded: null
    };
  },
  created() {
    this.scriptLoaded = new Promise(resolve => {
      this.loadScript(() => {
        resolve();
      });
    });
  },
  mounted() {
    if (this.autoCheckout) {
      this.SeerBitCheckout();
    }
  },
  methods: {
    loadScript(callback) {
      const script = document.createElement("script");
      script.src = `https://checkout.seerbitapi.com/api/v${this.version}/seerbit.js`;
      document.getElementsByTagName("head")[0].appendChild(script);
      if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
          if (
            script.readyState === "loaded" ||
            script.readyState === "complete"
          ) {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = () => {
          callback();
        };
        script.onerror = function() {
          console.error('Error loading ' + script.src);
        };
      }
    },
    SeerBitCheckout() {
      this.scriptLoaded &&
      this.scriptLoaded.then(() => {
        const checkoutOptions = {
          public_key: this.publicKey,
          email: this.email,
          mobile_no: this.mobileNo,
          full_name: this.fullName,
          description: this.description,
          amount: this.amount,
          tranref: this.tranref,
          callbackurl: this.callbackurl,
          callback: this.onCallback,
          close: this.onCloseCheckout,
          country: this.country,
          currency: this.currency,
          customization: this.customization,
          setAmountByCustomer: this.setAmountByCustomer,
          vendorId: this.vendorId,
          tokenize: this.tokenize,
          pocketRef: this.pocketRef,
          planId: this.planId,
          closePrompt: this.closePrompt
        };

        window.SeerbitPay(checkoutOptions, this.onCallback, this.onCloseCheckout);
      });
    },
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SeerBitButton = resolveComponent("SeerBitButton");

  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" <div\n    :style=\"{ \n      display: flex,\n      // width: '100vw',\n      // height: '100vh',\n      // position: 'absolute',\n      // top: 0,\n      // left: 0,\n      // margin: 0,\n      // justifyContent: 'center',\n      // alignItems: 'center',\n      // alignContent: 'center',\n      // backgroundColor: 'white',\n      // marginLeft: auto,\n      // marginRight: auto,\n    }\"\n  > "),
    createVNode(_component_SeerBitButton, {
      buttonText: $props.buttonText,
      onClick: $options.SeerBitCheckout
    }, null, 8 /* PROPS */, ["buttonText", "onClick"]),
    createCommentVNode(" </div> ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script.render = render;
script.__file = "src/seerbit.vue";

export { script as default };
