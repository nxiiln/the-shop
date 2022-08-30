import styled from 'styled-components';


const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

export const LabelText = styled(Label)<{labelMargin?: string, inputWidth?: string, error?: boolean}>`
  height: 45px;
  margin: ${props => props.labelMargin};
  position: relative;
  display: grid;
  align-content: space-between;

  > input {
    width: ${props => props.inputWidth};
    height: 30px;
    border: 1px solid ${props => !props.error ?
      'var(--color-border)' : 'var(--color-input-error)'
    };

    &:focus {
      outline: 1px solid ${props => !props.error ?
        'var(--color-input-outline)' : 'var(--color-input-error)'
      };
    }
  }
`;

export const LabelCheckbox = styled(Label)<{labelMargin?: string, inputMargin?: string}>`
  height: 18px;
  margin: ${props => props.labelMargin};
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  
  > input {
    margin: ${props => props.inputMargin};
    accent-color: var(--color-text-main);
  }
`;

export const LabelRadio = styled(Label)<{labelMargin?: string, inputMargin?: string}>`
  height: 14px;
  margin: ${props => props.labelMargin};
  display: flex;
  align-items: end;
  cursor: pointer;

  > input {
    margin: ${props => props.inputMargin};
    accent-color: var(--color-text-main);
  }
`;
