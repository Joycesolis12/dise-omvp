// presenter/CalculatorPresenter.ts
import CalculatorModel from "./CalculatorModel";
import CalculatorView from "./CalculatorView";

class CalculatorPresenter {
  private model: CalculatorModel;
  private view: CalculatorView;

  constructor(model: CalculatorModel, view: CalculatorView) {
    this.model = model;
    this.view = view;
  }

  // Método para sumar dos números
  addNumbers(x: number, y: number) {
    this.model.add(x, y);
    this.updateView();
  }

  // Método para actualizar la vista con el resultado actual
  updateView() {
    const result = this.model.getResult();
    this.view.displayResult(result);
  }
}    

export default CalculatorPresenter;

