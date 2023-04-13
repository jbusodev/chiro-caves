<template>
  <div class="min-h-screen">
    <div class="flex items-center container mx-auto">
      <div class="max-w-md mx-auto static max-md:absolute z-0">
        <!-- iframe google map -->
        <div class="">Emplacement carte</div>
      </div>
      <!-- Form Contact -->
      <div
        class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm z-10"
      >
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">Contact</h1>
          <p class="text-gray-400 dark:text-gray-400">
            Remplissez les champs ci-dessous pour nous envoyer un message.
          </p>
        </div>
        <div class="m-7">
          <form @submit.prevent="submitForm">
            <input
              id=""
              type="checkbox"
              name="botcheck"
              style="display: none"
            />
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Nom Complet</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Adresse Email</label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
              />
            </div>
            <div class="mb-6">
              <label
                for="phone"
                class="text-sm text-gray-600 dark:text-gray-400"
                >N° de téléphone (facultatif)</label
              >
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                name="phone"
                placeholder="+41 32 841 42 66"
                class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Votre Message</label
              >

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                name="message"
                placeholder="Votre Message"
                class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-primary-700 hover:bg-primary-900 rounded-md focus:bg-primary-700 focus:outline-none"
              >
                Envoyer
              </button>
            </div>
            <p
              :class="`text-base text-center 
  
                ${status === 'success' ? 'text-green-500' : ''}
                 ${status === 'error' ? 'text-red-500' : ''}
                 ${status === '' ? 'text-gray-4500' : ''}
                 `"
            >
              {{ result }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Let's test that fkr! -->
<script setup lang="ts">
const form = {
  access_key: "3e441c11-5e3e-4b1c-b75a-809b4ee8eadf",
  subject: "Web3Forms - ChiroCaves",
  name: "",
  email: "",
  phone: "",
  message: "",
};

let result = "";
let status = "";

interface ResponseData {
  status: number;
  data: { message: string };
}

const submitForm = async () => {
  result = "Veuillez Patienter...";

  try {
    const response = await useFetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const responseData = response.data as unknown as ResponseData; // Explicit type assertion - unknown is to account for _AsyncData from useFetch.

    console.log(responseData);
    result = responseData.data.message;

    if (responseData.status === 200) {
      status = "success";
    } else {
      console.log(responseData);
      status = "error";
    }
  } catch (error) {
    console.log(error);
    status = "error";
    result = "Something went wrong!";
  } finally {
    form.name = "";
    form.email = "";
    form.phone = "";
    form.message = "";

    setTimeout(() => {
      result = "";
      status = "";
    }, 5000);
  }
};
</script>
