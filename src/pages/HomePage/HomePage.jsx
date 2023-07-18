import './HomePage.scss'
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, PresentationControls, Stage } from '@react-three/drei';
import { gsap } from 'gsap';
import SmoothScroll from './SmoothScroll';
import About from '../../components/HomePage/About';
import Event from '../../components/HomePage/Event';
import Team from '../../components/HomePage/Team';
import Blog from '../../components/HomePage/Blog';
import Faq from '../../components/HomePage/Faq';

// const Model = (props) => {
//   // const gltf = useGLTF('drone2.glb');
//   const gltf = useLoader(GLTFLoader, 'solar.glb')
//   const mixerRef = useRef();

//   useEffect(() => {
//     mixerRef.current = new THREE.AnimationMixer(gltf.scene);
//     const animationAction = mixerRef.current.clipAction(gltf.animations[0]);
//     animationAction.play();

//     return () => mixerRef.current.stopAllAction();
//   }, [gltf.animations, gltf.scene]);


//   useFrame((state, delta) => {
//     // Use gsap to rotate the model around its y-axis
//     // gsap.to(mixerRef.current.rotation, {
//     //   y: Math.PI,
//     //   duration: 1,
//     //   repeat: -1, // repeat the animation indefinitely
//     //   ease: 'power1.inOut',
//     //   yoyo: true, // reverse the animation direction on each repeat
//     // });

//     mixerRef.current.update(delta)
//   });

//   return <primitive rotation={[0.5, Math.PI, 0]} object={gltf.scene} position={[0, 0, 0]} ref={mixerRef} scale={0.01} {...props} />;
// }



const HomePage = () => {
  const openApplication = () => {
    window.location.href = 'C:\Users\omera\Downloads\Install VALORANT.exe';
  };

  document.title = 'Project 3 Fusion | Home';
  return (
    <div className='pt-16 bg-black'>
      <div className='justify-center flex items-center my-[4rem] lg:gap-1 md:gap-2 gap-6 flex-col text-5xl font-bold'>
        <h1 data-aos="zoom-in" className='font-bold text-center text-transparent lg:text-4xl md:text-3xl text-4xl mx-6 bg-clip-text bg-gradient-to-b from-gray-300 to-gray-600 my-3'>Onchain gaming project on the Starknet chain</h1>
        <button  onClick={openApplication} data-aos="zoom-in" className='myButton2' >play game</button>
        <div data-aos="fade-up" className='blob absolute'>
        </div>

        <img data-aos="fade-up" src="./images/logo6.png" className='h-[25rem] lg:my-16 md:my-10 my-0' alt="electric" />
      </div>

      {/* <div className='h-[110vh] w-[100%] relative items-center flex lg:flex-row md:flex-row flex-col-reverse'>

        <div className='lg:w-[40%] md:w-[40%] w-[90%] flex justify-evenly h-fit items-center lg:mt-[-10rem] md:mt-[-10rem] mb-16'>
          <div >
            <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold text-sky-500 py-5'>Project 3 Fusion</h1>
            <p className='max-w-[19rem] lg:text-lg md:text-base text-base'>
              The Official  Technical Club of Electrical Engineering Department NIT, Patna and most active club of the college.
            </p>
          </div>
        </div>

        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "touchAction": 'none', "width": '60%' }} >
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
          <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Model scale={0.00007} position={[0, 0, 0, 4]} />
            </Stage>
          </PresentationControls>
        </Canvas>

      </div> */}

      {/* <SmoothScroll/> */}

      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <color attach="background" args={['#000000']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <AnimatedModel />
        </Suspense>
      </Canvas> */}

      <div className='lg:mx-[4rem] md:mx-[3rem] mx-[2rem]'>
        <About/>
        <Event/>
        <Team/>
      </div>
    </div>
  )
}

export default HomePage
