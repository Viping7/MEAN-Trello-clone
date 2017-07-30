import {
    Directive,
    AfterViewInit,
    ElementRef,
    Renderer2
} from '@angular/core';

@Directive({
    selector: '[appEditTask]'
})
export class EditTaskDirective implements AfterViewInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
    /*@HostListener('click') endableEdit(){
    	this.el.nativeElement.children[0];
    }*/

    ngAfterViewInit() {
        
        let parentNode=this.render.parentNode(this.el.nativeElement);
        let siblings=this.render.nextSibling(parentNode);
        console.log(siblings.children);  
        this.render.listen(this.el.nativeElement, 'click', (event) => {
                this.render.addClass(this.el.nativeElement,"form-control");
             //   this.render.removeClass(siblings.children,"form-control");
                this.render.removeAttribute(this.el.nativeElement,"readonly");
                event.stopPropagation();
                });
                this.render.listen('body', 'click', (event) => {
                this.render.removeClass(this.el.nativeElement,"form-control");
                this.render.setAttribute(this.el.nativeElement,"readonly","","");
    
                });
       
        /*this.render.listen(this.el.nativeElement.children[2].children[1], 'click', (event) => {
            this.render.setStyle(this.el.nativeElement.children[2], "display", "none", null);
            this.render.setStyle(this.el.nativeElement.children[1], "display", "block", null);
            this.render.setStyle(this.el.nativeElement.children[0], "visibility", "visible", null);
        });
        this.render.listen(this.el.nativeElement.children[2].children[2], 'click', (event) => {
            this.render.setStyle(this.el.nativeElement.children[2], "display", "none", null);
            this.render.setStyle(this.el.nativeElement.children[1], "display", "block", null);
            this.render.setStyle(this.el.nativeElement.children[0], "visibility", "visible", null);
        });*/
    }
}