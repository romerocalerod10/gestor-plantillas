import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeCalculatorService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  calculateFontSize(text: string, initialFontSize: number, maxWidth: number, isBold: boolean = false): number {
    const testElement = this.renderer.createElement('span');
    this.renderer.setStyle(testElement, 'position', 'absolute');
    this.renderer.setStyle(testElement, 'visibility', 'hidden');
    this.renderer.setStyle(testElement, 'white-space', 'nowrap');
    this.renderer.setStyle(testElement, 'font-family', 'OCR-B');
    this.renderer.setStyle(testElement, 'font-weight', isBold ? 'bold' : 'normal');
    this.renderer.setProperty(testElement, 'textContent', text);
    document.body.appendChild(testElement);

    this.renderer.setStyle(testElement, 'font-size', `${initialFontSize}pt`);
    let extentsWidth = testElement.offsetWidth;

    if (extentsWidth <= maxWidth) {
      document.body.removeChild(testElement);
      return initialFontSize;
    } else {
      let newFontSize = initialFontSize * (maxWidth / extentsWidth);
      this.renderer.setStyle(testElement, 'font-size', `${newFontSize}pt`);
      extentsWidth = testElement.offsetWidth;

      document.body.removeChild(testElement);
      return newFontSize;
    }
  }
}
