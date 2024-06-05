function solution(rsp) {
    const winCase = { 
        "0" : "5",
        "2" : "0",
        "5" : "2",
    }
    const _rsp = rsp.split("");
    let winResult = [];
    _rsp.map(v => {
        winResult.push(winCase[v]);        
    })
    
    return winResult.join("");
}