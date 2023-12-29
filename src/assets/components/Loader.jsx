import { Html } from '@react-three/drei'
const Loader = () => {

  return (
    <Html>
      <div style={{display:"flex",justifyContent:"center",width:"100vw",left:"-50vw",position:"absolute"}}>

      <div className="custom-loader"></div>
      </div>

    </Html>
  )
}

export default Loader