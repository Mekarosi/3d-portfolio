import { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Office from '../models/Office'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane  from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import enjoy from '../assets/enjoy.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(enjoy))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isRotating, setIsRotating] = useState(false )
  const [currentStage, setCurrentStage] = useState(1)
  const[isPlayingMusic, setIsPlayingMusic] = useState(false)
  
  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    }
    return () => {
      audioRef.current.pause()
    }
  },[isPlayingMusic]) 
  
  
  // const adjustOfficeForScreenSize  =  () => {
  //    let screenScale = null
  //    let screenPosition = [0, -6.5, -43]
  //    let rotation = [0.1, 4.7, 0]

  //    if(window.innerWidth < 768) {
  //     screenScale = [0.9, 0.9, 0.9]
  //    } else {
  //     screenScale = [1, 1, 1]
  //    }

  //    return [screenScale, screenPosition, rotation]
  // }

  
// const [officeScale, officePosition, officeRotation] = adjustOfficeForScreenSize()
    const adjustPlaneForScreenSize  =  () => {
     let screenScale, screenPosition 
    

     if(window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5]
      screenPosition= [0, -1.5, 0]
     } else {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition= [0, -4, -4]
     }

     return [screenScale, screenPosition]
  }

const [planeScale, planePosition, ] = adjustPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'> 
      
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}  />}
      </div> 

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating  ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
         <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1,]} intensity={2}/>
          <ambientLight intensity={0.9} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" /> 
          
         <Bird />
         <Sky isRotating={isRotating}/>
         <Office  
          //  position= {officePosition}
          //  scale ={officeScale}
          //  rotation= {officeRotation}
         isRotating={isRotating}
         setIsRotating={setIsRotating}
         setCurrentStage={setCurrentStage}
         /> 
          <Plane 
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
         />
        
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home