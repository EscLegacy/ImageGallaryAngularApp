import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover') disabled: boolean = true;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  @HostListener('mouseover') mouseover() {
    // this.eleRef.nativeElement.style.transform = "scale(1.3)";
    // this.eleRef.nativeElement.style.transition = "all 0.3s ease 0s";
    this.renderer.setStyle(this.eleRef, 'transform', this.disabled ? 'scale(1.3)' : null);
    this.renderer.setStyle(this.eleRef, 'transition', this.disabled ? 'all 0.3s ease 0s' : null);

  }

  @HostListener('mouseleave') mouseleave() {
    this.eleRef.nativeElement.style.transform = "scale(1)";
  }


}
