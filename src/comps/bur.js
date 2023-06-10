import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import Mobile from "./mobileNav"
import { navigation } from "./data"

const Bur = () => {
  // const [bg, setBg] = useState(false)
  const [mobile, setMobile] = useState(false)

  return (
    <>
      {/* <div className="container max-w-[1200px]">
        <div className="flex justify-between items-center my-[30px] font-bold ">
          <p className="text-[24px] ">mamon</p>
          <nav className=" flex 530:hidden space-x-[37px] text-[14px] items-center {nav ? 'flex-row': 'flex-col'}">
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Our Team</a>
            <button
              href="#"
              className="bg-[#5528FF] rounded-[5px] px-3 py-1 text-cyan-50 "
            >
              Contact us
            </button>
          </nav>
          <button
            onClick={() => setNav(!nav)}
            className="530:inline-block hidden"
          >
            {nav ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div> */}
      <div className="container max-w-[1200px] mx-[10px]">
        <nav className="bg-red-200 py-[30px] left-0 transition-all flex items-center justify-between w-full z-10 fixed ">
          <p className="">mamon</p>
          <ul className="flex 530:gap-x-10 530:hidden">
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          
          <div
            className={`${
              mobile ? "left-0" : "-left-full "
            }530:hidden fixed bottom-0 max-w-full w-full h-screen transition-all`}
          >
            <Mobile />
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="530:inline-block hidden float-right items-center z-10 absolute right-10"
          >
            {mobile ? (
              <AiOutlineClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Bur
