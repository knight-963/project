import f1 from '../foto/f1.jpg'

function Navbar() {

 return (
    <>

    <div><img src={f1} className='w-[100%]' alt="" />


    <nav className="justify-end flex gap-[40px] pr-[50px] pl-[50px] mt-[-950px] items-center">

        <div className="flex justify-center gap-[40px] text-white">

            <a className="no-underline text-2xl">Home</a>
            <a className="no-underline text-2xl">About</a>
            <a className="no-underline text-2xl">Blog</a>
            <a className="no-underline text-2xl">Pages</a>
            <a className="no-underline text-2xl">Contacts</a>
            <a className="no-underline text-2xl">Cart(0)</a>

        </div>

        <button className='text-white text-xl rounded-sm h-[60px] w-[150px] bg-orange-500'>Get a quote</button>

    </nav>

    <div className='flex justify-center pt-[170px]'>
        <div>

        <h1 className='text-white text-7xl'>We provide effective</h1>
        <h1 className='text-white text-7xl pt-[10px] pl-[15px]'>contracting services</h1>
        <h1 className='text-white pt-[30px] pl-[15px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus,</h1>
        <h1 className='text-white pt-[5px] pl-[30px] text-lg'>nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis quisque erat.</h1>

        <div className='flex justify-center items-center gap-[40px] pt-[30px]'>

        <button className='text-white text-xl rounded-sm h-[80px] w-[180px] bg-orange-500'>Get a quote</button>
        <button className='text-white text-xl rounded-sm h-[80px] w-[180px] border-white border-2'>Our services</button>

        </div>

        </div>
    </div>


    </div>

    </>
  )
}

export default Navbar;