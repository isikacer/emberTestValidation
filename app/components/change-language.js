import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';


const LANG_TEXT = "lang_text";
const LANG_VALUE = "lang_value";

export default class LivesComponent extends Component {
  @service intl;
   

  constructor(...args){
    super(...args);
   const lang_text = window.localStorage.getItem(LANG_TEXT)!=undefined?window.localStorage.getItem(LANG_TEXT):'en';
    const lang_value = window.localStorage.getItem(LANG_VALUE) != undefined ? window.localStorage.getItem(LANG_VALUE)  : 'en-us';
   this.selectedLang = {text:lang_text, value:lang_value};

  }
  

  @tracked names = [{text:'en', value:'en-us'}, {text:'fr',value:'fr-fr'}]

  @tracked selectedLang;

  @action 
  langSelected(lang){
    console.log('langSelected ', lang)
    this.intl.setLocale(lang.value);
    this.selectedLang = lang;

    window.localStorage.setItem(LANG_TEXT,lang.text);
    window.localStorage.setItem(LANG_VALUE,lang.value);

    //window.location = window.location.href
  }
}