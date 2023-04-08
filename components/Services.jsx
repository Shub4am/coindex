import React from 'react';
import Card from './Card';
import walletImg from '../assets/images/wallet.png';
import moneyBagImg from '../assets/images/moneybag.png';
import lockerImg from '../assets/images/locker.png';

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div className="flex flex-col justify-center items-center">
        <p className=" font-bold text-5xl leading-[60px] capitalize">
          Our directions and advantages
        </p>
        <p className="font-normal text-2xl leading-[34px] text-center mt-6">
          Integrate once and never worry about scaling again. We ensure
          compatibility
          <br /> between ecosystem projects by maintaining a single global state
          as the network scales.
        </p>
      </div>
      <div className="flex gap-10 mt-10">
        <Card
          imgSrc={walletImg}
          title="Powerful for developers"
          subText="Cucoin is a decentralized blockchain built to enable scalable, user-friendly apps for the world."
          cta="Learn more"
        />
        <Card
          imgSrc={moneyBagImg}
          title="Low cost, forever"
          subText="Our scalability ensures transactions remain less than $0.01 for both developers and users.
"
          cta="Learn more"
        />
        <Card
          imgSrc={lockerImg}
          title="Decentralized
"
          subText="The network is spread over thousands of independent nodes,so  your transactions are always safe."
          cta="Learn more"
        />
      </div>
    </div>
  );
};

export default Services;
