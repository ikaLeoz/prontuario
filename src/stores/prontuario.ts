import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useStore = defineStore('counter', {
  state: () => ({
    diagnostico: {
      dtAdmissao: ref('2022-06-04'),
      irpa: ref(false),
      eap: ref(false),
      icc: ref(false),
      dpoc: ref(false),
      ie: ref(false),
      iam: ref(false),
      pnm: ref(false),
      sepse: ref(false),
      fa: ref(false),
      tv: ref(false),
      ira: ref(false),
      cc: ref(false),
    },

    avaliacaoNeurologica: {
      tipo: ref('glasgow'),
      escala: ref({
        value: ref(null),
        options: [
          {
            label: 'COMBATIVO',
            value: 'COMBATIVO',
          },
          {
            label: 'MUITO AGITADO',
            value: 'MUITO AGITADO',
          },
          {
            label: 'AGITADA',
            value: 'AGITADA',
          },
          {
            label: 'INQUETO',
            value: 'INQUETO',
          },
          {
            label: 'ALERTA CALMO',
            value: 'ALERTA CALMO',
          },
          {
            label: 'SONOLENTO',
            value: 'SONOLENTO',
          },
          {
            label: 'SEDAÇAO LEVE',
            value: 'SEDAÇAO LEVE',
          },
          {
            label: 'SEDAÇAO MODERADA',
            value: 'SEDAÇAO MODERADA',
          },
          {
            label: 'SEDAÇAO INTENSA',
            value: 'SEDAÇAO INTENSA',
          },
          {
            label: 'NÃO DESPERTA',
            value: 'NÃO DESPERTA',
          },
        ],
      }),
      glasgow: ref({
        ocular: ref({
          value: ref(null),
          options: [
            {
              label: 'Espontanea',
              value: 'Espontanea',
            },
            {
              label: 'A voz',
              value: 'A voz',
            },
            {
              label: 'A dor',
              value: 'A dor',
            },
            {
              label: 'Não abre',
              value: 'Não testado',
            },
            {
              label: 'Não testado',
              value: 'Não testado',
            },
          ],
        }),

        verbal: ref({
          value: ref(null),
          options: [
            {
              label: 'ORIENTADO',
              value: 'ORIENTADO',
            },
            {
              label: 'CONFUSA',
              value: 'CONFUSA',
            },
            {
              label: 'PALAVRA INAPROPRIADAS',
              value: 'PALAVRA INAPROPRIADAS',
            },
            {
              label: 'PALAVRAS INCOMPREENSIVAS',
              value: 'PALAVRAS INCOMPREENSIVAS',
            },
            {
              label: 'SEM RESPOSTA',
              value: 'SEM RESPOSTA',
            },
            {
              label: 'NÃO TESTADO',
              value: 'NÃO TESTADO',
            },
          ],
        }),

        motora: ref({
          value: ref(null),
          options: [
            {
              label: 'OBEDECE COMANDOS',
              value: 'OBEDECE COMANDOS',
            },
            {
              label: 'LOCALIZA DOR',
              value: 'LOCALIZA DOR',
            },
            {
              label: 'MOVIMENTO DE RETIRADA',
              value: 'MOVIMENTO DE RETIRADA',
            },
            {
              label: 'FLEXAO ANORMAL',
              value: 'FLEXAO ANORMAL',
            },
            {
              label: 'EXTENSAO ANORMAL',
              value: 'EXTENSAO ANORMAL',
            },
            {
              label: 'SEM RESPOSTA',
              value: 'NÃO TESTADO',
            },
          ],
        }),

        pupilas: ref({
          value: ref(null),
          options: [
            {
              label: 'MIDRIASE',
              value: 'MIDRIASE',
            },
            {
              label: 'MIOSE',
              value: 'MIOSE',
            },
            {
              label: 'ANISOCORIACAS',
              value: 'ANISOCORIACAS',
            },
            {
              label: 'RFT',
              value: 'RFT',
            },
          ],
        }),
      }),
    },
  }),

  getters: {
    // doubleCount(state) {
    //   return state.counter * 2;
    // },
  },

  actions: {
    async postData() {
      const res = await axios.post('http://www.google.com', this.$state);
      console.log(res);
    },
  },
});
