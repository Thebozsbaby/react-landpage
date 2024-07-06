import React from 'react'
import "../styles/more.css"
const More = () => {
  return (
    <div className='more'>
        <div className='moore'>
            <h1>Go further with resources to get started</h1>
            <p>We have partnered with businesses on the same mission as ours to help local businesses. We have also added resources you need to start, run and grow your business.</p>
        </div>
        <div className='second'>
            <a href="">
                <img src="https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_6.png" alt="" />
               <div className='sen'>
                    <h1>Why you need a separate...</h1>
                    <p>The reason for them and how to open a</p>
               </div>
            </a>
            <a href="">
                <img src="https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_2.png" alt="" />
               <div className='sen'>
                    <h1>Working on the right idea</h1>
                    <p>How to figure out the right business idea </p>
               </div>
            </a>
            <a href="">
                <img src="https://ng.jumia.is/cms/0-6-anniversary/2024/Collections/Thunbmails/Artboard_1_copy_13.png" alt="" />
               <div className='sen'>
                    <h1>What you need to know..</h1>
                    <p>How business credit can work for you.</p>
               </div>
            </a>
        </div>
    </div>
  )
}

export default More