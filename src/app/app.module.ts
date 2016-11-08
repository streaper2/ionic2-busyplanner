import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {Todos} from '../pages/todos/todos';
import {AddTaskModal} from "../pages/add-task-modal/add-task-modal";
import {FormsModule}  from '@angular/forms';
import {TodoService} from "../shared/providers/todo-service";
import {Prior} from "../pipes/prior";
import {DoneTodosPipe} from "../pipes/done-todos-pipe";
import {Lists} from "../pages/lists/lists";
import {Home} from "../pages/home/home";
import {TabsPage} from "../pages/todos/tabs/tabs";
import {ListsService} from "../shared/providers/lists-service";
import {CaPage} from "../pages/ca/ca";
import {IdeePage} from "../pages/idee/idee";
import {ClientsPage} from "../pages/clients/clients";
import {InfoPage} from "../pages/info/info";
import {InvestissementsPage} from "../pages/investissements/investissements";
import {MoyensPage} from "../pages/moyens/moyens";
import {ProductPage} from "../pages/product/product";



import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';


@NgModule({
    declarations: [
        MyApp,
        AddTaskModal,
        Lists,
        Home,
        TabsPage,
        Todos,
        Prior,
        ScrollableTabs,
        DoneTodosPipe,
        CaPage,
        ClientsPage,
        InfoPage,
        InvestissementsPage,
        MoyensPage,
        ProductPage,
        IdeePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        FormsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AddTaskModal,
        Lists,
        Home,
        Todos,
        TabsPage,
        CaPage,
        ClientsPage,
        InfoPage,
        InvestissementsPage,
        MoyensPage,
        ProductPage,
        IdeePage
    ],
    providers: [TodoService, ListsService]
})
export class AppModule {
}
