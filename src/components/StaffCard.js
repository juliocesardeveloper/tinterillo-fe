import React from 'react'

import juan from '../Images/juan-pablo-nunez.jpg'
import edward from '../Images/edward-toledo.jpg'
import johan from '../Images/johan-avila.jpg'
import alex from '../Images/alexander-herrera.jpg'
import jairo from '../Images/jairo-ramirez.jpg'
import david from '../Images/david-flores.jpg'
import julio from '../Images/julio-cesar.jpg'

export const StaffCard = () => {
  return (
    <div className="staff-card">
      <h2 className="staff-card__title">Searcher team</h2>
      <a href="https://www.linkedin.com/in/juanpanu/" target="_blank" rel="noreferrer">
        <div href="" className="staff-card__block">
          <img src={juan} alt=""/>
          <div className="text">
            <p><b>Juan Pablo Nuñez</b></p>
            <p>Data scientist</p>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/edwardtl/" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={edward} alt=""/>
          <div className="text">
            <p><b>Edward Toledo</b></p>
            <p>Data scientist</p>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/alexander-herrerai/" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={alex} alt=""/>
          <div className="text">
            <p><b>Alexander Herrera</b></p>
            <p>Backend developer</p>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/johan-avila-41098a129/" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={johan} alt=""/>
          <div className="text">
            <p><b>Johan Ávila</b></p>
            <p>Backend developer</p>
          </div>
        </div>
      </a>
      <a href="https://github.com/JairoRamirezC" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={jairo} alt=""/>
          <div className="text">
            <p><b>Jairo Ramírez</b></p>
            <p>Frontend developer</p>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/dfloresdev/" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={david} alt=""/>
          <div className="text">
            <p><b>David Flores</b></p>
            <p>Frontend developer</p>
          </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/julio-cesar-arroyave/" target="_blank" rel="noreferrer">
        <div className="staff-card__block">
          <img src={julio} alt=""/>
          <div className="text">
            <p><b>Julio César Arroyave</b></p>
            <p>Frontend developer</p>
          </div>
        </div>
      </a>
    </div>
  )
}
