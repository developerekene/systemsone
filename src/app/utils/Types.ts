export type UserType = {
    firstName: string;
    lastName: string;
    userType: string;
    uniqueId: string;
    agreeToPolicy: boolean;
    isLoggedIn: boolean;
};

type EntityType = "Individual" | "Organization" | "Government" | "AI_Agent";

interface Author {
    id: string;
    name: string;
    avatar?: string;
    verifiedStatus: boolean;
    type: EntityType;
    reputationScore: number; // 0-100
}

interface VoteOption {
    id: string;
    text: string;
    count: number;
    hexColor?: string; // For custom branding on org polls
}

interface Comment {
    id: string;
    userId: string;
    userName: string;
    text: string;
    timestamp: Date;
    likes: number;
    sentiment: "Positive" | "Neutral" | "Negative"; // System-analyzed
    isVerifiedVoter: boolean; // Did they actually vote?
}

interface PollAudit {
    hash: string; // SHA-256 integrity anchor
    blockchainRef?: string;
    lastAudited: Date;
}

export interface Poll {
    id: string;
    author: Author;
    question: string;
    description: string;
    category: "Politics" | "Technology" | "Economics" | "Environment" | "Society" | "Infrastructure";
    options: VoteOption[];
    votes: number;
    createdAt: Date;
    endsAt: Date;
    status: "Draft" | "Live" | "Closed" | "Audited";
    visibility: "Public" | "Private" | "Restricted";
    conversations: Comment[];
    auditTrail: PollAudit;
    tags: string[];
    timeLeft: string
}