function wylosujNumeryPytania() {
  return Math.floor(Math.random() * 20);
}


function wylosujNowePytania(){
    let nowaBazaPytan = window.bazaPytan;
    let wylosowanaBazaPytan = [];
    console.log(nowaBazaPytan)
    for(i=0;i<10;i++){
        losowyNumer = wylosujNumeryPytania();
        if(nowaBazaPytan[losowyNumer] === undefined){
            i--
        }else{
            wylosowanaBazaPytan.push(nowaBazaPytan[losowyNumer]);
            nowaBazaPytan.splice(losowyNumer,1);
        }
    }
    return wylosowanaBazaPytan;

}
console.log(wylosujNowePytania())