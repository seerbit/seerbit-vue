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
| customization |  <code>CustomizationModel</code> | Optional | CustomizationModel | CustomizationMode( borderColor: "#000000", backgroundColor: "#004C64", buttonColor: "#0084A0", paymentMethod:[PayChannel.card, PayChannel.account, PayChannel.transfer, PayChannel.momo], confetti: false , logo: "logo_url or base64") |
| onCallback |  <code>Method</code> | Optional | None | Callback method if transaction was successful |
| onCloseCheckout |  <code>Method</code> | Optional | None | Callback method if transaction was cancelled |

## Usage

```vue
<template>
  <div class="container">
    <seerbit
      :amount="amount"
      :email="email"
      :publicKey="publicKey"
      :tranref="tranref"
      :onCallback="onCallback"
      :onCloseCheckout="onCloseCheckout"
    />
  </div>
</template>
```

## License

MIT © [seerbit](https://github.com/seerbit)
