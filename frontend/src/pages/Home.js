class Home extends React.Component {
  state = {
    products: [
      { id: 'product-dkfj', name: '웰치스', price: 980, image: 'https://img.danawa.com/prod_img/500000/648/889/img/16889648_1.jpg?shrink=500:500&_v=20221021170923' },
      { id: 'product-ekdi', name: '두부 1kg', price: 2180, image: 'https://contents.lotteon.com/itemimage/_v105312/LF/14/37/17/3_/0/LF1437173_0_2.jpg/dims/resizef/720X720' },
    ]
  }

  render() {
    const { products } = this.state;

    console.log(products[0]);
    console.log(products[1]);

    return (
      <React.Fragment>
        <h2>리스트 렌더링</h2>
        <ul>
          <li>
            <figure data-id={products[0].id}>
              <img src={products[0].image} height={100} alt />
              <figcaption>
                <span>{products[0].name}</span>
                <span>{products[0].price}</span>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure data-id={products[1].id}>
              <img src={products[1].image} height={100} alt />
              <figcaption>
                <span>{products[1].name}</span>
                <span>{products[1].price}</span>
              </figcaption>
            </figure>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Home;