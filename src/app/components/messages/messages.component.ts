import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-messages',
  imports: [
    ButtonModule,
    ToastModule,
    CommonModule,
    InputTextModule,
    MessageModule,
    FormsModule,
  ],
  template: `
    <div class="flex flex-col gap-8 md:flex-row">
      <div class="md:w-1/2">
        <div class="card">
          <i class="pi pi-exclamation-circle"></i>
          <div class="mb-4 text-xl font-semibold">Alertas y Notificaciones</div>
          <div class="flex flex-col gap-4">
            <p-message severity="success"
              >8 nuevas solicitudes de visita requieren confirmación</p-message
            >
            <p-message severity="info"
              >3 contratos pendientes de renovacion</p-message
            >
            <p-message severity="warn"
              >5 propiedades requieren actualizacion de documentacion</p-message
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './messages.component.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  msgs: ToastMessageOptions[] | null = [];

  username: string | undefined;

  email: string | undefined;

  constructor(private service: MessageService) {}

  showInfoViaToast() {
    this.service.add({
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeNG rocks',
    });
  }

  showWarnViaToast() {
    this.service.add({
      severity: 'warn',
      summary: 'Warn Message',
      detail: 'There are unsaved changes',
    });
  }

  showErrorViaToast() {
    this.service.add({
      severity: 'error',
      summary: 'Error Message',
      detail: 'Validation failed',
    });
  }

  showSuccessViaToast() {
    this.service.add({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Message sent',
    });
  }
}
