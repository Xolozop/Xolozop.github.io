async function classicalRSK(perm, mode) {
    let P = [];
    let Q = [];

    P.push([perm[0]]);
    Q.push([1]); // ставим первый элемент в начало таблицы

    await visualize(P, Q, perm[0]); // Визуализируем начальное состояние
    await delay(1000); // Задержка в 1000 мс (1 секунда)

    for (let i = 1; i < perm.length; i++) {
        let k = 0;
        let x = P[k].length - 1;
        let a = perm[i];
        let pushedElement = a; // Сохраняем вставляемый элемент
        let n;

        while (k < P.length) {
            n = 0;
            if (a > P[k][P[k].length - 1]) {
                P[k].push(a);
                Q[k].push(i + 1); // если A - наибольший в строке элемент, добавляем A в конец
                break;
            } else {
                if (x < 1 || x > P[k].length - 1) {
                    x = P[k].length - 1;
                }
                while (x > 0) {
                    if (a < P[k][x] && a > P[k][x - 1]) {
                        break;
                    }
                    x--;
                }
                n = P[k][x];
                P[k][x] = a;
                a = n;
                k++;
            }
        }
        if (k >= P.length) {
            P.push([a]);
            Q.push([i + 1]);
        }
        await visualize(P, Q, pushedElement, a); // Визуализируем после каждого шага
        await delay(1000); // Задержка в 1000 мс (1 секунда)
    }
    return [P, Q]; // возвращаем массив из двух таблиц
}

function visualize(P, Q, pushedElement, poppedElement) {
    return new Promise((resolve) => {
        const visualizationDiv = document.getElementById('classical');
        visualizationDiv.innerHTML = ''; // очищаем предыдущую визуализацию
        const pair = document.createElement('div');
        pair.className = 'pair';

        // Визуализация таблицы P
        const tableauP = document.createElement('div');
        tableauP.className = 'tableau';
        tableauP.innerHTML = `<p>a = ${pushedElement}</p><p>Tableau P:</p>`;

        const tableauQ = document.createElement('div');
        tableauQ.className = 'tableau';

        for (let row = P.length-1; row >= 0; row--) {
            const rowP = document.createElement('div');
            const rowQ = document.createElement('div');
            for (let cell = 0; cell < P[row].length; cell++) {
                const cellP = document.createElement('div');
                cellP.className = 'cell';
                cellP.textContent = P[row][cell];

                const cellQ = document.createElement('div');
                cellQ.className = 'cell';
                cellQ.textContent = Q[row][cell];

                if (P[row][cell] === poppedElement) {
                    cellP.style.backgroundColor = 'lightcoral';
                    cellQ.style.backgroundColor = 'lightcoral';
                }
                if (P[row][cell] === pushedElement) {
                    cellP.style.backgroundColor = 'lightgreen';
                    cellQ.style.backgroundColor = 'lightgreen';
                }
                rowP.appendChild(cellP);
                rowQ.appendChild(cellQ);
            }
            tableauP.appendChild(rowP);
            tableauQ.appendChild(rowQ);
        }
        pair.appendChild(tableauP);
        pair.appendChild(tableauQ);

        const textQ = document.createElement('p');
        textQ.innerHTML = 'Tableau Q';
        tableauQ.appendChild(textQ);

        visualizationDiv.appendChild(pair);

        resolve(); // Завершаем промис
    });
}


class Cell {
    constructor() {
        this.right = 0;
        this.left = 0;
        this.up = 0;
        this.down = 0;
        this.point = false;
    }
}

async function withLocalRulesRSK(perm) {
    const n = perm.length;
    const P = [];
    const Q = [];
    let current = Array.from({ length: n }, () => new Cell());
    let next = Array.from({ length: n }, () => new Cell());

    const table = document.getElementById('local-rules');
    const rows = table.getElementsByTagName('tr');

    // Инициализация структуры Cell
    for (let y = 0; y < n; y++) {
        const cells = rows[rows.length-y-1].getElementsByTagName('td');
        for (let x = 0; x < n; x++) {
            // Установка точки на поле и изменение правого и верхнего ребра на 1
            if (y === perm[x] - 1) {
                current[x].point = true;
                current[x].up = 1;
                current[x].right = 1;
            } 
            // Применение правила
            else if (current[x].down !== 0 && current[x].left !== 0 && current[x].down === current[x].left) {
                current[x].right = current[x].left + 1;
                current[x].up = current[x].down + 1;
            } else {
                current[x].right = current[x].left;
                current[x].up = current[x].down;
            }

            if (x !== n - 1) {
                current[x + 1].left = current[x].right;
            }
            if (y !== n - 1) {
                next[x].down = current[x].up;
            }
            // Обновление Q если y == n - 1
            if (y === n - 1) {
                const a = current[x].up;
                if (a > Q.length) {
                    Q.length = a; // Увеличиваем размер массива Q
                }
                Q[a - 1] = (Q[a - 1] || []).concat(x + 1);

                const last_cells = rows[0].getElementsByTagName('td');
                last_cells[x].textContent = a;
                last_cells[x].style.color = 'var(--color' + (current[x].up%6).toString() + ')';
            }

            cells[x].style.borderRightColor = 'var(--color' + (current[x].right%6).toString() + ')';
            cells[x].style.borderTopColor = 'var(--color' + (current[x].up%6).toString() + ')';
            cells[x].style.backgroundColor = 'lightcoral';
            await delay(500);
            cells[x].style.backgroundColor = 'white';
        }
        // Обновление P
        const a = current[n - 1].right;
        if (a > P.length) {
            P.length = a; // Увеличиваем размер массива P
        }
        P[a - 1] = (P[a - 1] || []).concat(y + 1);
        cells[n].textContent = a;
        cells[n].style.color = 'var(--color' + (current[n-1].right%6).toString() + ')';

        // Обмен текущего и следующего массивов
        [next, current] = [current, next];
    }

    return [P, Q]; // Возврат результата
}

function createTable(perm) {
    const n = perm.length;
    const table = document.getElementById('local-rules');
    table.innerHTML = '';

    const row = document.createElement('tr');
    for (let i = 0; i < n; i++) {
        const cell = document.createElement('td');
        cell.classList.add('no-border');
        cell.style.color = 'var(--color0)';
        cell.textContent = '0';
        row.appendChild(cell);
    }
    table.appendChild(row);

    for (let y = n-1; y > -1; y--) {
        const row = document.createElement('tr');
        for (let x = 0; x < n; x++) {
            const cell = document.createElement('td');
            if (y === perm[x]-1) {
                cell.textContent = '*';
            }
            row.appendChild(cell);
        }
        const cell = document.createElement('td');
        cell.classList.add('no-border');
        cell.style.color = 'var(--color0)';
        cell.textContent = '0';
        row.appendChild(cell);
        table.appendChild(row);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

colors = ["black", "red", "blue", "green", "orange"];

async function geometricalRSK(perm) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 35;

    // Устанавливаем размер поля

    let P = [];
    let Q = [];
    let permutation = new Map();
    let skeleton = new Map();

    // Заполнение карты перестановки
    ctx.fillStyle = "black";
    let n = perm.length;
    for (let i = 0; i < perm.length; i++) {
        permutation.set(i + 1, perm[i]); // (j; σ(j))
        ctx.fillRect(i*scale+(scale-5)/2, (n-perm[i])*scale+(scale-5)/2, 5, 5);
    }

    let i = 0; // порядок скелета

    while (permutation.size > 0) { // пока есть элементы в перестановке
        let mem = Array.from(permutation.values())[0]; // первое значение
        ctx.strokeStyle = colors[i];
        console.log(i);
        console.log(permutation);
        while (permutation.size > 0) { // построение теней
            P[i] = [];
            Q[i] = [];

            Q[i].push(Array.from(permutation.keys())[0]); // индекс крайней левой точки тени

            let prev = Array.from(permutation.values())[0];
            let val = Array.from(permutation.keys())[0];
            permutation.delete(Array.from(permutation.keys())[0]); // удаляем первое значение

            ctx.beginPath();
            ctx.moveTo((val-1)*scale+(scale-5)/2+2, 0);
            ctx.lineTo((val-1)*scale+(scale-5)/2+2, (n-prev+1)*scale-(scale-5)/2-2);

            let path = `${val}:${prev} `;

            let calculate = true;
            for (let [key, value] of permutation) {
                if (value === mem + 1) { // ниже границы последней тени
                    mem = value;
                    calculate = false;
                }

                if (value < prev) { // подходящая точка для построения тени
                    skeleton.set(key, prev); // инициализация новой точки скелета
                    ctx.fillStyle = colors[i+1];
                    ctx.lineTo((key-1)*scale+(scale-5)/2+2, (n-prev)*scale+(scale-5)/2+2);
                    ctx.lineTo((key-1)*scale+(scale-5)/2+2, (n-value)*scale+(scale-5)/2+2);
                    ctx.fillRect((key-1)*scale+(scale-5)/2, (n-prev)*scale+(scale-5)/2, 5, 5);
                    prev = value;
                    permutation.delete(key); // удаляем текущий элемент
                }
            }
            P[i].push(prev); // индекс крайней нижней точки тени
            ctx.lineTo(n*scale, (n-prev+1)*scale-(scale-5)/2-2);
            path += `${n}:${prev} `;
            console.log(path);
            ctx.stroke();
            await delay(1000);
        }
        // Обновляем permutation и skeleton
        permutation = new Map(skeleton);
        skeleton.clear(); // очищаем skeleton для следующей итерации
        i++;
    }
    return [P, Q]; // возвращаем P и Q
}

function createCanvas(perm) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 35;
    const n = perm.length;

    // Устанавливаем размер поля
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "grey";

    // Рисуем горизонтальные линии
    for (let i = 0; i <= n; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * scale);
        ctx.lineTo(n * scale, i * scale);
        ctx.stroke();
    }

    // Рисуем вертикальные линии
    for (let i = 0; i <= n; i++) {
        ctx.beginPath();
        ctx.moveTo(i * scale, 0);
        ctx.lineTo(i * scale, n * scale);
        ctx.stroke();
    }

    // Рисуем границу
    ctx.strokeStyle = "black"; // Изменяем цвет границы на черный
    ctx.strokeRect(0, 0, n * scale, n * scale);
}

function runRSK() {
    const permInput = document.getElementById('perm-btn').value;
    const permutation = permInput.split(' ').map(Number);
    classicalRSK(permutation); // анимация
    createTable(permutation);
    withLocalRulesRSK(permutation);
    createCanvas(permutation);
    geometricalRSK(permutation);
}