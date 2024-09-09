// 問い合わせ情報

export interface Contact {
    id: string; // UUID
    isRequest: boolean;
    isContact: boolean;
    isSupport: boolean;
    isClaim: boolean;
    isEtc: boolean;
    contactDate: Date;
    contactDetails: string;
    constructionNumber: number;
    department: string;
    responsiblePerson: string;
    constructionDetails: string;
}
