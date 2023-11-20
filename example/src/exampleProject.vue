<script type="text/javascript">
import seerbit from '../../src/seerbit.vue';
export default {
  components: {
	  seerbit
  },
  data() {
    return {
      publicKey: "SBTESTPUBK_t4G16GCA1O51AV0Va3PPretaisXubSw1",
      fullName: "John Doe",
      email: "johndoe@mail.com",
      amount: "5.00",
    }
  },
  computed: {
    tranref() {
      return Date.now().toString();
    }
  },
  methods: {
    onCallback: function(response) {
      console.log(response)
    },
    onCloseCheckout: function() {
      console.log("checkout closed")
    }
  }
}
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
    />
  </div>
</template>
