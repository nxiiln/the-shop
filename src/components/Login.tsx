import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {Link} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';




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
`;

const UserLogin = styled.div`
  width: 675px;
  height: 345px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    max-width: 675px;
    height: 560px;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
`;

const Title = styled.h2`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Groups = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {
    height: 100%;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }
`;

const RegisteredCustomers = styled.div`
  width: 260px;
  height: 225px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media ${smallScreen} {margin: 0}
`;

const TextUp = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Text = styled.p`
  margin: 0 0 15px 0;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const TextBold = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-main);
`;

const Label = styled.label`
  height: 45px;
  margin-bottom: 15px;
  display: grid;
  align-content: space-between;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);

  > input {
    width: 254px;
    height: 30px;
    border: 1px solid var(--color-border);

    &:focus {outline: 1px solid #000}
  }
`;

const ButtonPreset: string = `
  height: 30px;
  margin-top: 15px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
`;

const ButtonLogin = styled.button`
  ${ButtonPreset}
  width: 112px;
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;

const ButtonUnderline = styled.button`
  width: 125px;
  height: 10px;
  margin-left: 20px;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const NewCustomers = styled.div`
  width: 255px;
  height: 165px;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;

  @media ${smallScreen} {margin: 0}
`;

const ButtonCreateAccount = styled(Link)`
  ${ButtonPreset}
  width: 254px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {background: var(--color-button-solid-hover)}
`;




const Login = (): JSX.Element => (
  <WrapperOuter>
    <WrapperInner>
      <BreadCrumbs
        link={
          <>
            <Link to='/'>Home</Link>
            <span>/</span>
            <span>Login</span>
          </>
        }
        marginBottom='20px'
      />

      <UserLogin>
        <TitleWrapper>
          <Title>USER LOGIN</Title>
        </TitleWrapper>
        
        <Groups>
          <RegisteredCustomers>
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
          </RegisteredCustomers>

          <NewCustomers>
            <TextUp>NEW CUSTOMERS</TextUp>
            <Text>
              <TextBold>Enter your email address to create an account:</TextBold>
            </Text>

            <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}>
              <Label>
                E-MAIL*
                <input type='email' required />
              </Label>
              <ButtonCreateAccount to='/create-account'>CREATE AN ACCOUNT</ButtonCreateAccount>
            </form>
          </NewCustomers>
        </Groups>
      </UserLogin>
    </WrapperInner>
  </WrapperOuter>
);




export default Login;
