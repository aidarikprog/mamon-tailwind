import phone from "./servicesIcons/phone.svg"
import monitor from "./servicesIcons/monitor.svg"
import list from "./servicesIcons/list.svg"
import layers from "./servicesIcons/layers.svg"

const Services = () => {
  return (
    <>
      <div className="container max-w-[1200px] ">
        <div className="grid  gap-y-[80px] gap-x-[250px] pb-[90px] grid-cols-auto-full justify-center 530:grid-cols-auto-fill">
          <div className="flex m-w-[390px] items-center 530:text-center 530:flex-col">
            <div className="w-[120px] text-center flex justify-center 530:mb-[20px]">
              <img src={phone} />
            </div>
            <div className="w-[292px]">
              <h1 className="font-normal text-[28px] leading-[32px] mb-[17px]">
                Mobile Development
              </h1>
              <p className="text-sm">
                We develop mobile apps for all contemporary mobile platforms.
                Mamon team builds native and cross-platform solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center 530:text-center 530:flex-col">
            <div className="w-[120px] flex justify-center 530:mb-[20px]">
              <img src={monitor} />
            </div>
            <div className="w-[292px]">
              <h1 className="font-normal text-[28px] leading-[32px] mb-[17px]">
                Web Development
              </h1>
              <p className="text-sm">
                Mamon offers full range of services from various CMS and
                frameworks based websites to complex ERP/CRM solutions and
                e-commerce stores.
              </p>
            </div>
          </div>
          <div className="flex items-center 530:text-center 530:flex-col">
            <div className="w-[120px] flex justify-center 530:mb-[20px]">
              <img src={layers} />
            </div>
            <div className="w-[292px]">
              <h1 className="font-normal text-[28px] leading-[32px] mb-[17px]">
                Product Design
              </h1>
              <p className="text-sm">
                We create design given the product audience, goal, business
                domain, technology and the platform for the solution.
              </p>
            </div>
          </div>
          <div className="flex items-center 530:text-center 530:flex-col">
            <div className="w-[120px] flex justify-center 530:mb-[20px]">
              <img src={list} />
            </div>
            <div className="w-[292px]">
              <h1 className="font-normal text-[28px] leading-[32px] mb-[17px]">
                Quality Assurance
              </h1>
              <p className="text-sm">
                Our QA team ensures high standard of quality of products
                delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
