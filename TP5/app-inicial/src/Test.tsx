import json from './data/instrumentos.json'
const { instrumentos } = json

function Test() {
   
   
    return (
        <>
            {instrumentos.map(instrumento => (
                <p>
                    {instrumento.descripcion}
                </p>
            ))}
        </>
    );

}

export default Test;
