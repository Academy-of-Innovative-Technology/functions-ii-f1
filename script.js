
function getNumber(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}
function showResult(id, result) { 
     document.getElementById(id).textContent = message;
}
document.getElementById('addBtn').addEventListener('click', () => { const n1 = getNumber('num1'); const n2 = getNumber('num2'); showResult('basicResult', `Sum = ${n1 + n2}`);});
document.getElementById('subtractBtn').addEventListener('click', () => { const n1 = getNumber('num1'); const n2 = getNumber('num2'); showResult('basicResult', `Difference = ${n1 - n2}`);});
document.getElementById('multiplyBtn').addEventListener('click', () => { const n1 = getNumber('num1'); const n2 = getNumber('num2'); showResult('basicResult', `Product = ${n1 * n2}`);});
document.getElementById('divideBtn').addEventListener('click', () => { const n1 = getNumber('num1'); const n2 = getNumber('num2'); if (n2 === 0) return showResult('basicResult', ' Cannot divide by 0'); showResult('basicResult', `Quotient = ${(n1 / n2).toFixed(2)}`);});
document.getElementById('modulusBtn').addEventListener('click', () => { const n1 = getNumber('num1'); const n2 = getNumber('num2'); if (n2 === 0) return showResult('basicResult', ' Cannot divide by 0'); showResult('basicResult', `Remainder = ${n1 % n2}`);});

document.getElementById('rectBtn').addEventListener('click', () => { const L = getNumber('rectLength'); const W = getNumber('rectWidth'); showResult('rectResult', `Area = ${L * W}`);});

document.getElementById('circleBtn').addEventListener('click', () => { const r = getNumber('circleRadius'); showResult('circleResult', `Area = ${(Math.PI * r ** 2).toFixed(2)}`);});

document.getElementById('pythagoreanBtn').addEventListener('click', () => { const a = getNumber('sideA'); const b = getNumber('sideB'); showResult('pythagoreanResult', `Hypotenuse = ${Math.sqrt(a ** 2 + b ** 2).toFixed(2)}`);});

document.getElementById('interestBtn').addEventListener('click', () => { const P = getNumber('principal'); const R = getNumber('rate'); const T = getNumber('time'); showResult('interestResult', `Simple Interest = ${(P * R * T) / 100}`);});

document.getElementById('powerBtn').addEventListener('click', () => { const base = getNumber('base'); const exp = getNumber('exponent'); showResult('powerResult', `${base} ^ ${exp} = ${base ** exp}`);});

document.getElementById('perimeterBtn').addEventListener('click', () => { const L = getNumber('periLength'); const W = getNumber('periWidth'); showResult('perimeterResult', `Perimeter = ${2 * (L + W)}`);});
document.getElementById('circumferenceBtn').addEventListener('click', () => { const r = getNumber('circRadius'); showResult('circumferenceResult', `Circumference = ${(2 * Math.PI * r).toFixed(2)}`);});

document.getElementById('triangleAreaBtn').addEventListener('click', () => { const b = getNumber('triangleBase'); const h = getNumber('triangleHeight'); showResult('triangleAreaResult', `Area = ${(0.5 * b * h).toFixed(2)}`);});

document.getElementById('cubeBtn').addEventListener('click', () => { const s = getNumber('cubeSide'); showResult('cubeVolumeResult', `Volume = ${s ** 3}`);});

document.getElementById('prismBtn').addEventListener('click', () => { const L = getNumber('prismLength'); const W = getNumber('prismWidth'); const H = getNumber('prismHeight'); showResult('prismVolumeResult', `Volume = ${L * W * H}`);});

document.getElementById('cylinderBtn').addEventListener('click', () => { const r = getNumber('cylRadius'); const h = getNumber('cylHeight'); showResult('cylinderVolumeResult', `Volume = ${(Math.PI * r ** 2 * h).toFixed(2)}`);});

document.getElementById('speedBtn').addEventListener('click', () => { const d = getNumber('distance'); const t = getNumber('timeSpeed'); if (t === 0) return showResult('speedResult', ' Time cannot be 0'); showResult('speedResult', `Speed = ${(d / t).toFixed(2)}`);});

document.getElementById('densityBtn').addEventListener('click', () => { const m = getNumber('mass'); const v = getNumber('volume'); if (v === 0) return showResult('densityResult', ' Volume cannot be 0'); showResult('densityResult', `Density = ${(m / v).toFixed(2)}`);});

document.getElementById('bmiBtn').addEventListener('click', () => { const w = getNumber('weight'); const h = getNumber('height'); if (h === 0) return showResult('bmiResult', ' Height cannot be 0'); showResult('bmiResult', `BMI = ${(w / (h ** 2)).toFixed(2)}`);});