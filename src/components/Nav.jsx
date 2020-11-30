import React, { useEffect, useState } from 'react'

import './Nav.css'
function Nav() {
    const [showBlackNav, setshowBlackNav] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setshowBlackNav(true)
            }
            else { setshowBlackNav(false) }
        })
        return () => {
            window.removeEventListener('scroll', this)
        }
    }, [])
    return (
        <nav className="nav" style={showBlackNav ? { "backgroundColor": "#111" } : null}>
            <img className="nav__logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
                alt="Netflix-logo"
            />
            <img className="nav__avatar"
                src=" https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix-logo"
            />
        </nav>
    )
}

export default Nav
