import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsWidget } from '../../components/shared/statswidget';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';

@Component({
  selector: 'app-home',
  imports: [StatsWidget, StatCardComponent],
  template: `
    <div class="flex flex-col gap-4">
      <app-stats-widget />
      <app-stat-card />
    </div>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
