
export type SlideType = 
  | 'hero' 
  | 'content' 
  | 'grid' 
  | 'table' 
  | 'list' 
  | 'exercise' 
  | 'resources'
  | 'conclusion';

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
  image: string;
  overlayColor?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  steps?: {
    num: string;
    text: string;
  }[];
  author?: string;
  footer?: string;
}
