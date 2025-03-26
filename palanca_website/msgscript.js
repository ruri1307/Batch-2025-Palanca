const graduationDate = new Date('2025-05-26T00:00:00');
currentDate = Date.now();
timeTillGrad = Math.round((graduationDate-currentDate)/(1000 * 60 * 60 * 24));

document.getElementById('days').innerText = (String(timeTillGrad) + ' days...');