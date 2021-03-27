import React from 'react'
import { useDispatch } from 'react-redux'


import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'

import { ModalStaff } from './ModalStaff'
import { StaffCard } from './StaffCard'

import { uiOpenStaffModal } from '../actions/ui';

export const Footer = () => {

  const dispatch = useDispatch();

  const handleClickStaffModal = () => {
    dispatch( uiOpenStaffModal() );
  }


  return (
    <>
      <div className="footer-container">
        <div className="footer-section1">
          <p> Tinterillo App </p>
          <p> es un proyecto SWAT Neo </p>
          <p> del programa <a href="https://platzi.com/blog/conoce-que-es-platzi-master/" target="_blank" rel='noreferrer'>Platzi Master</a> de <a href="https://platzi.com/cursos/" target="_blank" rel='noreferrer'>
              Platzi
            </a>
          </p>
        </div>
        <div className="footer-section2">
          <p>Este es un proyecto open source:</p>
          <a href="https://github.com/Searcher-PlatziMaster" target="_blank" rel="noreferrer"><GoMarkGithub className="section2-icon" /></a>
        </div>
        <div className="footer-section3">
          <p onClick={handleClickStaffModal} >Creado por el team Searcher</p>
        </div>
      </div>
      <ModalStaff>
        <StaffCard />
      </ModalStaff>

    </>
  )
}
