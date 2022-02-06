import React from 'react';
import styled from 'styled-components';


const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 795px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
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
  width: 72px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;

const UserLogin = styled.div`
  width: 675px;
  height: 345px;
  margin-left: 142px;
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

const LeftGroup = styled.div`
  width: 260px;
  height: 225px;
  position: absolute;
  top: 90px;
  left: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const TextUp = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  font-family: Nunito;
  font-size: 13px;
  font-weight: 300;
  color: #000;
`;

const Text = styled.p`
  margin: 0 0 15px 0;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const TextBold = styled.span`
  font-family: Arial;
  font-size: 11px;
  font-weight: 700;
  color: #000;
`;

const Label = styled.label`
  height: 45px;
  margin-bottom: 15px;
  display: grid;
  align-content: space-between;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  > input {
    width: 254px;
    height: 30px;
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
  }
`;

const ButtonLogin = styled.button`
  width: 112px;
  height: 30px;
  margin-top: 15px;
  font-family: Nunito;
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
`;

const ButtonUnderline = styled.button`
  width: 125px;
  height: 10px;
  margin-left: 20px;
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

const RightGroup = styled.div`
  width: 255px;
  height: 165px;
  position: absolute;
  top: 90px;
  left: 395px;
`;

const ButtonCreateAccount = styled(ButtonLogin)`
  width: 254px;
`;


const Login = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Login
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>

        <UserLogin>
          <TitleWrapper>
            <Title>USER LOGIN</Title>
          </TitleWrapper>

          <LeftGroup>
            <TextUp>REGISTERED CUSTOMERS</TextUp>
            <Text>
              <TextBold>Already registered? </TextBold>
              Please log in below:
            </Text>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}>
              <Label>
                E-MAIL*
                <input type='email' required />
              </Label>
              <Label>
                PASSWORD*
                <input type='password' required />
              </Label>
              <ButtonLogin>LOGIN</ButtonLogin>
              <ButtonUnderline type='button'>Forgot your password?</ButtonUnderline>
            </form>
          </LeftGroup>

          <RightGroup>
            <TextUp>NEW CUSTOMERS</TextUp>
            <Text>
              <TextBold>Enter your email address to create an account:</TextBold>
            </Text>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}>
              <Label>
                E-MAIL*
                <input type='email' required />
              </Label>
              <ButtonCreateAccount>CREATE AN ACCOUNT</ButtonCreateAccount>
            </form>
          </RightGroup>
        </UserLogin>
      </WrapperInner>
    </WrapperOuter>
  )
}


export default Login;
