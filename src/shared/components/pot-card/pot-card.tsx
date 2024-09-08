import React from "react";
import { MfButton } from "../button/mf-button";
import './pot-card.scss';

export interface PotCardProps {
    title: string;
    savedAmount: number;
    highlight: React.CSSProperties['color'];
    target: number;
}

export const PotCard = (props: PotCardProps): React.ReactElement => {
    return <>
     <span className="pot-card">
        <span className="pot-title-container">
            <span className="pot-highlight" style={{ background: props.highlight }}></span>
            <span className="pot-title">{props.title}</span>
            <span>menu</span>
        </span>
        <span className="pot-savings-container">
            <span className="savings-saved-container">
                <span className="saved-text">Total Saved</span>
                <span className="saved-number">{props.savedAmount}</span>
            </span>
            <span className="savings-percentile">
                <span className="saved-percentile" style={{width: '7.95%', background: '#277C78'}}></span>
            </span>
            <span className="savings-total-container">
                <span className="current-saved">7.95%</span>
                <span className="current-target">{props.target}</span>
            </span>
        </span>
        <span className="pot-card-actions">
            <MfButton type={'default'}>Add Money</MfButton>
            <MfButton>Withdraw</MfButton>
        </span>
    </span>
    </>;
} 