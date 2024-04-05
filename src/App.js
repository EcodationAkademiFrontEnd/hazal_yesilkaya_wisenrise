import './App.css';
import { FavoritesContents } from './components/FavoritesContents';
import { FeaturedTeachers } from './components/FeaturedTeachers';
import { Footer } from './components/Footer';
import { HeaderPart } from './components/HeaderPart';
import { LastSection } from './components/LastSection';
import News from './components/News';
import newsData from "./resources/local-storage/news.json";
import forParentsData from "./resources/local-storage/special_for_parents.json";
import { fetchCategories, fetchClassrooms } from './resources/api/api';
import React, {useRef, useState, useEffect } from 'react';
import { handleMouseDown, handleMouseMove, handleMouseUp } from './utils/VerticalDragScroll';


function App() {
  const [categories, setCategories] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopStart, setScrollTopStart] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);

        const servicesData = await fetchClassrooms();
        setServicesData(servicesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return ( 
    <div className="App">
      {/* Header - Start */}
      <HeaderPart/>
        <div className='content-page' id="content-page">
          {/* Animation - Start */}
          <div className="slider m-0 p-0">
              <div className="overflow-hidden">
                <div className="animation-bg"></div>
              </div>
          </div>
          {/* Prices - Start */}
          <section class="home-page my-0 my-xs-2 my-md-5 pt-0 pb-3">
          <div class="position-relative container">
            <div class="slider-inner row justify-content-center text-center">
              <div class="mt-2 col-md-6 col-sm-12">
                <h4 class="title" data-iq-gsap="onStart" data-iq-position-x="-200">En İyilerden Yüzlerce Eğitim Videosunu İstediğin Yerde İzle! <br/>Wise&Rise ile Olduğun Yerde Durma, İlerle!</h4>
                <div class="d-flex flex-wrap align-items-center">
                </div>
              </div>
              <div class="mt-2 col-md-6 col-sm-12">
                <div class="w-100 h-100 d-flex justify-content-center align-items-center mt-0 mt-xs-1">
                  <a class="btn btn-hover" href="/sign-up">Şimdi İlerle</a>
                  <a class="btn btn-link d-flex price-wrapper mt-3" href="/pracing-plan">
                    <div class="price btn-link">
                      <span class="price-item btn-link"> 59.9 ₺ / Bireysel </span>
                      <span class="price-item btn-link"> 99 ₺ / Aile</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>
            <section id="iq-upcoming-movie" class="mb-5">
            <section>
          <div class="d-none d-sm-block">
          <div class="home-page container">
          <div class="align-items-center row">
              <div class="col-sm-12">
              <div class="text-center">
                  <h4 class="title mb-5">Herkesin Bir Potansiyeli Vardır! <br/> Yeni Olasılıkların Kilidini Aç ve Becerilerini Geliştir.</h4>
              </div>
              </div>
          </div>
          </div>
      </div>
      <div class="container" style={{  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className='gradient' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', position: 'relative', height: '100%' }}>
          <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', textAlign: 'center', width: '30%' }}>
          {/* <i class="fa fa-play mr-1" aria-hidden="true"></i> */}
              <div class="d-flex flex-column justify-content-center align-items-center w-100 ws-new-title">
              <div class="news">Yeni</div>
              <div class="text-center">
                  <a class="ws-card-title1" href="/ilber-ortayli/hayata-yon-vermek">
                  <img src="https://d2n3smj2dajpcu.cloudfront.net/teacher_logos/430788306b70de4f5c57493238a53edc/ilber-ortayli.png" alt="İlber Ortaylı logosu" style={{width: "70%"}}></img>
                  </a>
                  <div class="ws-new-card-line"></div>
                  <div class="d-flex justify-content-center text-center w-100 px-3 mb-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textTransform: 'capitalize' }}>Hayata Yön Vermek</div>
              </div>
              </div>
          </div>
          <img src='https://d2n3smj2dajpcu.cloudfront.net/classroom_banners/44d0b128821595037f34fb45f7f26268/ilber-ortayli-cc.jpg' alt='İlber Ortaylı'  />
          </div>
      </div>
            </section>
            {/* Favorites Contents */}
              <FavoritesContents
              news={"En Çok İzlenenler"}/>
              {/* Appius Claudius - Start */}
              <section>
                  <div class="mt-5 pb-0">
                  <div class="mt-3 container">
                      <div class="align-items-center row">
                      <div class="col-sm-12">
                          <div class="text-center iq-breadcrumb-two mb-0">
                          <img class="mb-5" alt="--" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAqCAYAAAD4Uag9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALPSURBVHgB3ZlPctowFId/T3TRZboIoSWdcU9QegMgB2huUG6Q3oBygqYnSHKD5gAZuzfgBvWipJBuWHUBRapsDw4ODujJlmaSb5GQieSPJ1n/ngiWhM03QwV8Ma5AGPdntx9ggY1LwIKwFQQsUeIi+gYLbF1WgUEuh2CzimCDpYsdWNh8e6qgBpw6BFz2ptMYTKq42IEprL6CixBXsKCKixVYeHR8pn8FnDq6CePe9FcEJlVdxoGlg1jJz2CiQNdgUofLvMeyQRyAiaDVObjU4CKTCmkLysVPcCGK+rNJj1OlLpdRj2lRCAuIwJ406nLt7bGbw/aASF2Az7x/d/uKU6FO184eS14LLbJYINMW+84pX7dr96u4WvKn3PzJzLWrZtejr6L1IM6eGusN7zvT4i5cj/aYlAv+qr92EY045V24SgNLBzFwCmvMN7yuXKWB2Q7irDKuORteV66twJJDHWwHceJq4NK0rEtXYfKoNIizpxlPGq5dxR6zOtQVbLFxUceuPLCwddzlHuq2UKp702zv3Tn4cIn7cqpiC2aQ/sL7gvPhSgNLWjBpAdREKjx6XXqe8uXKekyqT6gZUjQMg+Bg6x+eXCJLb1V838s5kH8XhZb06RJytezCEXotKfSOT5cQRB/hjiBstYJc5tOlX40ALhGis/7o06UnD9WBQ+SSNga1P5ddivsJ8KwDi+EQ0Sjs6WI4ZNMl9IEohlP+xflHjy6h920/4Io0l35/EPTpEpoIjiCFaPNvr670dkKnh+ECIQuJFp+udFbkZpVM0Nero7J8hC9XnhrQ2aJznVg5Qx3sObb7cOXr2Mmfid4dk9XN40MRkdx5w+LDVVig+3eTQdKtsBZRlIhM0m+uXaUp7mSXrFTjwvykS3NFcnQy+82+5HPl2nmNFB62O1IgydS+R7IzV+scIM31j1i3+Fife67w8sW4F8dzVKBu13/RSqLOgit1hQAAAABJRU5ErkJggg=="></img>
                          <p class="m-auto text-white" style={{maxWidth:"680px", fontSize: "22px"}}>
                              “Herkes kendi talihinin mimarıdır;
                              <i class="text-white font-italic" style={{fontSize: "22px"}}>faber est suae <br/> quisque fortunae.</i>
                              ”
                          </p>
                          <div class="mt-3">
                              <div class="text-white ">Appius Claudius Caecus</div>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </section>
              {/* Categories - Start */}
              <section>
                <div className="mt-1" style={{ minHeight: "435px" }}>
                  <div className="mt-3 container">
                    <div className="align-items-center row text-center">
                      <div className="col-sm-12">
                        <div className="text-center iq-breadcrumb-two">
                          <h6 className="text-primary mb-3">KATEGORİLER</h6>
                          <h3 className="title mb-5">Tüm Eğitimler</h3>
                          <p className="m-auto" style={{ maxWidth: "660px", fontSize: "20px" }}>Her ay yeni isimler&amp;yeni içeriklerle seni ilerlemeye davet ediyoruz! <br /> 9 Farklı Kategoride Gelişmek İstediğin Alanı Seç, Eğitimini Tamamla!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {categories.map(category => (
                        <div key={category.id} className="mb-3 col-xl-4 col-lg-12 col-md-12">
                          <a className="style_wsAnswerCardImg__LuByk" href={`/${category.slug}`} style={{ backgroundImage: `url("${category.banner.path}")` }}>
                            <p>{category.name}</p>
                            <img src="https://wisenrise.com/static/media/chevron-right.ff657ec791bbfad7bdc7f0966985c625.svg" className="style_icon__kyQYr" alt="icon" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* Coming Soon - Start */}
              <section className="pt-5 pb-5 d-none d-sm-block">
                <div className="mt-5 mb-5">
                    <div className="container">
                        <div className="d-flex align-items-center row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-flex align-items-center mt-2 mt-md-3" style={{ width: "271px", height: "34px" }} data-iq-gsap="onStart" data-iq-position-x="-200" data-iq-delay="-0.5" >
                                        <span className="main-title channel-logo text-uppercase text-primary">Yakında Gelecekler</span>
                                    </div>
                                </div>
                                <h4 className="big-title title text-uppercase mt-4 mb-4" style={{ lineHeight: "40px" }} data-iq-gsap="onStart" data-iq-position-x="-200">HER AY EKLENEN YENİ İÇERİKLERLE <br />İHTİYAÇ DUYDUĞUN HER KONUDA GELİŞ.</h4>
                                <div className="d-flex flex-wrap align-items-center text-left">
                                    <p data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8">Pek çok kategoride özgün bilgilerle yaşam becerilerini geliştirme imkânı…</p>
                                </div>
                                <div className="d-flex align-items-center r-mb-23 mt-3" data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8">
                                    <a className="btn btn-outline-light" style={{ width: "120px", border: "2px solid white" }} href="/kategoriler">Daha Fazla </a>
                                </div>
                            </div>
                            <div className="overflow-hidden col-lg-6 col-md-12 col-sm-12"
                                onMouseDown={handleMouseDown(contentRef, setIsDragging, setStartY, setScrollTopStart)}
                                onMouseMove={handleMouseMove(contentRef, isDragging, startY, scrollTopStart)}
                                onMouseUp={handleMouseUp(setIsDragging)}
                                onMouseLeave={handleMouseUp(setIsDragging)}
                                ref={contentRef}
                                style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
                                <div id="favorites-contens" className="position-relative" style={{ height: "100%", maxHeight: "590px" }}>
                                    <div id="prevV" className="position-absolute d-flex justify-content-center w-100 swiper-button-disabled" style={{ top: "20px", zIndex: "999" }}>
                                        <div className="p-1 border border-1 border-light" style={{ borderRadius: "50%", background: "rgb(1, 1, 1)", width: "40px", height: "40px" }}>
                                            <i className="fa fa-chevron-up"></i>
                                        </div>
                                    </div>
                                    <div id="nextV" className="position-absolute d-flex justify-content-center w-100 p-3" style={{ bottom: "-15px", zIndex: "999" }}>
                                        <div className="p-2 border border-2 border-light" style={{ borderRadius: "50%", background: "rgb(1, 1, 1)", width: "40px", height: "40px" }}>
                                            <i className="fa fa-chevron-down"></i>
                                        </div>
                                    </div>
                                    <div className="swiper-container swiper-container-initialized swiper-container-vertical swiper-container-pointer-events favorites-slider list-inline row p-0 m-0 overflow-hidden h-100" as="ul">
                                        <div className="swiper-wrapper">
                                            {servicesData.map(service=> (
                                                <div key={service.id} className="swiper-slide h-100 swiper-slide-active" as="li" style={{ height: "495.455px", marginBottom: "20px" }}>
                                                    <div className="position-relative overflow-hidden" style={{ borderRadius: "10px", maxHeight: "300px" }}>
                                                        <div className="img-box">
                                                            <img src={service.banner.path} className="img-fluid" alt="" style={{ pointerEvents: "none", userSelect: "none"}}/>
                                                        </div>
                                                        <div className="bg-shadow"></div>
                                                        <div className="block-description d-flex justify-content-center align-items-end pt-4 pb-5" style={{ right: "20px" }}>
                                                            <div className="bg-primary text-center" style={{ padding: "5px 10px", borderRadius: "20px", maxWidth: "250px", pointerEvents: "none", userSelect: "none" }}>{service.category.name}</div>
                                                            <div className="movie-time d-flex align-items-start text-end flex-column my-2 iq-ltr-direction">
                                                                <h3 className="iq-title text-white" style={{ padding: "5px 10px", pointerEvents: "none", userSelect: "none" }}>{service.name}</h3>
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
                </div>
              </section>
              {/* Education - Start */}
              <section class="py-3 d-none d-sm-block">
                <div class="mt-5 mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="ws-card-teachers">
                                    <div class="ws-card-teachers-bg"></div>
                                    <div class="mb-5 row">
                                        <div class="col"></div>
                                        <div class="col">
                                            <img src="https://wisenrise.com/static/media/yatay2_0006_Gaye%20Amus.23f183d3c265725d99bd.jpg" alt='--' style={{borderRadius: "10px"}}></img>
                                            {/* style="border-radius: 10px;" */}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8 col-sm-5">
                                            <img src="https://wisenrise.com/static/media/yatay2_0004_Janset%20Bilgin.a1e0efb25f0eb410c382.jpg" alt='--' style={{borderRadius: "10px"}}></img>
                                            {/*  style="border-radius: 10px;" */}
                                        </div>
                                        <div class="col"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="d-flex flex-wrap align-items-center">
                                    <div class="d-flex align-items-center mt-2 mt-md-3" data-iq-gsap="onStart" data-iq-position-x="-200" data-iq-delay="-0.5" style={{width: "271px",height: "34px"}} >
                                      {/* style="width: 271px; height: 34px;" */}
                                      <span className="main-title channel-logo text-uppercase text-primary">EĞİTİMLER</span>
                                    </div>
                                </div>
                                <h4 class="big-title title text-uppercase mt-4 mb-4" data-iq-gsap="onStart" data-iq-position-x="-200" style={{lineHeight: "40px"}}>“DAHA FAZLA BİLGİ İÇİN İLGİNİ ÇEKEN KATEGORİLERİ SEÇ”</h4>
                                {/* style="line-height: 40px;" */}
                                <div class="d-flex flex-wrap align-items-center text-left">
                                    <p data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8">Kategorileri ziyaret edip istediğin eğitimle dönüşümün kapısını arala.</p>
                                </div>
                                <div class="d-flex align-items-center r-mb-23 mt-3" data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8">
                                <a className="btn btn-outline-light" style={{ width: "120px", border: "2px solid white" }} href="/kategoriler">Tümünü Gör</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
              {/* Featured Contents - Start*/}
              <FeaturedTeachers/>
              <FavoritesContents
              news={"Öne Çıkan Eğitimler"}/>
              {/* Featured Contents - End*/}
              {/* News - Start */}
              <News
              news={"Yeni Eklenenler"}
              ServicesData={newsData}/>
              {/* For Parents - Start */}
              <News
              news={"Ebeveynlere Özel"}
              ServicesData={forParentsData}/>
              {/* Last Part - Start */}
              <LastSection/>
              {/* Footer - Start */}
              <Footer/>
            </section>
        </div>
    </div>
  );
}

export default App;
