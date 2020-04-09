import { Question } from './interfaces/question';

export const questions: Question[] = [
  {
    id: 1,
    question: '',
    answer: '',
    theme: '',
  },
  {
    id: 2,
    question: 'Как привязать значение свойству шаблона?',
    answer: '[property]="expression"',
    theme: 'Template syntax',
  },
  {
    id: 3,
    question:
      'Какие JS выражения не могут быть использованы в синтаксисе шаблонов?',
    answer:
      'Любые выражения с побочными эффектами. Такие как: присвоения (+=, -=, =, ...), операторы (new, instanceof, typeof, ++, --), чейнинг (; или ,), некоторые операторы ES2015+',
    theme: 'Template syntax',
  },
  {
    id: 4,
    question: 'Что является контекстом выражения?',
    answer:
      'Экземпляр компонента, а также контекст шаблона, например: *ngFor="let customer of customers" - customer может быть контекстом для выражения внутри шаблона, или <input #customerInput> - далее в шаблоне будет доступна переменная customerInput и ее значение .value',
    theme: 'Template syntax',
  },
  {
    id: 5,
    question: 'Как часто выполняются шаблонные выражения?',
    answer: 'После каждого обнаружения изменений',
    theme: 'Template syntax',
  },
  {
    id: 6,
    question: 'Как привязать событие в шаблоне?',
    answer: '(event)="statement()", например (click)="deleteHero()"',
    theme: 'Template syntax',
  },
  {
    id: 7,
    question: 'Какие операторы недопустимы в template statements',
    answer:
      'В основном все те же самые, что и в template expressions, кроме ";"',
    theme: 'Template syntax',
  },
  {
    id: 8,
    question: 'Что является statement контекстом?',
    answer: 'Экземпляр компонента',
    theme: 'Template syntax',
  },
  {
    id: 9,
    question:
      'Может ли statement context ссылаться на значения контекста текущего шаблона?',
    answer:
      'Да. Например доступно событие $event. переменные, полученные в результате работы директив например *ngFor="let hero of heroes" (click)="deleteHero(hero)". А так же template reference variable, например: <form #heroForm (ngSbmit)="onSubmit(heroForm)">...</form>',
    theme: 'Template syntax',
  },
  {
    id: 10,
    question: 'Может ли template statement ссылаться на глобальный контекст?',
    answer:
      'Нет, только на контекст текущего шаблона или контекст экземпляра компонента',
    theme: 'Template syntax',
  },
  {
    id: 11,
    question: 'Какие виды связывания данных предоставляет Angular?',
    answer:
      'Источник - представление, представление - источник, двустороннее связвание',
    theme: 'Template syntax',
  },
  {
    id: 12,
    question: 'Приведите пример связывания источник - представление',
    answer: '{{expression}}; [target]="expression"; bind-target="expression"',
    theme: 'Template syntax',
  },
  {
    id: 13,
    question: 'Приведите пример связывания представление - источник',
    answer: '(target)="statement"; on-target="statement"',
    theme: 'Template syntax',
  },
  {
    id: 14,
    question: 'Приведите пример двустороннего связывания',
    answer: '[(target)]="expression"; bindon-target="expression"',
    theme: 'Template syntax',
  },
];

export const themes: Array<string> = ['Template syntax', 'Another theme'];
