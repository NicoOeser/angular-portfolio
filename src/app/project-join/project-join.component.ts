import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-project-join',
  templateUrl: './project-join.component.html',
  styleUrls: ['./project-join.component.scss']
})

export class ProjectJoinComponent implements AfterViewInit {
  state = 'normal';
  isVisible = false;

  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}
  
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
}
