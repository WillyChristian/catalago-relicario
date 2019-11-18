import React from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

import	p1 from '../IMG/PaginasJPG/p1.jpg'
import	p2 from '../IMG/PaginasJPG/p2.jpg'
import	p3 from '../IMG/PaginasJPG/p3.jpg'
import	p4 from '../IMG/PaginasJPG/p4.jpg'
import	p5 from '../IMG/PaginasJPG/p5.jpg'
import	p6 from '../IMG/PaginasJPG/p6.jpg'
import	p7 from '../IMG/PaginasJPG/p7.jpg'
import	p8 from '../IMG/PaginasJPG/p8.jpg'
import	p9 from '../IMG/PaginasJPG/p9.jpg'
import	p10 from '../IMG/PaginasJPG/p10.jpg'
import	p11 from '../IMG/PaginasJPG/p11.jpg'
import	p12 from '../IMG/PaginasJPG/p12.jpg'
import	p13 from '../IMG/PaginasJPG/p13.jpg'
import	p14 from '../IMG/PaginasJPG/p14.jpg'
import	p15 from '../IMG/PaginasJPG/p15.jpg'


export default class index extends React.Component {
	render() {
		return (
			<div>
				          
	          <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src={p1} />
                    <p className="legend">Página 1</p>
                </div>
                  <div>
                    <img src={p2} />
                    <p className="legend">Página 2</p>
                </div>
                <div>
                    <img src={p3} />
                    <p className="legend">Página 3</p>
                </div>
                <div>
                    <img src={p4} />
                    <p className="legend">Página 4</p>
                </div>
                <div>
                    <img src={p5} />
                    <p className="legend">Página 5</p>
                </div>
                <div>
                    <img src={p6} />
                    <p className="legend">Página 6</p>
                </div>
                <div>
                    <img src={p7} />
                    <p className="legend">Página 7</p>
                </div>
                <div>
                    <img src={p8} />
                    <p className="legend">Página 8</p>
                </div>
                     <div>
                    <img src={p9} />
                    <p className="legend">Página 9</p>
                </div>
                     <div>
                    <img src={p10} />
                    <p className="legend">Página 10</p>
                </div>
                     <div>
                    <img src={p11} />
                    <p className="legend">Página 11</p>
                </div>
                     <div>
                    <img src={p12} />
                    <p className="legend">Página 12</p>
                </div>
                     <div>
                    <img src={p13} />
                    <p className="legend">Página 13</p>
                </div>
                     <div>
                    <img src={p14} />
                    <p className="legend">Página 14</p>
                </div>
                     <div>
                    <img src={p15} />
                    <p className="legend">Página 15</p>
                </div>
            </Carousel>
			</div>
		)
	}
}