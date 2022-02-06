<template>
  <div>
    <Header></Header>
    <p v-text="myMessage"></p>
    <p class="classicPurple">
      {{ `税込${Math.floor(myNumber * 1.1)}円です` }}
    </p>
    <p>{{ `好きな登場人物は${myArray[0]}です` }}</p>
    <p>{{ `私の好きな紅茶は${myTea[0].name}です` }}</p>
    <img v-bind:src="fileName" alt="" />
    <div class="link01"><a :href="myURL[0]">Yahoo</a></div>
    <div class="link02"><a v-bind="attrs02">Yahoo</a></div>
    <Main></Main>
    <Contact></Contact>
    <Event></Event>
  </div>
</template>

<script>
const myList = [
  { name: 'ダージリン', price: 500 },
  { name: 'アールグレイ', price: 500 },
  { name: 'アッサム', price: 500 },
];

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Contact from './components/Contact.vue';
import Event from './components/Event.vue';
export default {
  components: {
    Header,
    Main,
    Contact,
    Event,
  },
  data() {
    console.log('App.vue is running');
    return {
      //ファイルネームのパスは絶対パスらしい
      fileName: './src/images/horse640.jpg',
      myMessage: 'Hey, this is Vue!',
      // message02: 'Hi, This is Vue2(props)',
      myNumber: 100,
      myArray: ['Giorno', 'Bucciarati', 'Abbacchiio', 'Mista', 'Narancia'],
      myTea: myList,
      attrs02: {
        href: 'https://www.yahoo.co.jp/',
        class: 'test02',
      },
      myURL: ['https://www.yahoo.co.jp/'],
    };
  },
};
</script>

<style lang="scss">
p {
  color: #1e50a2;
  font-weight: normal;
}
.classicPurple {
  color: #895b8a;
}
.grape {
  color: #7a4171;
  font-weight: bold;
}

.link01 {
  color: #895b8a;
  a {
    text-decoration: none;
  }
}
.link02 {
  .test02 {
    text-decoration: none;
    color: #b7282e;
  }
}
</style>
