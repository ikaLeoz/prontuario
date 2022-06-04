<template>
  <q-form class="q-gutter-md">
    <div class="q-pa-md">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step :name="1" title="Diag." icon="assignment" :done="step > 1">
          <div class="q-pa-md">
            <div class="q-mb-sm">
              <q-badge color="teal">
                Dt. Admissão: {{ store.diagnostico.dtAdmissao }}
              </q-badge>
            </div>

            <q-btn icon="event" round color="primary">
              <q-popup-proxy
                @before-show="updateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="proxyDate">
                  <div class="row items-center justify-end q-gutter-sm">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn
                      label="OK"
                      color="primary"
                      flat
                      @click="save"
                      v-close-popup
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-btn>
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox
                dark
                v-model="store.diagnostico.irpa"
                label="IRPA"
                color="teal"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.eap"
                label="EAP"
                color="orange"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.icc"
                label="ICC"
                color="red"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.dpoc"
                label="DPOC"
                color="cyan"
              />
            </div>
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox
                dark
                v-model="store.diagnostico.ie"
                label="INTOXICAÇAO EXOGENA"
                color="teal"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.iam"
                label="IAM"
                color="orange"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.pnm"
                label="PNM"
                color="red"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.sepse"
                label="SEPSE"
                color="cyan"
              />
            </div>
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox
                dark
                v-model="store.diagnostico.fa"
                label="FA"
                color="teal"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.tv"
                label="TV"
                color="orange"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.ira"
                label="IRA"
                color="red"
              />
              <q-checkbox
                dark
                v-model="store.diagnostico.cc"
                label="CRISE CONVULSIVA"
                color="cyan"
              />
            </div>
          </div>
        </q-step>

        <q-step
          :name="2"
          title="Av. neuro."
          caption=""
          icon="assignment"
          :done="step > 2"
        >
          <avaliacao-neurologica-component
            title="Avaliação Neurologica"
            active
            :todos="todos"
            :meta="meta"
          ></avaliacao-neurologica-component>
        </q-step>
        <q-step :name="3" title="Av. resp." icon="assignment" :done="step > 3">
          terceiro
        </q-step>

        <q-step :name="4" title="Create an ad" icon="add_comment">
          quartop
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="nextStepper($refs.stepper)"
              color="primary"
              :label="step === 4 ? 'Finish' : 'Continue'"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="previousStepper($refs.stepper)"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-form>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, PropType, ref } from 'vue';
import { Todo, Meta } from './models';
import AvaliacaoNeurologicaComponent from './AvaliacaoNeurologica.vue';
import { useStore } from '../stores/prontuario';

function clickStepper() {
  function previousStepper(stepper: any) {
    this.store.counter++;
    stepper.previous();
  }
  function nextStepper(stepper: any) {
    if (this.step == 4) {
      this.store.postData();
    }
    stepper.next();
    // ENVIAR DADOS VIA AJAX
  }

  return { nextStepper, previousStepper };
}

export default defineComponent({
  name: 'DiagnosticoComponent',
  components: { AvaliacaoNeurologicaComponent },
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
    const date = ref('2022/03/01');
    const proxyDate = ref('2022/06/04');
    return {
      proxyDate,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        useStore().diagnostico.dtAdmissao = proxyDate.value;
      },
      store: useStore(),
      step: ref(1),
      ...clickStepper(),
    };
  },
});
</script>
