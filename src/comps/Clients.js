import one from "./clientsIcons/one.svg"
import two from "./clientsIcons/two.svg"
import three from "./clientsIcons/three.svg"
import four from "./clientsIcons/four.svg"
import five from "./clientsIcons/five.svg"
import six from "./clientsIcons/six.svg"
import seven from "./clientsIcons/seven.svg"
import eight from "./clientsIcons/eight.svg"
import nine from "./clientsIcons/nine.svg"
import ten from "./clientsIcons/ten.svg"
import elevan from "./clientsIcons/elevan.svg"
import twelve from "./clientsIcons/twelve.svg"

const Clients = () => {
  return (
    <>
      <div className="container max-w-[1200px]">
        <div className="grid grid-cols-auto-fill gap-y-[60px] justify-center mb-[50px]">
          <div className="justify-center flex">
            <img src={one} />
          </div>
          <div className="justify-center flex">
            <img src={two} />
          </div>
          <div className="justify-center flex">
            <img src={three} />
          </div>
          <div className="justify-center flex">
            <img src={four} />
          </div>
          <div className="justify-center flex">
            <img src={five} />
          </div>
          <div className="justify-center flex">
            <img src={six} />
          </div>
          <div className="justify-center flex">
            <img src={seven} />
          </div>
          <div className="justify-center flex">
            <img src={eight} />
          </div>
          <div className="justify-center flex">
            <img src={nine} />
          </div>
          <div className="justify-center flex">
            <img src={ten} />
          </div>
          <div className="justify-center flex">
            <img src={elevan} />
          </div>
          <div className="justify-center flex">
            <img src={twelve} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients
