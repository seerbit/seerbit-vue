<script type="text/javascript">
export default {
  name:"SeerBitCheckout",
  props: {
    version: {
      type: Number,
      default: 2
    },
    seerBitCheckoutButton: {
      type: String,
      default: "SeerBitCheckoutButton"
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
  mounted() {},
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
          console.error('Error loading ' + script.src)
        }
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
    }
  }
};
</script>

<template>
  <div
    :style="{ 
      display: flex,
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: 'white',
      marginLeft: auto,
      marginRight: auto,
    }"
  >
    <button
      :style="{ 
        alignSelf: 'center',
        backgroundColor:'#263a81ee', 
        color: '#ffffff', 
        width: '200px', 
        height: '50px', 
        fontWeight: 800, 
        cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '45%',
        borderRadius: '10px',
        border: '0 transparent',
        fontSize: '16px'
      }"
      v-on:click="SeerBitCheckout">Pay with SeerBit
    </button>
  </div>
</template>