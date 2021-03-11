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
        autoCheckout: {
            type: Boolean,
            default: true
        },
        publicKey: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default:"Payment",
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
            default: ""
        },
        amount: {
            type: String,
            required: true
        },
        reference: {
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
        customization: {
            type: Object,
            default: function() {
                return {};
            }
        },
        clientappcode: {
            type: String,
            default: ""
        },
        callbackurl: {
            type: String,
            default: ""
        },
        onCallback: {
            type: Function,
            required: true,
            default: function(response) {}
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
    mounted() {
        if (this.autoCheckout)
            this.SeerBitCheckout();
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
                tranref: this.reference,
                callbackurl: this.callbackurl,
                callback: this.onCallback,
                close: this.onCloseCheckout,
                country: this.country,
                currency: this.currency,
                customization: this.customization,
                clientappcode: this.clientappcode,
                setAmountByCustomer: this.setAmountByCustomer,
                vendorId: this.vendorId,
            };

            window.SeerbitPay(checkoutOptions, this.onCallback, this.onCloseCheckout);
        });
        }
    },
    render:function() {
        return `<button
    v-bind:class="SeerBitCheckoutButton"
    @click="SeerBitCheckout"
  >
    <slot>Checkout with SeerBit</slot>
  </button>`
    }
};
</script>

