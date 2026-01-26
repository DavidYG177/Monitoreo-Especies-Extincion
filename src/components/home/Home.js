import React from "react"
import Foca from "../assets/focaMonje.jpg"
import OsoDeAnteojos from "../assets/osoAnteojos.jpg"
import DelfinRosado from "../assets/delfinrosado.jpg"
import Mandril from "../assets/mandril.jpg"
import "./Home.css"

function Home() {
  return (
    <main className="main-content">
      <section className="section-foca">
        <header className="section-foca__header">
          <figure>
            <img
              src={Foca}
              alt="foca monje del mediterraneo"
              className="section-foca__img"
            />
            <figcaption>
              <h1 className="section-foca__title">
                Foca monje del mediterraneo
              </h1>
            </figcaption>
          </figure>
          <a href="#" className="i">
            lllll
          </a>
        </header>

        {/* <p className="section-foca__text">
          Monachus monachus o mas conocida como la foca monje del mediterráneo o
          foca fraile mediterránea es una especie de mamifero pinnípedo de la
          familia de los focidos, una de las más raras que existen. Esta foca
          habito las costas de campeche.
        </p> */}
        <p>Modificaciones</p>
      </section>

      <section className="section-animals">
        <header className="section-animals__header">
          <h2 className="section-animals__title">Animales en peligro</h2>
          <p className="section-animals__text">
            Estas son algunas especies con poblaciones drasticamentes reducidas
            por causas humanas como la perdida del habitat, la caza furtiva, la
            contaminacion, el cambio climatico etc. muchas de estas especies son
            locales en paises megadiversos como colombia, enfrentando un riesgo
            de desaparecer del planeta, lo que amenaza la cadena alimenticia
            global.
          </p>
        </header>

        <div className="animals">
          <article className="animal-card">
            <header className="animal-card__header">
              <figure>
                <img
                  src={DelfinRosado}
                  alt="Delfin rosado"
                  className="animal-card__img"
                />
                <figcaption>
                  <h3 className="animal-card__title">Delfin rosado</h3>
                </figcaption>
              </figure>
            </header>
            <p className="animal-card__text">
              Sí, el <strong>Inia geoffrensis</strong> (Delfín rosado) se
              enfrente a graves amenazas por la contaminacion de rios (petroleo,
              quimicos) la destruccion de su habitat, las sequias extremas
              (consecuencia tambien del cambio climatico) y la pesca ilegal
              (como carnada para otros peces), con casi 350 muertes reportados
              en un año reciente debido a sequias severas, se evidencia su
              vulnerabilidad en la orinoquía y en la amazonía.
            </p>
          </article>
          {/* BEM -> Block - Element- Modifier */}

          <article className="animal-card">
            <header className="animal-card__header">
              <figure>
                <img
                  className="animal-card__img"
                  src={OsoDeAnteojos}
                  alt="oso de anteojos"
                />
                <figcaption>
                  <h3 className="animal-card__title">Oso de anteojos</h3>
                </figcaption>
              </figure>
            </header>
            <p className="animal-card__text">
              Debido principalmente a la perdida y fragmentacion de su habitat,
              la caza (por retaliacion o creencias) y el conflicto con humanos;
              aunque no esta en peligro critico el{" "}
              <strong>Tremarctos ornatus</strong> conocido como el oso de
              antejos, este se encuentra catalogado por UICN como vulnerable a
              la extincion{" "}
            </p>
            <button className="animal-card__btn">
              <i className="card_icon" />
              ACTIVO
            </button>
            <button className="animal-card__btn">INACTIVO</button>
          </article>

          <article className="animal-card">
            <header className="animal-card__header">
              <figure>
                <img
                  src={Mandril}
                  alt="Mandril"
                  className="animal-card__img "
                />
                <figcaption>
                  <h3 className="animal-card__title">Mandril</h3>
                </figcaption>
              </figure>
            </header>
            <p className="animal-card__text">
              el <strong>Mandrillus sphinx</strong> (Mandril). En el oeste de
              africa se alimentan de la carne de mandril, se estima que cada dia
              entran toneladas de carne en el oeste de europa de forma ilegal.
              La tala de arboles y la agricultura estan acabando con su refugio,
              aunque se considera que los mandriles forman los grupos sociales
              mas grandes de primates no humanos, se estima que hay tan solo en
              los bosques de gabon 1.300 ejemplares.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
export default Home
