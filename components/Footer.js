import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-links">
                    <ul>
                        <li><Link href="/CGU" ><a className='link' >CGU</a></Link> | </li>
                        <li><Link href="/Politique-de-cookies" ><a className='link' >Politique de cookies</a></Link> | </li>
                        <li><Link href="/Politique-de-confidentialite" ><a className='link' >Politique de confidentialité</a></Link> | </li>
                        <li><Link href="/DMCA" ><a className='link' >DMCA</a></Link></li>
                    </ul>
                </div>
                <span className="ligne" ></span>
                <span className="footer-text"><span style={{fontWeight:'600'}}>Droppy ™ 2020</span>, Designer & codé avec 💙</span>
                <span className="footer-logo"><img src='/static/new-droppy.svg' alt='Droppy logo' style={{ width:'70px'}} /></span>

            </div>
        </footer>
    )
}

export default Footer
