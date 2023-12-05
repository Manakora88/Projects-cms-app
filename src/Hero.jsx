import heroImg from './assets/hero2.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React w Realu</h1>
          <p>
            React pozwala na przyjemne tworzenie dynamicznych aplikacji internetowych lub mobilnych. Programowanie w React skupia się na komponentach, które są samodzielnie działającymi, wielokrotnie używanymi blokami kodu. 
          </p>
          <p>
            Poniżej przedstawiam projekty stworzone z wykorzystaniem biblioteki React.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
