import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.container}>
          {/*  <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
            <section className={s.notFound}>
                <div className={s.img}>
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the PRE JUNIOR PAGE"/>
                    <img src="https://assets.codepen.io/5647096/Delorean.png" />
                </div>
                <div className={s.text}>
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO PRE JUNIOR PAGE?</h3>
                    <a href="#" className={s.yes}>YES</a>
                    <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
                </div>
            </section>
        </div>

    )
}

export default Error404
