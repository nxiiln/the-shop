import styled, {css} from 'styled-components/macro';


const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const mixinText = css<{width?: string, height?: string}>`
  width: ${props => props.width};
  height: ${props => props.height || '30px'};
  padding-left: 5px;
  font-family: var(--font-regular);
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);

  &:focus {outline: 1px solid var(--color-input-outline)}

  &::placeholder {
    font-family: var(--font-regular);
    font-size: 13px;
    font-weight: 400;
    color: var(--color-text-regular);
  }
`;


export const Input = styled.input`${mixinText}`;

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
    ${mixinText}

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


const mixinCheckboxRadio = css<{width?: string, margin?: string}>`
  width: ${props => props.width};
  margin: ${props => props.margin};
  display: flex;
  align-items: center;
  cursor: pointer;
  
  > input {
    margin-right: 10px;
    accent-color: var(--color-text-main);
    cursor: pointer;
  }
`;

export const LabelCheckbox = styled(Label)`${mixinCheckboxRadio}`;
export const LabelRadio = styled(Label)`${mixinCheckboxRadio}`;
