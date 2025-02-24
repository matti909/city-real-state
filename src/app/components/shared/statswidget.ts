import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-stats-widget',
  imports: [CommonModule],
  template: ` <div class="grid grid-cols-12 gap-6">
    <!-- Card 1: Orders -->
    <div class="col-span-10 lg:col-span-6 xl:col-span-3">
      <div class="mb-0 card">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block mb-4 font-medium text-muted-color"
              >Propiedades totales</span
            >
            <div
              class="text-xl font-medium text-surface-900 dark:text-surface-0"
            >
              94
            </div>
          </div>
          <div
            class="flex justify-center items-center bg-blue-100 dark:bg-blue-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
          </div>
        </div>
        <span class="font-medium text-primary">12 </span>
        <span class="text-muted-color">nuevas este mes</span>
      </div>
    </div>

    <!-- Card 2: Revenue -->
    <div class="col-span-10 lg:col-span-6 xl:col-span-3">
      <div class="mb-0 card">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block mb-4 font-medium text-muted-color"
              >Ventas del mes</span
            >
            <div
              class="text-xl font-medium text-surface-900 dark:text-surface-0"
            >
              96
            </div>
          </div>
          <div
            class="flex justify-center items-center bg-orange-100 dark:bg-orange-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-dollar text-orange-500 !text-xl"></i>
          </div>
        </div>
        <span class="font-medium text-primary">%12+ </span>
        <span class="text-muted-color">mes pasado</span>
      </div>
    </div>

    <!-- Card 3: Customers -->
    <div class="col-span-10 lg:col-span-6 xl:col-span-3">
      <div class="mb-0 card">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block mb-4 font-medium text-muted-color"
              >Clientes activos</span
            >
            <div
              class="text-xl font-medium text-surface-900 dark:text-surface-0"
            >
              207
            </div>
          </div>
          <div
            class="flex justify-center items-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-users text-cyan-500 !text-xl"></i>
          </div>
        </div>
        <span class="font-medium text-primary">25 </span>
        <span class="text-muted-color">nuevos registros</span>
      </div>
    </div>

    <!-- Card 4: Comments -->
    <div class="col-span-10 lg:col-span-6 xl:col-span-3">
      <div class="mb-0 card">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block mb-4 font-medium text-muted-color"
              >Citas Programadas</span
            >
            <div
              class="text-xl font-medium text-surface-900 dark:text-surface-0"
            >
              15
            </div>
          </div>
          <div
            class="flex justify-center items-center bg-purple-100 dark:bg-purple-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-comment text-purple-500 !text-xl"></i>
          </div>
        </div>
        <span class="font-medium text-primary">8 </span>
        <span class="text-muted-color">para hoy</span>
      </div>
    </div>
  </div>`,
})
export class StatsWidget {}
