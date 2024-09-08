import { RouteObject } from "react-router-dom";
import App from "./App";
import { Overview } from "./pages/overview/overview";
import { Bills } from "./pages/bills/bills";
import { Budgets } from "./pages/budgets/budgets";
import { Pots } from "./pages/pots/pots";
import { Transactions } from "./pages/transactions/transactions";

const routes: RouteObject[] = [
    { path: '/', Component: App, children: [
        { path: 'overview', Component: Overview },
        { path: 'recurring-bills', Component: Bills },
        { path: 'budgets', Component: Budgets },
        { path: 'pots', Component: Pots },
        { path: 'transactions', Component: Transactions },
    ]}
]

export default routes;