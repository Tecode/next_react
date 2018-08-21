import {observable, action} from 'mobx';

class AppSore {
  @observable name = 'Mobx子页面';
  @observable day = '20';
  @action.bound log() {
    console.log('mobx');
  }
}

export default new AppSore();