import styled, {css} from 'styled-components/macro';


const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const textMixin = css<{width?: string, height?: string}>`
  width: ${props => props.width};
  height: ${props => props.height || '30px'};
  padding-left: 5px;
  font-family: var(--font-regular);
  font-size: 14px;
  font-weight: 300;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);

  &:focus {outline: 1px solid var(--color-input-outline)}

  &::placeholder {
    font-family: var(--font-regular);
    font-size: 13px;
    font-weight: 300;
    color: var(--color-text-regular);
  }
`;


export const Input = styled.input`${textMixin}`;

interface ILabelText {
  width?: string;
  height?: string;
  margin?: string;
  error?: boolean;
}

export const LabelText = styled(Label)<ILabelText>`
  width: ${props => props.width};
  height: ${props => props.height ? `calc(${props.height} + 15px)` : '45px'};
  margin: ${props => props.margin};
  position: relative;
  display: grid;
  align-content: space-between;

  > input, textarea {
    ${textMixin}

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

export const InputError = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 300;
  color: var(--color-input-error);
`;


interface ICheckbox {
  labelWidth?: string;
  labelMargin?: string;
  inputMargin?: string;
}

export const LabelCheckbox = styled(Label)<ICheckbox>`
  width: ${props => props.labelWidth};
  margin: ${props => props.labelMargin};
  display: flex;
  align-items: center;
  cursor: pointer;
  
  > input {
    margin: ${props => props.inputMargin};
    accent-color: var(--color-text-main);
    cursor: pointer;
  }
`;


interface IRadio {
  labelWidth?: string;
  labelMargin?: string;
  inputMargin?: string;
}

export const LabelRadio = styled(Label)<IRadio>`
  width: ${props => props.labelWidth};
  margin: ${props => props.labelMargin};
  display: flex;
  align-items: center;
  cursor: pointer;

  > input {
    margin: ${props => props.inputMargin};
    accent-color: var(--color-text-main);
    cursor: pointer;
  }
`;
