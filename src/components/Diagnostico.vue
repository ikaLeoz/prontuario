<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="q-pa-md">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step :name="1" title="Diag." icon="assignment" :done="step > 1">
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox dark v-model="irpa" label="IRPA" color="teal" />
              <q-checkbox dark v-model="eap" label="EAP" color="orange" />
              <q-checkbox dark v-model="icc" label="ICC" color="red" />
              <q-checkbox dark v-model="dpoc" label="DPOC" color="cyan" />
            </div>
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox
                dark
                v-model="ie"
                label="INTOXICAÇAO EXOGENA"
                color="teal"
              />
              <q-checkbox dark v-model="iam" label="IAM" color="orange" />
              <q-checkbox dark v-model="pnm" label="PNM" color="red" />
              <q-checkbox dark v-model="sepse" label="SEPSE" color="cyan" />
            </div>
          </div>
          <div class="q-pa-md bg-grey-10 text-white">
            <div class="q-gutter-sm">
              <q-checkbox dark v-model="fa" label="FA" color="teal" />
              <q-checkbox dark v-model="tv" label="TV" color="orange" />
              <q-checkbox dark v-model="ira" label="IRA" color="red" />
              <q-checkbox
                dark
                v-model="cc"
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
              @click="$refs.stepper.previous()"
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
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';
import AvaliacaoNeurologicaComponent from './AvaliacaoNeurologica.vue';

function clickNextStepper() {
  function nextStepper(stepper: any) {
    stepper.next();
    // ENVIAR DADOS VIA AJAX
  }

  return { nextStepper };
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
    function submit(this: any) {
      this.$refs.myForm.validate().then((success: any) => {
        if (success) {
          // yay, models are correct
        } else {
          // oh no, user has filled in
          // at least one invalid value
        }
      });
    }
    return {
      model: ref('Google'),
      step: ref(1),
      irpa: ref(true),
      eap: '',
      icc: '',
      dpoc: '',
      ie: '',
      iam: '',
      pnm: '',
      sepse: '',
      fa: '',
      tv: '',
      ira: '',
      cc: '',
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      ...clickNextStepper(),
    };
  },
});
</script>
