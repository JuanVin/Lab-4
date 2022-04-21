

function Test(props:any) {
    const test = props.test;
    const listItems = test.map((obj:any) =>    
    <>
    <h1>{obj.id}</h1>
    <h2>{obj.instrumento}</h2>
    <h2>{obj.marca} {obj.modelo}</h2>
    </>
    );

    return <h1>{listItems}</h1>;
    
}

export default Test;
