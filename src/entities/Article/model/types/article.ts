export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
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
