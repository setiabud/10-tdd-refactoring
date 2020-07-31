export enum TemplateTypes {
    One = 1,
    Two = 2,
    Three = 3
}

export let ChosenTemplate: string;

const _code: string = "%CODE%";
const _altCode: string = "%ALTCODE%";
// const _template_1: string = `111${_code}---${_altCode}000`;
// const _template_2: string = `222${_code}___${_altCode}000`;
// const _template_3: string = `333${_code}===${_altCode}000`;

// see if breaking into smaller methods is better?
export const Substitute = (template: string, replacementValue: string) => {
    try {
        ChosenTemplate = template;

        // Substitute for %CODE% - with exactly replacementValue from incoming param
        var result = ChosenTemplate.replace(_code, replacementValue);

        // Substitute for %ALTCODE% - with replacementValue plus '-' after 4th char from incoming param
        var altReplacementValue = replacementValue.substr(0, 4) + "-" + replacementValue.substr(4, replacementValue.length - 4);
        result = result.replace(_altCode, altReplacementValue);

        return result;
    } catch (e) {
        // meaningful catch statement
        throw (e);
    }
}