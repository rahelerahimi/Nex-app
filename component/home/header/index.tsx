'use client'
import React, {  useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import ModalLogin from '../modalLogin';
import { useMyContext } from '../../../app/context/theme';


export default function Header() {
 
  const [value3, setValue3] = useState<string>('');
  const router = useRouter();
  const{openModal}=useMyContext()
  


  const items= [
    {
      label: 'Home',
     command: () => router.push('/'),
    },
    {
      label: 'Allmovies',
      command: () => router.push('/allmovies'),

    },
    {
      label: 'Pages',
       icon: 'pi pi-fw ',
     
      items: [
        [
          {
            label: '',
            
            items: [ { label: 'About' }, { label: 'Contact' }, { label: 'MoviItem',  command: () => router.push('/movies/1'), 
          }, ]
          },

        ],

      ],

    },
    {
      label: 'About Us',
   
       icon: 'pi pi-fw ',
        command: () =>router.push('/about'),

    }
  ]


  return (
    <div  >

      <MegaMenu
        model={items}
        start={
        <Link href={'/'}>
          <Image alt='logo' src={'/img/logo.svg'} width={150} height={70} priority={true} className='logo' /></Link>
      }

        end={<span className="p-input-icon-left">
          <i className="pi pi-search icon-search" />
          <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Search" className="placeholder-hidden" />
          <Button label="Login"  rounded  onClick={openModal}/>
        <ModalLogin  />
       
        </span>}

        breakpoint="1020px"
      />


    </div>
  )
}
