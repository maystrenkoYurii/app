import React, { Component } from 'react';

import Wrapper from '../../../../containers/Pages/Wrapper/index';

class Basket extends Component {
  render() {
    return (
      <Wrapper>
        {
          'Basket. У звязку з тим що не працює мікросервіс кошика, з невідомих мені причин, думаю що роблю все правильно, а самого доступу до api з токеном не має, не можливо доробити завдання. Для перевірки моїх твердженнь, перейдіть \\src\\flux-saga\\bus\\fetch\\basket\\saga\\workers\\fetchBasketProducts.js - розкоментуйте код та перезапустіть зборку. Якщо це не так або виникнуть запитання - моя пошта yura1994hd@gmail.com. Якщо я не прав пишіть дороблю.'
        }
      </Wrapper>
    );
  }
}

export default Basket;
