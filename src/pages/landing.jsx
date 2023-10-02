import React, { useEffect, useState } from 'react'
import '../styles/landing.css'
import Index from './index'
import logoYazisiz from '../images/logo-yazisiz.png'

function Landing() {

    const [openPage, setisOpen] = useState(false);

    useEffect(() => {

        let logoSpan = document.querySelectorAll('.logo')
        let intro = document.querySelector('.intro')
        let logo = document.querySelector('.logo-header')
        let index = document.querySelector('.index-div')

        setTimeout(() => {

            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active')
                }, (idx + 1) * 400)
            })
        })
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 200)
            })
        }, 2000)
        console.log(index)
        setTimeout(() => {
            intro.style.top = '-100vh'
            setisOpen(true)
        }, 2600)
    }, [])



    return (
        <>
            <div className="intro">
                <h1 className="logo-header">
                    <span className='logo'><img className='landing-logo' src={logoYazisiz} alt='not found'></img></span>
                    <span className="logo">ÖZEN</span><span className="logo">CİMNASTİK</span>
                </h1>
            </div>
            <div className='index-div'>
                <Index />
            </div>
        </>
    )
}

export default Landing