function Menu({ drinks, addToCart }) {
  
  return (
    <>
      <div className="col-md-4">
        <div className="list-group">
          {drinks.map((drink) => {
            return (
              <a
                href="#"
                className="list-group-item list-group-item-action"
                key={drink.id}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(drink);
                }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{drink.name}</h5>
                  <small>${drink.price}</small>
                </div>
                <p className="mb-1">{drink.description}</p>
              </a>
            );
          })}
          {/* 原始對照組
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">抹茶拿鐵</h5>
              <small>$60</small>
            </div>
            <p class="mb-1">抹茶與鮮奶的絕配</p>
          </a>*/}
        </div>
      </div>
    </>
  );
}

export default Menu