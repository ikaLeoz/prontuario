<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Glasgow', value: 'glasgow' },
          { label: 'Escala sedação', value: 'sedacao' },
        ]"
      />
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide name="glasgow" class="column no-wrap flex-center">
        <div class="q-pa-md" style="min-width: 300px">
          <div class="q-gutter-md">
            <q-select
              filled
              v-model="ocular"
              :options="ocularOptions"
              label="Ocular"
              title="Ocular"
              emit-value
            />
          </div>
        </div>
        <div class="q-pa-md" style="min-width: 300px">
          <div class="q-gutter-md">
            <q-select
              filled
              v-model="ocular"
              :options="ocularOptions"
              label="Verbal"
              title="Verbal"
              emit-value
            />
          </div>
        </div>
        <div class="q-pa-md" style="min-width: 300px">
          <div class="q-gutter-md">
            <q-select
              filled
              v-model="ocular"
              :options="ocularOptions"
              label="Motora"
              title="Motora"
              emit-value
            />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="sedacao" class="column no-wrap flex-center">
        <div class="q-pa-md" style="min-width: 300px">
          <div class="q-gutter-md">
            <q-select
              filled
              v-model="escala"
              :options="escalaOptions"
              label="Escala"
              title="Escala"
              emit-value
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Todo, Meta } from './models';

export default defineComponent({
  name: 'AvaliacaoNeurologicaComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },

    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return {
      escala: ref(null),
      escalaOptions: [
        {
          label: 'Combativo',
          value: 'combativo',
          description: 'Paciente combativo',
          icon: 'mail',
        },
      ],
      glasgow: {
        ocular: ref(null),

        ocularOptions: [
          {
            label: 'Espontanea',
            value: 'espontanea',
            description: 'Search engine',
            icon: 'mail',
          },
        ],
      },
      slide: ref('style'),
      lorem: '123',
    };
  },
});
</script>
