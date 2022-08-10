// code your solution here
function saturdayFun(set = "roller-skate") {
    return `This Saturday, I want to ${set}!`;
}
function mondayWork(cam = 'go to the office') {
    return `This Monday, I will ${cam}.`;
}
function wrapAdjective(p = '*') {
   return function name(s = 'special') {
        return `You are ${p}${s}${p}!`;
    }
}
