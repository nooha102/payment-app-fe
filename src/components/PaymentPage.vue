<template>
  <div>
    <h1>Payment Page</h1>
    <p>Payment Amount: {{ amount }}</p>
    <button @click="processPayment">Pay</button>
    <p v-if="paymentStatus">{{ paymentStatus }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      amount: 1000,
      paymentStatus: null
    };
  },
  methods: {
    async processPayment() {
        // Call initiate-payment API
        const initiateResponse = await axios.post('http://<ip_address>:8000/initiate-payment/');
        
        if (initiateResponse.status === 200) {
          // Call check-payment-status API
          const statusResponse = await axios.post('http://<ip_address>:8000/check-payment-status/');
          
          if (statusResponse.status === 200) {
            this.paymentStatus = 'Payment is successful';
          } else {
            this.paymentStatus = 'Payment failed';
          }
        } else {
          this.paymentStatus = 'Payment initiation failed';
        }
    
    }
  }
};
</script>
