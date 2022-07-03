
const Card = () => {
  return (
    <div className="card">
        <div className="card-image"></div>
        <div className="card-contents">
            <span className="card-type">PERFUME</span>
            <h1 className="card-title">Gabrielle Essence Eau De Parfum</h1>
            <p className="card-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className="card-price">
                <span className="card-new-price">$149.99</span>
                <del className="card-orig-price">$169.99</del>
            </div>
            <button className="card-add-to-cart">
                <img className="card-cart-icon" src="./images/icon-cart.svg" alt="cart" />
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Card