import React, {useState} from 'react';
import styled from 'styled-components/macro';
import mostPopularA from '../images/mostPopularA.png';
import mostPopularB from '../images/mostPopularB.png';
import mostPopularC from '../images/mostPopularC.png';
import cartSymbol from '../images/cartSymbol.png';
import wishList from '../images/wishList.png';
import compare from '../images/compare.png';


const MostPopularWrapper = styled.article`
  width: 650px;
  height: 440px;
`;

const MainText = styled.h2`
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const Line = styled.div`
  width: 442px;
  height: 1px;
  background-color: #aaa;
`;

const Top = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Products = styled.div`
  width: 100%;
  height: 380px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Product = styled.div`
  width: 200px;
  height: 380px;
  position: relative;
`;

type Attr = {attr: string};

const Triangle = styled.div<Attr>`
  width: 0;
  height: 0;
  position: absolute;
  top: -7px;
  left: -24px;
  border-right: 35px solid transparent;
  border-bottom: ${props => props.attr === 'new' ?
    '35px solid #000' : '35px solid #c50e20'
  };
  border-left: 35px solid transparent;
  transform: rotate(-45deg);
`;

const New = styled.div`
  position: absolute;
  top: 4px;
  left: 2px;
  font-family: 'Playfair Display SC';
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: #fff;
`;

const DescriptionWrapper = styled.div`
  height: 35px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  font-family: 'Playfair Display SC';
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const Price = styled.div`
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
`;

const QuickShop = styled.button`
  width: 100%;
  height: 19px;
  margin: 0;
  position: absolute;
  top: 120px;
  left: 0px;
  border: none;
  background: #fff;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

type Status = {status: boolean};

const QuickShopText = styled.p<Status>`
  margin: 0;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: ${props => props.status ? '#aaa' : '#000'};
`;

const Purchase = styled.div`
  height: 57px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const AddToBag = styled.button`
  width: 100%;
  height: 25px;
  margin: 8px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const AddToBagText = styled.p`
  width: 80px;
  margin: 0;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #fff;
`;

const WishList = styled.button`
  width: 75px;
  height: 15px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: end;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Compare = styled.button`
  width: 80px;
  height: 15px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: end;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


const MostPopular = (): JSX.Element => {
  const [product, setProduct] = useState<number>(0);
  const [quickShopStatus, setQuickShopStatus] = useState<boolean>(false);

  const quickShop =
    <QuickShop
      onMouseEnter={(): void => setQuickShopStatus(true)}
      onMouseLeave={(): void => setQuickShopStatus(false)}
    >
      <QuickShopText status={quickShopStatus}>
        QUICK SHOP
      </QuickShopText>
    </QuickShop>;

  const purchase =
    <Purchase>
      <AddToBag>
        <img
          src={cartSymbol}
          alt='cart symbol'
        />
        <AddToBagText>ADD TO BAG</AddToBagText>
      </AddToBag>
      <WishList>
        <img
          src={wishList}
          alt='wishlist'
        />
        WISHLIST
      </WishList>
      <Compare>
        <img
          src={compare}
          alt='compare'
        />
        COMPARE
      </Compare>
    </Purchase>;


  return(
    <MostPopularWrapper>
      <Top>
        <MainText>MOST POPULAR</MainText>
        <Line />
      </Top>

      <Products>
        <Product
          onMouseEnter={(): void => setProduct(1)}
          onMouseLeave={(): void => setProduct(0)}
        >
          <img 
            src={mostPopularA}
            alt='woman in orange dress'
          />
          <Triangle attr='new' />
          <New>NEW</New>
          {product === 1 && quickShop}
          <DescriptionWrapper>
            <Description>
              DETAILED SWING DRESS
            </Description>
            <Price>$1,875</Price>
          </DescriptionWrapper>
          {product === 1 && purchase}
        </Product>

        <Product
          onMouseEnter={(): void => setProduct(2)}
          onMouseLeave={(): void => setProduct(0)}
        >
          <img 
            src={mostPopularB}
            alt='woman in beige dress'
          />
          <Triangle attr='sale' />
          <New>SALE</New>
          {product === 2 && quickShop}
          <DescriptionWrapper>
            <Description>
              MAXARARZY FRILLED DRESS
            </Description>
            <Price>$1,875</Price>
          </DescriptionWrapper>
          {product === 2 && purchase}
        </Product>

        <Product
          onMouseEnter={(): void => setProduct(3)}
          onMouseLeave={(): void => setProduct(0)}
        >
          <img 
            src={mostPopularC}
            alt='man in white shirt'
          />
          {product === 3 && quickShop}
          <DescriptionWrapper>
            <Description>
              DETAILED SWING DRESS
            </Description>
            <Price>$1,875</Price>
          </DescriptionWrapper>
          {product === 3 && purchase}
        </Product>
      </Products>
    </MostPopularWrapper>
  );
}


export default MostPopular;
