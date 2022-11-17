

const Lazyload = ({item}) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="bg-gray rounded-lg h-72"></div>
    </div>
  ))

}

export default Lazyload