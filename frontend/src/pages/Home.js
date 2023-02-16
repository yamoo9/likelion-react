class Home extends React.Component {
  state = {
    products: [
      {
        id: 'product-dkfj',
        name: '웰치스',
        price: 980,
        image:
          'https://img.danawa.com/prod_img/500000/648/889/img/16889648_1.jpg?shrink=500:500&_v=20221021170923',
      },
      {
        id: 'product-ekdi',
        name: '두부 1kg',
        price: 2180,
        image:
          'https://contents.lotteon.com/itemimage/_v105312/LF/14/37/17/3_/0/LF1437173_0_2.jpg/dims/resizef/720X720',
      },
    ],
  };

  render() {

    const { products } = this.state;

    const figcaptionStyle = { 
      display: 'flex', 
      gap: 12 
    };

    return (
      <React.Fragment>
        <h2>리스트 렌더링</h2>
        <ul>
          {
            products.map(({ id, name, price, image }) => 
              <li key={id}>
                <figure>
                  <img src={image} height={100} alt="" />
                  <figcaption style={figcaptionStyle}>
                    <span>{name}</span>
                    <span>{price}</span>
                  </figcaption>
                </figure>
              </li>
            )
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
