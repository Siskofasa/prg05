export default class Translations {

    constructor() {
        this.translations = {
            fi: {
                trash_label: 'Raahaa rivit ohjelmaasi tästä',
                solution_label: 'Muodosta ratkaisusi tähän',
                order: function () {
                    return "Ohjelma sisältää vääriä palasia tai palasten järjestys on väärä. Tämä on mahdollista korjata siirtämällä, poistamalla tai vaihtamalla korostettuja palasia.";
                },
                lines_missing: function () {
                    return "Ohjelmassasi on liian vähän palasia, jotta se toimisi oikein.";
                },
                lines_too_many: function () {
                    return "Ohjelmassasi on liian monta palasta, jotta se toimisi oikein.";
                },
                no_matching: function (lineNro) {
                    return "Korostettu palanen (" + lineNro + ") on sisennetty kieliopin vastaisesti.";
                },
                no_matching_open: function (lineNro, block) {
                    return "Rivillä " + lineNro + " päätettävää " + block +
                        " lohkoa ei ole aloitettu.";
                },
                no_matching_close: function (lineNro, block) {
                    return block + " lohkoa riviltä " + lineNro + " ei ole päätetty.";
                },
                block_close_mismatch: function (closeLine, closeBlock, openLine, inBlock) {
                    return "Ei voi päättää lohkoa " + closeBlock + " rivillä " + closeLine +
                        " oltaessa vielä lohkossa " + inBlock + " riviltä " + openLine;
                },
                block_structure: function (lineNro) {
                    return "Korostettu palanen (" + lineNro + ") on sisennetty väärään koodilohkoon.";
                },
                unittest_error: function (errormsg) {
                    return "<span class='msg'>Virhe ohjelman jäsentämisessä/suorituksessa</span><br/> <span class='errormsg'>" + errormsg + "</span>";
                },
                unittest_output_assertion: function (expected, actual) {
                    return "Odotettu tulostus: <span class='expected output'>" + expected + "</span>" +
                        "Ohjelmasi tulostus: <span class='actual output'>" + actual + "</span>";
                },
                unittest_assertion: function (expected, actual) {
                    return "Odotettu arvo: <span class='expected'>" + expected + "</span><br>" +
                        "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
                },
                variabletest_assertion: function (varname, expected, actual) {
                    return "Muuttujan " + varname + " odotettu arvo: <span class='expected'>" + expected + "</span> " +
                        "Ohjelmasi antama arvo: <span class='actual'>" + actual + "</span>";
                }
            },
            en: {
                trash_label: 'Drag from here',
                solution_label: 'Construct your solution here',
                order: function () {
                    return "Code fragments in your program are wrong, or in wrong order. This can be fixed by moving, removing, or replacing highlighted fragments.";
                },
                lines_missing: function () {
                    return "Your program has too few code fragments.";
                },
                lines_too_many: function () {
                    return "Your program has too many code fragments.";
                },
                no_matching: function (lineNro) {
                    return "Based on language syntax, the highlighted fragment (" + lineNro + ") is not correctly indented.";
                },
                no_matching_open: function (lineNro, block) {
                    return "The " + block + " ended on line " + lineNro + " never started.";
                },
                no_matching_close: function (lineNro, block) {
                    return "Block " + block + " defined on line " + lineNro + " not ended properly";
                },
                block_close_mismatch: function (closeLine, closeBlock, openLine, inBlock) {
                    return "Cannot end block " + closeBlock + " on line " + closeLine + " when still inside block " + inBlock + " started on line " + openLine;
                },
                block_structure: function (lineNro) {
                    return "The highlighted fragment " + lineNro + " belongs to a wrong block (i.e. indentation).";
                },
                unittest_error: function (errormsg) {
                    return "<span class='msg'>Error in parsing/executing your program</span><br/> <span class='errormsg'>" + errormsg + "</span>";
                },
                unittest_output_assertion: function (expected, actual) {
                    return "Expected output: <span class='expected output'>" + expected + "</span>" +
                        "Output of your program: <span class='actual output'>" + actual + "</span>";
                },
                unittest_assertion: function (expected, actual) {
                    return "Expected value: <span class='expected'>" + expected + "</span><br>" +
                        "Actual value: <span class='actual'>" + actual + "</span>";
                },
                variabletest_assertion: function (varname, expected, actual) {
                    return "Expected value of variable " + varname + ": <span class='expected'>" + expected + "</span><br>" +
                        "Actual value: <span class='actual'>" + actual + "</span>";
                }
            }
        }
    }
}
