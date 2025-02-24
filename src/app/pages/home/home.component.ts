import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsWidget } from '../../components/shared/statswidget';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { MessagesComponent } from '../../components/messages/messages.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import generatePDF from '../../../lib/pdf';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    StatsWidget,
    StatCardComponent,
    MessagesComponent,
    DialogModule,
    ConfirmDialogModule,
    SelectModule,
    FormsModule,
  ],
  template: `
    <div class="flex flex-col gap-4">
      <app-stats-widget />
      <app-stat-card />
      <div class="grid grid-cols-2">
        <app-messages />
      </div>
    </div>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  reciboDialog: boolean = false;
  clienteNumero: string = '';
  mes: string = '';
  monto: number = 0;

  adicionalesSeleccionados: string[] = [];

  adicionalesOptions = [
    { label: 'Agua', value: 'Agua' },
    { label: 'Luz', value: 'Luz' },
    { label: 'Expensas', value: 'Expensas' },
  ];
}
