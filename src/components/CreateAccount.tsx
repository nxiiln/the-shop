import React from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';


const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 995px;
`;

const CreateAccountWrapper = styled.div`
  width: 675px;
  height: 855px;
  margin-left: 145px;
  position: relative;
  border: 1px solid #e4e2e1;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e2e1;
`;

const Title = styled.h2`
  font-family: 'Playfair Display SC';
  font-size: 24px;
  font-weight: 400;
  color: #000;
`;

const Required = styled.span`
  position: absolute;
  top: 18px;
  left: 600px;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #000;
`;

const PersonalInformation = styled.div`
  width: 260px;
  height: 310px;
  position: absolute;
  top: 80px;
  left: 25px;
`;

const AddressInformation = styled.div`
  width: 275px;
  height: 625px;
  position: absolute;
  top: 80px;
  left: 392px;
`;

const Description = styled.span`
  margin-bottom: 25px;
  display: inline-block; 
  font-family: Nunito;
  font-size: 13px;
  font-weight: 300;
  color: #000;
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
  margin-top: 30px;
  align-items: center;
  > input {
    margin: 0 10px 0 0;
    accent-color: #000;
  }
`;

const ButtonCreateAccount = styled.button`
  width: 254px;
  height: 30px;
  position: absolute;
  top: 770px;
  left: 212px;
  font-family: Nunito;
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
`;

const BackToLogin = styled.button`
  width: 80px;
  height: 10px;
  position: absolute;
  top: 820px;
  left: 300px;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;
`;


const CreateAccount = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <span>Create An Account</span>
            </>
          }
          return='#'
          marginBottom='20px'
          gridArea=''
        />

        <CreateAccountWrapper>
          <TitleWrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Required>*Required</Required>
          </TitleWrapper>

          <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}>
            <PersonalInformation>
              <Description>PERSONAL INFORMATION</Description>
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
                PASSWORD*
                <input type='text' required />
              </LabelText>
  
              <LabelCheckbox>
                <input type='checkbox' name='subscribe' defaultChecked />
                I WANT TO SUBSCRIBE TO THE NEWSLETTER
              </LabelCheckbox>
            </PersonalInformation>

            <AddressInformation>
              <Description>ADDRESS INFORMATION</Description>
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
            </AddressInformation>

            <ButtonCreateAccount>CREATE AN ACCOUNT</ButtonCreateAccount>
          </form>

          <BackToLogin type='button'>Back to Login</BackToLogin>
        </CreateAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}


export default CreateAccount;
