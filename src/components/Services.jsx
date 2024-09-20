import a from '../assets/services_page/product designing.webp';
import b from '../assets/services_page/iot2.jpg';
import c from '../assets/services_page/testing.webp';
import d from '../assets/services_page/pcb.webp';
import e from '../assets/services_page/customized solutions.jpg';

const Services = () => {
  return (
    <div>
      <h1 className="text-3xl  md:text-[3vw] font-serif font-bold text-center py-8 ">
        Services We Offer
      </h1>

      <div>
        <div className="py-6 ">
          <div className="   md:flex px-11">
            <div className="md:w-1/3 ">
              <img
                className="w-80 text-center mx-auto "
                src={a}
                alt=""
                srcset=""
              />
            </div>

            <div className="  md:w-1/2">
              <h1 className="text-2xl font-semibold pb-4">Product Designing</h1>
              The design and development of our products hinge on the expertise
              of professionals across several critical areas. Mechanical drawing
              specialists meticulously craft detailed blueprints that guide the
              assembly and functionality of our products, ensuring precision and
              manufacturability. Meanwhile, hardware circuit designers create
              intricate electronic circuits that underpin the device’s
              performance, coordinating closely with software teams to achieve
              seamless integration. Together, these disciplines ensure that our
              products are not only advanced but are also reliable in real-world
              applications.
            </div>
          </div>
        </div>
        <div className="py-6 ">
          <div className="   md:flex px-11">
            <div className="md:w-1/3 ">
              <img
                className="w-80 text-center mx-auto "
                src={b}
                alt=""
                srcset=""
              />
            </div>

            <div className="  md:w-1/2">
              <h1 className="text-2xl font-semibold pb-4">
                Internet Of Things
              </h1>
               Our products are designed with cutting-edge Internet of Things
              (IOT) technology, seamlessly integrating electronics and network
              connectivity to enhance your home and lifestyle. By embedding IOT
              capabilities, our devices allow for effortless connectivity and
              communication between various home appliances and electronic
              items.
            </div>
          </div>
        </div>
        <div className="py-6 ">
          <div className="   md:flex px-11">
            <div className="md:w-1/3 ">
              <img
                className="w-80 text-center mx-auto "
                src={c}
                alt=""
                srcset=""
              />
            </div>

            <div className="  md:w-1/2">
              <h1 className="text-2xl font-semibold pb-4">Software Testing</h1>
              In software development and testing, we offer specialized services
              including BootLoader and Firmware Development, Kernel
              Customization, and Multi-Platform Application Designing. Our
              BootLoader and Firmware Development ensures smooth hardware
              initialization and system reliability. We customize kernels to
              enhance performance and stability, thoroughly testing them for
              optimal functionality. Additionally, our Multi-Platform
              Application Designing creates versatile applications that operate
              seamlessly across various devices and platforms. These services
              ensure robust, high-performance solutions tailored to your needs.
            </div>
          </div>
        </div>
        <div className="py-6 ">
          <div className="   md:flex px-11">
            <div className="md:w-1/3 ">
              <img
                className="w-80 text-center mx-auto "
                src={d}
                alt=""
                srcset=""
              />
            </div>

            <div className="  md:w-1/2">
              <h1 className="text-2xl font-semibold pb-4">PCB Designing</h1>
              Leveraging our extensive industrial experience and deep expertise
              in the field, we are proud to offer exceptional PCB Design
              Services. Our seasoned professionals bring a wealth of knowledge
              to each project, ensuring high-quality and reliable printed
              circuit board designs tailored to meet your specific needs. From
              initial concept and schematic design to layout and final
              validation, our team utilizes advanced tools and methodologies to
              deliver precise and efficient solutions. Our commitment to
              excellence and innovation in PCB design ensures that your products
              perform optimally and meet the highest standards of reliability
              and functionality.
            </div>
          </div>
        </div>
        <div className="py-6 ">
          <div className="   md:flex px-11">
            <div className="md:w-1/3 ">
              <img
                className="w-80 text-center mx-auto "
                src={e}
                alt=""
                srcset=""
              />
            </div>

            <div className="  md:w-1/2">
              <h1 className="text-2xl font-semibold pb-4">
                Customized Products
              </h1>
              At our company, we specialize in delivering customized products
              with a commitment to quick turnaround times, a proactive approach,
              and pragmatic solutions. Our streamlined processes ensure that
              your tailored solutions are developed and delivered swiftly,
              meeting your specific requirements without unnecessary delays. We
              adopt a proactive approach to anticipate and address potential
              challenges early in the development cycle, ensuring smooth project
              execution. By focusing on practical and effective solutions, we
              ensure that our products not only meet but exceed your
              expectations, driving customer satisfaction through exceptional
              service and quality.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
