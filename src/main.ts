import "./app.css";
import App from "./App.svelte";

const target = document.getElementById("app");
if (!target || !(target instanceof Element)) {
  throw new Error("Failed to find target element with id 'app'");
}

const app = new App({
  target,
});

export default app;
