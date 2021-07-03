import User from "./components/user/User";
export default function App() {

    // let asd = {
    //     id: = 1,
    //     name: = 'vasia',
    //     address: {city: 'Lviv', street: 'Svoboda', number: 18}
    // };
    // console.log(asd.address);
    // console.log(asd.address.city);
    // console.log(asd.address.street);
    // console.log(asd.address.number);
    //
    // let {id,name,address,address:{city,street,number}}=asd;
    //
    // let x=100;
    // let y=200;
    // let coord ={x,y}
    // let coord ={x:x,y:y} x:це ключб якщо він =значенню нема потреби його писати

    // function a(){
    //
    // }
    // function b(){
    //
    // }
    return (
        <div>

            <User imya={'vasia1'} priz={'pupkin1'}/>
            <User imya={'vasia2'} priz={'pupkin2'}/>
            <User imya={'vasia3'} priz={'pupkin3'}/>
            {/*<button onClick={function (){*/}
            {/*a();*/}
            {/*b();*/}
            {/*}}> click me*/}
            {/*</button>*/}
        </div>
    );
}
