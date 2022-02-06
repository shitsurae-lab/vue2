<template>
  <div>
    <h2>contact</h2>
    <h3>入力(テキスト)</h3>
    <input v-model="myInput" for="input_sample" placeholder="入力例" />
    <p>{{ `inputに${myInput}と入力されました` }}</p>

    <h3>入力(テキストエリア)</h3>
    <textarea name="" id="" cols="30" rows="10" v-model="mytextArea"></textarea>
    <p>{{ `テキストエリアに${mytextArea}と入力されています` }}</p>
    <p>{{ `文字数${mytextArea.length}` }}</p>

    <h3>チェックボックス</h3>
    <h3>Checkbox</h3>
    <h4>単体のチェックボックス</h4>
    <label for="my_label">
      <input type="checkbox" v-model="myCheck" />チェックボックスは{{
        myCheck
      }}</label
    >
    <h4>複数のチェックボックス</h4>
    <div>
      <label for="my_label"
        ><input type="checkbox" value="red" v-model="myColor" />赤</label
      >
      <label for="my_label"
        ><input type="checkbox" value="yellow" v-model="myColor" />黄</label
      >
      <label for="my_label"
        ><input type="checkbox" value="blue" v-model="myColor" />青</label
      >
      <br />
      <p>{{ `選択したのは${myColor}です` }}</p>
    </div>

    <h4>同意にチェックを入れたら送信ボタンが有効</h4>
    <div>
      <label for="labelID"
        ><input type="checkbox" id="labelID" v-model="myAgree" />同意します
        <button v-bind:disabled="myAgree === false">送信</button></label
      >
    </div>

    <h4>ラジオボタン</h4>
    <div>
      <label for="year01">
        <input type="radio" value="子" v-model="picked" id="year01" />子 </label
      ><br />
      <label for="year02">
        <input type="radio" value="牛" v-model="picked" id="year02" />牛 </label
      ><br />
      <label for="year03">
        <input type="radio" value="寅" v-model="picked" id="year03" />寅
      </label>
      <p>{{ `${picked}を選択` }}</p>
    </div>

    <h4>画像の表示をラジオボタンで切り替え</h4>
    <div>
      <label for="">
        <input type="radio" value="./src/images/deer.png" v-model="filename" />
        鹿</label
      >
      <label>
        <input type="radio" value="./src/images/sheep.png" v-model="filename" />
        羊</label
      ><br />
      <p>{{ filename }}を選択</p>
      <img :src="filename" alt="" />
    </div>

    <!-- <h4>選択: Select</h4>
    <div>
      <select name="" id="" v-model="mySelect">
        <option disabled value="">非選択時</option>
        <option value="">赤</option>
        <option value="">黃</option>
        <option value="">青</option>
        <option value="">黒</option>
      </select>
      <p v-bind:style="{ color: mySelect }">{{ mySelect }}</p>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      bl_text: 'テストです',
      myInput: '',
      mytextArea: '',
      myCheck: false,
      myColor: [],
      myAgree: false,
      picked: '子',
      filename: '',
    };
  },
};
</script>
