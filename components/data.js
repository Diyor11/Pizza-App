import Img1 from '../assets/pizza/1.png'
import Img2 from '../assets/pizza/7.png'
import Img3 from '../assets/pizza/8.png'
import Img4 from '../assets/pizza/2.webp'
import Img5 from '../assets/pizza/3.png'
import Img6 from '../assets/pizza/4.png'
import Img7 from '../assets/pizza/5.png'
import Img8 from '../assets/pizza/6.png'

export const pizzas = [
    {
        id: 1,
        img: Img1,
        title: 'Чикен Сладкий Чили',
        desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
        price: 399,
        new: true,
        trend: false
    },
    {
        id: 2,
        img: Img2,
        title: 'EASY PEASY огуречный расколбас',
        desc: 'Курица, Лук, Перец Халапеньо',
        price: 549,
        new: false,
        trend: true
    },
    {
        id: 3,
        img: Img3,
        title: 'EASY PEASY чикен а-ля хрен',
        desc: 'Курица, Лук, Соус Карбонара,',
        price: 249,
        new: false,
        trend: false
    },
    {
        id: 4,
        img: Img4,
        title: 'Cезона',
        desc: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мар',
        price: 630,
        new: false,
        trend: false
    },
    {
        id: 5,
        img: Img5,
        title: '4 сезона',
        desc: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мар',
        price: 249,
        new: false,
        trend: false
    },
    {
        id: 6,
        img: Img6,
        title: 'Чикен Сладкий Чили',
        desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
        price: 159,
        new: true,
        trend: false
    },
    {
        id: 7,
        img: Img7,
        title: 'EASY PEASY огуречный расколбас',
        desc: 'Курица, Лук, Перец Халапеньо',
        price: 210,
        new: true,
        trend: false
    },
    {
        id: 8,
        img: Img8,
        title: 'Чикен Сладкий Чили',
        desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
        price: 299,
        new: true,
        trend: false
    },
]

import Fire from '../assets/nav/Fire.svg'
import Pizza from '../assets/nav/Pizza.svg'
import Combo from '../assets/nav/Combo.svg'
import Dessert from '../assets/nav/Dessert.svg'
import Drink from '../assets/nav/Drink.svg'
import Sauce from '../assets/nav/Sauce.svg'
import Snacks from '../assets/nav/Snacks.svg'
import Sushi from '../assets/nav/Sushi.svg'

export const menuItems = [
    {
      text: 'Акции',
      svg: Fire
    },
    {
      text: 'Пицца',
      svg: Pizza
    },
    {
      text: 'Суши',
      svg: Sushi
    },
    {
      text: 'Напитки',
      svg: Drink
    },
    {
      text: 'Закуски',
      svg: Snacks
    },
    {
      text: 'Комбо',
      svg: Combo
    },
    {
      text: 'Десерты',
      svg: Dessert
    },
    {
      text: 'Соусы',
      svg: Sauce
    },
]

import Sushi1 from '../assets/sushi/1.png'
import Sushi2 from '../assets/sushi/2.png'
import Sushi3 from '../assets/sushi/3.png'
import Sushi4 from '../assets/sushi/4.png'
import Sushi5 from '../assets/sushi/5.png'
import Sushi6 from '../assets/sushi/6.png'
import Sushi7 from '../assets/sushi/7.png'
import Sushi8 from '../assets/sushi/8.png'

export const sushis = [
  {
      id: 1,
      img: Sushi1,
      title: 'Филадельфия кранч',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 475,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: Sushi2,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395 ,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: Sushi3,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис,',
      price: 425 ,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: Sushi4,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 525,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: Sushi5,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 525 ,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: Sushi6,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис,',
      price: 425 ,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: Sushi7,
      title: 'Филадельфия кранч',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 475 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: Sushi8,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395,
      new: true,
      trend: false
  },
]

import D1 from '../assets/dessert/1.png'
import D2 from '../assets/dessert/2.png'
import D3 from '../assets/dessert/3.png'
import D4 from '../assets/dessert/4.png'
import D5 from '../assets/dessert/5.png'
import D6 from '../assets/dessert/6.png'
import D7 from '../assets/dessert/7.png'
import D8 from '../assets/dessert/8.png'

export const desserts = [
  {
      id: 1,
      img: D1,
      title: 'Филадельфия крем-брюле',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 399,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: D2,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395 ,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: D3,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис,',
      price: 425 ,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: D4,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 525,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: D5,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 525 ,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: D6,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис,',
      price: 425 ,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: D7,
      title: 'Филадельфия кранч',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 475 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: D8,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395,
      new: true,
      trend: false
  },
]

import Drink1 from '../assets/drinks/1.png'
import Drink2 from '../assets/drinks/2.png'
import Drink3 from '../assets/drinks/3.png'
import Drink4 from '../assets/drinks/4.png'
import Drink5 from '../assets/drinks/5.png'
import Drink6 from '../assets/drinks/6.png'
import Drink7 from '../assets/drinks/7.png'
import Drink8 from '../assets/drinks/8.png'

export const drinks = [
  {
      id: 1,
      img: Drink1,
      title: 'Pepsi',
      desc: 'Pepsi original',
      price: 199,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: Drink2,
      title: 'Pepsi',
      desc: 'Pepsi black',
      price: 180 ,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: Drink3,
      title: 'Pepsi',
      desc: 'Pepsi no sugar',
      price: 150 ,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: Drink4,
      title: 'Game Fuel',
      desc: 'Game Fuel',
      price: 179,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: Drink5,
      title: 'Pepsi',
      desc: 'Pepsi white',
      price: 210 ,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: Drink6,
      title: 'Game Fuel',
      desc: 'Game Fuel',
      price: 145 ,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: Drink8,
      title: 'Mirinda',
      desc: 'Mirinda mini',
      price: 135 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: Drink7,
      title: 'Pepsi',
      desc: 'Pepsi no sugar',
      price: 159,
      new: true,
      trend: false
  },
]

import Snack1 from '../assets/snack/1.png'
import Snack2 from '../assets/snack/2.png'
import Snack3 from '../assets/snack/3.png'
import Snack4 from '../assets/snack/4.png'
import Snack5 from '../assets/snack/5.png'
import Snack6 from '../assets/snack/6.png'
import Snack7 from '../assets/snack/7.png'
import Snack8 from '../assets/snack/8.png'

export const snacks = [
  {
      id: 1,
      img: Snack1,
      title: 'Филадельфия кранч',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 475,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: Snack2,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис',
      price: 425,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: Snack3,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: Snack4,
      title: 'Супер Филадельфия',
      desc: 'Действительно много семги, сливочный сыр, огурец, рис',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: Snack5,
      title: 'Филадельфия крем-брюле',
      desc: 'Сливочный сыр, семга татаки с тростниковым сахаром, соу',
      price: 395,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: Snack6,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: Snack7,
      title: 'Филадельфия кранч',
      desc: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо',
      price: 475 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: Snack8,
      title: 'Тигр мама',
      desc: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик',
      price: 399,
      new: true,
      trend: false
  },
]

import Souce1 from '../assets/souse/1.png'
import Souce2 from '../assets/souse/2.png'
import Souce3 from '../assets/souse/3.png'
import Souce4 from '../assets/souse/4.png'
import Souce5 from '../assets/souse/5.png'
import Souce6 from '../assets/souse/6.png'
import Souce7 from '../assets/souse/7.png'
import Souce8 from '../assets/souse/8.png'

export const souce = [
  {
      id: 1,
      img: Souce1,
      title: 'Филадельфия кранч',
      price: 475,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: Souce2,
      title: 'Супер Филадельфия',
      price: 425,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: Souce3,
      title: 'Филадельфия крем-брюле',
      price: 395,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: Souce4,
      title: 'Супер Филадельфия',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: Souce5,
      title: 'Филадельфия крем-брюле',
      price: 395,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: Souce6,
      title: 'Тигр мама',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: Souce7,
      title: 'Филадельфия кранч',
      price: 475 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: Souce8,
      title: 'Тигр мама',
      price: 399,
      new: true,
      trend: false
  },
]

import C1 from '../assets/combo/1.png'
import C2 from '../assets/combo/2.png'
import C3 from '../assets/combo/3.png'
import C4 from '../assets/combo/4.png'
import C5 from '../assets/combo/5.png'
import C6 from '../assets/combo/6.png'
import C7 from '../assets/combo/7.png'
import C8 from '../assets/combo/8.png'

export const combos = [
  {
      id: 1,
      img: C1,
      title: 'Филадельфия кранч',
      price: 475,
      new: true,
      trend: false
  },
  {
      id: 2,
      img: C2,
      title: 'Супер Филадельфия',
      price: 425,
      new: false,
      trend: true
  },
  {
      id: 3,
      img: C3,
      title: 'Филадельфия крем-брюле',
      price: 395,
      new: false,
      trend: false
  },
  {
      id: 4,
      img: C4,
      title: 'Супер Филадельфия',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 5,
      img: C5,
      title: 'Филадельфия крем-брюле',
      price: 395,
      new: false,
      trend: true
  },
  {
      id: 6,
      img: C6,
      title: 'Тигр мама',
      price: 425,
      new: false,
      trend: false
  },
  {
      id: 7,
      img: C7,
      title: 'Филадельфия кранч',
      price: 475 ,
      new: true,
      trend: false
  },
  {
      id: 8,
      img: C8,
      title: 'Тигр мама',
      price: 399,
      new: true,
      trend: false
  },
]