import React from 'react';
import LayeredArchitecture from './LayeredArchitecture';
import AnimatedBackground3D from './AnimatedBackground3D';
import { useRouter } from 'next/router';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Hero = () => {
  const router = useRouter();
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();

  const handleClick = () => {
    if (!isConnected) {
      openConnectModal?.(); // prompt wallet connect
    } else {
      router.push('/dashboard'); // redirect if already connected
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-8 py-20 min-h-[80vh] overflow-hidden">
      <AnimatedBackground3D />
      
      <div className="relative z-10">
        <div className="flex justify-center mb-8">
          <p className="text-gray-400 text-lg max-w-2xl">
            Turning Electric Vehicles into Yield-Generating, Blockchain-Powered Infrastructure
          </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
          Decentralized
          <br />
          EV Revenue
          <br />
          Sharing
        </h1>

        <button
          onClick={handleClick}
          className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition"
        >
          🚀 Launch EVRS Beta App
        </button>
        
        <div className="w-full max-w-5xl mt-12">
          <LayeredArchitecture />
        </div>
      </div>
    </div>
  );
};

export default Hero;
