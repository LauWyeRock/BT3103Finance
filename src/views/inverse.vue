<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Hi</h1>
    <button @click="me">Try</button>
  </div>
</template>

<script>
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: process.env.VUE_APP_OPENAI_ORG_KEY,
  apiKey: process.env.VUE_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default {
  methods: {
    async me() {
      const gptCompletion = await openai.createCompletion("text-davinci-001", {
        prompt: `Jim Cramer recommends selling the following stock tickers: `,
        temperature: 0.7,
        max_tokens: 32,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(gptCompletion.data())
    },
  },

}

</script>

<style></style>
