import f4 from '../foto/f4.jpg'
import f5 from '../foto/f5.jpg'
import g1 from '../foto/g1.jpg'

function Section4() {

 return (
    <>

    <div className='flex justify-center items-center gap-[100px] pt-[300px]'>

        <img src={f4} className='w-[500px] h-[500px]' alt="" />

        <div className='pt-[20px]'>

          <h1 className='text-orange-500 text-2xl'>/WHY CHOOSE US</h1>
          <h1 className='text-6xl pt-[20px]'>An exceptional<br></br> quality that can't be<br></br> beaten</h1>
          <h1 className='pt-[30px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique<br></br> rutrum leo quam consectetur urna egestas tincidunt facilisi neque<br></br> elementum quis lorem posuere dignissim scelerisque aliquam.</h1>

          <div className='flex items-center gap-[10px] pt-[20px]'>
            <img src={g1} className='w-[20px] h-[20px]' alt="" />
            <h1 className='text-lg'>Over 15 years of experience</h1>
          </div>
          <div className='flex items-center gap-[10px] pt-[20px]'>
            <img src={g1} className='w-[20px] h-[20px]' alt="" />
            <h1 className='text-lg'>200+ successfully executed projects</h1>
          </div>
          <div className='flex items-center gap-[10px] pt-[20px]'>
            <img src={g1} className='w-[20px] h-[20px]' alt="" />
            <h1 className='text-lg'>Exceptional work quality</h1>
          </div>

        </div>

    </div>


    
    <div className='flex justify-center items-center gap-[100px] pt-[100px]'>

      <div>

        <h1 className='text-6xl'>We help you build on<br></br> your past and prepare<br></br> for the future</h1>
        <h1 className='pt-[30px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique<br></br> rutrum leo quam consectetur urna egestas tincidunt facilisi neque<br></br> elementum quis lorem posuere dignissim scelerisque aliquam.</h1>

        <div className='flex items-center gap-[50px] pt-[30px]'>

          <div>
            <h1 className='flex text-5xl'><h1 className='text-orange-500'>+</h1>350</h1>
            <h1>Successful Project</h1>
          </div>
          <div>
            <h1 className='flex text-5xl'>100<h1 className='text-orange-500'>%</h1></h1>
            <h1>Client Satisfaction</h1>
          </div>

        </div>

      </div>

      <img src={f5} className='w-[500px] h-[500px]' alt="" />

    </div>



    </>
  )
}

export default Section4;