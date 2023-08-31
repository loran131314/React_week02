function Order({ order }) {
  return (
    <>
      <div className="col-12">
        {!order.id ? (
          <div
            className="alert alert-warning mb-3 h-100 d-flex align-items-center"
            role="alert"
          >
            <h5 className="fs-2 fw-bolder m-auto">尚未建立訂單！</h5>
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h5>訂單</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">品項</th>
                      <th scope="col">數量</th>
                      <th scope="col">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cart.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.subtotal}</td>
                        </tr>
                      );
                    })}
                    {/*<tr>
                      <td>翡翠檸檬</td>
                      <td>7</td>
                      <td>385</td>
                    </tr>
                    <tr>
                      <td>冬瓜檸檬</td>
                      <td>7</td>
                      <td>315</td>
                    </tr>
                    <tr>
                      <td>冬瓜檸檬</td>
                      <td>4</td>
                      <td>180</td>
                    </tr>*/}
                  </tbody>
                </table>
                <div
                  className="alert alert-secondary text-start mb-2 p-2 fw-bold"
                  role="alert"
                >
                  備註 : <span>{order.description}</span>
                </div>
                <div className="text-end">
                  <h5 className="fw-bolder">
                    總金額 : <span>${order.sum}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*<div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>訂單</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>翡翠檸檬</td>
                    <td>7</td>
                    <td>385</td>
                  </tr>
                  <tr>
                    <td>冬瓜檸檬</td>
                    <td>7</td>
                    <td>315</td>
                  </tr>
                  <tr>
                    <td>冬瓜檸檬</td>
                    <td>4</td>
                    <td>180</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-end">
                備註: <span>都不要香菜</span>
              </div>
              <div className="text-end">
                <h5>
                  總計: <span>$145</span>
                </h5>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
}

export default Order