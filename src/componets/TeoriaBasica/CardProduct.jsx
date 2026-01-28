

const CardProduct = ({ item }) => {
  return (
    <div className="bg-blue-950 text-yellow-300 text-center">
        <h1> Card de productos </h1>

        <ul className="bg-green-900">
            <li className="text-white">
                {
                    item.id
                }
            </li>

            <li className="text-white">
                {
                    item.nombre
                }
            </li>

            <li className="text-white">
                {
                    item.email
                }
            </li>

            <li className="text-white">
                {
                    item.edad
                }
            </li>
        </ul>

    </div>
  )
}

export default CardProduct
