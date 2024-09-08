import React, { useMemo, useState } from "react";
import './mf-side-bar.scss';
import { Logo } from "../../common/icons/Logo";
import { HomeIcon } from "../../common/icons/Home";
import { TransactionsIcon } from "../../common/icons/Transactions";
import { BudgetIcon } from "../../common/icons/Budget";
import { PotsIcon } from "../../common/icons/Pots";
import { BillsIcon } from "../../common/icons/Bills";
import { NavigateFunction, useNavigate } from "react-router-dom";

export interface SideBarMenuItem {
    label: SIDE_BAR_ACTIONS;
    icon: React.ReactNode;
    isActive: boolean;
    action: string;
}

export enum SIDE_BAR_ACTIONS {
    overview = "Overview",
    transactions = "Transactions",
    budgets = "Budgets",
    pots = "Pots",
    recurring_bills = "Recurring bills"
}

export const MfSideBar = (): React.ReactElement => {
    const navigate: NavigateFunction = useNavigate();
    const [activeItem, setActiveItem] = useState<SIDE_BAR_ACTIONS>();
    const sideBarMenuItems = useMemo<SideBarMenuItem[]>(() => {
        return [
            {
                label: SIDE_BAR_ACTIONS.overview,
                icon: <HomeIcon />,
                action: 'overview',
                isActive: activeItem === SIDE_BAR_ACTIONS.overview
            },
            {
                label: SIDE_BAR_ACTIONS.transactions,
                icon: <TransactionsIcon />,
                action: 'transactions',
                isActive: activeItem === SIDE_BAR_ACTIONS.transactions
            },
            {
                label: SIDE_BAR_ACTIONS.budgets,
                icon: <BudgetIcon />,
                action: 'budgets',
                isActive: activeItem === SIDE_BAR_ACTIONS.budgets
            },
            {
                label: SIDE_BAR_ACTIONS.pots,
                icon: <PotsIcon />,
                action: 'pots',
                isActive: activeItem === SIDE_BAR_ACTIONS.pots
            },
            {
                label: SIDE_BAR_ACTIONS.recurring_bills,
                icon: <BillsIcon />,
                action: 'recurring-bills',
                isActive: activeItem === SIDE_BAR_ACTIONS.recurring_bills
            }
        ];
    }, [activeItem]);
    return <div className="mf-side-bar-container">
        <span className="mf-logo-menu-container">
        <span className="mf-logo">
        <Logo />
        </span>
        <span className="menu-items-container">
            {sideBarMenuItems.map((sideBarMenuItem, index) => {
                return <span key={index} onClick={() => {
                    navigate(sideBarMenuItem.action);
                    setActiveItem(sideBarMenuItem.label)
                }} className={`menu-item ${sideBarMenuItem.isActive ? 'active': ''}`}>
                    {sideBarMenuItem.icon}
                    {sideBarMenuItem.label}
                </span>;
            })}
        </span>
        </span>
        <span className="min-max-sidebar"></span>
        

    </div>;
}