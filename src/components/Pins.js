
import { useContext } from "react"
import { ImageContext } from "../App"
import Lazyload from "./Lazyload";
import Pin from "./Pin"

const Pins = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto">
      {isLoading ? <Lazyload item={10} /> : response.map((data, key) => <Pin key={key} data={data} />)}
    </div>
  </>
  )
}

export default Pins