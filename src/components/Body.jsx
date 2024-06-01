const Body = () => {
    return(

        <div className="body">
            <div className="body-content">
                <h1>Think Different.</h1>
                <br />
                <p>Revolutionize Your World. <br /> Transform Possibilities into Realities.</p>
                <br />
                <div className="body-btn">
                    <button className="shop-now-btn">Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <br />
                <div className="shopping">
                    <p>Available On </p>
                    <div className="brand-icons">
                        <img src="/images/amazon_icon.png" alt="amazon-logo" />
                        <img src="/images/flipkart_icon.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="body-image">
                <img className="iphone" src="/images/iphone.jpg" alt="iphone" />
            </div>
        </div>
    )

}

export default Body