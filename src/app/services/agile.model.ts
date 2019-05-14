
export interface contactDetails {
    name: string;
    email: string;
    company: string;
    tag: string;
}

export interface contactDetailsLitmus {
    name: string;
    email: string;
    company: string;
}

export interface ContactDetailsForWebinar {
    name: string;
    email: string;
    company: string;
    slackInvitationCheck: string;
    newsletterSubscriptionCheck: string;
    tag: string;
}

export interface ContactDetailsForJoinOurCommunity {
    name: string;
    email: string;
    company: string;
    subscribeNewsletterCheck: boolean;
    demoCheck: boolean;
    usecasesAndPricingForCommercialSupportCheck: boolean;
    tag: string;
}
export interface NewsletterSubscriber {
    email: string;
    tag: string;
}
