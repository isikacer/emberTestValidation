import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';

import LoginValidations from '../validations/login';
import lookupValidator from 'ember-changeset-validations';
import LoginChangeset from 'ember-changeset';


export default class LoginController extends Controller {

  constructor() {
    super(...arguments);
    this.loginChangeset = new LoginChangeset({}, lookupValidator(LoginValidations), LoginValidations);
  }

  @service notifications;

  @tracked email;
  @tracked password;
 

  get isDisabled() {
    return !this.email && !this.password;
  }

  @action
  async checkLogin() {

    //login validation
    let self = this;
    this.loginChangeset.validate().then(async () => {
      if (this.loginChangeset.get("isValid")) {
       
        await self.login();
      } else {
        console.log('Check your form ');
        self.notifications.error('Check your form ', {autoClear:true})

      }
    });

  }


  async login() {

    this.notifications.success('login successful ...')

    console.log("login successful ...")

  }

  @action
  onCaptchaResolved() {
    console.log('Captcha success .... ');
  }
}
