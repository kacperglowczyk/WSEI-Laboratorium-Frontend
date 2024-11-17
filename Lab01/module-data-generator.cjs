const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]) || 10; // liczba obiektów do wygenerowania
let carMakes = [];

// Funkcja generująca losowe ID
function generateID() {
  return Math.floor(1000 + Math.random() * 9000); // Losowy ID w zakresie 1000-9999
}

// Funkcja generująca losowy rok produkcji
function generateProductionYear() {
  return Math.floor(Math.random() * (2023 - 1990 + 1)) + 1990; // Losowy rok 1990-2023
}

// Funkcja generująca losowy numer rejestracyjny
function generateLicensePlate() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    letters.charAt(Math.floor(Math.random() * letters.length)) +
    '-' +
    Math.floor(1000 + Math.random() * 9000)
  );
}

// Wczytaj marki samochodów z pliku makes.txt
fs.readFile('./makes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Błąd przy odczycie makes.txt:', err);
    return;
  }
  carMakes = data.split('\n').map(make => make.trim()).filter(make => make);

  // Generowanie danych
  let content = 'export const data = [\n';
  for (let i = 0; i < count; i++) {
    const car = {
      id: generateID(),
      brand: carMakes[Math.floor(Math.random() * carMakes.length)],
      productionYear: generateProductionYear(),
      licensePlate: generateLicensePlate(),
    };
    content += `  ${JSON.stringify(car)},\n`;
  }
  content += '];';

  // Ścieżka do pliku docelowego
  const outputPath = path.join(__dirname, 'src', 'data', 'module-data.js');

  // Upewnij się, że folder 'src/data' istnieje
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true }); // Tworzenie folderów, jeśli nie istnieją
  }

  // Zapis danych do pliku module-data.js
  fs.writeFile(outputPath, content, err => {
    if (err) {
      console.error('Błąd przy zapisie module-data.js:', err);
    } else {
      console.log('module-data.js wygenerowany.');
    }
  });
});
