export {};


import axios from 'axios';

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url)
  .then(function (response) {
    // let data: any;
    // let data: object[];
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    let data: Article[];
    data = response.data;

    // ダミーで変数を上書き
    // data = [
    //   {
    //     id: 1,
    //     title: 'title',
    //     description: 'description'
    //   }
    // ]
    console.log(data);
  });