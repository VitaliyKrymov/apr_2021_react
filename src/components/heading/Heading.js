export default function Heading(props){
    console.log(props);
    console.log(props.title);
    console.log(props.desc);

    return (<div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>);
}