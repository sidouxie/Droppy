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

                <span className="footer-text"><span style={{fontWeight:'600'}}>Droppy ™ 2020</span>, Designer <a target = "_blank" href="https://www.xn--changedeliens-9gb.com" >&</a> <a target = "_blank" href="http://www.boostersite.com" ><img style={{width:"auto"}} src="/static/boostersite-logo.gif" alt="boostersite logo"/></a>codé avec <a target="_blank" href="http://www.robothumb.com">💙</a></span>
                <span className="footer-text"><a target = "_blank" href="http://www.fresh-annuaire.com/streaming.html">Annuaire streaming</a> <a href="http://www.net-liens.com" target="_blank"><img src="http://www.net-liens.com/img/media/nl1.jpg" alt="Net Liens - L'annuaire Internet" title="Net Liens - L'annuaire Internet" /></a></span>
                <span className="footer-logo"><img src='/static/new-droppy.svg' alt='Droppy logo' style={{ width:'70px'}} /></span>

            </div>
        </footer>
    )
}

export default Footer
