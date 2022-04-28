
import { useEffect, useState } from "react";
import NavBar from './NavBar';
import apiFunctions from './apiFunctions';
import ListItem from './ItemList';


function InstrumentList() {
    
    const [isLoading, setIsLoading] = useState(true);
    const [instrumentos, setInstrumento] = useState([null]);

    useEffect(() => {
        setInstrumento(apiFunctions.getInstruments())
        setIsLoading(false)
    }, []);


    if (isLoading) {
        return (
            <>
            <body style={{ backgroundColor: "#ededed" }}>
                <NavBar></NavBar>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Loading...</h1>
                </div>
            </body>
            </>
        );
    }
    return (
        <>
        <NavBar></NavBar>
        <div className='container mt-5' style={{display: "flex", justifyContent: "center"}}>
            {instrumentos.map(instrumento => {
                <ListItem data={instrumento}></ListItem>
            })}    
        </div>        
        </>
    );
}

export default InstrumentList;
