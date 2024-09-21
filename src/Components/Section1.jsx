import f2 from '../foto/f2.jpg'

function Section1() {

 return (
    <>

    <div className='flex justify-center items-center gap-[100px]'>

        <img src={f2} className='h-[650px] w-[550px]' alt="" />

        <div>

            <h1 className='text-orange-500 text-xl'>/ABOUT US</h1>
            <h1 className='text-6xl pt-[20px]'>A team of relibale and</h1>
            <h1 className='text-6xl pt-[10px]'>experienced</h1>
            <h1 className='text-6xl pt-[10px]'>contractors</h1>
            <h2 className='pt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique imperdiet<br></br> nisi metus, viverra nulla aliquet dui porta porttitor neque lectus diam justo<br></br> lobortis purus in elit, elementum dignissim nullam vitae pellentesque aliquet<br></br> aliquam sagittis pulvinar egestas morbi suspendisse eleifend.</h2>

            <div className='flex pt-[50px] gap-[80px]'>

                <div>
                    <h1 className='flex text-6xl'><h1 className='text-orange-500'>+</h1>350</h1>
                    <h1 className='pl-[10px]'>Executed Projects</h1>
                </div>

                <div>
                    <h1 className='flex text-6xl'>12<h1 className='text-orange-500'>Y</h1></h1>
                    <h1 className='pl-[15px]'>Experience</h1>
                </div>

                <div>
                <h1 className='flex text-6xl'><h1 className='text-orange-500'>+</h1>400</h1>
                    <h1 className='pl-[10px]'>Satisfied Clients</h1>
                </div>

            </div>

            <button className='border-2 w-[220px] h-[65px] border-black mt-[50px]'>About our company</button>

        </div>

    </div>

    </>
  )
}

export default Section1;