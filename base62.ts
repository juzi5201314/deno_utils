const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class Base62 {
    static encode(i: number) {
        if (i === 0) {
            return CHARSET[0];
        }

        let res = "";
        while (i > 0) {
            res = CHARSET[i % 62] + res;
            i = Math.floor(i / 62);
        }
        return res;
    }

    static decode(str: string) {
        let res = 0,
            length = str.length,
            i, char;
        for (i = 0; i < length; i++) {
            char = str.charCodeAt(i);
            if (char < 58) {
                char = char - 48;
            } else if (char < 91) {
                char = char - 29;
            } else {
                char = char - 87;
            }
            res += char * Math.pow(62, length - i - 1);
        }
        return res;
    }
}

export const base62 = Base62;