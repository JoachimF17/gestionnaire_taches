export interface Tache{
    intitule: string,
    description: string,
    dateCreation: Date,
    deadline: Date,
    dateExecution: Date | null,
    priorite: 'basse' | 'moyenne' | 'haute',
    id?: number
}