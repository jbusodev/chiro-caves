<template>
  <header class="bg-white shadow py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex flex-wrap md:flex-nowrap items-center justify-between">
        <div class="md:w-full">
          <a href="">
            <img
              class="max-[400px]:h-20 lg:h-32 md:h-24 max-h-32 w-auto text-white-500"
              src="../assets/logo.png"
              alt="Cabinet Caves du Palais"
            />
          </a>
        </div>
        <div class="flex items-center space-x-4 md:hidden">
          <!-- Hamburger menu icon for mobile -->
          <button
            id="menuButton"
            type="button"
            class="text-primary-500 hover:text-primary-900"
            @click="toggleMenu()"
          >
            <svg
              class="h-12 w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM9 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM15 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1z"
              />
            </svg>
          </button>
        </div>
        <div
          id="menuItems"
          class="flex flex-col md:flex md:flex-row items-center md:space-x-8 sm:mt-4 md:mt-0 flex-wrap w-full md:justify-end"
          :class="{ hidden: isMenuHidden }"
        >
          <a
            href="#about"
            class="mx-0 md:font-medium text-primary-500 hover:text-primary-900"
            >À propos</a
          >
          <a
            href="#services"
            class="mx-0 md:font-medium text-primary-500 hover:text-primary-900"
            >Services</a
          >
          <a
            href="#testimonials"
            class="mx-0 md:font-medium text-primary-500 hover:text-primary-900"
            >Avis</a
          >
          <a
            href="#team"
            class="mx-0 md:font-medium text-primary-500 hover:text-primary-900"
            >Équipe</a
          >
          <a
            href="#contact"
            class="mx-0 md:font-medium text-primary-500 hover:text-primary-900"
            >Contact</a
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<!-- Menu toggle Logic -->
<script lang="ts">
export default defineComponent({
  data() {
    return {
      isMenuHidden: true, // Set initial menu hidden state to true
    };
  },
  methods: {
    toggleMenu(): void {
      this.isMenuHidden = !this.isMenuHidden; // Toggle menu hidden state
    },
  },
});
</script>
