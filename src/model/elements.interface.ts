interface bodyContent {
  value: string;
}

interface ChildElemet {
  type: string;
  content: bodyContent;
}

export interface ElementInterface {
  validate(reqBody: any, arg1: { abortEarly: boolean }): any;
  elements: ChildElemet[];
}
