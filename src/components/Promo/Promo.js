import React from 'react';
import './Promo.css'

import check from '../../images/Check.svg'
import promoBackground from '../../images/background.svg'

function Promo({ sticky }) {
    return (
        <section className={sticky ? 'promo_sticky promo' : 'promo'}>
            <div className='promo__wrapper'>
                <div className='promo__container'>
                    <h1 className='promo__title'>
                        Don’t let malware defeat you
                    </h1>
                    <hr />
                    <h2 className='promo__subtitle'>
                        Protect your devices with
                        a security suite made for gamers
                    </h2>
                    <div className='promo__check'>
                        <img src={check} alt='check' className='promo__check-img' />
                        <p className='promo__check-text'><b>Gaming mode: </b>Ensures optimal
                            PC performance while you play</p>
                    </div>
                    <div className='promo__check'>
                        <img src={check} alt='check' className='promo__check-img' />
                        <p className='promo__check-text'><b>100% detection rate: </b>Never misses a threat</p>
                    </div>
                    <div className='promo__check'>
                        <img src={check} alt='check' className='promo__check-img' />
                        <p className='promo__check-text'><b>Cutting-edge cybersecurity: </b>Runs on AI overseen by world-leading threat analysts</p>
                    </div>
                </div>
                <img src={promoBackground} alt='background' className='promo__background' />

            </div>
            <h2 className='promo__text'>Cybersecurity you can depend on </h2>
        </section>
    );
}

export default Promo;