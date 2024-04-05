import React, { useRef, useState, useEffect } from 'react';
import { fetchPopularTeachers } from '../resources/api/api';
import { scrollLeft, scrollRight } from '../utils/ArrowButtonScroll';
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';

export const FeaturedTeachers = () => {
    const contentRef = useRef(null);
    const scrollAmount = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() => {
        const getContainerWidth = () => {
            if (contentRef.current) {
                return contentRef.current.offsetWidth;
            }
            return 0;
        };
        scrollAmount.current = getContainerWidth() * 0.25;

        fetchPopularTeachers()
            .then(data => {
                setFeaturedData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section id="iq-favorites" className="mt-3">
            <div className="container">
                <div className="row">
                    <div className="overflow-hidden col-sm-12">
                        <div className="row  col-sm-12">
                            <div className="overflow-hidden">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <div className="d-flex align-item-center flex-wrap">
                                        <h4 className="main-title channel-logo mt-5 mb-0" style={{ fontSize: "26px" }}>Öne çıkan Eğitmenler</h4>
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
                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events favorites-slider list-inline row p-0 m-0 iq-rtl-direction" as="ul">
                                <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}
                                    ref={contentRef}
                                    onMouseDown={handleMouseDown(contentRef, setIsDragging, setStartX, setScrollLeftStart)}
                                    onMouseMove={handleMouseMove(contentRef, isDragging, startX, scrollLeftStart)}
                                    onMouseUp={handleMouseUp(setIsDragging)}
                                    onMouseLeave={handleMouseUp(setIsDragging)}
                                >
                                    {featuredData.map(service=> (
                                        <div key={service.id} className="swiper-slide swiper-slide-active" as="li" style={{ width: '335px', marginRight: '20px' }}>
                                            <div className="text-center" style={{ height: 'auto', margin: 'auto', position: 'relative', pointerEvents: "none", userSelect: "none" }}>
                                                <a className="style_imageBox1__5HV9k" href="/">
                                                    <div className="style_teacherBg__Cp8bh">
                                                        <img src={service.photo.path} width="auto" height="auto" alt={service.name} />
                                                    </div>
                                                </a>
                                                <div className="icon-box-content mt-3">
                                                    <div className="widget-container text-left d-flex flex-column">
                                                        <a className="heading-title size-default" href="/">{service.name}</a>
                                                        <p className="text-muted">{service.categories[0].name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
