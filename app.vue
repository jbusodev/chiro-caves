<template>
  <div class="bg-white text-2xl">
    <Header />
    <main>
      <section
        id="hero-section"
        class="px-4 py-6 sm:px-6 lg:px-8 h:[70vh] lg:h-[65vh] bg-accent relative"
      >
        <div
          class="absolute w-full h-full bg-[url('assets/img/hero-image.png')] bg-cover bg-no-repeat bg-center opacity-30 left-0 top-0"
        ></div>
        <div
          class="px-4 py-6 sm:px-0 max-w-6xl h-full grid content-center mx-auto relative"
        >
          <h1 class="text-5xl font-bold text-gray-900">
            <div class="text-primary-700 inline">Votre sérénité</div>
            , notre priorité
          </h1>
          <p class="text-2xl mt-4 text-gray-600">
            Améliorez votre santé avec des soins chiropratiques
            personnalisés.<br />
            Nous répondons à vos besoins uniques.
          </p>
          <button
            class="mt-8 bg-gradient-to-r from-primary-500 to-primary-900 hover:bg-primary-900 text-white font-bold py-3 px-4 rounded-full max-w-sm"
          >
            Prendre Rendez-Vous
          </button>
        </div>
      </section>
      <section
        id="threecolmumn"
        class="container mx-auto relative origin-center xl:-translate-y-1/2 lg:-translate-y-1/4 md:-translate-none"
      >
        <div
          class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          <div class="bg-primary-900 text-white p-4 md:rounded-l-lg">
            <h2 class="font-bold mb-2">Ajustements chiropratiques</h2>
            <p>
              Les ajustements chiropratiques sont des techniques manuelles pour
              traiter les troubles musculo-squelettiques et les douleurs.
            </p>
          </div>
          <div class="bg-primary-700 text-white p-4">
            <h2 class="font-bold mb-2">Réadaptation après une blessure</h2>
            <p>
              Notre programme de réadaptation après une blessure est conçu pour
              aider les patients à retrouver leur mobilité et leur
              fonctionnalité.
            </p>
          </div>
          <div class="bg-primary-500 text-white p-4 md:rounded-r-lg">
            <h2 class="font-bold mb-2">Correction de la posture</h2>
            <p>
              La correction de la posture peut aider à améliorer la mobilité,
              réduire les douleurs et les tensions musculaires, ainsi que
              prévenir les blessures à long terme.
            </p>
          </div>
        </div>
      </section>
      <section id="about" class="px-4 bg-accent">
        <div class="max-w-5xl mx-auto py-16 px-4">
          <h2 class="text-2xl font-bold text-gray-900">À propos du cabinet</h2>
          <p class="mt-4 text-gray-600">
            Basé dans des anciennes caves à vins, notre équipe s'est agrandie au
            fil du temps et accueilli de nouveaux docteurs pour mieux vous
            accompagner.
          </p>
        </div>
      </section>
      <section id="three-stats" class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl
            class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3"
          >
            <div
              v-for="stat in stats"
              :key="stat.id"
              class="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
              <dd
                class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section id="testimonials" class="py-16 white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2
            class="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl"
          >
            Ce que nos patients disent
          </h2>
          <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div
              class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8"
            >
              <div class="h-full flex flex-col justify-center space-y-4">
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
                  alt="avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p class="text-gray-600 md:text-xl">
                  <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>

            <div
              class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8"
            >
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
                alt="avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
            <div
              class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8"
            >
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
                alt="avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat repellat perspiciatis
                  excepturi est. Non ipsum iusto aliquam consequatur repellat
                  provident, omnis ut, sapiente voluptates veritatis cum
                  deleniti repudiandae ad doloribus.
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" class="bg-accent py-8">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-4">Notre équipe</h2>
          <p class="text-gray-500 text-center mb-8">
            Rencontrez les membres de notre équipe
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Team member card 1 -->
            <div
              v-for="teamMember in teamMembers"
              :key="teamMember.id"
              class="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                class="h-80 w-full object-cover object-top"
                :src="teamMember.image"
                :alt="teamMember.name"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold mb-2">{{ teamMember.name }}</h3>
                <p class="text-gray-500 mb-4">{{ teamMember.role }}</p>
                <p class="text-gray-500">{{ teamMember.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <footer class="bg-gradient-to-r from-gray-100 via-primary-500 to-gray-100">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="#" class="mr-5 h-6 sm:h-9" alt="logo" />
            <p class="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div class="flex mt-8 space-x-6 text-gray-600">
              <a class="hover:opacity-75" href="" rel="noreferrer">
                <span class="sr-only"> Facebook </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a class="hover:opacity-75" href="" rel="noreferrer">
                <span class="sr-only"> Instagram </span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p class="font-medium">Company</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="#about"> About </a>
                <a class="hover:opacity-75" href="#team"> Meet the Team </a>
                <a class="hover:opacity-75" href="#history"> History </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Services</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="#"> 1on1 Coaching </a>
                <a class="hover:opacity-75" href="#"> Company Review </a>
                <a class="hover:opacity-75" href="#"> Accounts Review </a>
                <a class="hover:opacity-75" href="#"> HR Consulting </a>
                <a class="hover:opacity-75" href="#"> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Helpful Links</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="#"> Contact </a>
                <a class="hover:opacity-75" href="#"> FAQs </a>
                <a class="hover:opacity-75" href="#"> Live Chat </a>
              </nav>
            </div>
            <div>
              <p class="font-medium">Legal</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="#"> Privacy Policy </a>
                <a class="hover:opacity-75" href="#">
                  Terms &amp; Conditions
                </a>
                <a class="hover:opacity-75" href="#"> Returns Policy </a>
                <a class="hover:opacity-75" href="#"> Accessibility </a>
              </nav>
            </div>
          </div>
        </div>
        <p class="mt-8 text-xs text-gray-800">© 2022 Comany Name</p>
      </div>
    </footer>
  </div>
</template>

<!-- Three column Section Data & Team Section Data -->
<script setup lang="ts">
const stats = [
  {
    id: 1,
    name: "Nos docteurs ont traité des milliers de patients avec succès",
    value: "12k+",
  },
  {
    id: 2,
    name: "Les docteurs des Caves du Palais ont plus de 30 ans d'expérience combinée dans le domaine de la correction dorsale",
    value: "30+ années",
  },
  {
    id: 3,
    name: "Nos spécialistes qui vous prendront en charge ont publié des articles sur le dos et basent votre traitement sur une expertise éprouvée",
    value: "4",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Directeur & Chiropraticien",
    bio: "Jean est le fondateur de notre cabinet et...",
    image: "/img/team_member1.jpg",
  },
  {
    id: 2,
    name: "Jacques Martin",
    role: "Chiropraticien",
    bio: "Jacques est spécialisé en...",
    image: "/img/team_member2.jpg",
  },
  {
    id: 3,
    name: "Pierre Lefebvre",
    role: "Chiropraticien",
    bio: "Pierre est spécialisé en...",
    image: "/img/team_member3.jpg",
  },
  // Add more team members here
];
</script>

<style scoped></style>
