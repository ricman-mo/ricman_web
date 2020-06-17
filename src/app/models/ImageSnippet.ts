export class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  backendName: string ="";
  backendUrl: string ="";
  name: string = "";

  constructor(public src: string, public file: File) {}
}