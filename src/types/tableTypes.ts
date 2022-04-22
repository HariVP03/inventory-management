export type dashboardTest = {
    col1: string;
    col2: string;
};

export type classOverview = {
    id: string;
    name: string;
    desc: string;
    date: string;
    priority: "low" | "medium" | "high";
};

export type administration = {
    role: string;
    members: string[];
};
