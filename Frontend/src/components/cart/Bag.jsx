import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const cartItems = [
  {
    id: 1,
    img: "https://via.placeholder.com/100",
    title: "Sunset Over the Ocean",
    artist: "John Doe",
    size: "24x36 inches",
    medium: "Acrylic on Canvas",
    price: 150,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/100",
    title: "Abstract Expressions ",
    artist: "Jane Smith",
    size: "30x40 inches",
    medium: "Oil on Canvas",
    price: 200,
    quantity: 1,
  },
];

const Bag = () => {
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div id="bag" className="bg-white rounded-md w-[70%] shadow-2xl mb-8 poppins-regular overflow-y-auto h-[900px]  ">
      <table className="w-full" >
        <thead className="sticky top-0 w-full bg-black text-white py-8">
          <tr className="">
            <th className="p-3 text-start w-[60%] ">Product</th>
            <th className="p-3 text-center ">Price</th>
            <th className="p-3 text-center ">Quantity</th>
            <th className="p-3 text-center ">Total Price</th>
          </tr>
        </thead>

        <tbody className=" ">
          {cartItems.map((item, index) => (
            <>
              <tr key={index} className="hover:bg-gray-100 border-b-[2px]  border-gray-300">
                {/* Product Column */}
                <td className="p-3 flex items-center gap-5">
                  <img src={item.img} alt={item.title} className="w-[120px] h-[150px] object-cover rounded" />
                  <div>
                    <h1 className="font-medium">{item.title}</h1>
                    <p className="text-sm text-gray-500">{item.medium}</p>
                  </div>
                </td>

                {/* Price Column */}
                <td className="p-3  font-bold text-center ">${item.price}</td>

                {/* Quantity Column */}
                <td className="p-3   text-center ">
                  <div className="flex items-center justify-center gap-2">
                    <CiSquareMinus size={30} className="cursor-pointer" />
                    <span>{item.quantity}</span>
                    <CiSquarePlus size={30} className="cursor-pointer" />
                  </div>
                </td>

                {/* Total Price Column */}
                <td className="p-3  text-center text-orange-300 font-bold ">${item.price * item.quantity}</td>
              </tr >
            </>

          ))}

        </tbody>

      </table>
    </div>
  )
}

export default Bag