const bmi = (weight, height) => (r=weight/height**2) <= 18.5 ? "Underweight" : r <= 25 ? "Normal" : r <= 30 ? "Overweight" : "Obese";
