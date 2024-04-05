import React from 'react'

export const Education = () => {
  return (
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
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-sm-5">
                                <img src="https://wisenrise.com/static/media/yatay2_0004_Janset%20Bilgin.a1e0efb25f0eb410c382.jpg" alt='--' style={{borderRadius: "10px"}}></img>
                            </div>
                            <div class="col"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="d-flex flex-wrap align-items-center">
                        <div class="d-flex align-items-center mt-2 mt-md-3" data-iq-gsap="onStart" data-iq-position-x="-200" data-iq-delay="-0.5" style={{width: "271px",height: "34px"}} >
                          <span className="main-title channel-logo text-uppercase text-primary">EĞİTİMLER</span>
                        </div>
                    </div>
                    <h4 class="big-title title text-uppercase mt-4 mb-4" data-iq-gsap="onStart" data-iq-position-x="-200" style={{lineHeight: "40px"}}>“DAHA FAZLA BİLGİ İÇİN İLGİNİ ÇEKEN KATEGORİLERİ SEÇ”</h4>
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
  )
}
