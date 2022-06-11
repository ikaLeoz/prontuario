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
    <div>
      <q-carousel
        v-model="store.avaliacaoNeurologica.tipo"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        class="rounded-borders"
      >
        <q-carousel-slide name="glasgow" class="column no-wrap flex-center">
          <div class="q-pa-md" style="margin-top: 300px">
            <div class="q-pa-md">
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
            <div class="q-pa-md">
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
            <div class="q-pa-md">Total : {{ glassgowCounter }}</div>
          </div>
          <div style="margin: auto">
            <hr style="width: 100%" />
            <h6 style="margin: auto" class="q-pa-md">PUPILAS</h6>
            <div class="q-pa-md" style="margin: auto">
              <q-checkbox
                v-model="store.avaliacaoNeurologica.glasgow.pupilas.isocoricas"
                label="ISOCORICAS"
              />
            </div>
            <div class="q-pa-md" style="margin: auto">
              <q-checkbox
                v-model="
                  store.avaliacaoNeurologica.glasgow.pupilas.reflexomotor
                "
                label="REFLEXO MOTOR"
              />
            </div>
            <div>
              <q-radio
                v-model="store.avaliacaoNeurologica.glasgow.pupilas.tamanho"
                val="miose"
                label="MIOSE"
              />
              <q-radio
                v-model="store.avaliacaoNeurologica.glasgow.pupilas.tamanho"
                val="midriase"
                label="MIDRIASE"
              />
            </div>
            <div class="q-pa-md">
              <q-select
                filled
                v-model="
                  store.avaliacaoNeurologica.glasgow.pupilas.anisocoriacas
                "
                :options="
                  store.avaliacaoNeurologica.glasgow.pupilas
                    .anisocoriacasOptinos
                "
                label="ANISOCORIA"
                title="ANISOCORIA"
                emit-value
              />
            </div>
            <hr style="width: 100%" />
            <h6 style="margin: auto" class="q-pa-md">FORÇA MOTORA</h6>
            <div class="q-pa-md">
              <q-select
                filled
                v-model="store.avaliacaoNeurologica.glasgow.forcamotora.value"
                :options="
                  store.avaliacaoNeurologica.glasgow.forcamotora.options
                "
                label="FORÇA"
                title="FORÇA"
                emit-value
              />
            </div>
            <div
              class="q-pa-md"
              v-if="
                store.avaliacaoNeurologica.glasgow.forcamotora.value ==
                'DIMINUIDA'
              "
            >
              <q-select
                filled
                v-model="
                  store.avaliacaoNeurologica.glasgow.forcamotora.diminuidaTipo
                "
                :options="
                  store.avaliacaoNeurologica.glasgow.forcamotora
                    .diminuidaOptions
                "
                label="TIPO DIMINUIDA"
                title="TIPO DIMINUIDA"
                emit-value
              />
            </div>
            <div class="q-pa-md" style="margin: auto">
              <q-checkbox
                v-model="
                  store.avaliacaoNeurologica.glasgow.forcamotora
                    .desvioRimaLabial
                "
                label="DESVIO DE RIMA LABIA"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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

  watch: {
    ['store.avaliacaoNeurologica.glasgow']: {
      handler: function () {
        this.glassgowCounter =
          Number(
            this.store.avaliacaoNeurologica.glasgow.ocular.options.find(
              (it: any) =>
                it.value == this.store.avaliacaoNeurologica.glasgow.ocular.value
            )?.num || 0
          ) +
          Number(
            this.store.avaliacaoNeurologica.glasgow.verbal.options.find(
              (it: any) =>
                it.value == this.store.avaliacaoNeurologica.glasgow.verbal.value
            )?.num || 0
          ) +
          Number(
            this.store.avaliacaoNeurologica.glasgow.motora.options.find(
              (it: any) =>
                it.value == this.store.avaliacaoNeurologica.glasgow.motora.value
            )?.num || 0
          );
      },
      deep: true,
    },
  },

  setup() {
    return {
      store: useStore(),
      lorem: '123',
      glassgowCounter: 0,
    };
  },
});
</script>
