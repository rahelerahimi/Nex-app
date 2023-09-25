"use client"
import React , {ReactNode} from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from './dashboardLayou.module.css';
import { layoutData } from "./data";
import { LayoutData } from "../../component/type/type";

const RootLayout = ({ children }:{children: ReactNode}) => {
    const pathname = usePathname()


    return (
       <div className={styles.parentDashboard}>


         <div className={styles.flexDashboard} style={{ direction: 'rtl' }}>

                <div className={styles.dashboardContent}  >{children}</div>

                    <div className={styles.logoDashboard}> 
                    
                <ul style={{ direction: 'ltr' }} >

                    {
                        layoutData.map((item:LayoutData) => {
                            const isActive = pathname === item.href
                            return (

                                <li key={item.id}><Link href={item.href}  style={{display:'flex'}}  className={isActive ? 'text-[#7763ef]' : 'text-white'}><span className={styles.iconDashboard}>{item.icon}</span><span>{item.text}</span></Link></li>
                              
                            )
                        })
                    }
                </ul>
                </div>
               

            </div>
        </div>
    );
};

export default RootLayout;