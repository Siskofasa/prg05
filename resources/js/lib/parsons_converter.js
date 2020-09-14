export default class ParsonsConverter {

    static buildParsonString(parsonObject) {
        let parsonString = ""

        parsonObject.forEach(parsonRule => {
            // console.log(parsonRule);
            parsonString += `${' '.repeat(parsonRule["ident"])}${parsonRule["rule"]}` // ${parsonRule["distractor"] ? " #distractor" : ""}\n`
            if(parsonRule.distractor) {
                parsonString += "  #distractor";
            }
            if(parsonRule.vitalElement) {
                parsonString += "  #vital";
            }
            if(parsonRule.static) {
                parsonString += "  #static"
            }
            parsonString += "\n";
        })
        // console.log(parsonString);
        return parsonString
    }

    static convertParsonString(parsonString) {

        const resultingObject = [];

        parsonString.split("\n").forEach(row => {
            // console.log(row);
            if(row.length === 0) {
                return
            }

            const distractor = row.search("#distractor") !== -1
            // console.log(distractor);
            if(distractor) {
                row = row.split("#distractor")[0];
            }

            resultingObject.push({
                "rule": row.trim(),
                "ident": row.match(/^\s*/)[0].length,
                "distractor": distractor
            })
        })

        // console.log(resultingObject);
        return resultingObject;
    }


}
