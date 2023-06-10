import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import Mobile from "./mobileNav"
import ModalWindow from "./Modal"

const Navi = () => {
  const [mobile, setMobile] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
      <div className="container max-w-[1200px]">
        <div className="flex justify-between items-center my-[30px] font-bold ">
          <p className="text-[24px] ">mamon</p>
          <nav className=" flex 530:hidden space-x-[37px] text-[14px] items-center {nav ? 'flex-row': 'flex-col'}">
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Our Team</a>
            <button
              href="#"
              className="bg-[#5528FF] rounded-[5px] px-3 py-1 text-cyan-50 "
              onClick={() => setModal(!modal)}
            >
              Contact us
            </button>
          </nav>
          <div
            className={`${
              mobile ? "left-[30px]" : "-left-full "
            }530:hidden fixed bottom-0 max-w-full w-full h-screen transition-all`}
          >
            <Mobile />
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="530:inline-block hidden  float-right items-center z-10 absolute right-2.5"
          >
            {mobile ? (
              <AiOutlineClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </div>

        <div>
          <ModalWindow modal={modal} setModal={setModal} />
        </div>
      </div>
    </>
  )
}

export default Navi

{
  /* <div className="container max-w-[1200px] ">
<nav className=" py-[30px] left-0 transition-all flex items-center justify-between w-full z-10  my-[30px] font-bold px-[10px]">
  <p className="text-[24px] ">mamon</p>
  <ul className="  530:gap-x-10   flex 530:hidden space-x-[37px] text-[14px] items-center {nav ? 'flex-row': 'flex-col'}">
    {navigation.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.href}>{item.name}</a>
        </li>
      )
    })}
    <button
      href="#"
      className="bg-[#5528FF] rounded-[5px] px-3 py-1 text-cyan-50 "
    >
      Contact us
    </button>
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
    className="530:inline-block hidden float-right items-center z-10 absolute right-2.5"
  >
    {mobile ? (
      <AiOutlineClose size={30} />
    ) : (
      <GiHamburgerMenu size={30} />
    )}
  </button>
</nav>
</div> */
}
