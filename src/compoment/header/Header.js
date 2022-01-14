import React from 'react'
import Navbark from './Navbark'
import { useState } from 'react';
import Slideshow from './Slideshow';

const Header = () => {
    const vn = [
        {
            link1 : 'Tin tức & Blog',
            link2 : 'Vì cộng đồng',
            link3 : 'Tuyển dụng',
            link4 : 'Trang chủ',
            Vlua1 : 'Mạnh Rất Đẹp Zai',
            Vlua2 : 'Nếu ai đó hỏi tôi có gì đặc biệt tôi sẽ trả lời là ...',
            Vlua3 : 'Họ Nói Mạnh Rất giàu',
            Vlua4 : 'Thực ra mạnh là 1 tên nhà nghèo chính hiệu...',
        }
    ]
    const japan = [
      {
          link1 : 'お問い合わせ',
          link2 : 'サービス',
          link3 : 'お問い合わせ',
          link4 : 'サービス',
          Vlua1 : 'ラボ開発 - 請負開発',
          Vlua2 : 'ReactとReact Nativeを利用したプロジェクト開発サービスを提供しています',
          Vlua3 : '当社はReactとReact Nativeのスペシャリストです',
          Vlua4 : '何百もの日本企業のお客様に信頼されているReactエキスパートを提供します',
      }
    ]
    
    const [langgua,setlanggua] = useState(japan);
    
    const setvn = ()=>{
      setlanggua(vn)
    }
    const setjp = ()=>{
      setlanggua(japan)
    }
    return (
        <div>
            <Slideshow langgua={langgua}/>
            <Navbark langgua={langgua} setjp={setjp} setvn={setvn}/>
        </div>
    )
}

export default Header
