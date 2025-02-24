import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import generatePDF from '../../../lib/pdf';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

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

  async onGeneratePDF() {
    const pdfMake = (await import('pdfmake/build/pdfmake')).default;
    const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default;
    pdfMake.vfs = pdfFonts.vfs;

    const product = {
      nombre: 'Servicio Básico',
      cantidad: 1,
      total: 1000,
    };

    const reciboNo = '123456789';
    const fecha = '14 de Febrero de 2025';

    // ✅ Especificar el tipo TDocumentDefinitions
    const docDefinition: TDocumentDefinitions = {
      content: [
        { text: 'Recibo de Pago', style: 'header' },
        { text: `Fecha: ${fecha}`, margin: [0, 10, 0, 10] },
        { text: `Número de Recibo: ${reciboNo}` },
        { text: '------------------------------', margin: [0, 10, 0, 10] },
        { text: `Producto: ${product.nombre}` },
        { text: `Cantidad: ${product.cantidad}` },
        { text: `Total: $${product.total}`, bold: true },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
      },
    };

    pdfMake.createPdf(docDefinition).download(`recibo_${reciboNo}.pdf`);
  }
}
