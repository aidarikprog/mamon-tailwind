import { useRef } from "react"
import Modal from "react-modal"

const ModalWindow = ({ modal, setModal }) => {
  const input = useRef()

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      input.current.focus()
    }
  }

  return (
    <>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={() => {
          setModal(false)
        }}
        className=" max-w-[350px] text-center mt-[200px] px-[40%] "
      >
        <form className=" bg-slate-50 p-4 w-[350px]  rounded-lg  border-2">
          <p className="text-xl leading-7 items-center text-black mb-[10px]">
            Sign in to your account
          </p>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter email"
              className="border-4 rounded-md w-[100%] mb-[10px] py-[5px] pl-[10px] "
              onKeyUp={handleKeyUp}
            />
            <span></span>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              className="border-4 rounded-md w-[100%] mb-[10px] py-[5px] pl-[10px] "
              ref={input}
            />
          </div>
          <button
            type="submit"
            className="bg-[#4F46E5] rounded-[0.5rem] py-3 px-5 w-[100%] text-xl mb-2"
          >
            Sign in
          </button>
          <button
            onClick={() => setModal(false)}
            type="submit"
            className="bg-[#4F46E5] rounded-[0.5rem] py-3 px-5 w-[100%] text-xl"
          >
            Close
          </button>
        </form>
      </Modal>
    </>
  )
}

export default ModalWindow
