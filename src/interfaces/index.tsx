export interface pokemonList {
    count: number;
    next: string;
    previous: number;
    results: nameUrl[]
}

export interface nameUrl {
    name: string;
    url: string;
}

export interface pokemonDescription {
    id: number,
    name: string,
    types: {
        slot: number,
        type: nameUrl,
    }[],
    weight: number,
    moves: {
        move: nameUrl,
    }[],
    sprites: {
        back_default: string,
        back_female: string,
        back_shiny: string,
        back_shiny_female: string,
        front_default: string,
        front_female: string,
        front_shiny: string,
        front_shiny_female: string,
    }
}