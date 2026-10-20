var numQues = 160;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(160);


answers[0] = "option3";
answers[1] = "3";
answers[2] = "the imaginary axis";
answers[3] = "0.5";
answers[4] = "1";
answers[5] = "r1";
answers[6] = "2f(x)f(y)";
answers[7] = "3";
answers[8] = "(-0.5.-0.5)";
answers[9] = "r=2h";
answers[10] = "3(2i+3j+6k)";
answers[11] = "3.9969";
answers[12] = "continous on R";
answers[13] = "10/4";
answers[14] = "9/2";
answers[15] = "1/2";
answers[16] = "2";
answers[17] = "a=2 b=12";
answers[18] = "skew symmetric matrix";
answers[19] = "13986";
answers[20] = "9/24";
answers[21] = "(y-3)(1-3x)=cx";
answers[22] = "secx";
answers[23] = "24";
answers[24] = "4atanαsecα";
answers[25] = "7x-y=6";
answers[26] = "1/13";
answers[27] = "a+b";
answers[28] = "8";
answers[29] = "[1/7,7]";
answers[30] = "12";
answers[31] = "option1";
answers[32] = "2";
answers[33] = "cos(A+B)";
answers[34] = "h(tanb-tana)/tanb";
answers[35] = "(1,-2)";
answers[36] = "2cotz";
answers[37] = "option4";
answers[38] = "B,A,D,C";
answers[39] = "1";
answers[40] = "(-3,-6)(5,2)";
answers[41] = "y=x+1";
answers[42] = "option2";
answers[43] = "12";
answers[44] = "1.6";
answers[45] = "1";
answers[46] = "hyperbola";
answers[47] = "(1,1)";
answers[48] = "the directrix";
answers[49] = "(2)^1/2";
answers[50] = "738";
answers[51] = "[1/3,1]";
answers[52] = "0";
answers[53] = "25";
answers[54] = "option3";
answers[55] = "option2)";
answers[56] = "23";
answers[57] = "option4";
answers[58] = "option3";
answers[59] = "skew symmetric matrix";
answers[60] = "tanx/2";
answers[61] = "harmonic progression";
answers[62] = "option3x";
answers[63] = "2";
answers[64] = "option3";
answers[65] = "π/16";
answers[66] = "x+1/2log(4sinx+6cosx)";
answers[67] = "2";
answers[68] = "0";
answers[69] = "4";
answers[70] = "1";
answers[71] = "option3";
answers[72] = "14!";
answers[73] = "-1";
answers[74] = "2";
answers[75] = "1/2";
answers[76] = "3y-4x-1/2y-3x+2";
answers[77] = "1";
answers[78] = "π/4";
answers[79] = "option1";
answers[80] = "option2";
answers[81] = "option2";
answers[82] = "option3>";
answers[83] = "12N to the right";
answers[84] = "2.5cm";
answers[85] = "1-2J/p";
answers[86] = "option3";
answers[87] = "5R/3";
answers[88] = "1+2e/1-2e";
answers[89] = "mu/mg+f";
answers[90] = "option1";
answers[91] = "d=h";
answers[92] = "π/50";
answers[93] = "option4";
answers[94] = "3PV-4TA";
answers[95] = "zero";
answers[96] = "12:5";
answers[97] = "P = ρmT/K";
answers[98] = "100 Cal";
answers[99] = "option1";
answers[100] = "404 Hz";
answers[101] = "0.1m";
answers[102] = "24 cm";
answers[103] = "6/5";
answers[104] = "option4";
answers[105] = "6:4";
answers[106] = "9000 Wb";
answers[107] = "option3";
answers[108] = "2";
answers[109] = "25J";
answers[110] = "1.5 ohms";
answers[111] = "r1+r2";
answers[112] = "option3";
answers[113] = "2R";
answers[114] = "option4";
answers[115] = "1.5mV";
answers[116] = "option1";
answers[117] = "2q";
answers[118] = "5.12MeV";
answers[119] = "NOR gate";
answers[120] = "566 Pm";
answers[121] = "CH3COONH4";
answers[122] = "sucrose";
answers[123] = "HCHO";
answers[124] = "-0.789";
answers[125] = "C6H5CH2";
answers[126] = "O2, N2 are removed as oxides of Nitrogen";
answers[127] = "H2SiF6";
answers[128] = "Fe4[Fe(CN)6]3";
answers[129] = "12 sigma, 3 Pi";
answers[130] = "2-acetoxybenzoic acid";
answers[131] = "anomers";
answers[132] = "option3";
answers[133] = "CGUAUACCU";
answers[134] = "HClO4, HOCl";
answers[135] = "Terylene";
answers[136] = "Ce(OH)3";
answers[137] = "Ge";
answers[138] = "Cyclo hexane";
answers[139] = "Flourides";
answers[140] = "Retinol";
answers[141] = "ΔTb";
answers[142] = "7.01";
answers[143] = "-7kJ";
answers[144] = "Twist boat";
answers[145] = "option4";
answers[146] = "300 gm/lit";
answers[147] = "Mg+Al";
answers[148] = "40min.";
answers[149] = "2,4,6-trinitrobenzene";
answers[150] = "Milk";
answers[151] = "SP3 carbon changes to SP2 carbon";
answers[152] = "NaCl,CO2";
answers[153] = "All the above";
answers[154]= "Zymase";
answers[155] = "dx2-y2";
answers[156] = "option1";
answers[157] = "option1";
answers[158] = "VIAB Group and 4th period";
answers[159] = "21.6 gm";




    


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
  score = Math.round(score);
  form.percentage.value = score;
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}