var numQues = 150;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(150);

// Insert answers to questions
answers[0] = "x+1";
answers[1] = "n(n+1)(2n+1)/6";
answers[2] = "a,b,c are in G.P";
answers[3] = "option2";
answers[4] = "1/3 and 3";
answers[5] = "24/25";
answers[6] = "1";
answers[7] = "4";
answers[8] = "option2";
answers[9] = "3";
answers[10] = "(31/7, 31/7)";
answers[11] = "1";
answers[12] = "3/4";
answers[13] = "1";
answers[14] = "R-Z";
answers[15] = "0";
answers[16] = "6 sq.cm/sec";
answers[17] = "1";
answers[18] = "option4";
answers[19] = "atleast one root";
answers[20] = "5";
answers[21] = "directrix";
answers[22] = "8m";
answers[23] = "Auxiliary circle";
answers[24] = "5";
answers[25] = "x/logx";
answers[26] = "100tan1";
answers[27] = "37/12";
answers[28] = "3/8log[16x+24y+23]=2x-y+k";
answers[29] = "option4";
answers[30] = "(-4,4)";
answers[31] = "7";
answers[32] = "1";
answers[33] = "3";
answers[34] = "120";
answers[35] = "38";
answers[36] = "9";
answers[37] = "2/11";
answers[38] = "2/13";
answers[39] = "161701";
answers[40] = "e-1/e";
answers[41] = "y=x+1";
answers[42] = "(a.b)b/b<sup>2</sup>";
answers[43] = "12";
answers[44] = "1.6";
answers[45] = "34";
answers[46] = "gallon";
answers[47] = "Daughter-in-law";
answers[48] = "north";
answers[49] = "V";
answers[50] = "ENIESTMNT";
answers[51] = "16+4/11 min past 3";
answers[52] = "Tuesday";
answers[53] = "is";
answers[54] = "finished";
answers[55] = "as";
answers[56] = "with";
answers[57] = "will";
answers[58] = "prettier";
answers[59] = "won't you";
answers[60] = "held down";
answers[61] = "tremble";
answers[62] = "quiet";
answers[63] = "bigamy";
answers[64] = "necessary";
answers[65] = "widely known";
answers[66] = "Ballet";
answers[67] = "that";
answers[68] = "Thursday";
answers[69] = "21 minutes past 3";
answers[70] = "3cm";
answers[71] = "NRT/6";
answers[72] = "16kg, 24kg";
answers[73] = "1400";
answers[74] = "4";
answers[75] = "0.0392N/m";
answers[76] = "4";
answers[77] = "1";
answers[78] = "6";
answers[79] = "538.8CC";
answers[80] = "1";
answers[81] = "12";
answers[82] = "360N";
answers[83] = "Parabola";
answers[84] = "Increases by a factor 1.5";
answers[85] = "8m/s";
answers[86] = "5";
answers[87] = "acceleration and velocity both are non-uniform";
answers[88] = "5";
answers[89] = "30";
answers[90] = "option1";
answers[91] = "option2";
answers[92] = "0.1056V";
answers[93] = "360V";
answers[94] = "113.95W";
answers[95] = "zero";
answers[96] = "option2";
answers[97] = "option1";
answers[98] = "option4";
answers[99] = "Microwaves";
answers[100] = "2.5V";
answers[101] = "1";
answers[102] = "option3";
answers[103] = "8:1";
answers[104] = "20V";
answers[105] = "200mV";
answers[106] = "200ohms";
answers[107] = "2mm";
answers[108] = "10";
answers[109] = "6,13";
answers[110] = "option2";
answers[111] = "SF4";
answers[112] = "4";
answers[113] = "4:1";
answers[114] = "2R";
answers[115] = "1.93";
answers[116] = "1";
answers[117] = "2";
answers[118] = "8";
answers[119] = "Fisher-trops";
answers[120] = "Pd";
answers[121] = "LiHCO3";
answers[122] = "Mg";
answers[123] = "B2(CH3)6";
answers[124] = "Co";
answers[125] = "CO";
answers[126] = "12ppm to 1ppm";
answers[127] = "1-chloro 1-phenyl methane";
answers[128] = "cresol";
answers[129] = "12 sigma, 3 Pi";
answers[130] = "Glycogen";
answers[131] = "K";
answers[132] = "45%";
answers[133] = "CGUAUACCU";
answers[134] = "equanil";
answers[135] = "option2";
answers[136] = "HCl in ZnCl2";
answers[137] = "Benzophenone";
answers[138] = "Cyclo hexane";
answers[139] = "acetone";
answers[140] = "21.38mm";
answers[141] = "tetrahedral";
answers[142] = "52.9";
answers[143] = "16.9hrs";
answers[144] = "50";
answers[145] = "sp3";
answers[146] = "Al2O3";
answers[147] = "3:1";
answers[148] = "KCl";
answers[149] = "Froth floatation";




    

// Do not change anything below here ...
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score*3);
  form.percentage.value = score;
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}