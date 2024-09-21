import t1 from '../foto/t1.jpg'
import t2 from '../foto/t2.jpg'
import t3 from '../foto/t3.jpg'
import t4 from '../foto/t4.jpg'
import t5 from '../foto/t5.jpg'
import t6 from '../foto/t6.jpg'

function Section2() {

 return (
    <>

    <div className='flex justify-center items-center gap-[250px] pt-[250px]'>

        <div>

            <h1 className='text-orange-500 text-2xl'>/OUR SERVICES</h1>
            <h1 className='text-6xl'>A comprehensive<br></br> set of services</h1>

        </div>

        <div className='flex gap-[50px]'>
    <button className='text-white text-xl rounded-sm h-[70px] w-[180px] bg-orange-500'>Get a quote</button>
    <button className='text-xl rounded-sm h-[70px] w-[250px] border-black border-2'>Browse services</button>
        </div>

    </div>



    <div className='flex justify-center items-center pt-[100px] gap-[150px]'>


        <div>

            <img src={t1} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-4xl pt-[40px]'>Project Planning</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


        <div>

            <img src={t2} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-4xl pt-[40px]'>Project Management</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


        <div>

            <img src={t3} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-4xl pt-[40px]'>General Contracting</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


    </div>


    <div className='flex justify-center items-center pt-[100px] gap-[150px]'>


        <div>

            <img src={t4} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-5xl pt-[40px]'>Interior Design</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


        <div>

            <img src={t5} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-5xl pt-[40px]'>Exterior Design</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


        <div>

            <img src={t6} className='w-[80px] h-[80px]' alt="" />
            <h1 className='text-3xl pt-[40px]'>Space Planning</h1>
            <h1 className='pt-[30px] text-sm'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit quis eget morbi fermentum<br></br> sagittis, et mi lacus ornare tincidunt id.</h1>
            <div className='flex items-center pt-[20px]'>
                <button className='w-[30px] h-[30px] rounded-sm bg-black'></button>
                <h1 className='text-lg pl-[10px]'>Learn more</h1>
            </div>

        </div>


    </div>



    </>
  )
}

export default Section2;