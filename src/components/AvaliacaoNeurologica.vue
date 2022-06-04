<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="store.avaliacaoNeurologica.tipo"
        :options="[
          { label: 'Glasgow', value: 'glasgow' },
          { label: 'Escala sedação', value: 'sedacao' },
        ]"
      />
    </div>
    <q-carousel
      v-model="store.avaliacaoNeurologica.tipo"
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
              v-model="store.avaliacaoNeurologica.glasgow.ocular.value"
              :options="store.avaliacaoNeurologica.glasgow.ocular.options"
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
              v-model="store.avaliacaoNeurologica.glasgow.verbal.value"
              :options="store.avaliacaoNeurologica.glasgow.verbal.options"
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
              v-model="store.avaliacaoNeurologica.glasgow.motora.value"
              :options="store.avaliacaoNeurologica.glasgow.motora.options"
              label="Motora"
              title="Motora"
              emit-value
            />
          </div>
        </div>
        <div class="q-pa-md" style="min-width: 300px">
          <div class="q-gutter-md">
            <q-select
              filled
              v-model="store.avaliacaoNeurologica.glasgow.pupilas.value"
              :options="store.avaliacaoNeurologica.glasgow.pupilas.options"
              label="Pupilas"
              title="Pupilas"
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
              v-model="store.avaliacaoNeurologica.escala.value"
              :options="store.avaliacaoNeurologica.escala.options"
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
import { useStore } from '../stores/prontuario';

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
  setup() {
    return {
      store: useStore(),
      lorem: '123',
    };
  },
});
</script>
