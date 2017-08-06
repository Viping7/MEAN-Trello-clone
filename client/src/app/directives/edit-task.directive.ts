import {
    Directive,
    AfterViewInit,
    ElementRef,
    Renderer2
} from '@angular/core';
declare var $:any;

@Directive({
    selector: '[appEditTask]'
})
export class EditTaskDirective implements AfterViewInit {
    constructor(private el: ElementRef, private render: Renderer2) {}
    ngAfterViewInit() {
       
        $(document).ready(function(){
             $('.edit-list-name').click(function(event){
                $('.edit-list-name').removeClass('form-control').attr('readonly');
                $(this).addClass('form-control').removeAttr('readonly');
                event.stopPropagation();

            });
            $('body').click(function(event){
                $('.edit-list-name').removeClass('form-control').attr('readonly');
                $('.edit-task-name').removeClass('selected-card').hide();
                $('.task-name').show();
            })
           $('.add-card').click(function(event){
               $('.new-card').hide();
               $(this).prev().addClass('selected-card').show();
               $('.overlay').show();
               event.stopPropagation();
            })
            $('.new-card,.edit-task-name').click(function(event){
                event.stopPropagation();
            })
            $(".cancel-card").click(function(){
                $('.new-card,.overlay').hide();
            })
            $('.task-name').click(function(event){
                $('.overlay').show();
                $(this).hide().next().show().addClass('selected-card');
                event.stopPropagation();
            })
            $('.overlay,.save-card').click(function(){
                $('.overlay,.new-card').hide();

            })
        })
    }
}