import Users from "./components/users/Users";
import Menu from "./components/menu/Menu";
export default function App() {
    return ( <div>
            <Menu
                pages={['users page', 'comments page', 'posts page']}
                classes={['xxx','yyyy','target']}/>
            <Users/>
            <Menu pages={['about', 'team', 'contact us']}
             classes={['asd','qwe','trolo']}/>

               </div> );
}

