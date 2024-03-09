<template>
	<div class="login-container">
		<button class="login-button" @click="handleGoogleLogin">Login with Google</button>
	</div>
</template>



<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import fb from '../database/index.js';

export default {
  name: 'Login',
  methods: {
    handleGoogleLogin() {
      const auth = getAuth(fb);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // User is signed in, you can redirect to home or dashboard page
        //   this.$router.push('/');
		console.log(result);
        }).catch((error) => {
          // Handle Errors here.
          console.error(error);
        });
	}}}
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f5f5f5;
}

.login-button {
	padding: 10px 20px;
	font-size: 1.2em;
	border: none;
	border-radius: 5px;
	background-color: #4285f4;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.login-button:hover {
	background-color: #2b78e4;
}
</style>
