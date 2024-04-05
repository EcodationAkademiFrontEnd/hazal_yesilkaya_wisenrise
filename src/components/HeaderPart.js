import React from 'react'

export const HeaderPart = () => {
  return (
    <header id='main-header' style={{zIndex: "1001"}}>
        <div className='container'>
          <div className='row'>
            <div className='text-center col-sm-12'>
              <div className="App-header">
                <nav className='p-0 text-center navbar navbar-expand-lg navbar-light'>
                  <button type="button" aria-label="Toggle navigation" class="c-toggler navbar-toggler collapsed">
                    <div class="navbar-toggler-icon">
                      <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                      <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                      <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                    </div>
                  </button>
                  <a href="/" title="Wise&amp;Rise" className="navbar-brand text-center navbar-brand">
                    <img src="https://wisenrise.com/static/media/wise&rise.745c4d959d5c7954e37e.png" alt="Wise&amp;Rise" 
                    style={{ height: '55px', width: 'auto', margin: '0 auto' }}/>
                  </a>
                  <div class="mobile-more-menu dropdown">
                    <a class="more-toggle" href="/"><i class="fa fa-user"></i>
                    </a>
                  </div>
                  <div class="navbar-left d-none d-lg-block navbar-collapse collapse">
                    <div class="menu-main-menu-container">
                      <ul class="text-left navbar-nav" id="top-menu">
                        <li class="menu-item">
                          <a class="dropdown-toggle" title="Kategoriler" href="/kategoriler">Kategoriler</a>
                          <div class="d-flex align-self-stretch align-items-stretch">
                            <ul class="sub-menu">
                              <li class="menu-item"><a title="Ebeveynlik&amp;Çocuk Gelişimi Eğitimleri" href="/ebeveynlikcocuk-gelisimi">Ebeveynlik&amp;Çocuk Gelişimi</a></li>
                              <li class="menu-item"><a title="Ev&amp;Stil Eğitimleri" href="/evstil">Ev&amp;Stil</a></li>
                              <li class="menu-item"><a title="Gastronomi Eğitimleri" href="/gastronomi">Gastronomi</a></li>
                              <li class="menu-item"><a title="İş Dünyası Eğitimleri" href="/is-dunyasi">İş Dünyası</a></li>
                              <li class="menu-item"><a title="Kişisel Gelişim Eğitimleri" href="/kisisel-gelisim">Kişisel Gelişim</a></li>
                              <li class="menu-item"><a title="Psikoloji Eğitimleri" href="/psikoloji">Psikoloji</a></li>
                              <li class="menu-item"><a title="Sağlık Eğitimleri" href="/saglik">Sağlık</a></li>
                              <li class="menu-item"><a title="Sanat Eğitimleri" href="/sanat">Sanat</a></li>
                              <li class="menu-item"><a title="Yaşam Eğitimleri" href="/yasam">Yaşam</a></li>
                            </ul>
                          </div>
                        </li>
                        <li class="menu-item">
                            <a title="Planlar" href="/pracing-plan">Planlar</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="navbar-right menu-right">
                    <ul class="d-flex align-items-center list-inline m-0">
                      <div class="d-flex align-items-center">
                        <li class="nav-item">
                          <a role="button" class="btn btn-link" href="/login">Giriş</a>
                        </li>
                        <li class="nav-item">
                          <a role="button" class="btn btn-hover" href="/sign-up">Kayıt Ol</a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
