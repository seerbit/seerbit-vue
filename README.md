<div align="center">
 <img width="200" align="top" src="https://res.cloudinary.com/dy2dagugp/image/upload/v1571249658/seerbit-logo_mdinom.png">
</div>

<h1 align="center">
  <img width="60" align="bottom" src="https://vuejs.org/images/logo.png" alt="VueJS">
   SeerBit
</h1>

# SeerBit Checkout Wrapper for VueJS

# Requirements
This module was built and tested using VueJS 2.6.7

## Get Started

A simple way to add SeerBit to your VueJS application

## Install

```bash
npm install --save seerbit-vuejs
```

```bash
yarn add seerbit-vuejs
```

## Usage

```vue
<template>
    <div class="container">
            <seerbit
                    :amount="amount"
                    :email="email"
                    :publicKey="publicKey"
                    :reference="reference"
                    :onCallback="onCallback"
                    :onCloseCheckout="onCloseCheckout"
                    :autoCheckout="false"
            >
            Checkout with SeerBit
            </seerbit>
    </div>
</template>

<script type="text/javascript">
    import seerbit from 'seerbit-vuejs';
    export default {
    components: {
        seerbit
    },
    data(){
        return{
          publicKey: "SBTESTPUBK_XeKUDcFUGw1kmEfanjgp0iLviCseMX2N",
          fullName: "John Doe",
          email: "johndoe@mail.com",
          amount: "200000.00"
        }
    },
    computed: {
        reference(){
        return Date.now().toString();
      }
    },
    methods: {
        onCallback: function(response){
        console.log(response)
      },
        onCloseCheckout: function(){
          console.log("checkout closed")
      }
    },

    }
</script>
<style>
    .container {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .SeerBitCheckoutButton{
        background-color: #263a81;
        color: #ffffff;
        border: 0 transparent;
        width: 250px;
        height: 50px;
        font-weight: 800;
        cursor: pointer;
    }
</style>


```

Please checkout <a href='https://doc.seerbit.com'>Seerbit Documentation</a> for other available options you can add to the tag

## License

MIT © [seerbit](https://github.com/seerbit)
