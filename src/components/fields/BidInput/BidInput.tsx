import Button from 'components/Button';
import { PAYMENT_CURRENCY } from 'constants/currency';
import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FlexDivColumn } from 'styles/common';
import { formatCurrencyWithKey } from 'utils/formatters/number';
import NumericInput from '../NumericInput';

type BidInputProps = {
    value: string | number;
    label?: string;
    disabled?: boolean;
    selected?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
    showValidation?: boolean;
    validationMessage?: string;
    currencyLabel?: string;
    showWithdraw?: boolean;
    onWithdrawClick?: () => void;
    initialValue?: string | number;
    isWithdrawing?: boolean;
    withdrawDisabled?: boolean;
    inputDisabled?: boolean;
};

const BidInput: React.FC<BidInputProps> = ({
    value,
    label,
    disabled,
    onChange,
    showValidation,
    validationMessage,
    currencyLabel,
    selected,
    showWithdraw,
    onWithdrawClick,
    initialValue,
    isWithdrawing,
    withdrawDisabled,
    inputDisabled,
    ...rest
}) => {
    const { t } = useTranslation();

    return (
        <Container selected={selected} inputDisabled={inputDisabled}>
            <NumericInput
                {...rest}
                value={value}
                onChange={onChange}
                label={label}
                disabled={disabled}
                showValidation={showValidation}
                validationMessage={validationMessage}
                currencyLabel={currencyLabel}
                selectOnFocus
            />
            {showWithdraw && (
                <ButtonContainer selected={selected} disabled={!!withdrawDisabled}>
                    <WithdrawButton onClick={onWithdrawClick} disabled={disabled || withdrawDisabled}>
                        {t(`market.button.withdraw-amount-${isWithdrawing ? 'progress-' : ''}label`, {
                            amount: formatCurrencyWithKey(PAYMENT_CURRENCY, initialValue ? initialValue : 0),
                        })}
                    </WithdrawButton>
                </ButtonContainer>
            )}
        </Container>
    );
};

const Container = styled(FlexDivColumn)<{ selected?: boolean; inputDisabled?: boolean }>`
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    input {
        height: 40px;
        padding: 16px 8px 2px 8px;
        border-radius: 8px;
        font-size: 16px;
        line-height: 16px;
        border-color: ${(props) =>
            props.selected ? props.theme.borderColor.tertiary : props.theme.borderColor.primary};
        &:disabled {
            opacity: ${(props) => (props.inputDisabled ? 0.4 : 1)};
        }
    }
    .field-container {
        flex-direction: row;
        align-items: center;
        width: fit-content;
        margin-bottom: 0px;
    }
    .field-label {
        position: absolute;
        font-size: 12px;
        line-height: 12px;
        top: 4px;
        left: 10px;
        white-space: nowrap;
        color: ${(props) => props.theme.textColor.tertiary};
    }
    .currency-label {
        font-size: 16px;
        line-height: 16px;
        padding: 12px 10px 0 0;
        &.disabled {
            opacity: ${(props) => (props.inputDisabled ? 0.4 : 1)};
        }
    }
`;

const ButtonContainer = styled.div<{ selected?: boolean; disabled: boolean }>`
    margin-top: 6px;
    button {
        background: transparent;
        min-height: 26px;
        font-size: 15px;
        line-height: 15px;
        padding: 1px 10px 0px 10px;
        border: 2px solid
            ${(props) => (props.selected ? props.theme.borderColor.tertiary : props.theme.borderColor.primary)};
        color: ${(props) => (props.selected ? props.theme.textColor.tertiary : props.theme.textColor.primary)};
        &:hover {
            opacity: ${(props) => (props.disabled ? 0.6 : 1)};
        }
        &:disabled {
            opacity: ${(props) => (props.disabled ? 0.6 : 1)};
        }
    }
`;

const WithdrawButton = styled(Button)``;

export default BidInput;
