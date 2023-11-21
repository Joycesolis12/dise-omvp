// index.ts
import CalculatorModel from "./CalculatorModel";
import CalculatorView from "./CalculatorView";
import CalculatorPresenter from "./CalculatorPresenter";

// Crear instancias
const model = new CalculatorModel();
const view = new CalculatorView();
const presenter = new CalculatorPresenter(model, view);

// Añadir números y actualizar la vista
presenter.addNumbers(5, 10);
presenter.addNumbers(12,23);
presenter.addNumbers(4,67); 
// Ejecutar la aplicación

 
