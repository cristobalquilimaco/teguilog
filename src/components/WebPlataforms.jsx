import React from 'react'
import "./styles/webPlataforms.css"

const WebPlataforms = () => {
  return (
    <div className='principal_webPlataforms'>
      <div className='header_web_plataforms'>
        <p className='info_webplataforms'>Industrias y plataformas web</p>
        <p className='desc_webplataform'>Con funciones potentes garantizamos tu crecimiento</p>
      </div>
      <section className='seccion_web_plataforms'>
      <article className='article_plataforms'>
        <i className='bx bx-check'></i>
        <div className='tt_webpl'>
        <p className='title_pp_web1'>Guia de marca</p>
        <p className='title_pp_web'>Define la personalidad, valores, público y competidores de tu marca para una base sólida en tu guía de marca.</p>
        </div>
        </article>
        <article className='article_plataforms'>
        <i className='bx bx-check'></i>
        <div className='tt_webpl'>
        <p className='title_pp_web1'>Plataformas web</p>
        <p className='title_pp_web'>Elige plataformas según tus objetivos, audiencia y presupuesto en marketing digital. Planifica una estrategia sólida y usa las plataformas adecuadas.</p>
        </div>
        </article>
        <article className='article_plataforms'>
        <i className='bx bx-check'></i>
        <div className='tt_webpl'>
        <p className='title_pp_web1'>Estrategia digital</p>
        <p className='title_pp_web'>
La estrategia digital es un plan para usar medios y canales en línea con el objetivo de cumplir metas comerciales.</p>
        </div>
        </article>
        <article className='article_plataforms'>
        <i className='bx bx-check'></i>
        <div className='tt_webpl'>
        <p className='title_pp_web1'>Analisis e investigación</p>
        <p className='title_pp_web'>El análisis e investigación de mercado son procesos para entender a fondo el entorno comercial, identificar oportunidades y desafíos.</p>
        </div>
        </article>
      </section>
    </div>
  )
}

export default WebPlataforms