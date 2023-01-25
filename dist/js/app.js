import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
negociacao.value = 100; // This add a invalid property in the object
console.log(negociacao);