import React from 'react'

const Special = () => {
    return (
        <div id='join' className='flex flex-col justify-center my-10 md:p-20'>
            <div className='border-[1px] md:p-20 bg-gray-900 text-white rounded-3xl md:rounded-full flex w-full flex-col md:flex-row items-center justify-center' >
                <div className='w-3/4 py-10'>
                <h1 className='font-bold text-4xl md:text-6xl tracking-tighter items-center flex'>Earn Side Income By Become a Captain</h1>
                <p className='text-xl text-muted-foreground mt-1 mb-4 md:my-4'>At InternPro, we believe in the power of community and networking. That&apos;s why we&apos;ve introduced our Referral Program, where you can earn extra income simply by spreading the word about InternPro&apos;s internship and project opportunities.</p>
                <div className='flex gap-5 md:justify-end mr-20 text-nowrap'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSez4WUhG__Biy7ldYhc8Dzke9pqoQ92KVBH--aHxMzTV4mPmA/viewform" className='font-semibold px-4 py-2 text-sm md:text-xl bg-yellow-300 rounded-full text-black'>Be a Captain</a>
                    <a href="/learn" className='font-semibold px-4 py-2 text-sm md:text-xl border-[1px] border-white rounded-full'>Learn More</a>
                </div>
                </div>
                <div className='md:w-1/4 w-full'>
                    <img src="https://media2.giphy.com/media/rmWE3xmMCDv8TSPuSe/200w.gif?cid=6c09b9523y7jjcjvkq97yho57hgecmu8mht9xt20gfsylmp1&ep=v1_gifs_search&rid=200w.gif&ct=g" className='w-full rounded-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Special