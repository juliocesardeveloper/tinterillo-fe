import React from 'react';
import { ContentDetail } from "./ContentDetail";
import { SelectedContent } from './SelectedContent';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';

function ResultContent({ info }){

  const { active } = useSelector(state => state.articles)

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
        {
          (active)
            ? ( <SelectedContent res={info} /> )
            : ( <NothingSelected /> )
        }
      </div>
    </div>
  )
}

export default ResultContent