<script lang="ts">
import { AuthServices } from "../services/auth-services";

const authServices = new AuthServices();
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<button onclick={async () => await authServices.signInWithOAuth("github")}
  >Login</button
>
