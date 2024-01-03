

 const formatNumbers = ( points: string ): string => {
    return (parseInt(points).toLocaleString('es-MX'))
}

const formatDate = (date: string): string => {

    const fullDate = new Date(date);
    const year = fullDate.getFullYear();

    let day = (fullDate.getDate()).toString();
    parseInt(day) > 9 ? "" : (day = ("0" + day));

    let month = (fullDate.getMonth());
    month++;

    month > 9 ? '' : (month = parseInt("0" + (month).toString()));

    return `${day}/${month}/${year}`;
}

const getPorcentProgress = (currentPoints: string, poinstNextLevel: string): number => {
    const cPoints: number = parseInt(currentPoints);
    const nlPoints: number = parseInt(poinstNextLevel);

    return (cPoints * 100) / (cPoints + nlPoints);

       
}

export {
    formatDate,
    formatNumbers,
    getPorcentProgress
}

