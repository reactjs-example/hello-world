
const Container=(props)=>{


    return <h1> My message in Container {props.message}</h1>

}

function MyContainer(props)
{
    return (
    <diV>
    <Container message={props.message}/>    
    <h1> My message in MyContainer {props.message}</h1>
    </diV>
    );
}

export default MyContainer