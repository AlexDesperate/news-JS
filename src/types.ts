
export interface ISource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}


export interface IArticle {
    source: Pick<ISource, 'id' | 'name'>; 
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


export interface ISourcesResponse {
    status: 'ok' | 'error';
    sources: ISource[];
}


export interface INewsResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: IArticle[];
}


export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}


export interface IRequestOptions {
    [key: string]: string;
}