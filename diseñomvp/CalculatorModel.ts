// model/CalculatorModel.ts
class CalculatorModel {
    private result: number = 0;
  
    add(x: number, y: number) {
      this.result = x + y;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  export default CalculatorModel;
  


  