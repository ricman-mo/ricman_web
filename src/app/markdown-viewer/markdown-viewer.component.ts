import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnInit {

  constructor() {
    this.doUpload = this.doUpload.bind(this);
   }

  ngOnInit() {
    
  }
  doUpload(files: Array<File>): Promise<Array<Object>> {
    // do upload file by yourself
    return Promise.resolve([{ name: 'xxx', url: 'xxx.png', isImg: true }]);
  }

  options = {
    showPreviewPanel: true,    // Show preview panel, Default is true
  showBorder: true  ,        // Show editor component's border. Default is true
  hideIcons: [],//['Bold', 'Italic', 'Heading', 'Refrence', 'Link', 'Image', 'Ul', 'Ol', 'Code', 'TogglePreview', 'FullScreen'],
  usingFontAwesome5: true  , // Using font awesome with version 5, Default is false
  scrollPastEnd: 0,        // The option for ace editor. Default is 0
  enablePreviewContentClick: true,  // Allow user fire the click event on the preview panel, like href etc. Default is false
  resizable: true,           // Allow resize the editor
  markedjsOpt: true  // 
  }
  markdowndata = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;

}
