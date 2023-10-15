import { Component } from '@angular/core';
import { MenuChipsComponent } from '../menu-chips/menu-chips.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  bulletPoints = [
    { title: 'HoF Farming', explanation: 'Explicação em detalhe de HoF Farming, com instruções de como a executar e que vantagens isso traz para as vossas contas.' },
    { title: 'Cristais', explanation: 'Guia detalhado da melhor forma de obter cristais rapidamente, de modo a maximizarem os upgrades nos vossos equipamentos.'},
    { title: 'Estatísticas', explanation: 'Disponibilização de estatísticas semanais, assim como histórico.'},
    { title: 'Simulador ouro/XP', explanation: 'Simulador que disponibiliza várias informações relativas a ganhos de XP e ouro, dependendo dos inputs dados por cada utilizador.'},

  ]

}
