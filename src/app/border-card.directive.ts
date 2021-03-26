import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { reduce } from 'rxjs-compat/operator/reduce';
  
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
    private initialColor: string = '#f5f5f5' ;
    private defaultColor: string = '#009688' ;
    private defaultHeiht: number = 180 ;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeiht);
    }
  
    @Input ('pkmnBorderCard') borderColor: string; //alias
    //@Input ('pkmnBorderCard') borderColor: string;  sans aliave

    @HostListener ('mouseenter') onMouseEnter(){
        this.setBorder(  this.borderColor || '#009688');
    }
    @HostListener ('mouseleave') onMouseLeave(){
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}