import React, { useRef, useState, useEffect } from 'react';
import { fetchMostViewedClassrooms } from '../resources/api/api';
import { scrollLeft, scrollRight } from '../utils/ArrowButtonScroll';
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';

export const FavoritesContents = (props) => {
    const contentRef = useRef(null);
    const scrollAmount = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        const getContainerWidth = () => {
            if (contentRef.current) {
                return contentRef.current.offsetWidth;
            }
            return 0;
        };
        scrollAmount.current = getContainerWidth() * 0.25;

        fetchMostViewedClassrooms()
            .then(data => {
                setServicesData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <section id='iq-favorites'>
            <div className="container">
                <div className="row  col-sm-12">
                    <div className="overflow-hidden">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-item-center flex-wrap">
                                <h4 className="main-title channel-logo mt-5 mb-0" style={{ fontSize: "26px" }}>{props.news}</h4>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fs-small mt-5">
                                <div className="d-flex align-items-center justify-content-between mr-3">
                                    <div id="prevTrending" className="">
                                        <i className="fa fa-chevron-left" onClick={() => scrollLeft(contentRef, scrollAmount)}></i>
                                    </div>
                                    <div style={{ margin: '0 10px' }}></div>
                                    <div id="nextTrending" className="">
                                        <i className="fa fa-chevron-right" onClick={() => scrollRight(contentRef, scrollAmount)}></i>
                                    </div>
                                </div>
                                <a className="iq-view-all" href="/kategoriler">Tümü</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="favorites-contens">
                    <div className="swiper-container list-inline row p-0 m-0 " as="ul">
                        <div className="swiper-wrapper"
                            ref={contentRef}
                            onMouseDown={handleMouseDown(contentRef, setIsDragging, setStartX, setScrollLeftStart)}
                            onMouseMove={handleMouseMove(contentRef, isDragging, startX, scrollLeftStart)}
                            onMouseUp={handleMouseUp(setIsDragging)}
                            onMouseLeave={handleMouseUp(setIsDragging)}
                            style={{ overflowX: 'hidden', display: 'flex', position: 'inline-block' }}
                        >
                            {servicesData.map( service=> (
                                <div key={service.id} className="swiper-slide swiper-slide-duplicate" style={{ width: "143.333px" }} data-swiper-slide-index="7" as="li">
                                    <div className="ws-card" style={{ width: "100%", backgroundImage: `url("${service.thumbnail.path}")` }}>
                                        <div className="ws-card-img-bg"></div>
                                        <div className="d-flex flex-column justify-content-between align-items-center w-100 ws-title">
                                            <div className="text-center d-flex align-items-center justify-content-end flex-column ">
                                                <a className="ws-card-title" href={service.slug}><img src={service.teacher.logo.path} alt={service.teacher.name + " logosu"} style={{ width: "70%", pointerEvents: "none" }} /></a>
                                                <div className="mt-auto">
                                                    <div className="ws-card-line"></div>
                                                    <div className="d-flex justify-content-center text-center w-100 px-3 mb-1">{service.name}</div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column align-items-stretch " style={{ width: "90%" }}>
                                                <div role="button" className="btn btn-hover mb-3 overflow-hidden btn-watch-now "><i className="fa fa-play mr-1" aria-hidden="true"></i>Şimdi İzle</div>
                                                <a role="button" className="btn btn-outline-light overflow-hidden" href='--'>İncele</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FavoritesContents;
