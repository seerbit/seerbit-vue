<div align="center">
 <img width="400" align="top" src="https://assets.seerbitapi.com/images/seerbit_logo_type.png">
</div>
<br/>
<h1 align="center">
  <img width="60" align="bottom" src="https://vuejs.org/images/logo.png" alt="VueJS">
   SeerBit
</h1>

# SeerBit Checkout Wrapper for VueJS
Seerbit Vue SDK can be used to integrate the SeerBit payment gateway into your Vue application.
This module was built and tested using VueJS 3.2.13

# Requirements
Register for a merchant account on [Seerbit Merchant Dashboard](https://dashboard.seerbitapi.com) to get started. \
--> Login -> Settings menu -> API Keys menu -> Copy your public key

## Install

```bash
npm install --save seerbit-vue
```

```bash
yarn add seerbit-vue
```

## Properties
| Property | Type | Required | Default | Description |
| :--- | :-- | :-- | :-- | :-- |
| currency | <code>string</code> | Optional | NGN | The currency for the transaction e.g NGN|
| email | <code>string</code> | Required | None | The email of the user to be charged |
mobileNo | <code>string</code> | Optional | None | The mobile number of the user to be charged |
| description | <code>string</code> | Optional | None | The transaction description which is optional |
| fullName | <code>string</code> | Optional | None | The full name of the user to be charged |
| country |  <code>string</code> | Optional | "NG" | Transaction country which can be optional |
| tranref |  <code>string</code> | Required | None | Set a unique transaction reference for every transaction |
| amount |  <code>string</code> | Required | None | The transaction amount in naira |
| callbackUrl |  <code>string</code> | Optional | None | This is the redirect url when transaction is successful |
| publicKey |  <code>string</code> | Required | None | Your Public key or see **Requirements** above to get yours |
| closeOnSuccess |  <code>boolean</code> | Optional | False | Close checkout when trasaction is successful |
| closePrompt |  <code>boolean</code> | Optional | False | Close the checkout page if transaction is not initiated |
| setAmountByCustomer |  <code>boolean</code> | Optional | False | Set to true if you want user to enter transaction amount |
| pocketRef |  <code>string</code> | Optional | None | This is your pocket reference for vendors with pocket |
| vendorId |  <code>string</code> | Optional | None | This is the vendorId of your business using pocket |
| tokenize |  <code>boolean</code> | Optional | False | Tokenize card |
| planId |  <code>string</code> | Optional | None | Subcription Plan ID |
| onCallback |  <code>Method</code> | Optional | None | Callback method if transaction was successful |
| onCloseCheckout |  <code>Method</code> | Optional | None | Callback method if transaction was cancelled |
| buttonText | <code>String</code> | Optional | Pay With SeerBit | Text to be displayed on launch button
| autoCheckout | <code>boolean</code> | Optional | false | Launch checkout automatically if true, or display a pay button if false
| customization |  <code>Object</code> | Optional | None | Customization e.g below

```vue
customization: {
  theme: {
    border_color: "#000000",
    background_color: "#004C64",
    button_color: "#0084A0",
  },
  payment_method: ["card", "account", "transfer", "wallet", "ussd"],
  display_fee: true,
  logo: "logo_url | base64",
}
```

## Usage

```vue
<script type="text/javascript">
import seerbit from "seerbit-vue";
export default {
  components: {
    seerbit,
  },
  data() {
    return {
      publicKey: "SBTESTPUBK_t4G16GCA1O51AV0Va3PPretaisXubSw1",
      fullName: "John Doe",
      email: "johndoe@mail.com",
      mobileNo: "",
      amount: "5.00",
      planId: "",
      description: "",
      productId: "",
      pocketRef: "",
      tokenize: "",
      currency: "NGN",
      customization: {
        theme: {
          border_color: "#000000",
          background_color: "#004C64",
          button_color: "#0084A0",
        },
        payment_method: ["card", "account", "transfer", "wallet", "ussd"],
        display_fee: true, // true
        display_type: "embed", //inline
        logo: "logo_url | base64",
      },
      callbackurl: "",
    };
  },
  computed: {
    tranref() {
      return Date.now().toString();
    },
  },
  methods: {
    onCallback: function (response) {
      console.log(response);
    },
    onCloseCheckout: function () {
      console.log("checkout closed");
    },
  },
};
</script>

<template>
  <div class="container">
    <seerbit
      :amount="amount"
      :email="email"
      :publicKey="publicKey"
      :tranref="tranref"
      :onCallback="onCallback"
      :onCloseCheckout="onCloseCheckout"
      :planId="planId"
      :customization="customization"
      :pocketRef="pocketRef"
      :callbackurl="callbackurl"
      :tokenize="tokenize"
      :description="description"
      :productId="productId"
      :currency="currency"
      :mobileNo="mobileNo"
      :buttonText="buttonText"
    />
  </div>
</template>

<style>
  .seerbitButton {
    align-self: center;
    background-color: #000000;
    color: #ffffff;
    font-weight: 400; 
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 16px;
  }
</style>
```

## License

MIT © [seerbit](https://github.com/seerbit)
