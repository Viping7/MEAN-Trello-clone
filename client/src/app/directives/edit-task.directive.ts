import { Directive,AfterViewInit,ElementRef,Renderer2  } from '@angular/core';

@Directive({
  selector: '[appEditTask]'
})
export class EditTaskDirective implements AfterViewInit{
constructor(private el:ElementRef,private render:Renderer2 ) { }
/*@HostListener('click') endableEdit(){
	this.el.nativeElement.children[0];
}*/
	
ngAfterViewInit(){
	this.render.listen(this.el.nativeElement.children[0],'click',(event)=>{
	this.render.setStyle(this.el.nativeElement.children[2],"display","block",null);
	this.render.setStyle(this.el.nativeElement.children[1],"display","none",null);
	this.render.setStyle(this.el.nativeElement.children[0],"visibility","hidden",null);
	});
this.render.listen(this.el.nativeElement.children[2].children[1],'click',(event)=>{
	this.render.setStyle(this.el.nativeElement.children[2],"display","none",null);
	this.render.setStyle(this.el.nativeElement.children[1],"display","block",null);
   this.render.setStyle(this.el.nativeElement.children[0],"visibility","visible",null);
	});
	this.render.listen(this.el.nativeElement.children[2].children[2],'click',(event)=>{
	this.render.setStyle(this.el.nativeElement.children[2],"display","none",null);
	this.render.setStyle(this.el.nativeElement.children[1],"display","block",null);
   this.render.setStyle(this.el.nativeElement.children[0],"visibility","visible",null);
	});
}
}
