<template>
    <!-- Web3Forms Popup Widget Starts here -->
    <div  id="web3forms__widget" x-data="{ open: true }"> 
        <!-- Widget fixed -->
      <div
        id="w3f__widget--content"
        x-show="open"
        x-transition:enter-start="opacity-0 translate-y-5"
        x-transition:enter="transition duration-200 transform ease"
        x-transition:leave="transition duration-200 transform ease"
        x-transition:leave-end="opacity-0 translate-y-5"
        class="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md"
        @click.away="open = false"
      >
        <!-- En-tête widget -->
        <div class="flex p-5 flex-col justify-center items-center h-32 bg-primary-700">
            <h3 class="text-lg text-white">How can we help?</h3>
            <p class="text-white opacity-70">We usually respond in a few hours</p>
        </div>
        <!-- Formulaire -->
        <div class="bg-gray-50 flex-grow p-6"> 
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                <label
                    for="full_name"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Nom Complet</label
                >
                <input
                    type="text"
                    name="name"
                    id="full_name"
                    placeholder="John Doe"
                    required
                    class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
                />
                <div
                    class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                    Veuillez sai votre nom complet.
                </div>
                </div>
                
                <div class="mb-4">
                <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >Adresse Email</label
                >
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
                />
                <div class="hidden empty-feedback text-red-400 text-sm mt-1">
                    Veuillez saisir votre adresse email.
                </div>
                <div class="hidden invalid-feedback text-red-400 text-sm mt-1">
                    Veuillez saisir une adresse email valide.
                </div>
                </div>
                <!-- Message -->
            <div class="mb-4">
                <label
                for="message"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Votre Message</label
                >
                <textarea
                rows="3"
                name="message"
                id="message"
                placeholder="Your Message"
                class="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-700"
                required
                ></textarea>
                <div
                class="hidden empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                Veuillez saisir votre message.
                </div>
            </div>
            <!-- Bouton envoyer -->
            <div class="mb-3">
                <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-primary-500 rounded-md focus:bg-primary-700 focus:outline-none"
                >
                Envoyer Message
                </button>
            </div>
            <p class="text-xs text-center text-gray-400" id="result">
                <span>Powered by <a href="https://Web3Forms.com" class="text-gray-600" target="_blank" rel="noopener noreferrer">Web3Forms</a></span>
            </p>
            </form>
        </div>
      </div>
      <!-- Bouton toggle widget -->
      <button
        id="w3f__widget--btn"
        class="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-primary-700 rounded-full focus:outline-none hover:bg-primary-500 focus:bg-primary-500 transition duration-300 ease"
        @click="open = !open"
      >
        <svg
          class="w-6 h-6 text-white absolute"
          x-show="!open"
          x-transition:enter-start="opacity-0 -rotate-45 scale-75"
          x-transition:enter="transition duration-200 transform ease"
          x-transition:leave="transition duration-100 transform ease"
          x-transition:leave-end="opacity-0 -rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          ></path>
        </svg>

        <svg
          class="w-6 h-6 text-white absolute"
          x-show="open"
          x-transition:enter-start="opacity-0 rotate-45 scale-75"
          x-transition:enter="transition duration-200 transform ease"
          x-transition:leave="transition duration-100 transform ease"
          x-transition:leave-end="opacity-0 rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
  </div>
</template>
  

  <script>
  const WEB3FORMS_ACCESS_KEY = "3e441c11-5e3e-4b1c-b75a-809b4ee8eadf";

  export default defineComponent({
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
          
        }
      },
    },
  });
  </script>