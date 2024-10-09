import { defineCustomElement } from "vue";
import MyCounter from "./index.vue";

// https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue
customElements.define(
  "my-counter",
  defineCustomElement({
    ...MyCounter,
    styles: [
      `
span,
button {
  font-size: 200%;
}

span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}`,
    ],
  })
);
