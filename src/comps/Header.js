const Header = () => {
  return (
    <>
      <div className="container max-w-[1200px] ">
        <div className="my-[50px] 530:text-center">
          <h1 className="text-[57px] font-bold 530:text-2xl">
            We're an independent development agency.
          </h1>
          <div className=" font-normal leading-[51px] text-3xl  max-w-[700px] mt-[35px] mb-[70px] 530:text-2xl">
            We understand the intricacies of web development inside-out. That's
            why we build rock-solid Mobile and Web applications enriched with
            user-centered visual experiences.
          </div>
          <button
            href="#"
            className="bg-[#5528FF] rounded-[10px] px-14 py-4 text-cyan-50 "
          >
            Contact us
          </button>
          {/* font-normal leading-[51px] text-3xl max-w-[700px] mt-[35px] mb-[70px] 530:text-2xl */}
        </div>
      </div>
    </>
  )
}

export default Header
