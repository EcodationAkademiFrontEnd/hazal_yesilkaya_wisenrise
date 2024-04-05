import React from 'react'

export const Footer = () => {
  return (
    <footer id="contact" className="footer-one iq-bg-dark" style={{ background: 'rgb(0, 0, 0)' }}>
    <div className="footer-top">
        <div className="container">
            <div className="footer-standard row">
                <div className="d-none d-sm-block col-lg-2 col-md-6">
                    <div className="widget text-left mb-5">
                        <div className="menu-footer-link-1-container">
                            <ul id="menu-footer-link-1" className="menu p-0">
                                <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314 text-white">
                                    <a href="/" style={{ fontWeight: 700 }}>Keşfet</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-list text-left">
                        <ul>
                            <li><a href="/about-us">Hakkımızda</a></li>
                            <li><a title="Bize Ulaşın" href="/contact-us">İletişim</a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-sm-block col-lg-3 col-md-6">
                    <div className="widget text-left mb-5">
                        <div className="menu-footer-link-1-container">
                            <ul id="menu-footer-link-1" className="menu p-0">
                                <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314 text-white">
                                    <div style={{ fontWeight: 700, color: 'rgb(255, 255, 255)' }}>Kurumsal</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-list text-left">
                        <ul>
                            <li><a title="Sıkça Sorulan Sorular" href="/support">Sıkça Sorulan Sorular</a></li>
                            <li><a title="Yardım Merkezi " href="/contact-us">Yardım Merkezi</a></li>
                            <li><a title="Abonelik Şartları" href="/terms-conditions">Abonelik Şartları</a></li>
                            <li><a title="Gizlilik Politikası" href="/privacy-policy">Gizlilik Politikası</a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-sm-block col-lg-3 col-md-6">
                    <div className="widget text-left mb-5">
                        <div className="menu-footer-link-1-container">
                            <ul id="menu-footer-link-1" className="menu p-0">
                                <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314 text-white">
                                    <div style={{ fontWeight: 700, color: 'rgb(255, 255, 255)' }}>Tüm Kategoriler</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-list text-left">
                        <ul>
                            <li><a title="Ebeveynlik&amp;Çocuk Gelişimi" href="/ebeveynlikcocuk-gelisimi">Ebeveynlik&amp;Çocuk Gelişimi</a></li>
                            <li><a title="Ev&amp;Stil" href="/evstil">Ev&amp;Stil</a></li>
                            <li><a title="Gastronomi" href="/gastronomi">Gastronomi</a></li>
                            <li><a title="İş Dünyası" href="/is-dunyasi">İş Dünyası</a></li>
                            <li><a title="Kişisel Gelişim" href="/kisisel-gelisim">Kişisel Gelişim</a></li>
                            <li><a title="Psikoloji" href="/psikoloji">Psikoloji</a></li>
                            <li><a title="Sağlık" href="/saglik">Sağlık</a></li>
                            <li><a title="Sanat" href="/sanat">Sanat</a></li>
                            <li><a title="Yaşam" href="/yasam">Yaşam</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 mt-lg-0 col-lg-4 col-md-6 col-sm-12">
                    <div className="widget text-left mb-5">
                        <div className="widget-title text-white" style={{fontWeight: "bold"}}>Bizden Haberdar Ol</div>
                        <p className="text-white">Sitemize üye olarak son gelişmelerden haberdar olabilirsiniz.</p>
                        <form method="post" className="subscribe-form mt-4">
                            <input type="email" className="form-control mb-3" name="email" placeholder="E-posta Adresiniz" style={{color: "white"}} required />
                            <button type="submit" className="submit"><i className="las la-long-arrow-alt-right"></i></button>
                        </form>
                    </div>
                    <div className="footer-social-icon text-left">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="--" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="--" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="--" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="--" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
