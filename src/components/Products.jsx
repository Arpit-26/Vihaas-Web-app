import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import ProductCard from './Products/ProductCard';

import a from '../assets/products/Picture1.webp';
import b from '../assets/products/mgw.png';
import c from '../assets/products/Picture2.png';
import d from '../assets/products/Picture3.png';
import e from '../assets/products/ULSB-2.webp';
import f from '../assets/products/RAU.webp';
import g from '../assets/products/Picture7.png';
import i from '../assets/products/Picture9.png.png';

const Products = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (product) => {
    navigate(
      `/productPage?name=${encodeURIComponent(product.name)}&img=${encodeURIComponent(product.img)}&description=${encodeURIComponent(product.description)}&feature=${encodeURIComponent(JSON.stringify(product.feature))}`,
    );
  };
  const products = [
    {
      name: 'IP-PBX',
      img: a,
      description:
        'IP-based communication system in the telecom industry uses the Internet Protocol (IP) to transmit voice, video, and data over digital networks. It enables services like VoIP (Voice over IP), video conferencing, and unified communications by converting voice and video into digital data packets. Key components include protocols like SIP (Session Initiation Protocol), IP-PBX systems for managing voice communications, and infrastructure like routers and gateways.',
      feature: [
        'Supports up to 10000 Nos. Of ports consisting of FXS, FXO, KTS, E1 /PRI and VoIP It also supports GSM, auto attendant and voice mail on the same platform                                                                                    ',
        'E1 /PRI Interface for connection to other networks or inter connection to other PABX',
        'Field upgradable from 16 ports to 10000 ports capability by use of add on boards',
        '100% non-blocking Architecture for assured connectivity',
        'Field upgradable from 16 ports to 10000 ports capability by use of add on boards                                                                 ',
        'Easy integration with Property Management solutions and Call Accounting Systems',
        'Provides Standard set of subscriber features with Caller ID Display with Name',
        'Built -in auto attendant with voice guidance for operator less operations',
      ],
    },
    // Add other products here
  ];
  const product2 = {
    name: 'Media Gateaway',
    img: b,
    description:
      'MGW is a versatile device that can operate as a standalone IP-PBX with SIP switching or as a media gateway connected to a central Soft-switch. It supports multiple protocols, enabling flexible operations and seamless integration with IMS architecture. This module connects both legacy and modern telecom networks, including POTS, PSTN, ISDN, E1/PRI, GSM, and IP, within a single unit, facilitating an easy transition to IP-based infrastructure. It also integrates voice, video, and features like Unified Communications, Voice Mail, and Contact Center, offering reliability, scalability, and robust enterprise capabilities.',
    feature: [
      'SIP Standard',
      'IPv6 Ready',
      'Redundancy of CPU & Power Supply',
      ' Matured Call & In Progress Call recovery in HA mode',
      'Heart-beat Functionality',
      ' Inbuilt SIP Registrar',
    ],
  };

  const product3 = {
    name: 'Analog feild Telephones',
    img: c,
    description:
      'An analog field phone is a basic telecommunication device used for voice communication, often in military or remote settings. It uses analog signals to transmit audio over a simple circuit, typically operating through a wired connection. Its ultimate advantage is reliability in challenging environments, though it lacks the advanced features of modern digital systems.',
    feature: [
      'User - friendly Local Battery (LB) / Central Battery (CB) telephone for use in harsh environment  ',
      'Standard batteries (3 of 1.5V D- type) or external battery (4.5V to 24) for LB function ',
      'Local radio control mode (LBR) supported  ',
      'In accordance with military requirements MIL-STD-810-H ',
      'H-350 / U type handset, compatible for usage with helmet with push -to-talk ',
      'Easily used on a table, hanged on a tree or wall, carried in bag ',
      'Adjustable levels for acoustical signal ',
      'Audible and LED indication for incoming call',
      'Easy to use push buttons with backlight ',
    ],
  };
  const product4 = {
    name: 'SOS Help Point Telophone',
    img: d,
    description:
      'SOS help point phones are emergency communication devices strategically placed in public areas to provide immediate assistance during urgent situations. Typically installed in high-visibility locations such as parking lots, campuses, and transportation hubs, these phones allow users to quickly connect with emergency services or security personnel by pressing a single button. Equipped with GPS or location-identifying technology, they ensure responders can pinpoint the exact location of the distress call. Designed to withstand harsh weather and vandalism, SOS help point phones enhance safety and security by offering a reliable means of reaching help when needed.',
    feature: [
      'Analog / IP/ GSM based solution   ',
      'Full Duplex speech',
      'Electronic hook switch sensors ',
      ' In-built beacon flashing light for ringin',
      'In-built Loud Ringer ',
      'Instant calling / Hotline ',
      'Remote programmable',
      'Optional Induction Loop facility for Hearing impaired',
    ],
  };

  const product5 = {
    name: 'Unit Level Switch Board',
    img: e, // Assuming `b` is still the image reference
    description:
      'A unit-level switchboard in a military context is a communication hub used to manage and route signals within a specific unit or base. It typically facilitates internal and external communication by connecting various communication lines, including radio, telephone, and data systems. This switchboard allows for the efficient distribution of messages and commands, enhancing coordination and operational effectiveness within the unit. It is designed to be rugged and reliable, ensuring consistent performance in challenging environments.',
    feature: [
      'State-of-the-art Multi-Interface IP Field Exchange Up to 512 Ports',
      'Digital PCM/TDM and IP switching technology',
      'Works on non-blocking circuit switching concept',
      'Interfaces to strategic and other tactical Communication Network via exchange Trunk lines or over E1/PRI Interface IP trunks',
      'Built-in radio inter-op Functionality supporting up to two radio nets',
      'VHF/UHF Radio nets communicate with any subscribers connected to the System',
      'Ethernet port (10/100Mb) for Mapping data up to 2Mb(nx64kbps) over E1 links',
    ],
  };
  const product6 = {
    name: 'Radio Adaptor Unit',
    img: f,
    description:
      'MGW is a versatile device that can operate as a standalone IP-PBX with SIP switching or as a media gateway connected to a central Soft-switch. It supports multiple protocols, enabling flexible operations and seamless integration with IMS architecture. This module connects both legacy and modern telecom networks, including POTS, PSTN, ISDN, E1/PRI, GSM, and IP, within a single unit, facilitating an easy transition to IP-based infrastructure. It also integrates voice, video, and features like Unified Communications, Voice Mail, and Contact Center, offering reliability, scalability, and robust enterprise capabilities.',
    feature: [
      'SIP Standard',
      'IPv6 Ready',
      'Redundancy of CPU & Power Supply',
      ' Matured Call & In Progress Call recovery in HA mode',
      'Heart-beat Functionality',
      ' Inbuilt SIP Registrar',
    ],
  };
  const product7 = {
    name: 'IP Based Train Control & Communication System (TCCS)',
    img: g,
    description:
      'An IP-based train control and communication system uses Internet Protocol (IP) networks to manage and communicate between various components of a train system. This modern approach facilitates real-time data exchange and control, improving the efficiency and safety of train operations. By leveraging IP technology, it integrates various systems such as signaling, train control, passenger information, and onboard communications into a unified network. This setup enhances coordination between trains and control centers, allows for better monitoring and management, and supports advanced features like predictive maintenance and real-time updates.',
    feature: [
      'Centralized communication and application server',
      'Provision for disaster recovery server',
      'Centralized conference bridge',
      'Gateways at way stations for integration with emergency communication',
      'Gateways with remote survivability',
      'Feature-rich console for the key user',
      'Touch screen panel with one-touch dialing',
      'Real-time status of all stations',
      'Common single equipment for all controls',
    ],
  };

  const product8 = {
    name: 'Vehicle and Marine Intercom System (VCCS/VIS)',
    img: b,
    description:
      'MGW is a versatile device that can operate as a standalone IP-PBX with SIP switching or as a media gateway connected to a central Soft-switch. It supports multiple protocols, enabling flexible operations and seamless integration with IMS architecture. This module connects both legacy and modern telecom networks, including POTS, PSTN, ISDN, E1/PRI, GSM, and IP, within a single unit, facilitating an easy transition to IP-based infrastructure. It also integrates voice, video, and features like Unified Communications, Voice Mail, and Contact Center, offering reliability, scalability, and robust enterprise capabilities.',
    feature: [
      'SIP Standard',
      'IPv6 Ready',
      'Redundancy of CPU & Power Supply',
      ' Matured Call & In Progress Call recovery in HA mode',
      'Heart-beat Functionality',
      ' Inbuilt SIP Registrar',
    ],
  };

  const product9 = {
    name: 'IP Phone',
    img: i,
    description:
      'An IP phone, or Internet Protocol phone, is a communication device that uses the internet or an IP-based network to facilitate voice calls instead of relying on traditional telephone lines. By converting voice signals into digital data packets and transmitting them over a network using protocols like Voice over IP (VoIP), IP phones enable efficient and flexible communication. These phones can be either physical devices connected to a network or software applications installed on computers and mobile devices. They often come with advanced features such as video calling, instant messaging, and integration with other communication tools, making them a versatile and cost-effective option for both personal and business use. Additionally, IP phones can reduce costs, particularly for long-distance or international calls, and provide a range of functionalities that enhance communication efficiency.',
    feature: [
      'Voice over IP (VoIP) Capability',
      'Advanced Calling Features',
      'Video Calling',
      'Integrated Messaging',
      'Conference Calling',
      'Integration with Other Systems',
      'Directory and Contacts',
      'Mobility and Flexibility',
      'Cost Efficiency',
      'Enhanced Audio Quality',
    ],
  };

  return (
    <>
      <h1 className="text-3xl  md:text-[3vw] font-serif font-bold text-center py-8 ">
        Solutions We Offer
      </h1>
      {/* 1 */}
      <div className="md:flex gap-8 justify-center ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            onClick={() => handleClick(product)}
            name={product.name}
            img={product.img}
            description={product.description}
          />
        ))}
        {/* 2 */}
        <ProductCard
          onClick={() => handleClick(product2)}
          name={product2.name}
          img={product2.img}
          description={product2.description}
        />

        {/* 3 */}
        {/* <ProductCard
          onClick={() => handleClick(product3)}
          name={product3.name}
          img={product3.img}
          description={product3.description}
        /> */}
        {/* 6 */}
        <ProductCard
          onClick={() => handleClick(product6)}
          name={product6.name}
          img={product6.img}
          description={product6.description}
        />
      </div>
      {/* 4 */}
      <div className="md:flex gap-8 justify-center ">
        <ProductCard
          onClick={() => handleClick(product4)}
          name={product4.name}
          img={product4.img}
          description={product4.description}
        />
        {/* 5 */}
        <ProductCard
          onClick={() => handleClick(product5)}
          name={product5.name}
          img={product5.img}
          description={product5.description}
        />
        {/* 9 */}
        <ProductCard
          onClick={() => handleClick(product9)}
          name={product9.name}
          img={product9.img}
          description={product9.description}
        />
      </div>
      {/* 7 */}
      <div className="md:flex gap-8 justify-center ">
        <ProductCard
          onClick={() => handleClick(product7)}
          name={product7.name}
          img={product7.img}
          description={product7.description}
        />
        {/* 8
        <ProductCard
          onClick={() => handleClick(product8)}
          name={product8.name}
          img={product8.img}
          description={product8.description}
        /> */}
      </div>
    </>
  );
};

export default Products;
