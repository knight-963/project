import f3 from '../foto/f3.jpg'

function Section3() {

 return (
    <>

    <div className='pt-[250px]'><img src={f3} className='w-[100%]' alt="" />

    <div className='flex justify-start mt-[-450px] pl-[100px]'>
      <div>

        <h1 className='text-6xl'>Readdy to pull the trigger?</h1>
        <h1 className='text-6xl pt-[10px]'>Get a quote today.</h1>
        <h1 className='text-xl pt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius<br></br> rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis.</h1>

        <div className='flex gap-[30px] pt-[80px]'>
    <button className='text-white text-xl rounded-sm h-[70px] w-[180px] bg-orange-500'>Get a quote</button>
    <button className='text-xl rounded-sm h-[70px] w-[200px] border-black border-2'>Our services</button>
        </div>

      </div>
    </div>

    </div>

    </>
  )
}

export default Section3;