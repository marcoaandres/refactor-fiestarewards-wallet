const typeProgram = (program: string) => {
    switch (program) {
        case 'FR':
        return 'Fiesta Rewards'
        case 'OH':
        return 'One Hoteles'
        case 'KC':
        return 'Kivac'
        default:
        return 'Fiesta Rewards'
    }
}


export {typeProgram}