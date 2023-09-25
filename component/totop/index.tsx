'use client'
import React, { useState, useEffect } from "react";
import { FaChevronUp } from 'react-icons/fa'
import styles from './totop.module.css'

const Totop = () => {

     const [showBtn, setShowBtn] = useState(false)

     useEffect(() => {
          window.addEventListener("scroll", function () {

               if (window.pageYOffset > 400) {
                    setShowBtn(true)
               } else {
                    setShowBtn(false)
               }
          })

     }, [])

     const Totop = () => {
          window.scroll({ top: 0, behavior: "smooth" })
     }

     return (

          <div>
               <div onClick={Totop} className={`${styles.totop} ${showBtn ? styles.showtotop : ''}`}>
                    <FaChevronUp />

               </div>

          </div>
     )




}

export default Totop;