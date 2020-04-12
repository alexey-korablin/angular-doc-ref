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
  {
    id: 15,
    question: 'Как привязывается свойство в шаблоне?',
    answer: `<img [src]="imgaeUrl"> \n
       <app-hero-details [hero]="currentHero"></app-hero-details> \n
       <p [ngClass]="{'special': isSpecial}"></p>`,
    theme: 'Template syntax',
  },
  {
    id: 16,
    question: 'Как привязывается событие в шаблоне?',
    answer:
      '<button (click)="onSave()">Save</button> \n <app-hero (deleteRequest)="deleteHero()"></app-hero> \n <div (myClick)="clicked=$event" clickable>Click me</div>',
    theme: 'Template syntax',
  },
  {
    id: 17,
    question: 'Как делается двусторонняя привязка в шаблоне?',
    answer: '<input [(ngModel)]="name">',
    theme: 'Template syntax',
  },
  {
    id: 18,
    question: 'Как привязывается атрибут в шаблоне?',
    answer: '<button [attr.arial-label]="help">Help</button>',
    theme: 'Template syntax',
  },
  {
    id: 19,
    question: 'Как привязывается класс в шаблоне?',
    answer: '<button [class.special]="isSpecial">Help</button>',
    theme: 'Template syntax',
  },
  {
    id: 20,
    question: 'Как привязывается свойство стиля в шаблоне?',
    answer: '<button [style.color]="isSpecial ? `red` : `green`">Help</button>',
    theme: 'Template syntax',
  },
  {
    id: 21,
    question: 'Как передать значение в компонент через привязку в шаблоне?',
    answer:
      'Шаблон родительского компонента: <app-child [childItem]="parentItem"> | Дочерний компонент: @input() childItem: string | Свойство parentItem родительского компонента: parentItem = "lamp"',
    theme: 'Template syntax',
  },
  {
    id: 22,
    question: 'Можно ли не указывать квадратные скобки в привязке шаблона?',
    answer:
      'В общем случае нет. В примере: <app-detail item="parentItem"></app-detail> - в результате в item будет записана строка parentItem, а не значение переменной родительского шаблона',
    theme: 'Template syntax',
  },
  {
    id: 23,
    question:
      'Есть ли принципиальная разница между передачей строк в компонент с использованием квадратных скобок в привязке и без них?',
    answer:
      'Да, есть. Без квадратных скобок привязка срабатывает лишь единожды, отразить измененное значение строки в уже привязанном свойстве шаблона компонента не получится.',
    theme: 'Template syntax',
  },
  {
    id: 24,
    question: 'Когда стоит предпочетать интерполяцию привязке свойств?',
    answer:
      'В случае со строковыми значениями разницы нет. В случае с нестроковыми значениями следует предпочесть property binding',
    theme: 'Template syntax',
  },
  {
    id: 25,
    question:
      'Можно ли передать вредоносный код для его выполнения в интерполяции или передать как свйоство шаблона для выполнения в компоненте?',
    answer:
      'Такой код выполнен не будет, а будет представлен строкой как есть. В любом случае перед отображением значения он обрабатывается модулем sanitize',
    theme: 'Template syntax',
  },
  {
    id: 26,
    question: 'Как установить/удалить атрибут в шаблоне?',
    answer:
      'Для этого нужно записать конструкцию [attr.<attribute_name>]="attribute_value_to_set_or_null_to_remove". Таким образом, если значением атрибута является строка, то атрибут будет установлен. Если же значением атрибута является null - атрибут будет удален с элемента. Пример: <div [attr.aria-label]="actionName"></div>',
    theme: 'Template syntax',
  },
  {
    id: 27,
    question: 'Как установить класс в шаблоне?',
    answer:
      'Для того, чтобы привязать один класс, может быть использована следующая конструкция: [class.foo]="hasFoo"; при этом значениями hasFoo могут быть boolean, undefined или null.',
    theme: 'Template syntax',
  },
  {
    id: 28,
    question: 'Как установить несколько классов в шаблоне?',
    answer:
      'Для того, чтобы привязать несколько классов, может быть использована конструкция: [class]="classExpr"; classExpr может быть строкой типа "my-class-1 my-class-2" или объектом, ключи которого строкового типа, а значения - boolean, undefined или null, например { foo: true, bar: false }, или же он может быть массивом строк - ["foo", "bar"]',
    theme: 'Template syntax',
  },
  {
    id: 29,
    question: 'Как установить свойство стиля в шаблоне?',
    answer:
      'С помощью конструкции [style.width]="width", где width - строка | undefined | null, пример значения: 100px',
    theme: 'Template syntax',
  },
  {
    id: 30,
    question: 'Как установить свойство стиля в шаблоне с единицами измерения?',
    answer:
      'С помощью конструкции [style.width.px]="width", где width - строка | undefined | null, пример значения: 100',
    theme: 'Template syntax',
  },
  {
    id: 31,
    question: 'Как установить установить набор стилей в шаблоне?',
    answer:
      'С помощью конструкции [style]="styleExpr", где styleExpr - строка | object | array. Если значение строкового типа, то оно може выглядеть так: "width: 100px; height: 100px". Если значение - объект, то ключ должен быть строкового типа, а значение string | undefined | null, пример: { width: "100px", height: "100px" }. Если значение массив, то он должен быть массивом строк, например: ["width", "100px"] ',
    theme: 'Template syntax',
  },
  {
    id: 32,
    question: 'Как выполнить привязку события в шаблоне?',
    answer:
      '<html_element (<event_name>="component_method()")></html_element>, пример: <button (click)="onSave()">',
    theme: 'Template syntax',
  },
  {
    id: 33,
    question: 'Чем может быть представлен $event?',
    answer: 'Строкой, числом или объектом',
    theme: 'Template syntax',
  },
  {
    id: 34,
    question: 'От чего зависит, как будет представлен $event?',
    answer:
      'Форму $event объекта определяет елемент на котором вызвано событие. Например нативный DOM элемент определяет $event как DOM event object с такими свойствами как target и target.value',
    theme: 'Template syntax',
  },
  {
    id: 35,
    question: 'От чего зависит, как будет представлен $event?',
    answer:
      'Форму $event объекта определяет елемент на котором вызвано событие. Например нативный DOM элемент определяет $event как DOM event object с такими свойствами как target и target.value',
    theme: 'Template syntax',
  },
];

export const themes: Array<string> = ['Template syntax', 'Another theme'];
