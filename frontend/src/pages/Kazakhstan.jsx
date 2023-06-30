import logo from '../img/kazakh.svg';
import './Kazakhstan.css'


function Kazakhstan() {
    return (
        <div>
            <header className="App-header">
                <div style={{marginTop: 30, backgroundColor: "blue", borderRadius: 100}} className={"Div-app-logo"}>
                    <img src={logo} className="App-logo" alt="logo" style={{padding: 100}}/>
                </div>

                <p style={{padding: 10, border: '20px solid darkgreen', backgroundColor: '#fdeb2d', color: 'blue', fontSize: 50, marginTop: 100, marginBottom: 0, fontStyle:"italic"}}>
                    КАЗАХСТАН ОБЪЯВЛЯЕТ ВАМ ЯДЕРНУЮ БОМБОРДИРОВКУ
                </p>

                <img src={"https://i.gifer.com/7vCG.gif"} height={250} style={{top: 0, left: 150, position: "absolute", transform: "rotate(180deg)"}}/>

                <img src={"https://i.gifer.com/UTF.gif"} height={400} style={{top: 300, left: 1350, position: "absolute"}}/>

            </header>
        </div>
    );
}

export default App;
