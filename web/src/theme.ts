


function stylex(strings: TemplateStringsArray, ...values: any[]): string {
    // Process the strings and values
    let result = '';
    strings.forEach((string, i) => {
        result += string + (values[i] || '');
    });
    return result;
}


export const verticalContainer = stylex`flex flex-col gap-2 rounded p-2`
export const btn = stylex`p-2 hover:bg-slate-500/20 rounded text-slate-900/80`
export const btnSelected = stylex`p-2 bg-slate-700/20 rounded text-slate-900/80`