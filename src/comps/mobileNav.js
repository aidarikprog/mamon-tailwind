import { navigation } from "./data"

const Mobile = () => {
  return (
    <>
      <div className="h-full bg-slate-400">
        <ul className="flex pt-[100px] justify-center flex-col text-center items-center space-y-10">
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
      </div>
    </>
  )
}

export default Mobile
