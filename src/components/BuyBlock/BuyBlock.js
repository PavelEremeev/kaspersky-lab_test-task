import React from 'react';

import './BuyBlock.css'

import windows from '../../images/icon_wind.svg'
import macOS from '../../images/icon_macOS.svg'
import android from '../../images/icon_android.svg'
import ios from '../../images/icon_iOS.svg'
import icon from '../../images/Asset.svg'
import stars from '../../images/Stars.png'

function BuyBlock({ pinned }) {
    return (
        <>
            <section className={pinned ? 'buy-block_sticky buy-block' : 'buy-block'}>
                <div className='buy-block__wrapper'>
                    <div className={pinned ? 'buy-block__container-info_sticky buy-block__container-info' : 'buy-block__container-info'}>
                        <p className='buy-block__info-text'>Compatible with:</p>
                        <img src={windows} alt='windows' className='buy-block__icon-system' />
                        <img src={macOS} alt='macos' className='buy-block__icon-system' />
                        <img src={android} alt='android' className='buy-block__icon-system' />
                        <img src={ios} alt='ios' className='buy-block__icon-system' />
                        <p className='buy-block__sale-text'>Save 20%</p>
                    </div>

                    <div className='buy-block__container-product'>
                        <div className='buy-block__container'>
                            <img src={icon} alt='icon' className='buy-block__icon' />

                            <div className='buy-block__container-review'>
                                <p className='buy-block__product-text'>Kaspersky Internet Security</p>
                                <div className='buy-block__container'>
                                    <img src={stars} alt='stars' className='buy-block__review-image' />
                                    <span className='buy-block__review-text'>(1503 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className='buy-block__price-container'>
                            <h3 className='buy-block__price-text__old'>£34.99</h3>
                            <h2 className='buy-block__price-text__new'>£35.99</h2>
                        </div>
                        <div className='buy-block__button-container'>
                            <select className='buy-block__selection'>
                                <option className='buy-block__selected-item' value='1d1y'>1 Devices, 1 Year £27.99</option>
                                <option className='buy-block__selected-item' value='1d2y'>1 Devices, 2 Year £43.99</option>
                                <option className='buy-block__selected-item' value='3d1y'>3 Devices, 1 Year £35.99</option>
                                <option className='buy-block__selected-item' value='3d2y' defaultChecked>3 Devices, 1 Year £35.99</option>
                                <option className='buy-block__selected-item' value='5d1y'>5 Devices, 1 Year £43.99</option>
                                <option className='buy-block__selected-item' value='5d2y'>5 Devices, 2 Year £71.99</option>
                            </select>
                            <button className='buy-block__button'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={pinned ? 'buy-block-mobile__sticky' : 'buy-block-mobile'}>
                <div className='buy-block-mobile__wrapper'>
                    <div className='buy-block-mobile__container-info'>
                        <p className='buy-block__product-text'>Kaspersky Internet Security</p>
                        <span className='buy-block-mobile__selected-item'><b>£35.99</b> - 3 Devices, 1 Year</span>
                    </div>
                    <button className='buy-block-mobile__button'>Buy Now</button>
                </div>
            </section>
        </>
    );
}

export default BuyBlock;