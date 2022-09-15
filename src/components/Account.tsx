import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import BreadCrumbs from './BreadCrumbs';
import AccountPersonalInfo from './AccountPersonalInfo';
import AccountAddress from './AccountAddress';
import AccountOrders from './AccountOrders';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1% 50px;
  display: flex;
  flex-direction: column;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const MyAccountWrapper = styled.div`
  width: 960px;
  align-self: center;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Tabs = styled.div`
  width: 100%;
  display: flex;

  @media ${smallScreen} {
    flex-direction: column;
    align-items: center;
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    > form {margin: 45px 0 45px}
  }
`;

const Tab = styled.div`
  width: 321px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
  cursor: pointer;
  user-select: none;

  @media ${smallScreen} {width: 100%}
`;

const MyPersonalInfoTab = styled(Tab)<{currTab: string}>`
  border-right: none;
  ${props => props.currTab === 'myPersonalInfo' && 'border: 1px solid #000;'}
`;

const MyAddressesTab = styled(Tab)<{currTab: string}>`
  border-right: none;
  ${props => props.currTab === 'myAddresses' && 'border: 1px solid #000;'}
  ${props => props.currTab === 'myPersonalInfo' && 'border-left: none;'}
`;

const OrderHistoryTab = styled(Tab)<{currTab: string}>`
  ${props => props.currTab === 'orderHistory' && 'border: 1px solid #000;'}
  ${props => props.currTab === 'myAddresses' && 'border-left: none;'}
`;

const MyAccountBody = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {margin: 45px 0 45px}
`;




const MyAccount = (): JSX.Element => {
  const screen = useMediaQuery();
  const [tab, setTab] = useState<string>('myPersonalInfo');

  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/#top'>Home</HashLink>
              <span>/</span>
              <span>My Account</span>
            </>
          }
          marginBottom='20px'
        />

        <MyAccountWrapper>
          <TitleWrapper>
            <Title>MY ACCOUNT</Title>
          </TitleWrapper>

          <Tabs>
            <MyPersonalInfoTab
              currTab={tab}
              onClick={(): void => setTab('myPersonalInfo')}
            >
              MY PERSONAL INFO
            </MyPersonalInfoTab>
            {screen.small && tab === 'myPersonalInfo' && <AccountPersonalInfo />}

            <MyAddressesTab
              currTab={tab}
              onClick={(): void => setTab('myAddresses')}
            >
              MY ADDRESS
            </MyAddressesTab>
            {screen.small && tab === 'myAddresses' && <AccountAddress />}

            <OrderHistoryTab
              currTab={tab}
              onClick={(): void => setTab('orderHistory')}
            >
              ORDER HISTORY
            </OrderHistoryTab>
            {screen.small && tab === 'orderHistory' && <AccountOrders />}
          </Tabs>

          {!screen.small &&
            <MyAccountBody>
              {tab === 'myPersonalInfo' && <AccountPersonalInfo />}
              {tab === 'myAddresses' && <AccountAddress />}
              {tab === 'orderHistory' && <AccountOrders />}
            </MyAccountBody>
          }
        </MyAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default MyAccount;
