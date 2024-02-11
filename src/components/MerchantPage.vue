<template>
  <div>
    <h1>Scan QR Code</h1>
    <div v-if="qrCodeData">
      <img :src="qrCodeData" alt="QR Code">
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      qrCodeData: null
    };
  },
  created() {
    this.generateQRCode();
  },
  methods: {
    async generateQRCode() {
      try {
        const paymentLink = 'http://<ip_address>:8080/payment'; // Navigate to the payment page
        this.qrCodeData = await QRCode.toDataURL(paymentLink);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    }
  }
};
</script>
