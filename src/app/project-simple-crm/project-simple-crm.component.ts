import { Component } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-project-simple-crm',
  templateUrl: './project-simple-crm.component.html',
  styleUrls: ['./project-simple-crm.component.scss']
})
export class ProjectSimpleCrmComponent {
  state = 'normal';
  isVisible = false;

  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

  constructor(private renderer: Renderer2, private translate: TranslateService) {}
  
  hoveredStates: boolean[] = [];

  showDescription(index: number) {
    this.hoveredStates[index] = true;
  }

  hideDescription(index: number) {
    this.hoveredStates[index] = false;
  }

  isDescriptionVisible(index: number): boolean {
    return this.hoveredStates[index] || false;
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

  ngAfterViewInit() {
    this.observeVisibility();
  }

  observeVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          if (this.state !== 'unnormal') {
            this.state = 'unnormal'; 
          }
        } else {
          if (!this.isVisible) {
            this.state = 'normal'; 
          }
        }
      });
    }, options);

    if (this.aboutmeLeft) {
      observer.observe(this.aboutmeLeft.nativeElement);
    }
  }

  getTranslatedText(key: string): string {
    return this.translate.instant(key);
  }
}


