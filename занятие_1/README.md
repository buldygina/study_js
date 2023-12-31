# Массивы
- [Теория](#что-такое-массив)
- [Дз](#дз)

## Что такое массив?

> Массив - это набор элементов. Элементами могут быть целые числа, строки, DVD-диски, игры, книги — что угодно на самом деле.

## Доступ к элементам в массивах


> Две наиболее примитивные операции с массивами - это запись элементов в них и чтение элементов из них. Все остальные операции с массивами построены поверх этих двух примитивных операций.

Чтобы *поместить* что-то в *массив*, нам нужно решить, в какое из мест мы хотели бы его поместить. Каждое из мест идентифицируется с помощью номера в диапазоне от 0 до N - 1. 1-е место - это 0, 2-е место - это 1, 3-е место - это 2... вплоть до любого места. Мы называем эти числа, которые идентифицируют каждое место, индексами.

### Пример
Например у нас Полка книг (массив) из 5 книг (элементов):
```js
let bookShelf = ["Облачные дороги", "Девушка, которая застряла в паутине", "Золотой Сын", "Квантовый волшебник", "В клетке. Вирус. Напролом"]
```

Мы хотим заменить книгу `Золотой Сын` на `Грустные факты о животных`, что для этого нудно сделать ? Так как Золотой сын у нас `3 по счёту`, то он имеет индекс `2`, так что просто заменяем второй эелемнт на тот что нам нужен 

```js
bookShelf[2] = "Грустные факты о животных"
```

Если же мы хотим прочитать конкретный элемент из массива, то просто берём по индексу, без равно

```js
console.log(bookShelf[1])
//Выведится: Девушка, которая застряла в паутине
```

## Запись элементов в массив с помощью цикла

Обычно мы используем цикл для помещения большого количества значений в массив. Чтобы проиллюстрировать это, давайте перейдем к другому примеру.
На этот раз мы собираемся создать массив из чисел и поместить в него первые 10 цифр в квадрате.

```js
let numbers = []
for (let i = 0; i < 10; i ++) {
    //так как ноль на ноль будет ноль, мы не будет брать ноль, а будем брать числа от 1 до 10, для этого мы будем брать i + 1
    numbers[i] = (i + 1) * (i + 1)
}
```

Здесь мы кладём эелементы стандартным спопсобом рассмотренным в [Доступ к элементам в массивах](#доступ-к-элементам-в-массивах), используя этот способ мы можем положить элемент на любое место.

## Вставка в конец массива
> В любой момент времени мы знаем индекс последнего элемента массива, поскольку мы отслеживаем его в нашей `length` переменной. Все, что нам нужно сделать для вставки элемента в конец, это присвоить новому элементу один индекс после текущего последнего элемента:

![ArrayToEndImage](https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/Figures/Array_Explore/Array_Insertion_1.png)

```js
let numbers = [1, 2, 3]
numbers[3] = 4
//или
numbers[numbers.length] = 4
```
Также Можно использовать метод `push(data)`, который лишь добавляет новый элемент в конец, вот то же решение, что и в [Запись элементов в массив с помощью цикла](#запись-элементов-в-массив-с-помощью-цикла), но с `push`

```js
let numbers = []
for (let i = 1; i <= 10; i ++) {
    //Так как индексы нам больше не нужны, мы можем идити не с 0, а с 1
    numbers.push(i)
}
```

## Чтение элементов из массива с помощью цикла
Мы также можем использовать цикл для распечатки всего, что есть в массиве.

```js
let fruits = ["banana", "apple", "pineaple", "watermelon", "grape"]

for (let i = 0; i < fruits.length; i ++) {
    // Здесь длинна 5, а индексы будут идти 0 1 2 3 4, следовательно надо остановить цикл, когда i = 4 или i < 5
    console.log(fruits[i])
}
```

## Дз
Дз делаешь в файле index.js в этой папке

### Задание 1
Есть массив `nums` целых чисел, верни, сколько из них содержат четное число цифр.
```
nums = [15, 24312, 732812, 347193, 33, 51, 22, 123, 653, 284723894729]
```

#### Пример 1
```
Входные данные: nums = [12,345,2,6,7896]
Результат:2 
Объяснение: 12 содержит 2 цифры (четное количество цифр). 
345 содержит 3 цифры (нечетное количество цифр). 
2 содержит 1 цифру (нечетное количество цифр). 
6 содержит 1 цифру (нечетное количество цифр). 
7896 содержит 4 цифры (четное количество цифр). 
Следовательно, только 12 и 7896 содержат четное количество цифр.
```
#### Пример 2
```
Входные данные: nums = [555,901,482,1771]
Результат: 1 
Объяснение: 
Только 1771 содержит четное количество цифр.
```

### Задание 2
Есть массив целых чисел `nums`, отсортированных в возрастающем порядке, верните массив квадратов каждого числа, отсортированных в возрастающем порядке.

```
nums = [-10, -3, -1, 1, 6, 18]
```

#### Пример 1
```
Входные данные: nums = [-4,-1,0,3,10]
Результат: [0,1,9,16,100]
Объяснение: После возведения в квадрат массив становится [16,1,0,9,100].
После сортировки он становится [0,1,9,16,100].
```

#### Пример 2
```
Входные данные: числа = [-7,-3,2,3,11]
Результат: [4,9,9,49,121]
```

### Задание 3
Учитывая массив nums, верните максимальное количество последовательных 1 символов в массиве.

```
nums = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1]
```

#### Пример 1
```
Входные данные: nums = [1,1,0,1,1,1]
Результат:3 
Пояснение: Первые две цифры или последние три цифры представляют собой последовательные единицы. Максимальное количество последовательных единиц равно 3.
```

#### Пример 2
```
Входные данные: числа = [1,0,1,1,0,1]
Результат: 2
```