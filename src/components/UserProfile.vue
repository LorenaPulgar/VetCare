<template>
    <div class="container">
      <h2 class="mb-4">User Profile</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" class="form-control" v-model="name" />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" />cd
        </div>
  
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Save</button>
      </form>
    </div>
  </template>
  
  <script>
    export default {
      name: 'UserProfile',
      data() {
        return {
          name: '',
          email: '',
        };
      },

    };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  </style>  