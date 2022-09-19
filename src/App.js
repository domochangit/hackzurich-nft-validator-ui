import './App.css';
import './components/buttons/buttons.css'
import { HeaderH } from "./components/header/Header";
import { useState } from "react";
import Result from "./components/grid/Result";
import Grid from "./components/grid/Grid";
import { BrowserRouter } from "react-router-dom";
import backgroundPic from "./pictures/backgroundPic.jpg";
import Searchbar from "./components/header/Searchbar";
import { Container } from "@mantine/core";


export default function App() {
    const [result, setResult] = useState(-1);

    // console.log("result:");
    // console.log(result);

    return (

        <div className="App">
            <BrowserRouter basename="/">

                <HeaderH links={[{ link: '/projects/hackzurich2022/', label: 'search' }, { link: './hackzurich2022/contact', label: 'contact' }]} />

                <Container className={"container"}>
                    <h1 className='website-title'>VALIDATE THE NFT</h1>
                    <Searchbar setResult={setResult} />
                </Container>

                {Object.prototype.toString.call(result).indexOf("Array") > - 1 &&

                    <div>
                        <div className='search-bar'></div>
                        <div className='search-title'>
                            Velas Punks's Top NFT's
                        </div>

                        <div className="result-zone">
                            <div className="filter-zone"></div>
                            <div className="card-container">
                                <Grid result={result} />
                            </div>
                        </div>
                    </div>
                }

                {result.metadata !== undefined &&
                    Object.prototype.toString.call(result).indexOf("Object") > - 1 &&
                    <Result result={result} />
                }

            </BrowserRouter>
        </div>

    );

}
