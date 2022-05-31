import Button from 'components/Button';
import RadioButton from 'components/fields/RadioButton';
import { getErrorToastOptions, getSuccessToastOptions } from 'config/toast';
import {
    DisputeVotingOption,
    DISPUTE_VOTING_OPTIONS_MARKET_OPEN,
    DISPUTE_VOTING_OPTIONS_MARKET_RESOLVED,
    DISPUTE_VOTING_OPTIONS_TRANSLATION_KEYS,
} from 'constants/markets';
import { MAX_GAS_LIMIT } from 'constants/network';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { FlexDivColumn } from 'styles/common';
import { DisputeInfo } from 'types/markets';
import networkConnector from 'utils/networkConnector';

type DisputeVotingProps = {
    voteOnContract: number;
    disputeInfo: DisputeInfo;
    positions: string[];
    positionOnContract: number;
    winningPosition: number;
};

const DisputeVoting: React.FC<DisputeVotingProps> = ({
    voteOnContract,
    disputeInfo,
    positions,
    positionOnContract,
    winningPosition,
}) => {
    const { t } = useTranslation();
    const [vote, setVote] = useState<number>(voteOnContract);
    const [selectedPosition, setSelectedPosition] = useState<number>(positionOnContract);
    const [currentVoteOnContract, setCurrentVoteOnContract] = useState<number>(voteOnContract);
    const [currentPositionOnContract, setCurrentPositionOnContract] = useState<number>(positionOnContract);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const outcomePositions = [...positions, t('common.cancel')].map((position: string, index: number) => ({
        position,
        disabled: index + 1 === winningPosition,
    }));

    const disputeVotingOptions = disputeInfo.isInPositioningPhase
        ? DISPUTE_VOTING_OPTIONS_MARKET_OPEN
        : DISPUTE_VOTING_OPTIONS_MARKET_RESOLVED;

    const showVoteButton = currentVoteOnContract === -1 && currentPositionOnContract === -1;
    const showChangeVoteButton = currentVoteOnContract !== vote || currentPositionOnContract !== selectedPosition;
    const isVoteSelected = vote > 0;
    const isPositionSelected =
        (vote === DisputeVotingOption.ACCEPT_RESULT && selectedPosition > -1) ||
        vote !== DisputeVotingOption.ACCEPT_RESULT;

    const isButtonDisabled = isSubmitting || !isVoteSelected || !isPositionSelected;

    const handleVote = async () => {
        const { thalesOracleCouncilContract, signer } = networkConnector;
        if (thalesOracleCouncilContract && signer) {
            const id = toast.loading(t('market.toast-messsage.transaction-pending'));
            setIsSubmitting(true);

            try {
                const thalesOracleCouncilContractWithSigner = thalesOracleCouncilContract.connect(signer);

                const tx = await thalesOracleCouncilContractWithSigner.voteForDispute(
                    disputeInfo.market,
                    disputeInfo.disputeNumber,
                    vote,
                    vote === DisputeVotingOption.ACCEPT_RESULT ? selectedPosition : 0,
                    {
                        gasLimit: MAX_GAS_LIMIT,
                    }
                );
                const txResult = await tx.wait();

                if (txResult && txResult.transactionHash) {
                    toast.update(id, getSuccessToastOptions(t('market.toast-messsage.vote-success')));
                    setIsSubmitting(false);
                    setCurrentVoteOnContract(vote);
                    setCurrentPositionOnContract(selectedPosition);
                }
            } catch (e) {
                console.log(e);
                toast.update(id, getErrorToastOptions(t('common.errors.unknown-error-try-again')));
                setIsSubmitting(false);
            }
        }
    };

    const getSubmitButton = () => {
        if (!isVoteSelected) {
            return (
                <VoteButton type="secondary" disabled={true}>
                    {t(`common.errors.select-vote`)}
                </VoteButton>
            );
        }
        if (!isPositionSelected) {
            return (
                <VoteButton type="secondary" disabled={true}>
                    {t(`common.errors.select-outcome`)}
                </VoteButton>
            );
        }

        if (showVoteButton) {
            return (
                <VoteButton type="secondary" disabled={isButtonDisabled} onClick={handleVote}>
                    {!isSubmitting
                        ? t('market.dispute.button.vote-label')
                        : t('market.dispute.button.vote-progress-label')}
                </VoteButton>
            );
        }
        return (
            <>
                {showChangeVoteButton && (
                    <VoteButton type="secondary" disabled={isButtonDisabled} onClick={handleVote}>
                        {!isSubmitting
                            ? t('market.dispute.button.change-vote-label')
                            : t('market.dispute.button.change-vote-progress-label')}
                    </VoteButton>
                )}
            </>
        );
    };

    return (
        <Container>
            <Title>{t('market.dispute.vote-label')}</Title>
            {disputeVotingOptions.map((votingOption) => {
                return (
                    <VoteOptionsContainer key={votingOption}>
                        <RadioButton
                            checked={votingOption === vote}
                            value={votingOption}
                            onChange={() => setVote(votingOption)}
                            label={t(DISPUTE_VOTING_OPTIONS_TRANSLATION_KEYS[votingOption])}
                        />
                        {votingOption === DisputeVotingOption.ACCEPT_RESULT &&
                            vote === DisputeVotingOption.ACCEPT_RESULT &&
                            outcomePositions.map((outcomePosition, index: number) => {
                                if (outcomePosition.disabled) return;
                                const positionIndex = (index + 1) % outcomePositions.length;

                                return (
                                    <PositionsContainer key={outcomePosition.position}>
                                        <RadioButton
                                            checked={positionIndex === selectedPosition}
                                            value={positionIndex}
                                            onChange={() => setSelectedPosition(positionIndex)}
                                            label={outcomePosition.position}
                                            disabled={isSubmitting}
                                        />
                                    </PositionsContainer>
                                );
                            })}
                    </VoteOptionsContainer>
                );
            })}
            {getSubmitButton()}
        </Container>
    );
};

const Container = styled(FlexDivColumn)`
    flex: initial;
    width: 280px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    margin-bottom: 20px;
`;

const VoteOptionsContainer = styled.div`
    label {
        padding-left: 22px;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 6px;
        white-space: break-spaces;
        min-height: auto;
    }
    span {
        :after {
            left: 2px;
            top: 2px;
            width: 6px;
            height: 6px;
        }
        height: 16px;
        width: 16px;
        border: 3px solid ${(props) => props.theme.borderColor.primary};
        margin-top: 1px;
    }
`;

const PositionsContainer = styled(VoteOptionsContainer)`
    margin-left: 22px;
`;

const VoteButton = styled(Button)`
    font-size: 15px;
    padding: 2px 10px;
    margin-top: 5px;
    min-height: 26px;
`;

export default DisputeVoting;
