import React, { useEffect, useState,useRef } from 'react'
import '../styles/index.css'
import Navbar from '../components/navbar'
import About from './about'
import bgItem2 from '../images/bg/bg-item-2.svg'
import bgItem1 from '../images/bg/bg-item-1.svg'
import bgItem3 from '../images/bg/bg-item-3.png'
import serviceBg from '../images/bg/duotone1.png'
import cocuk1 from '../images/kids/cocuk-1.jpg'
import cocuk2 from '../images/kids/cocuk-2.jpg'
import hiperaktifCocuk from '../images/kids/hiperaktif-cocuk.jpg'
import autismKid from '../images/kids/autism-kid.jpg'
import gamze1 from '../images/gamze-1.jpg'

const Index = () => {


    const [wait, setWait] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setWait(true)
        }, 2600)
    }, [])

    


    const [dataFromNavbar, setDataFromNavbar] = useState("");
  const handleDataFromNavbar = (data) => {
    setDataFromNavbar(data);
  };

  const aboutSection = useRef('')

  if(dataFromNavbar === "about"){
    var navbarOffset = 100;
        window.scrollTo({
            top: aboutSection.current.offsetTop - navbarOffset,
            behavior: "smooth",
        });
        setDataFromNavbar();
    
  }

  const servicesSection = useRef('')

  if(dataFromNavbar === "services"){
        window.scrollTo({
            top: servicesSection.current.offsetTop -100,
            behavior: "smooth",
        });
        setDataFromNavbar();
    
  }

  const homeSection = useRef("");

  if(dataFromNavbar === "homescroll"){
    window.scrollTo({
        top: homeSection.current.offsetTop - navbarOffset,
        behavior: "smooth",
    });
    setDataFromNavbar();

}

const contactSection = useRef("");

  if(dataFromNavbar === "contact"){
    window.scrollTo({
        top: contactSection.current.offsetTop - 120,
        behavior: "smooth",
    });
    setDataFromNavbar();

}


    return (
        <body ref={homeSection}>
            <div className='index-navbar-component'>
            <Navbar onData={handleDataFromNavbar}/></div>
             {/* <svg className='first-svg' version="1.1" xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style={{stopColor:"rgba(130, 158, 249, 0.06)"}}></stop>
				<stop offset="50%" style={{stopColor:"rgba(76, 190, 255, 0.6)"}}></stop>
				<stop offset="100%" style={{stopColor:"rgba(115, 209, 72, 0.2)"}}></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlinkHref='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacty=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg> */}
    <svg className='second-svg' version="1.1" xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style={{stopColor:"rgba(130, 158, 249, 0.06)"}}></stop>
				<stop offset="50%" style={{stopColor:"rgba(76, 190, 255, 0.6)"}}></stop>
				<stop offset="100%" style={{stopColor:"rgba(115, 209, 72, 0.2)"}}></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlinkHref='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacty=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg>
    <div className="index-bg-items">
        <img src={bgItem2} alt='nt'></img>
    </div>
    <div className="index-bg-2">
    <img src={bgItem1} alt='nt'></img>
    </div>
    <div className="index-bg-3">
    <img src={bgItem3} alt='nt'></img>
    </div>

            <div className="index-container">
                {wait ? <div className='first-header-container'>
                    <header className='first-header fadeInUp-animation'>
                        Cimnastikle Zekanın ve Bedenin Sınırlarını Keşfedin: Cimnastik Tutkusu Çocuklarımızla Başlar
                    </header>
                </div> : <></>}
                {wait ?
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="liste fadeInUp-animation">
                            <div className="liste-1">
                                <header>Temel Cimnastik</header>
                                Çocuklarınızın enerjisini doğru yönlendirmek için cimnastik eğitimi tam da aradığınız şey olabilir. Spor salonumuzda çocuklarınızın hem eğlenmesini hem de gelişmesini sağlayacak birçok aktivite sizi bekliyor
                            </div>
                            <div className="liste-2"><header>Sosyal Gelişim</header>
                                Cimnastikle çocuklarınızın hem fiziksel hem de sosyal becerilerini geliştirebilirsiniz. Spor salonumuzda çocuklarınız yeni arkadaşlar edinirken bir yandan da cimnastiğin temel hareketlerini öğreniyorlar.
                            </div>
                            <div className="liste-3"><header>Cimnastiğin Faydaları</header>
                                Cimnastik eğitimi, çocuklarınızın bedenlerini güçlendirirken aynı zamanda zihinsel gelişimlerine de katkıda bulunur. Spor salonumuzda profesyonel eğitmenler eşliğinde çocuklarınızın potansiyellerini keşfetmelerine yardımcı oluyoruz.

                            </div>
                            <div className="liste-4">
                                <header>Özel Öğrenci Programları</header>
                                <ul>
                                    <li>Dikkat Eksikliği</li>
                                    <li>Hiperaktivite</li>
                                    <li>Duruş Bozukluğu</li>
                                    <li>Otizm</li>
                                    <li>Down Sendromu</li>
                                    <li>Özel Derslerimiz mevcuttur</li>
                                </ul>
                            </div>
                        </div>
                    </div> : <></>}
                {wait ? <div className='whatsapp-basvur'>
                    <a href='https://api.whatsapp.com/send/?phone=905417897997&text=Merhaba%20Cimnastik%20Dersleri%20hakkında%20bilgi%20almak%20istiyorum&type=phone_number&app_absent=0' target='blank'>
                        <button className="basvur-button fadeInUp-animation">
                            WHATSAPP BAŞVURU
                        </button></a>
                </div> : <></>}
            </div>
            <div className="index-about-container" ref={aboutSection}>
                <div className="about-header-container">
                    {/* <h1>Biz Kimiz ?</h1> */}
                </div>
                <div className="about-first-text-container">
                    <div className="about-first-text">
                    <h1>İŞİMİZ GÜCÜMÜZ CİMNASTİK!
                    </h1>
                    <h4>Spor salonumuz, çocuklarınızın spor yaparak eğlenmesini ve gelişmesini sağlayan birçok aktivite sunuyor. 
                        Cimnastik, çocukların hem fiziksel hem de zihinsel gelişimine katkıda bulunan harika bir spor dalıdır. Salonumuzda, çocuklarınızın bu harika sporu en doğru tekniklerle 
                        öğrenmeleri için profesyonel eğitmenlerimizle birlikte çalışıyoruz.
                        <h4 style={{marginTop:"3rem"}}>
                        Çocuklarımızın sağlığı ve mutluluğu bizim önceliğimizdir. Kasım 2022'de açtığımız cimnastik salonumuzda, çocuklarınızın hareketli bir yaşam tarzı benimsemelerine, bedenlerini keşfetmelerine ve ekip olma becerileri kazanmalarına yardımcı oluyoruz.
                        </h4>
                        </h4>


                        <h4>Cimnastik salonumuz, 
                            çocuklarınızın hem hayal dünyasına hitap eden renkli 
                            ekipmanlarla donatılmış hem de güvenli bir ortamda hareket etmelerini sağlıyor. 
                            Çocuklarınız, esnekliklerini artırırken vücut denge ve koordinasyonlarını da geliştiriyorlar. Ayrıca, cimnastik eğitimi, çocukların kendilerine olan güvenlerini de artırarak hayatlarının diğer alanlarına da olumlu etki ediyor.
                            <h4 style={{marginTop:"3rem"}}>
                            Cimnastik salonumuzda, çocuklarınızın hayal güçlerini kullanarak keyifli vakit geçirebilecekleri özel etkinlikler ve yarışmalar da düzenliyoruz. Bu etkinlikler, çocuklarınızın kendilerine olan güvenlerini artırarak sosyal becerilerini geliştirmelerine yardımcı olacaktır.
                            </h4>
                            </h4></div>
                            <div className='first-text-img-container'>
                                <img src={gamze1} alt='nt'></img>
                                <h1>2021-2022 AYDIN İLİ OKULLAR ARASI CİMNASTİK BİRİNCİLİĞMİZ</h1>
                            </div>
                </div>
            </div>
            <div className="index-services-container" >
                <div className="services-img-container" ref={servicesSection}>
                    <h3>Fiziksel Gelişim:<p></p>
Cimnastik, bedenin farklı kas gruplarını çalıştırdığı için, kasların güçlenmesine ve gelişmesine yardımcı olur. Düzenli cimnastik yapmak, çocukların fiziksel koordinasyonlarını ve denge becerilerini geliştirir. Ayrıca, cimnastik hareketleri esnekliği artırır ve çocukların bedenlerinin daha sağlıklı ve dengeli olmasına yardımcı olur.
<p style={{paddingTop:"2rem"}} ></p>
Cimnastik ayrıca, çocukların kondisyonlarını artırarak dayanıklılıklarını artırır. Daha güçlü ve dayanıklı bir beden, çocukların diğer spor dallarında ve günlük aktivitelerinde daha başarılı olmalarına yardımcı olur.
</h3>
                   <img src={cocuk2} alt='nt'></img>
                </div>
                <div className="services-img-container">
                <img src={cocuk1} alt='nt'></img>
                    <h3>Zihinsel Gelişim:<p></p>
                    Cimnastik, sadece bedeni değil aynı zamanda zihni de çalıştırır. Cimnastik hareketleri, çocukların koordinasyon, hafıza ve problem çözme becerilerini geliştirir. Ayrıca, düzenli cimnastik yapmak, çocukların stresle başa çıkmalarına ve özgüvenlerini artırmalarına yardımcı olur.
                    <p style={{paddingTop:"2rem"}}></p>
                    Cimnastik ayrıca, çocukların disiplinli olmalarına yardımcı olur. Cimnastik sporu, hareketlerin doğru ve kontrollü bir şekilde yapılmasını gerektirdiği için, çocuklar doğru bir şekilde disiplinli olmayı öğrenirler. Bu, çocukların hayatları boyunca sürdürmeleri gereken önemli bir beceridir.
                    </h3>
                </div>
                <div className="services-img-container">
                    <h3>Hiperaktivite ve Cimnastik:<p></p>
                    Cimnastik, hiperaktif çocukların enerjilerini yönlendirmelerine yardımcı olur. Düzenli cimnastik yapmak, çocukların aşırı hareketliliğini azaltarak, vücutlarının daha iyi kontrol edilmesine yardımcı olur. Cimnastik hareketleri, çocukların bedenlerinin farkındalığını artırır ve bedenlerinin daha iyi koordine olmasını sağlar.
                    <p style={{paddingTop:"2rem"}}> Bu, çocukların düzenli bir şekilde cimnastik yaparak bedenlerinin farkında olmalarını, bedenlerini kontrol etmelerini ve daha iyi odaklanmalarını sağlar.</p>
                    </h3>
                   <img src={hiperaktifCocuk} alt='nt'></img>
                </div>

                <div className="services-img-container" id='autismkid'>
                <img src={autismKid} alt='nt'></img>
                    <h3>Otizm:<p></p>
                    Cimnastik, ayrıca otizmli çocuklar için sosyal becerilerin geliştirilmesine de yardımcı olabilir. Cimnastik sınıfı, diğer çocuklarla bir arada olma ve bir takım olma fırsatı sunar. Bu, otizm spektrum bozukluğu olan çocukların sosyal becerilerini geliştirmelerine yardımcı olabilir ve onları diğer insanlarla etkileşim kurmaya teşvik edebilir.
                    <p style={{paddingTop:"2rem"}}></p>
                    Ayrıca, cimnastik sırasında yapılan egzersizlerin endorfin salınımını artırarak çocukların ruh hallerini de iyileştirebilir. Otizm spektrum bozukluğu olan çocuklar, depresyon ve kaygı gibi zihinsel sağlık sorunlarıyla mücadele edebilirler. Cimnastik yapmak, çocukların bu sorunlarla başa çıkmalarına yardımcı olabilir.
                    </h3>
                </div>
            </div>
            <div className="index-contact-container" ref={contactSection}>
                    <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12618.188154966245!2d27.4089242!3d37.7537695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bebbfa94c32895%3A0x3509e528d6bbd9c0!2s%C3%96zen%20Cimnastik!5e0!3m2!1str!2str!4v1682286951965!5m2!1str!2str" width="800" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div> </div>

               <div className="index-footer-container">
                <svg className='footer-svg' version="1.1" xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
		<defs>
			<linearGradient id="bg">
				<stop offset="0%" style={{stopColor:"rgba(130, 158, 249, 0.06)"}}></stop>
				<stop offset="50%" style={{stopColor:"rgba(76, 190, 255, 0.6)"}}></stop>
				<stop offset="100%" style={{stopColor:"rgba(115, 209, 72, 0.2)"}}></stop>
			</linearGradient>
			<path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
		</defs>
		<g>
			<use xlinkHref='#wave' opacity=".3">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="10s"
          calcMode="spline"
          values="270 230; -334 180; 270 230"
          keyTimes="0; .5; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacity=".6">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="8s"
          calcMode="spline"
          values="-270 230;243 220;-270 230"
          keyTimes="0; .6; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
			<use xlinkHref='#wave' opacty=".9">
				<animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          dur="6s"
          calcMode="spline"
          values="0 230;-140 200;0 230"
          keyTimes="0; .4; 1"
          keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
          repeatCount="indefinite" />
			</use>
		</g>
	</svg>
               </div>


        </body>
    )
}

export default Index