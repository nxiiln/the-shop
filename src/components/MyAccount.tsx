import React, {useState} from 'react';
import styled from 'styled-components';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 100%;
  margin-bottom: 55px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const BreadCrumbs = styled.button`
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const BreadCrumbsLeft = styled(BreadCrumbs)`
  width: 100px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;


//MyAccount--------------------------------------
const MyAccountWrapper = styled.div`
  width: 960px;
  height: 890px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Playfair Display SC';
  font-size: 24px;
  font-weight: 400;
  color: #000;
`;

const MyAccountBody = styled.div`
  width: 961px;
  height: 855px;
  border: 1px solid #e4e2e1;
`;

const Tabs = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  border-bottom: 1px solid #e4e2e1;
`;

const Tab = styled.div`
  width: 321px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito;
  font-size: 13px;
  font-weight: 300;
  color: #000;
  border-right: 1px solid #e4e2e1;
`;

const MyPersonalInfoTab = styled(Tab)``;

const MyAddressInfoTab = styled(Tab)``;

const OrderHistoryTab = styled(Tab)`
  border-right: none;
`;




const MyAccount = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / My Account
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>


        <MyAccountWrapper>
          <TitleWrapper>
            <Title>MY ACCOUNT</Title>
          </TitleWrapper>

          <MyAccountBody>
            <Tabs>
              <MyPersonalInfoTab>
                MY PERSONAL INFO
              </MyPersonalInfoTab>

              <MyAddressInfoTab>
                MY ADDRESS
              </MyAddressInfoTab>

              <OrderHistoryTab>
                ORDER HISTORY
              </OrderHistoryTab>
            </Tabs>
          </MyAccountBody>
        </MyAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default MyAccount;
