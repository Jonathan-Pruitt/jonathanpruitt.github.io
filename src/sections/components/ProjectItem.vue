<script setup>
import { computed, onMounted, ref } from 'vue';
import { TextFormatService } from '../../services/TextFormatService.js';
import Carousel from './Carousel.vue';
import Modal from '../partials/Modal.vue';
import ProjectTagList from '../partials/ProjectTagList.vue';
import TechTag from '../partials/TechTag.vue';
import Tag from '../partials/Tag.vue';
import tagSvg from '@/assets/icons/tags/tag.svg?component';
import techTagSvg from '@/assets/icons/tags/tech.svg?component';
import { TechTagObject } from '/src/services/TechTagObject.js';

const props = defineProps({
  project: Object,
  maxTechItems: Number
})
const emit = defineEmits(['update-max-tech'])
const project = ref(props.project);
const techTags = ref([]);
const description = TextFormatService.insertRichText(props.project.description);
const showDisclaimer = ref(false);
const showDetails = ref(false);

const COLORS = {
    "backend" :             'bg-[hsl(0,50%,50%)]/20 inset-ring-[hsl(0,50%,50%)] text-[hsl(0,50%,50%)]',
    "frontend" :            'bg-[hsl(216,50%,50%)]/20 inset-ring-[hsl(216,50%,50%)] text-[hsl(216,50%,50%)]',
    "framework" :           'bg-[hsl(144,70%,40%)]/20 inset-ring-[hsl(144,70%,40%)] text-[hsl(144,70%,40%)]',
    "version control" :     'bg-[hsl(288,50%,50%)]/20 inset-ring-[hsl(288,50%,50%)] text-[hsl(288,50%,50%)]',
    "project management":   'bg-[hsl(72,50%,40%)]/20 inset-ring-[hsl(72,50%,40%)] text-[hsl(72,50%,40%)]',
}

const TAG_COLORS = {
    "backend" :     'bg-[hsl(240,50%,60%)]/20 inset-ring-[hsl(240,50%,60%)] text-[hsl(240,50%,60%)]',
    "frontend" :    'bg-[hsl(210,50%,40%)]/20 inset-ring-[hsl(210,50%,40%)] text-[hsl(210,50%,40%)]',
    "framework" :   'bg-[hsl(180,70%,30%)]/20 inset-ring-[hsl(180,70%,30%)] text-[hsl(180,70%,30%)]',
    "personal" :    'bg-[hsl(120,50%,35%)]/20 inset-ring-[hsl(120,50%,35%)] text-[hsl(120,50%,35%)]',
    "usage":        'bg-[hsl(320,30%,50%)]/20 inset-ring-[hsl(320,30%,50%)] text-[hsl(320,30%,50%)]',
    "professional": 'bg-[hsl(30,50%,40%)]/20 inset-ring-[hsl(30,50%,40%)] text-[hsl(30,50%,40%)]',
}

const maxLogos = computed(() => {
    if (!props.maxTechItems) {return 'grid-cols-1'}
    if (props.maxTechItems > 3) {return 'grid-cols-3'}
    return 'grid-cols-' + props.maxTechItems;
})

// METHODS

const loadTechTags = () => {
    const tags = project.value.techStack.map((tag) => new TechTagObject(tag).getTechTagItem())
    let maxTags = 0
    techTags.value.domains = {};
    const fEnd = tags.filter((t) => t.domain == 'frontend');
    const bEnd = tags.filter((t) => t.domain == 'backend');
    const frame = tags.filter((t) => t.domain == 'framework');
    const pMan = tags.filter((t) => t.domain == 'project management');
    const vCont = tags.filter((t) => t.domain == 'version control');
    const edu = tags.filter((t) => t.domain == 'educational')

    addTags(fEnd);
    addTags(bEnd);
    addTags(frame);
    addTags(pMan);
    addTags(vCont);
    addTags(edu);
    emit('update-max-tech', maxTags)

    function addTags(tagArray) {
        if (tagArray.length > 0) {
            const key = tagArray[0].domain
            // maxTagCount.value = Math.max(tagArray.length, maxTagCount.value)
            maxTags = Math.max(tagArray.length, maxTags)
            techTags.value[key] = tagArray;
        }
    }
}

const capitalizeFirstChar = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

onMounted(() => {
    loadTechTags();
    // emit('update-max-tech', maxTagCount.value)
})

</script>

<template>
  <!-- PROJECT CONTAINER -->
  <div class="mx-auto mt-8 bg-peak rounded-lg shadow-lg dark:inset-shadow-sm dark:inset-shadow-gray-500/50 dark:bg-linear-to-b dark:from-background dark:via-brand/30 dark:via-15% dark:to-background">
    <div class="w-full p-4">
        
      <!-- Header -->
      <div 
      :title="'Try out ' + project.title"
      class="flex"
      >
        <a 
          :href="project.links.sample || project.links.repo || '#'" 
          target="_blank" 
          class="flex gap-2 items-center hover:scale-105 transition-all duration-150"
        >
          <img :src="project.iconPath" class="size-8 sm:size-16 md:size-24 rounded-lg" :alt="project.title + ' logo'">
          <h3 class="text-xl sm:text-2xl md:text-4xl font-bold tracking-wider">{{ project.title }}</h3>
        </a>
      </div>
      
      <div class="md:grid md:grid-cols-5 md:gap-4 mt-2 md:mt-4">

        <div class="md:col-span-3">
          <!-- Carousel -->
          <Carousel 
            :slides="project.images"
            type="projects"
          />
        </div>

        <div 
        class="w-100 max-w-full md:w-auto md:col-span-2 mt-4 md:m-0 px-4 py-2 border border-subtle bg-background/50 rounded-lg mx-auto cursor-pointer hover:scale-105 hover:bg-brand/10 transition"
        title="Read full description"
        @click="showDetails = true"
        >
          <!-- Description -->
          <p 
          v-html="description"
          class="font-light text-sm md:text-lg line-clamp-13" 
          />
        </div>
        
        <div class="md:col-span-2">
          <!-- Tech Tags -->
          <div class="my-4">
            <div class="w-3/5 flex mx-auto justify-center border-b border-brand-muted"> 
              <techTagSvg class="size-6 sm:size-8 fill-body/75" />
              <h4 class="text-body/75 sm:text-2xl">Tech</h4>
            </div>

            <div v-if="techTags.frontend">
              <ProjectTagList 
                :tag-array="techTags.frontend"
                title="Frontend"
                :max-logos="maxLogos"
              />
            </div>
            <div v-if="techTags.backend">
              <ProjectTagList 
                :tag-array="techTags.backend"
                title="Backend"
                :max-logos="maxLogos"
              />
            </div>
            
            <div v-if="techTags.framework">
              <ProjectTagList
                :tag-array="techTags.framework"
                title="Framework"
                :max-logos="maxLogos"
              />
            </div>

            <div v-if="techTags['version control']">
              <ProjectTagList
                :tag-array="techTags['version control']"
                title="Versioning"
                :max-logos="maxLogos"
              />
            </div>

            <div v-if="techTags['project management']">
              <ProjectTagList
                :tag-array="techTags['project management']"
                title="Project Mgmt"
                :max-logos="maxLogos"
              />
            </div>

            <div v-if="techTags.educational">
              <ProjectTagList
                :tag-array="techTags.educational"
                title="Educational"
                :max-logos="maxLogos"
              />
            </div>
          </div>
        </div>

        <div class="md:col-span-2 md:col-start-4">
          <!-- Descriptive Tags -->
          <div class="my-4">
            <div class="w-3/5 flex mx-auto justify-center border-b border-brand-muted">
              <tagSvg class="size-6 sm:size-8 fill-body/75" />
              <h4 class="text-body/75 sm:text-2xl">Tags</h4>
            </div>
            <div class="mt-2 grid grid-cols-3">
              <div class="text-center"
                v-for="tag in project.tags"  
              >
                <div class="size-12 md:size-16 mx-auto">
                  <Tag 
                    :tag="tag"
                    class="dark:bg-linear-to-br dark:to-info/40 dark:from-brand/20 rounded-lg"
                  />
                </div>
                <h6 
                  v-html="tag.textIndicator"
                  class="text-xs w-fit font-semibold px-2 py-1 rounded-lg inset-ring-2 text-center mx-auto"
                  :class="TAG_COLORS[tag.colorIndicator]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="md:col-span-full">
          <!-- Links / CTA -->
          <div class="flex place-content-center gap-x-4">
            <div 
              v-if="project.links.sample"
              class="min-w-18 md:min-w-32 text-sm sm:text-xl font-bold bg-peak text-header my-2 rounded-lg border-2 border-header px-2 py-1 hover:brightness-125 hover:outline-1 hover:outline-brand transition duration-150 text-center"
            >
              <a 
                :href="project.links.sample"
                 target="_blank" 
              >
                Product View
              </a>
            </div>
            <div 
            v-if="project.links.repo"
            class="min-w-18 md:min-w-32 text-sm sm:text-xl font-bold bg-peak text-header my-2 rounded-lg border-2 border-header px-2 py-1 hover:brightness-125 hover:outline-1 hover:outline-brand transition duration-150 text-center"
            >
              <a 
                :href="project.links.repo"
                 target="_blank" 
              >
                Codebase
              </a>
            </div>
            <!-- Disclaimer (if any) -->
            <div 
              v-if="project.disclaimer"
              class=""
            >
              <button
                class="min-w-18 md:min-w-32 text-sm sm:text-xl font-bold bg-peak text-header italic my-2 rounded-lg border-2 border-header px-2 py-1 hover:brightness-125 hover:outline-1 hover:outline-brand transition duration-150 cursor-pointer"
                @click="showDisclaimer = true"
              >
                *Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
    :show="showDisclaimer"
    @close="showDisclaimer = false"
  >
    <template #title>
      <h2 class="text-2xl md:text-4xl font-bold">
        {{ project.title }}
      </h2>
    </template>
    <template #content>
      <h3 class="text-lg md:text-2xl font-semibold text-body">
        Disclaimer
      </h3>
      <p>
        <em class="md:text-xl">
          {{ project.disclaimer }}
        </em>
      </p>
    </template>
  </Modal>
  <Modal
    :show="showDetails"
    @close="showDetails = false"
  >
    <template #title>
      <h2 class="text-2xl md:text-4xl font-bold">
        {{ project.title }}
      </h2>
    </template>
    <template #content>
      <h3 class="text-lg md:text-2xl font-semibold text-body">
        Description
      </h3>
      <p v-html="description" class="md:text-xl" />
      <div class="mt-4 flex place-content-center gap-x-4">
        <div 
          v-if="project.links.sample"
          class="text-sm sm:text-xl min-w-18 md:min-w-32 font-bold bg-peak text-header my-2 rounded-lg border-2 border-header px-2 py-1 hover:brightness-125 hover:outline-1 hover:outline-brand transition duration-150 text-center"
        >
          <a 
            :href="project.links.sample"
              target="_blank" 
          >
            Product View
          </a>
        </div>
        <div 
        v-if="project.links.repo"
        class="text-sm sm:text-xl min-w-18 md:min-w-32 font-bold bg-peak text-header my-2 rounded-lg border-2 border-header px-2 py-1 hover:brightness-125 hover:outline-1 hover:outline-brand transition duration-150 text-center"
        >
          <a 
            :href="project.links.repo"
              target="_blank" 
          >
            See the Codebase
          </a>
        </div>

      </div>
    </template>
  </Modal>
</template>

<style scoped>
@reference 'tailwindcss';
  :deep(p strong) {
    color: var(--color-brand);
    @apply text-base md:text-xl font-bold;
  }
  :deep(ul) {
    @apply list-decimal list-inside ml-4
  }
</style>