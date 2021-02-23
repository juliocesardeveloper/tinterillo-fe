import React from 'react'
import Results from "./results";
import Nav from "./Nav";
import ResultContent from './Result-content'
// import {search} from '../Images/search.svg'

function MainSearch() {
    return(
        <header>
            <Nav/>
            <main>
                {/* <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_ksm6Ql15mCzcSRiahXsgeljHqXoPqOfDWWnlo=s32-c-mo" alt="imagen de perfil"  title="Cuenta de Google: jairo ramirez (trolljairo@gmail.com)"/> */}
                <img src='../Images/logo.svg' alt='Logo'/>
                <h1>THE LAST WORD</h1>
                <div>
                    <section className="section__input">
                        <input type="text"/>
                        {/* <img src={search} className='icon-search'></img> */}
                    </section>
                </div>
            </main>
            {/* <ResultContent/> */}
            <Results/>
            <Results/>
            <Results/>
        </header>
    )
}

export default MainSearch