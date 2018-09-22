import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao-page.html'
})
export class SolicitacaoPage {

  constructor(public navCtrl: NavController) {

    console.log(this.navCtrl.id);
  }

}
