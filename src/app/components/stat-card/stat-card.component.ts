import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import generatePDF from '../../../lib/pdf';

@Component({
  selector: 'app-stat-card',
  imports: [
    CommonModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
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

  openNew() {
    this.reciboDialog = true;
  }

  onGeneratePDF() {
    const product = {
      nombre: 'Servicio Básico',
      cantidad: 1,
      total: 1000,
    };

    const reciboNo = '123456789';
    const fecha = '14 de Febrero de 2025';

    generatePDF(product, reciboNo, fecha);
  }
}
