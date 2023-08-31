import { useEffect, useState } from 'react'
import Order from './Components/Order'
import Cart from './Components/Cart'
import Menu from './Components/Menu'

const data = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60
  }
];

function App() {
  const [drinks /*, setDrinks*/] = useState(data);
  const [cart, setCart] = useState([]); // 加入購物車品項之陣列
  const [description, setDescription] = useState("");
  const [sum, setSum] = useState(0);
  const [order, setOrder] = useState({});

  // 品項點擊加入購物車
  const addToCart = (drink) => {
    const existingIndex = cart.findIndex(
      (cartItem) => drink.id === cartItem.id
    );

    if (existingIndex === -1) {
      // 購物車內尚未選擇品項時
      const updatedCart = [
        ...cart,
        {
          ...drink, // 淺拷貝物件的資訊
          quantity: 1, // 點選數量預設為1
          subtotal: drink.price // 所點擊品項的小計
        }
      ];
      setCart(updatedCart);
    } else {
      // 購物車內存在品項
      const updatedCart = cart.map((cartItem) => {
        return drink.id === cartItem.id
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity < 10
                  ? cartItem.quantity + 1
                  : cartItem.quantity,
              subtotal: cartItem.price * (cartItem.quantity + 1) // 根據數量計算小計金額
            }
          : { ...cartItem };
      });
      setCart(updatedCart);
    }
  };
  // console.log(cart); // 確認品項是否加入

  // 更新購物車品項及金額修改
  const updateCart = (item, value) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subtotal: cartItem.price * parseInt(value)
        };
      }
      return cartItem;
    });
    setCart(newCart);
  };

  // 確認訂單並創立
  const createOrder = () => {
    setOrder({
      id: new Date().getTime(),
      cart,
      description,
      sum
    });
    setCart([]);
    setDescription("");
  };

  // 計算訂單總金額
  useEffect(() => {
    const totalAmount = cart.reduce((pre, cur) => {
      return pre + cur.subtotal;
    }, 0);
    setSum(totalAmount);
  }, [cart]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <Menu drinks={drinks} addToCart={addToCart} />
          <Cart
            cart={cart}
            setCart={setCart}
            updateCart={updateCart}
            createOrder={createOrder}
            sum={sum}
            setDescription={setDescription}
          />
        </div>
        <hr />
        <div className="row justify-content-center">
          <Order order={order} />
        </div>
      </div>
    </>
  );
}

export default App