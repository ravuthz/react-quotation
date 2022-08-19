import { atom } from 'jotai';

const budgetPrices = [
  {
    needs: "System Analysis and Requirement",
    party: "Client & Freelance",
    cost: 1500,
  },
  {
    needs: "UX / UI for Web application (Backend)",
    party: "Freelance",
    cost: 1000,
  },
  {
    needs: "REST API (Spring boot, MySQL/PostgreSQL, ...)",
    party: "Freelance",
    cost: 8000
  },
  {
    needs: "Backend (Web Application with React)",
    party: "Freelance",
    cost: 7000,
  },
  {
    needs: "Frontend (Mobile Application with React Native)",
    party: "Freelance",
    cost: 11000,
  },
  {
    needs: "Guild Knowledge Transfer(KT)",
    party: "Freelance",
  },
  {
    needs: "Installation & Deployment",
    party: "Freelance",
  },
  {
    needs: "Hand Over the Source Code",
    party: "Freelance",
  },
];

const features = [
  "User Dashboard",
  "User management ( CRUD Operation )",
  "Role & Permission management ( CRUD Operation )",
  "Authorization & Authorization  ( Basic User, Admin User )",
  "Bank Account ( Withdrawal, Deposit, History )",
  "Corporate management ( CRUD Operation )",
  "Companies management ( CRUD Operation )",
  "Shares management ( CRUD Operation )",
  "Shares holders management ( CRUD Operation )",
  "Shares transactions ( Buy, Sale, History ) ",
  "Shares Divided management ( CRUD Operation )",
  "Shares Reports & Dashboard",
  "Funds management ( CRUD Operation )",
  "Funds transactions ( Bidding, Approve/Reject, History )",
  "Funds Reports, Dashboard & Announcement",
  "Interest management",
];

const info = {
    projectTitle: "Shares & Funds Management",
    projectType: "System",
    phoneEmail: "096 457 7770",
    totalEstimatedBudget: 0,
    dateOfProposal: "25 June 2022",
    version: "1.0",
    startDate: "June 2022",
    endDate: "February 2023",
    duration: "9 months",
    vatValue: 0.14,
    vatLabel: 'VAT (14%)',
    submittedBy: "Yo Vannaravuth",
    preparedBy: "Yo Vannaravuth",
    preparedFor: "FinzTrust"
};

const members = [
    {
        fullName: 'Yo Vannaravuth',
        email: 'ravuthz@gmail.com',
        phone: '096 457 7770',
        position: 'Senior Full Stack Developer',
        avatar: 'https://avatars.githubusercontent.com/u/11207890?s=400&v=4',
        github: 'https://github.com/ravuthz',
        website: 'https://ravuthz.github.io'
    },
    {
        fullName: 'Sai Vichet',
        email: 'sai.vichet70@gmail.com',
        phone: '070 703 370',
        position: 'Senior Full Stack Developer',
        avatar: 'https://avatars.githubusercontent.com/u/13774446?s=400&v=4',
        github: 'https://github.com/AaronMaru',
        website: 'https://github.com/AaronMaru'
    },
];

const infoAtom = atom(info);
const featuresAtom = atom(features);
const budgetPricesAtom = atom(budgetPrices);

const totalEstimatedBudgetAtom = atom((get) => get(budgetPricesAtom)
    .reduce((accumulator, item) => parseFloat(accumulator) + parseFloat(item.cost|0), 0));

const grandTotalEstimatedBudgetAtom = atom((get) => (get(totalEstimatedBudgetAtom) * info.vatValue) + get(totalEstimatedBudgetAtom));

export {
    info,
    members,
    infoAtom,
    featuresAtom,
    budgetPricesAtom,
    totalEstimatedBudgetAtom,
    grandTotalEstimatedBudgetAtom
}