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
              label: 'ESPONTANEA',
              value: 'ESPONTANEA',
              num: 4,
            },
            {
              label: 'ESTIMULO AUDITIVO',
              value: 'ESTIMULO AUDITIVO',
              num: 3,
            },
            {
              label: 'ESTIMULO ALGICO',
              value: 'ESTIMULO ALGICO',
              num: 2,
            },
            {
              label: 'SEM RESPOSTA',
              value: 'SEM RESPOSTA',
              num: 1,
            },
            {
              label: 'NÃO TESTADO',
              value: 'NÃO TESTADO',
              num: 0,
            },
          ],
        }),

        verbal: ref({
          value: ref(null),
          options: [
            {
              label: 'ORIENTADO',
              value: 'ORIENTADO',
              num: 5,
            },
            {
              label: 'CONFUSA',
              value: 'CONFUSA',
              num: 4,
            },
            {
              label: 'PALAVRA INAPROPRIADAS',
              value: 'PALAVRA INAPROPRIADAS',
              num: 3,
            },
            {
              label: 'PALAVRAS INCOMPREENSIVAS',
              value: 'PALAVRAS INCOMPREENSIVAS',
              num: 2,
            },
            {
              label: 'SEM RESPOSTA',
              value: 'SEM RESPOSTA',
              num: 1,
            },
            {
              label: 'NÃO TESTADO',
              value: 'NÃO TESTADO',
              num: 0,
            },
          ],
        }),

        motora: ref({
          value: ref(null),
          options: [
            {
              label: 'OBEDECE COMANDOS',
              value: 'OBEDECE COMANDOS',
              num: 6,
            },
            {
              label: 'LOCALIZA DOR',
              value: 'LOCALIZA DOR',
              num: 5,
            },
            {
              label: 'MOVIMENTO DE RETIRADA',
              value: 'MOVIMENTO DE RETIRADA',
              num: 4,
            },
            {
              label: 'FLEXAO ANORMAL',
              value: 'FLEXAO ANORMAL',
              num: 3,
            },
            {
              label: 'EXTENSAO ANORMAL',
              value: 'EXTENSAO ANORMAL',
              num: 2,
            },
            {
              label: 'SEM RESPOSTA',
              value: 'SEM RESPOSTA',
              num: 1,
            },
            {
              label: 'NÃO TESTADO',
              value: 'NÃO TESTADO',
              num: 1,
            },
          ],
        }),
        forcamotora: ref({
          value: ref(''),
          desvioRimaLabial: ref(false),
          diminuidaTipo: ref(null),
          diminuidaOptions: [
            {
              label: 'BILATERAL',
              value: 'BILATERAL',
            },
            {
              label: 'UNILATERAL Dir.',
              value: 'UNILATERAL Dir.',
            },
            {
              label: 'UNILATERAL Esq.',
              value: 'UNILATERAL Esq.',
            },
          ],
          options: [
            {
              label: 'PRESERVADA',
              value: 'PRESERVADA',
            },
            {
              label: 'DIMINUIDA',
              value: 'DIMINUIDA',
            },
            {
              label: 'APENAS EM MMSS',
              value: 'APENAS EM MMSS',
            },
            {
              label: 'APENAS EM MMII',
              value: 'APENAS EM MMII',
            },
          ],
        }),
        pupilas: ref({
          isocoricas: ref(false),
          reflexomotor: ref(false),
          tamanho: ref(null),
          value: ref(null),
          anisocoriacas: ref(null),
          anisocoriacasOptinos: [
            {
              label: 'NORMAL',
              value: 'NORMAL',
            },

            {
              label: 'ESQ. > DIR.',
              value: 'ESQ. > DIR.',
            },
            {
              label: 'DIR. > ESQ.',
              value: 'DIR. > ESQ.',
            },
          ],
          options: [
            {
              label: 'ISOCORICAS',
              value: 'ISOCORICAS',
            },

            {
              label: 'ANISOCORIACAS',
              value: 'ANISOCORIACAS',
            },
            {
              label: 'REFLEXO FOTOMOTOR',
              value: 'REFLEXO FOTOMOTOR',
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
