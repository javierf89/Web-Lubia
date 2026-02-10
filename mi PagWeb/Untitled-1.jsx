// calculations.js — contiene las fórmulas del modelo M/M/1


function mm1Metrics(lambda, mu, cs, cq) {
    // conviene validar que mu > lambda en el frontend y backend
    const s = 1; // número de servidores
    const rho = lambda / mu; //Utilización general del sistema
    const ls = lambda / (mu - lambda); //Número promedio en el sistema
    const lq = (lambda * lambda) / (mu * (mu - lambda)); //Número promedio en la cola
    const ws = 1 / (mu - lambda); //El tiempo promedio que una maquina espera en la cola
    const wq = lambda / (mu - lambda); //Tiempo promedio de espera en la cola
    const ctq = cq * lq; // Costo total en la cola
    const cs_total = cs * s;
    const cts = (cq * ls) + (cs * s); // Costo total en sistema
    const ct = cq + cs; // Costo del recurso ocupado
    const ctso = ct * (ls - lq); // Costo total servidor (recurso) ocupado
    const ctsd = cs * (s - ls + lq); // Costo total servidor (recurso) ocupado
    const p1 = (1-rho)*rho; // Probabilidad de que 1 maquina se encuentren en cola
    const p3 = (1 - rho) * Math.pow(rho, 3); // Probabilidad de que 3 maquinas se encuentren en cola

    
    
    return {
    rho,
    ls,
    lq,
    ws,
    wq,
    ctq,
    cs_total,
    cts,
    ctso,
    ctsd,
    p1,
    p3
    };
    }
    
    
    module.exports = { mm1Metrics };