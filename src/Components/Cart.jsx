/*function Count() {
  const numAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <select className="form-select" >
      {numAry.map((num) => {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      })}
    </select>
  );
}*/

function Cart({ cart, setCart, updateCart, createOrder, sum, setDescription }) {
  return (
    <>
      <div className="col-md-8 d-flex flex-column">
        <table className="table">
          <thead>
            <tr className="text-nowrap">
              <th scope="col" width="50">
                操作
              </th>
              <th scope="col" width="100">
                品項
              </th>
              <th scope="col" width="240">
                描述
              </th>
              <th scope="col" width="90">
                數量
              </th>
              <th scope="col">單價</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              console.log("item", item);
              return (
                <tr key={item.id}>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={() => {
                        const newCart = cart.filter(
                          (cartItem) => cartItem.id !== item.id
                        );
                        setCart(newCart);
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <select
                      className="form-select"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = e.target.value;
                        updateCart(item, value);
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
                        return (
                          <option value={n} key={n}>
                            {n}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td className="text-center">{item.price}</td>
                  <td className="text-center">{item.subtotal}</td>
                </tr>
              );
            })}
            {/* 原始對照組
            <tr>
              <td>
                <button type="button" className="btn btn-sm">
                  x
                </button>
              </td>
              <td>四季春茶</td>
              <td>
                <small>香醇四季春茶，回甘無比</small>
              </td>
              <td>
                <select className="form-select">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>45</td>
              <td>45</td>
            </tr>*/}
          </tbody>
        </table>
        {cart.length === 0 ? (
          <div
            className="alert alert-info h-100 d-flex align-items-center mb-0"
            role="alert"
          >
            <h5 className="fs-2 fw-bolder m-auto">尚未選擇商品！</h5>
          </div>
        ) : (
          <>
            <div className="text-end mb-3">
              <h5 className="fw-bolder>">
                總金額 : <span>${sum}</span>
              </h5>
            </div>
            <textarea
              className="form-control mt-auto mb-2"
              rows="3"
              placeholder="備註"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <div className="text-end">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  createOrder();
                }}
              >
                送出
              </button>
            </div>
          </>
        )}
        {/*<div className="text-end mb-3">
            <h5>
              總計: <span>$100</span>
            </h5>
          </div>*/}
      </div>
    </>
  );
}

export default Cart