import React from 'react';

import styles from "./discount.module.css"
import image from "./img/df1657885446d076034889d1f0f9f714.png"

export const Discount = () => {
    return (
       <section className={styles.discount}>
            <p>5% off on the first order</p>
            <div className={styles.container}>
                <img src={image} alt="" />
              
                    <form className={styles.input} name="get_discount" autocomplete="on" novalidate>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="tel" name="tel" placeholder="Phone number"  />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="button" value="Get a discount" />

                     </form>
               
            </div>
       </section>
    )
}