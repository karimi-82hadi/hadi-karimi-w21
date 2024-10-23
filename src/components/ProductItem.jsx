function ProductItem({ data }) {
  const { id, name, price, quantity } = data;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} هزار تومان</td>
      <td colSpan="2">{id}</td>
      <td>
        <div>
          <button>
            <svg style={{ fill: "none", width: "20px", height: "20px" }}>
              <use href="/src/assets/icons/static_symbol.svg#icon-edit"></use>
            </svg>
          </button>
          <button>
            <svg style={{ fill: "none", width: "20px", height: "20px" }}>
              <use href="/src/assets/icons/static_symbol.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;
