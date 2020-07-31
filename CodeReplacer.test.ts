import * as CR from "./CodeReplacer"

const _code: string = "%CODE%";
const _altCode: string = "%ALTCODE%";
const _template_1: string = `111${_code}---${_altCode}000`;
const _template_2: string = `222${_code}___${_altCode}000`;
const _template_3: string = `333${_code}===${_altCode}000`;
const _template_4: string = `JOEJOEJOEJOEJOE${_code}OOOOOOOO${_altCode}BOBOBOBOBOBOBO`;

describe('template is chosen  correctly', () => {
    test('template 1', () => {
        const result = CR.Substitute(_template_1, "");
        expect(CR.ChosenTemplate).toBe(_template_1);
    });
    test('template 2', () => {
        const result = CR.Substitute(_template_2, "");
        expect(CR.ChosenTemplate).toBe(_template_2);
    });
    test('template 3', () => {
        const result = CR.Substitute(_template_3, "");
        expect(CR.ChosenTemplate).toBe(_template_3);
    });
    test('template 4', () => {
        const result = CR.Substitute(_template_4, "");
        expect(CR.ChosenTemplate).toBe(_template_4);
    });
});

describe('substitute should replace code and altcode', () => {
    test('with empty code', () => {
        const result = CR.Substitute(_template_1, "");
        expect(result).toBe("111----000");
    });
    test('with short code length < 4', () => {
        const result = CR.Substitute(_template_1, "XXX");
        expect(result).toBe("111XXX---XXX-000");
    });
    test('with short code length = 4', () => {
        const result = CR.Substitute(_template_1, "XXXX");
        expect(result).toBe("111XXXX---XXXX-000");
    });
    test('with short code length > 4', () => {
        const result = CR.Substitute(_template_1, "XXXXX");
        expect(result).toBe("111XXXXX---XXXX-X000");
    });
    test('with short code length > 4', () => {
        const replacementValue: string = "Setiabudi";
        const result = CR.Substitute(_template_4, replacementValue);
        expect(result).toBe(`JOEJOEJOEJOEJOE${replacementValue}OOOOOOOOSeti-abudiBOBOBOBOBOBOBO`);
    });
});