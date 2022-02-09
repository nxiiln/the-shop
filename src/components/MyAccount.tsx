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

const Tabs = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
`;

const Tab = styled.div`
  width: 321px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito;
  font-size: 13px;
  font-weight: 300;
  color: #000;
  border: 1px solid #e4e2e1;
  cursor: default;
  user-select: none;
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
  height: 855px;
  display: flex;
  justify-content: center;
  border: 1px solid #e4e2e1;
  border-top: none;
  > form {
    margin-top: 48px;
  }
`;

const Label = styled.label`
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
`;

const LabelText = styled(Label)`
  height: 45px;
  margin-bottom: 17px;
  display: grid;
  align-content: space-between;
  > input {
    width: 254px;
    height: 30px;
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
  }
`;

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin-top: 22px;
  align-items: center;
  font-weight: 400;
  > input {
    margin: 0 10px 0 0;
    accent-color: #000;
  }
`;

const ButtonBlack = styled.button`
  width: 144px;
  height: 30px;
  font-family: Nunito;
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
`;

const ButtonUpdate = styled(ButtonBlack)`
  width: 144px;
  height: 30px;
  margin-top: 30px;
`;

const Required = styled.span`
  margin-left: 12px;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #000;
`;




const MyAccount = (): JSX.Element => {
  const [tab, setTab] = useState<string>('myAddresses');


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

          <Tabs>
              <MyPersonalInfoTab
                currTab={tab}
                onClick={(): void => setTab('myPersonalInfo')}
              >
                MY PERSONAL INFO
              </MyPersonalInfoTab>

              <MyAddressesTab
                currTab={tab}
                onClick={(): void => setTab('myAddresses')}
              >
                MY ADDRESSES
              </MyAddressesTab>

              <OrderHistoryTab
                currTab={tab}
                onClick={(): void => setTab('orderHistory')}
              >
                ORDER HISTORY
              </OrderHistoryTab>
            </Tabs>


          <MyAccountBody>
            {tab === 'myPersonalInfo' &&
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}
              >
                <LabelText>
                  FIRST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  LAST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  E-MAIL*
                  <input type='email' required />
                </LabelText>
  
                <LabelText>
                  CURRENT PASSWORD*
                  <input type='password' required />
                </LabelText>

                <LabelText>
                  NEW PASSWORD
                  <input type='password' />
                </LabelText>

                <LabelText>
                  CONFIRMATION
                  <input type='password' />
                </LabelText>
  
                <LabelCheckbox>
                  <input type='checkbox' name='subscribe' defaultChecked />
                  I WANT TO SUBSCRIBE TO THE NEWSLETTER
                </LabelCheckbox>

                <ButtonUpdate>UPDATE</ButtonUpdate>
                <Required>*Required</Required>
              </form>
            }


            {tab === 'myAddresses' &&
              <form>
                <LabelText>
                  FIRST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  LAST NAME*
                  <input type='text' required />
                </LabelText>

                <LabelText>
                  COMPANY
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ADDRESS 1
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ADDRESS 2
                  <input type='text' />
                </LabelText>

                <LabelText>
                  COUNTRY
                  <input list='country' />
                </LabelText>
                <datalist id='country'>
                  <option value='Russia' />
                  <option value='UK' />
                  <option value='USA' />
                </datalist>

                <LabelText>
                  CITY
                  <input type='text' />
                </LabelText>
  
                <LabelText>
                  STATE
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ZIP / POSTAL CODE*
                  <input type='text' required />
                </LabelText>

                <LabelText>
                  PHONE
                  <input type='text' />
                </LabelText>

                <ButtonUpdate>UPDATE</ButtonUpdate>
                <Required>*Required</Required>
              </form>
            }


            {tab === 'orderHistory' &&
              <div>
              </div>
            }
          </MyAccountBody>
        </MyAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default MyAccount;
