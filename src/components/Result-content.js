import React from 'react'
import ContentDetail from "./ContentDetail";
import { SelectedContent } from './SelectedContent';
// import { NothingSelected } from './NothingSelected';

function ResultContent({info}){

    // ._source.headline.Title
    // const datos = info.body.hits.hits.map(res => res._source.headline.Title)
    // console.log(datos)

    return(
        <div className='main__result'>
            <div className='main__result-left'>
                {
                    info.body.hits.hits.map(res => {
                        return(
                                <ContentDetail key={res._id} res={res}/>
                        )
                    })
                }
            </div>
            <div className='main__result-right'>
                <SelectedContent />
                {/* <NothingSelected /> */}
            </div>
        </div>
    )
}

export default ResultContent