import { H1Component } from "./todo-list/h1.component";
import { ImgComponent } from "./todo-list/ImgComponent";
import { UlComponent } from "./todo-list/ul.component";

export function TodoListComponent(){
    return(
        <>
        <H1Component content1="test 11" content2="test 21"></H1Component>
        <ImgComponent></ImgComponent>
        <UlComponent></UlComponent>
        </>
    );
}