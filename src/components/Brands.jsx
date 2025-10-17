import React from 'react'
import Button from './Button'
import c1 from '../assets/client1_bn5uq3.png'
import c2 from '../assets/client2_vrszgk.png'
import c3 from '../assets/client3_vcynvz.png'
import c4 from '../assets/client4_uxtfqa.png'
import c5 from '../assets/client5_zesk7i.png'
import c6 from '../assets/client6_zymcez.png'
import c7 from '../assets/client7_pwpil7.png'
import c8 from '../assets/client8_adafz5.png'
import c9 from '../assets/client9_o1d2ka.png'
import c10 from '../assets/client10_fedmt7.png'
import c11 from '../assets/client11_xedxwg.png'
import c12 from '../assets/client12_qvoprw.png'
import c13 from '../assets/client13_bfhylx.png'
import c14 from '../assets/client14_rlme8s.png'
import c15 from '../assets/client15_vsqfec.png'
import c16 from '../assets/client16_h8yvaa.png'
import c17 from '../assets/client17_ies8vv.png'
import c18 from '../assets/client18_kfr5uc.png'
import c19 from '../assets/client19_yup4g6.png'
import c20 from '../assets/client20_sd7xgf.png'
import c21 from '../assets/client21_sh8j7s.png'
import c22 from '../assets/client22_acsmqb.png'
import c23 from '../assets/client23_re6vnx.png'
import c24 from '../assets/client24_nftfzj.png'

const clients = [
  c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24
]

export default function Brands(){
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl p-10 shadow-lg">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {clients.map((src, i) => (
            <div key={i} className="flex items-center justify-center p-4">
              <img src={src} alt={`client-${i+1}`} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
  <Button>Case Studies</Button>
      </div>
    </section>
  )
}
