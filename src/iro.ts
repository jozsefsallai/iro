interface Block {
  open: string;
  close: string;
  regex: RegExp;
}

function init(open: number, close: number): Block {
  return {
    open: `\x1b[${open}m`,
    close: `\x1b[${close}m`,
    regex: new RegExp(`\\x1b\\[${close}m`, 'g')
  };
}

// modifiers
export const reset: Block = init(0, 0);
export const bold: Block = init(1, 22);
export const dim: Block = init(2, 22);
export const italic: Block = init(3, 23);
export const underline: Block = init(4, 24);
export const inverse: Block = init(7, 27);
export const hidden: Block = init(8, 28);
export const strikethrough: Block = init(9, 29);

// colors
export const black: Block = init(30, 39);
export const red: Block = init(31, 39);
export const green: Block = init(32, 39);
export const yellow: Block = init(33, 39);
export const blue: Block = init(34, 39);
export const magenta: Block = init(35, 39);
export const cyan: Block = init(36, 39);
export const white: Block = init(37, 39);
export const gray: Block = init(90, 39);
export const grey: Block = init(90, 39);

// background colors
export const bgBlack: Block = init(40, 49);
export const bgRed: Block = init(41, 49);
export const bgGreen: Block = init(42, 49);
export const bgYellow: Block = init(43, 49);
export const bgBlue: Block = init(44, 49);
export const bgMagenta: Block = init(45, 49);
export const bgCyan: Block = init(46, 49);
export const bgWhite: Block = init(47, 49);

function iro(str: string, ...blocks: Block[]): string {
  let open: string = "";
  let close: string = "";
  let cache: Block;

  for (let i = 0; i < blocks.length; i++) {
    cache = blocks[i];

    open += cache.open;
    close += cache.close;

    if (str.includes(cache.close)) {
      str = str.replace(cache.regex, cache.close + cache.open);
    }
  }

  return open + str + close;
}

export default iro;
