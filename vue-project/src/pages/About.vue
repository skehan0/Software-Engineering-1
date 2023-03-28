<template>
  <div class="container-about">
      <div class="row-1">
        <h2 class="text-center mb-4">About Spice</h2>
        <p class="lead">
          Spice is a digital transformation app designed specifically for bars and restaurants. 
          With our app, customers can seamlessly order their drinks directly from their phones, 
          making their experience more enjoyable and efficient.
        </p>
        <p class="lead">
          Our mission is to revolutionize the hospitality industry by providing innovative solutions 
          that enhance the customer experience while streamlining operations for businesses. 
          We are committed to delivering exceptional value to both customers and businesses alike.
        </p>
      </div>
      <div class="row-2">
        <h2 class="text-center mb-4">Contact Info</h2>
        <ul class="list-group list-group-flush lead">
          <li class="list-group-item">
            <span class="fw-bold">Address:</span> 50 Main St, Boston, MA 02110
          </li>
          <li class="list-group-item">
            <span class="fw-bold">Phone:</span> (555) 555-5555
          </li>
          <li class="list-group-item">
            <span class="fw-bold">Email:</span> info@spiceapp.com
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: "About"
}
</script>
<style scoped>
.container-about {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  margin-top: 50px;
}
</style>