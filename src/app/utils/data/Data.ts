import { Poll } from "../Types";

const DETAILED_POLLS: Poll[] = [
    {
        id: "SYS-772-ALPHA",
        author: {
            id: "ORG-001",
            name: "Global Labor Union (GLU)",
            type: "Organization",
            verifiedStatus: true,
            reputationScore: 98.5
        },
        question: "Should Remote Work be a legal right for all tech employees?",
        description: "Proposed legislation for the 2027 Global Labor Accord regarding digital workforce rights and cross-border taxation.",
        category: "Technology",
        timeLeft: "1 days",
        options: [
            { id: "opt-1", text: "Yes, fully protected", count: 8402 },
            { id: "opt-2", text: "No, employer discretion", count: 3200 },
            { id: "opt-3", text: "Hybrid mandate only", count: 800 }
        ],
        votes: 12402,
        createdAt: new Date("2026-04-15T09:00:00Z"),
        endsAt: new Date("2026-05-15T09:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["RemoteWork", "LaborRights", "FutureOfWork"],
        auditTrail: {
            hash: "8f92ac367e8a...3f12",
            lastAudited: new Date("2026-04-27T10:00:00Z")
        },
        conversations: [
            {
                id: "c-1",
                userId: "u-99",
                userName: "Sarah Chen",
                text: "This is crucial for talent retention in developing nations.",
                timestamp: new Date("2026-04-26T14:20:00Z"),
                likes: 142,
                sentiment: "Positive",
                isVerifiedVoter: true
            },
            {
                id: "c-2",
                userId: "u-102",
                userName: "Marcus Vane",
                text: "Tax implications for multi-state workers aren't addressed here.",
                timestamp: new Date("2026-04-27T08:15:00Z"),
                likes: 22,
                sentiment: "Neutral",
                isVerifiedVoter: true
            }
        ]
    },
    {
        id: "SYS-884-OMEGA",
        author: {
            id: "IND-442",
            name: "Dr. Aris Thorne",
            type: "Individual",
            verifiedStatus: true,
            reputationScore: 92.0
        },
        question: "Universal Basic Income: A necessity or a luxury for 2026?",
        description: "Analyzing the socio-economic impact of automation on the service sector over the last 12 months.",
        category: "Economics",
        timeLeft: "2 days",
        options: [
            { id: "opt-1", text: "Absolute Necessity", count: 15400 },
            { id: "opt-2", text: "Temporary Measure", count: 4200 },
            { id: "opt-3", text: "Economic Luxury", count: 2505 }
        ],
        votes: 22105,
        createdAt: new Date("2026-04-20T12:00:00Z"),
        endsAt: new Date("2026-04-28T12:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["UBI", "Automation", "Economy2026"],
        auditTrail: {
            hash: "7e8a92ac368f...92b1",
            lastAudited: new Date("2026-04-27T13:45:00Z")
        },
        conversations: [
            {
                id: "c-3",
                userId: "u-201",
                userName: "FinanceBot_Alpha",
                text: "Inflationary pressures must be modeled before adoption.",
                timestamp: new Date("2026-04-26T19:00:00Z"),
                likes: 8,
                sentiment: "Negative",
                isVerifiedVoter: false
            }
        ]
    },
    {
        id: "SYS-102-SIGMA",
        author: {
            id: "GOV-004",
            name: "Department of Digital Sovereignty",
            type: "Government",
            verifiedStatus: true,
            reputationScore: 100
        },
        question: "Implement Biometric Verification for all Social Media Access?",
        description: "A national security initiative aimed at eliminating bot-driven misinformation and foreign election interference.",
        category: "Technology",
        timeLeft: "5 days",
        options: [
            { id: "opt-1", text: "Mandatory for all", count: 45200 },
            { id: "opt-2", text: "Optional with rewards", count: 31000 },
            { id: "opt-3", text: "Reject proposal", count: 52400 }
        ],
        votes: 128600,
        createdAt: new Date("2026-04-25T08:00:00Z"),
        endsAt: new Date("2026-05-02T08:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["CyberSecurity", "Privacy", "DigitalID"],
        auditTrail: {
            hash: "1a2b3c4d5e6f...7g8h",
            lastAudited: new Date("2026-04-27T12:00:00Z")
        },
        conversations: [
            {
                id: "c-4",
                userId: "u-305",
                userName: "PrivacyAdvocate_99",
                text: "This is a massive overreach. Identity should not be a prerequisite for speech.",
                timestamp: new Date("2026-04-26T10:00:00Z"),
                likes: 850,
                sentiment: "Negative",
                isVerifiedVoter: true
            }
        ]
    },
    {
        id: "SYS-405-ECO",
        author: {
            id: "IND-882",
            name: "Elena Rodriguez",
            type: "Individual",
            verifiedStatus: true,
            reputationScore: 88.4
        },
        question: "Decommission all Coal Plants by 2028 instead of 2035?",
        description: "Accelerating the Green Transition in response to the record-breaking Arctic melt of 2025.",
        category: "Environment",
        timeLeft: "12 hours",
        options: [
            { id: "opt-1", text: "Accelerate to 2028", count: 68400 },
            { id: "opt-2", text: "Maintain 2035", count: 12300 },
            { id: "opt-3", text: "Economic review first", count: 4500 }
        ],
        votes: 85200,
        createdAt: new Date("2026-04-20T14:00:00Z"),
        endsAt: new Date("2026-04-28T02:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["ClimateAction", "Energy", "GreenDeal"],
        auditTrail: {
            hash: "9z8y7x6w5v4u...3t2s",
            lastAudited: new Date("2026-04-27T14:10:00Z")
        },
        conversations: [
            {
                id: "c-5",
                userId: "u-552",
                userName: "GridManager_Alpha",
                text: "Grid stability will be at risk without massive battery storage scaling.",
                timestamp: new Date("2026-04-27T09:00:00Z"),
                likes: 310,
                sentiment: "Neutral",
                isVerifiedVoter: true
            }
        ]
    },
    {
        id: "SYS-221-HEALTH",
        author: {
            id: "ORG-044",
            name: "HealthWatch International",
            type: "Organization",
            verifiedStatus: true,
            reputationScore: 95.7
        },
        question: "Should AI Diagnosis be mandatory for primary health screenings?",
        description: "Utilizing Large Medical Models (LMMs) to reduce wait times in rural healthcare centers.",
        category: "Technology",
        timeLeft: "3 days",
        options: [
            { id: "opt-1", text: "Yes, mandatory", count: 12400 },
            { id: "opt-2", text: "Assisted by Human", count: 45000 },
            { id: "opt-3", text: "Patient's Choice", count: 8900 }
        ],
        votes: 66300,
        createdAt: new Date("2026-04-24T10:00:00Z"),
        endsAt: new Date("2026-04-30T10:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["MedTech", "AI", "Healthcare"],
        auditTrail: {
            hash: "m1n2o3p4q5r6...s7t8",
            lastAudited: new Date("2026-04-27T11:45:00Z")
        },
        conversations: [
            {
                id: "c-6",
                userId: "u-111",
                userName: "Dr. Julian Sato",
                text: "AI lacks the contextual nuance for rare symptom identification.",
                timestamp: new Date("2026-04-26T18:30:00Z"),
                likes: 120,
                sentiment: "Negative",
                isVerifiedVoter: true
            }
        ]
    },
    {
        id: "SYS-909-URBAN",
        author: {
            id: "IND-007",
            name: "Urbanist Collective",
            type: "Organization",
            verifiedStatus: true,
            reputationScore: 91.2
        },
        question: "Convert 50% of Downtown Parking to Pedestrian Greenways?",
        description: "Reclaiming city centers for people and wildlife to mitigate the urban heat island effect.",
        category: "Infrastructure",
        timeLeft: "18 hours",
        options: [
            { id: "opt-1", text: "Full Conversion", count: 32000 },
            { id: "opt-2", text: "Partial (25%)", count: 15400 },
            { id: "opt-3", text: "Maintain status quo", count: 8900 }
        ],
        votes: 56300,
        createdAt: new Date("2026-04-22T08:00:00Z"),
        endsAt: new Date("2026-04-28T02:00:00Z"),
        status: "Live",
        visibility: "Public",
        tags: ["UrbanPlanning", "Sustainability", "SmartCities"],
        auditTrail: {
            hash: "f5g6h7j8k9l0...m1n2",
            lastAudited: new Date("2026-04-27T13:00:00Z")
        },
        conversations: [
            {
                id: "c-7",
                userId: "u-900",
                userName: "LogisticPro_Express",
                text: "How will last-mile delivery services operate under these constraints?",
                timestamp: new Date("2026-04-27T07:22:00Z"),
                likes: 45,
                sentiment: "Neutral",
                isVerifiedVoter: true
            }
        ]
    }
];

export { DETAILED_POLLS }