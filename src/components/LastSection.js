import React from 'react'

export const LastSection = () => {
  return (
    <div>
        <section class="my-5 d-none d-md-block iq-main-slider p-0 iq-rtl-direction">
                <div class="px-4 container">
                  <div class="row">
                    <div class="p-0 col-sm-12">
                      <div class="ws-card-right d-flex justify-content-between text-left">
                        <div class="w-75">
                          <h3 class="my-1">Wise&Rise İş Dünyasında!</h3>
                          <p>Wise&Rise ile kurumunuzda bir öğrenme kültürü oluşturun. Grup indirimleri ve daha fazla bilgi için bizimle iletişime geçin. </p>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                          <a class="btn btn-hover" href="/contact-us">BİZİMLE İLERLE </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="my-5 d-none d-md-block iq-main-slider p-0 iq-rtl-direction">
                <div class="px-4 container">
                  <div class="row">
                    <div class="p-0 col-sm-12">
                      <div class="ws-card-right d-flex justify-content-between text-left" style={{ maxHeight: "498px", background: "url(https://wisenrise.com/static/media/r3.e0c4c14a43d9d7d1aae7.jpg)"}}>
                      <div className="col-xl-7 col-lg-12 col-md-12">
                        <div className="d-flex flex-wrap align-items-center mb-2"></div>
                        <h4 className="slider-text big-title title text-capitalize" data-iq-gsap="onStart" data-iq-position-x="-200">Wise&Rise İle Türkiye’nin En İyilerini İzle</h4>
                        <div className="d-flex flex-wrap align-items-center text-start">
                          <p data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8" className="text-left">İzledikçe Geliş, Geliştikçe Dönüş!</p>
                        </div>
                        <div className="d-flex align-items-center" data-iq-gsap="onStart" data-iq-position-y="80" data-iq-delay="0.8">
                          <a className="btn btn-hover" href="/sign-up">Hesabını oluştur</a>
                          <a className="btn btn-link price-wrapper " style={{height: "30px"}} href="/pracing-plan">
                            <div className="price btn-link" >
                              <span className="price-item btn-link"> 59.9 ₺ / Bireysel </span>
                              <span className="price-item btn-link"> 99 ₺ / Aile</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}
