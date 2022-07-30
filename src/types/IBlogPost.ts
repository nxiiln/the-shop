import {IBlogPostReview} from "./IBlogPostReview";

export interface IBlogPost {
    id: number;
    header: string;
    date: string;
    description: string;
    text: string[];
    reviews: IBlogPostReview[];
};
