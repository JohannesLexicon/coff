// Trots att man sätter type="number" och min="0" på input 
// så tillåter webbläsaren dig att trycka in negativa nummer, decimataltal och e
// Denna funktion tillåter bara positiva heltal
export const keypress = (event) => {
  const keyCode = event.keyCode;

  if (keyCode < 48 || keyCode > 57) {
    event.preventDefault();
    // TODO: Ge felmeddelande
  }
};

// Ser till att bara postitiva heltal kan klistras in
export const paste = (event) => {
  const pasted = event.clipboardData.getData('text');

  if (!pasted.match(/^[0-9]*$/)) {
    event.preventDefault();
    // TODO: Ge felmeddelande
  }
};

// export const usePositiveInputValidation = () => ({ keypress, paste });
