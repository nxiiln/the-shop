import styled from 'styled-components/macro';
import {smallScreen, useMediaQuery} from '../mediaQueries';
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

  @media ${smallScreen} {width: 100%}
`;

const CreateAccountWrapper = styled.div`
  width: 675px;
  height: 855px;
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    max-width: 675px;
    height: 1230px;
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

const Required = styled.span`
  position: absolute;
  top: 20px;
  left: calc(100% - 70px);
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);

  @media ${smallScreen} {top: 65px}
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;

  > div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  
    @media ${smallScreen} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const PersonalInformation = styled.div`
  width: 260px;
  margin-left: 20px;

  @media ${smallScreen} {margin: 0}
`;

const AddressInformation = styled.div`
  width: 260px;
  margin-right: 20px;

  @media ${smallScreen} {margin: 30px 0 0}
`;

const Description = styled.span`
  margin-bottom: 25px;
  display: inline-block; 
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const LabelText = styled(Label)`
  height: 45px;
  margin-bottom: 17px;
  display: grid;
  align-content: space-between;

  > input {
    width: 254px;
    height: 30px;
    border: 1px solid var(--color-border);

    &:focus {outline: 1px solid #000}
  }
`;

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin-top: 30px;
  align-items: center;

  > input {
    margin: 0 10px 0 0;
    accent-color: var(--color-text-main);
  }
`;

const ButtonCreateAccount = styled.button`
  width: 254px;
  height: 30px;
  margin-top: 20px;
  align-self: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;
`;

const BackToLogin = styled(Link)`
  width: 80px;
  height: 10px;
  margin-top: 20px;
  align-self: center;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;




const CreateAccount = (): JSX.Element => {
  const screen = useMediaQuery();
  
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <span>Create Account</span>
            </>
          }
          marginBottom='20px'
        />


        <CreateAccountWrapper>
          <Required>*Required</Required>
          <TitleWrapper>
            <Title>CREATE AN ACCOUNT</Title>
          </TitleWrapper>

          <Form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}>
            <div>
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

                {!screen.small &&
                  <LabelCheckbox>
                    <input type='checkbox' name='subscribe' defaultChecked />
                    I WANT TO SUBSCRIBE TO THE NEWSLETTER
                  </LabelCheckbox>
                }
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
              

              {screen.small &&
                <LabelCheckbox>
                  <input type='checkbox' name='subscribe' defaultChecked />
                  I WANT TO SUBSCRIBE TO THE NEWSLETTER
                </LabelCheckbox>
              }
            </div>
            <ButtonCreateAccount type='submit'>CREATE AN ACCOUNT</ButtonCreateAccount>
          </Form>
          
          <BackToLogin to='/login'>Back to Login</BackToLogin>
        </CreateAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default CreateAccount;
