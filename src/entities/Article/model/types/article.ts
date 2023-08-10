export enum ArticleBlockType {
    
}

export interface ArticleBlockBase {
    id: string;
    type: string;
}

export interface ArticleCodeBlock {

}

export interface ArticleImageBlock {

}

export interface ArticleTextBlock {

}

export interface ArticleBlock {

}

export enum ArticleType {
    IT = 'IT',
    ART = 'ART',
    MUSIC = 'MUSIC',
    GAME = 'GAME',
    OTHER = 'OTHER',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
